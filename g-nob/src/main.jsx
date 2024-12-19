import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter} from 'react-router-dom';
import About from './Components/About.jsx';
import Updates from './Components/Updates.jsx';
import Contact from './Components/Contact.jsx';
import Traning from './Components/Traning.jsx';
import Vocationalform from './Components/Vocationalform.jsx';



const router= createBrowserRouter([
  {path:"/" , element:<App/>},
  {path:"/about", element:<About/>},
  {path:"/updates", element:<Updates/>},
  {path:"/contact", element:<Contact/>},
  {path:"/training", element:<Traning/>},
  {path:"/vocationform", element:<Vocationalform/>}


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
