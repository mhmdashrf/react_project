


import './App.css';
import  Layout  from './components/layout/layout.jsx';
import Home from'./components/home/home.jsx'
import About from "./components/about/about.jsx";
import  Portfolio  from "./components/portfolio/portfolio.jsx";
import Contact from'./components/contact/contact.jsx';

import { createBrowserRouter,createHashRouter,RouterProvider} from "react-router-dom";

const myRouter = createHashRouter([ 
  {path:'/', element: <Layout/>, children: [
    { path:'/' , element: <Home/>},
   { path:'about' , element: <About/>},
   { path:'home' , element: <Home/>},
   { path:'portfolio' , element: <Portfolio/>},
   { path:'contact' , element: <Contact/>},
   { path:'*' , element: <h1 >Not Found page 4 0 4</h1>}

  ]} 
]);

function App() {
  return <>
  
  <RouterProvider  router={myRouter}   />
  
  </>
   
 
}

export default App;
