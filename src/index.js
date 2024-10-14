import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import About from './components/About/About';
// import Contact from '';
import Error from './components/Error/Error';
import './index.css';
import App from './App';
import Form from "./components/form"
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const Contact = lazy(()=> import("./components/Contact/Contact"))

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Form/>
      },
      {
        path:'/about',
        element:<About/>
    
      },{
        path:'/contact',
        element:
        <Suspense fallback={<div>Loading...</div>}>
          <Contact/>
        </Suspense>
      }
    ],
    errorElement:<Error/>

  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
