import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import Product from './newComponents/Product';
import Dashboard  from './newComponents/Dashboard';
import Cart from './newComponents/Cart';
import RootLayout from './newComponents/RootLayout';

function App() {

const router=createBrowserRouter(createRoutesFromElements(
  <Route path= "/" element={<RootLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="/cart" element={<Cart />} />
  </Route>
))


  return (
    <div >
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
