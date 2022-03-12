import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import ProductList from './components/ProductList';
import Navigation from './components/Navigation';
import ProductDetails from './components/ProductDetails';
import Lost from './components/Lost';
import data from './data/data.json';
import Loading from './components/Loading';

const Contact = React.lazy(() => import("./components/Contant"));

const App = () => {
  const [isToggled, setToggled] = useState(true);
  const [cards, setCards] = useState(data);

  useEffect(() => {
      setCards(data);
  }, []);

  const openNav = () => {
    // @ts-ignore
    document.getElementById("myNav").style.width = "100%";
  };

  const closeNav = () => {
    // @ts-ignore
    document.getElementById("myNav").style.width = "0%";
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}
             className={isToggled ? 'static-logo' : 'static-logo animated jello'}
             alt="logo"
             onMouseEnter={() => setToggled(!isToggled)}
             onMouseLeave={() => setToggled(!isToggled)}
             onClick={openNav} />
        <h1 className={isToggled ? 'menu-hidden' : 'menu animated bounceInDown'}
            onClick={openNav}
        >Menu</h1>
        <Navigation closeNav={closeNav} />
      </header>

      <Routes>
        <Route path="/" element={<ProductList cards={cards} />} />
        <Route path="/supplements" element={
          <ProductList cards={cards.filter(({ type }) => type === 'supplement')} />}
        />
        <Route path="/clothing" element={
          <ProductList cards={cards.filter(({ type }) => type === 'clothing')} />}
        />
        <Route path="/vitamin" element={
          <ProductList cards={cards.filter(({ type }) => type === 'vitamin')} />}
        />
        <Route path="/contact" element={
          <React.Suspense fallback={<Loading />}>
            <Contact />
          </React.Suspense>} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<Lost />} />
      </Routes>
    </div>
  );
};

export default App;
