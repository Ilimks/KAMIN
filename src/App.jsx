import React, { useEffect, useState } from 'react';
import './App.scss'
import './AppMobile.scss'
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUS/AboutUs';
import Montages from './Pages/Montages/Montages';
import Contact from './Pages/Contact/Contact';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import StovesAndFireplaces from './Pages/StovesaAndFreplaces/StovesAndFireplaces';
import { useDispatch } from 'react-redux';
import { getProducts } from './Store/ProductsSlice/ProductsSlice';
import axios from 'axios';
import Basket from './Pages/Basket/Basket';
import Delivery from './Pages/Delivery/Delivery';
import Reviews from './Pages/Reviews/Reviews';
import Manufact from './Pages/Manufact/Manufact';
import Single from './Pages/Single/Single';
import User from './Pages/User/User';
import Policy from './Pages/Policy/Policy';



const App = () => {

    const dispatch = useDispatch()
    const [snowflakes, setSnowflakes] = useState([]);

    useEffect(() => {
        const createSnowflakes = () => {
          const flakes = [];
          for (let i = 0; i < 50; i++) { 
            flakes.push({
              id: i,
              left: Math.random() * 100 + "vw",
              animationDuration: Math.random() * 3 + 2 + "s", 
              size: Math.random() * 10 + 5 + "px",
            });
          }
          setSnowflakes(flakes);
        };
    
        createSnowflakes();
    },[]);

    useEffect(()=>{
        axios('http://localhost:3000/products')
       .then(({data})=>dispatch(getProducts(data)))
    },[])
  
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='about' element={<AboutUs/>}/>
                <Route path='montages' element={<Montages/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='portfolio' element={<PortfolioPage/>}/>
                <Route path='StovesaAndFreplaces' element={<StovesAndFireplaces/>}/>
                <Route path='basket' element={<Basket/>}/>
                <Route path='delivery' element={<Delivery/>}/>
                <Route path='reviews' element={<Reviews/>}/>
                <Route path='manufact' element={<Manufact/>}/>
                <Route path='single/:id' element={<Single/>}/>
                <Route path='user' element={<User/>}/>
                <Route path='policy' element={<Policy/>}/>

                
                
                </Route>
            </Routes>

            <div className="snowfall">
                {snowflakes.map((flake) => (
                  <div
                    key={flake.id}
                    className="snowflake"
                    style={{
                      left: flake.left,
                      animationDuration: flake.animationDuration,
                      width: flake.size,
                      height: flake.size,
                    }}
                  >
                    ❄
                  </div>
                ))}
            </div>
        </>
    );
};

export default App;