import React, { useRef, useEffect } from 'react';
import * as faceapi from 'face-api.js';

const FaceBlur = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + '/models';
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      console.log('Models loaded');
    };

    const startVideo = () => {
      navigator.mediaDevices.getUserMedia({ video: {} })
        .then(stream => {
          videoRef.current.srcObject = stream;
          console.log('Video stream started');
        })
        .catch(err => console.error('Error accessing camera: ', err));
    };

    const detectFaces = async () => {
      if (videoRef.current && canvasRef.current) {
        const detections = await faceapi.detectAllFaces(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        );

        const dims = faceapi.matchDimensions(canvasRef.current, videoRef.current, true);
        const resizedDetections = faceapi.resizeResults(detections, dims);

        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

        resizedDetections.forEach(detection => {
          const { x, y, width, height } = detection.box;
          context.filter = 'blur(20px)';
          context.fillRect(x, y, width, height);
          context.filter = 'none';
        });
      }
    };

    const init = async () => {
      console.log("loading models")
      await loadModels();
      console.log("models loaded")
      startVideo();
      videoRef.current.addEventListener('play', () => {
        setInterval(detectFaces, 100);
      });
    };

    init();
  }, []);

  return (
    <div>
      <h1>WELCOME TO BLUR MY FACE.com</h1>
      <video ref={videoRef} autoPlay muted style={{ }} />
      <canvas ref={canvasRef}style={{ }}/>
      <h1>#Hidethestupid</h1>

    </div>
  );
};

export default FaceBlur;
