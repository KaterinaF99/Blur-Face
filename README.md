# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Deployment to Firebase

This section guides you through the process of deploying a basic application to Firebase. Ensure you have a Firebase account and the Firebase CLI installed before proceeding.

## Prerequisites

1. **Firebase Account**: Ensure you have an active Firebase account. If not, sign up at [Firebase](https://firebase.google.com/).
2. **Firebase CLI**: Install the Firebase CLI by running the following command:
    ```bash
    npm install -g firebase-tools
    ```
3. **Project Initialization**: Initialize your Firebase project:
    ```bash
    firebase init
    ```

## Steps to Deploy

### Step 1: Setup Firebase Hosting

1. **Navigate to your project directory**:
    ```bash
    cd your-project-directory
    ```
2. **Login to Firebase**:
    ```bash
    firebase login
    ```
3. **Initialize Firebase Hosting**:
    ```bash
    firebase init hosting
    ```
    Follow the prompts to select your Firebase project, set your public directory (usually `build` or `public`), and configure it as a single-page app (if applicable).

### Step 2: Build Your Application

Ensure your application is built and ready for deployment. If using a front-end framework, run the build command:
```bash
npm run build