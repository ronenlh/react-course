import React, { useEffect, useState, Suspense, useCallback, useMemo, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import ProductList from './components/ProductList';
import Navigation from './components/Navigation';
import ProductDetails from './components/ProductDetails';
import Lost from './components/Lost';
import data from './data/data.json';
import Contact from './components/Contact';
import MyErrorBoundary from './components/MyErrorBoundary';
import { ThemeContext } from '.';

const App = React.memo(() => {
  const CompletelyNormalComponent = React.lazy(() => import('./components/CompletelyNormalComponent'));

  const [isToggled, setToggled] = useState(true);
  const [cards, setCards] = useState(data);
  const theme = useContext(ThemeContext);

  useEffect(() => {
      // get data
      // const data = fetch('https:.../data')
      
      setCards(data);
  }, []);

  return (
    <div className={ theme === 'light' ? "App" : "DarkApp"}>
      <header id="App-header">
        <img src={logo}
             className={isToggled ? 'static-logo' : 'static-logo animated jello'}
             alt="logo"
             onMouseEnter={useCallback(() => setToggled(!isToggled), [isToggled])}
             onMouseLeave={() => setToggled(!isToggled)}
             onClick={() => {
              const nav = document.getElementById('myNav');
              if (nav) {
                nav.style.width = "100%";
              }}} />
        <h1 className={isToggled ? 'menu-hidden' : 'menu animated bounceInDown'}
            onClick={() => {
              const nav = document.getElementById('myNav');
              if (nav) {
                nav.style.width = "100%";
              }}}
        >Menu</h1>
        <Navigation closeNav={() => {
          const nav = document.getElementById('myNav');
          if (nav) {
            nav.style.width = "0%";
          }
          }} />
      </header>

      <Routes>
        <Route path="/" element={<ProductList cards={cards} />} />
        <Route path="/supplements" element={
          <ProductList cards={useMemo(() => cards.filter(({ type }) => type === 'supplement'), [cards])} />}
        />
        <Route path="/clothing" element={
          <ProductList cards={cards.filter(({ type }) => type === 'clothing')} />}
        />
        <Route path="/vitamin" element={
          <ProductList cards={cards.filter(({ type }) => type === 'vitamin')} />}
        />
        <Route path="/foo" element={
          <MyErrorBoundary fallback={<h1>Error...😓</h1>}>
            <Suspense fallback={<h1>Loading...⏱😓</h1>}>
              <CompletelyNormalComponent />
            </Suspense>
          </MyErrorBoundary>
        } />
        <Route path="/contact" element={<Contact /> } />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<Lost />} />
      </Routes>
    </div>
  );
});

export default App;
