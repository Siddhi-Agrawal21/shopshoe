import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from './components/Context';
import {BrowserRouter} from 'react-router-dom';

const container = document.getElementById('root');
const app = createRoot(container); // createRoot(container!) if you use TypeScript
app.render(
<ProductProvider>
   <BrowserRouter>
   <React.StrictMode>
    <App />
  </React.StrictMode>
   </BrowserRouter>
  
 </ProductProvider>
);


// ReactDOM.render(
//  <ProductProvider>
//    <BrowserRouter>
//    <React.StrictMode>
//     <App />
//   </React.StrictMode>
//    </BrowserRouter>
  
//  </ProductProvider>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();






// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {ProductProvider} from './components/Context';
// import {BrowserRouter} from 'react-router-dom';


// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );
// ReactDOM.render(
//   <ProductProvider>
//     <BrowserRouter>
//     <React.StrictMode>
//      <App />
//    </React.StrictMode>
//     </BrowserRouter>
   
//   </ProductProvider>,
//    document.getElementById('root')
//  );
 

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
