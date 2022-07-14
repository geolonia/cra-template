import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (!process.env.REACT_APP_COGNITO_USER_POOL_ID || !process.env.REACT_APP_COGNITO_CLIENT_ID) {
  console.error('Missing Cognito configuration!');
}

Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,

    // OPTIONAL - Hosted UI configuration
    // oauth: {
    //     domain: 'your_cognito_domain',
    //     scope: ['email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
    //     redirectSignIn: 'http://localhost:3000/',
    //     redirectSignOut: 'http://localhost:3000/',
    //     responseType: 'code'
    // }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
