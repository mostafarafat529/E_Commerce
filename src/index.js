import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import DataContext from './context/DataContext';
import FunctionCart from './context/CartContext';
import { ToastContainer } from 'react-toastify';


// Import your Publishable Key
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<DataContext>
  <FunctionCart>
  <BrowserRouter>
  <React.StrictMode>
 <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false}
closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      </ClerkProvider>
    </StrictMode>,
  </React.StrictMode>
  </BrowserRouter>
  </FunctionCart>
</DataContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
