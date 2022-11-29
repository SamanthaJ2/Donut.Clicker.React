import React, { Fragment, useRef } from 'react'
import './index.css'
import './index.js'
import DonutShop from './DonutShop';
import background from './images/donutbackground1.jpg';
import './Sidebar';
import './Developer';


export default function App() {
  var buyDonutBtn = useRef(null);
  var buyAutoClickBtn = useRef(null);
  var buyDonutMultiplierBtn = useRef(null);
  var resetGameBtn = useRef(null);
  var currentDonuts = useRef(null);
  var currentAutoClickers = useRef(null);
  var currentDonutMultipliers = useRef(null);
  var currentAutoClickersPrice = useRef(null);
  var currentDonutMultipliersPrice = useRef(null);

  // eslint-disable-next-line no-unused-vars
  let refreshDonutCountIntervalID = setInterval(updateDonutCount, 500);

  const myDonut = new DonutShop();
  
  // eslint-disable-next-line no-unused-vars
  const imgicon = document.getElementById('imgiconlink');
  function openNav() {
    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    document.getElementById('imgiconlink').style.display = 'block';
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('imgiconlink').style.display = 'none';
  }
  console.log(buyDonutBtn);
  console.log(buyDonutBtn.current);
    buyDonutBtn = () => {
      console.log("bake");}
    function updateDonutCount() {
      currentDonuts.innerText = 'Donuts: ' + myDonut.getDonutCount();
      currentAutoClickers.innerText =
        'Donut Auto Clickers Owned: ' + myDonut.getAutoClickerCount();
      currentAutoClickersPrice.innerText =
        'Price: ' + myDonut.priceForAuto + ' donuts';
      currentDonutMultipliers.innerText =
        'Donuts Per Click: ' + myDonut.donutsEarned;
      currentDonutMultipliersPrice.innerText =
        'Price: ' + myDonut.priceForMultiply + ' donuts';
      checkAutoClickerBtn();
      checkMultiplierClickerBtn();
    }
  
    function checkAutoClickerBtn() {
      if (myDonut.donutCount >= myDonut.priceForAuto) {
        buyAutoClickBtn.disabled = false;
      } else {
        buyAutoClickBtn.disabled = true;
      }
    }
  
    function checkMultiplierClickerBtn() {
      if (myDonut.donutCount >= myDonut.priceForMultiply) {
        buyDonutMultiplierBtn.disabled = false;
      } else {
        buyDonutMultiplierBtn.disabled = true;
      }
    }
   

  

  return (
  <Fragment>
  <div className ='background' style={{ backgroundImage: `url(${background})` }}>
    <h1> Donut Maker </h1>
      <div className='mySidebar' id='mySidebar'>
          <button id="imgiconlink" onClick={closeNav}>
            <img src="./src/images/redx.jfif" alt="red X"/>
          </button>
            <a href="./app.js">Home</a>
            <a href="./About.html">About</a>
            <a href="./Inspo.html">Inspiration</a>
            <a href="./Developer.js">Developer</a>
      </div>
      <div id="main">
            <br />
            <br />
          <button className='openbtn' onClick={openNav}>
            <img className='imgicon' src="./src/images/donuticon.png" alt="donut" />
          </button>
      </div>
  <body className='body'>
    <h2>Welcome to the Donut shop!</h2>
          <p>
            <br /> Today we are going to be making donuts!{' '}
          </p>
          <p>
            To make donuts, click the Bake button below. One donut per click when
            you start.
          </p>
          <p>
            As you make donuts, you can use them as currency to buy multipliers or
            automatic clickers.
          </p>
      <div id="flex-column">
        <div id="column-item">Donut Auto Clicker</div>
          <div id="column-item">
            ✽ Automatically clicks the Donut button once per second to help gain
            extra donuts.
          </div>
          <div id="column-item">The Donut Multiplier</div>
          <div id="column-item">
              ✽ Increases the number of donuts recieved per click of the donut
              button.
          </div>
      </div>
        <div id="container">
          <p id="donutsMade" className="donutsMade">
            Donuts: 0.00
        
          </p>
          <button
            ref={buyDonutBtn}
            className = {buyDonutBtn}
            id="donutButton"
            onClick={function (bakeDonut) {
              myDonut.bakeDonut();
              myDonut.spoilDonut();
              currentDonuts.innerText = 'Donuts: ' + myDonut.getDonutCount();
              buyDonutBtn.current.focus();
            }}
          >
            {' '}
            Bake!
          </button>
          <p id="autoClicker" className="autoClicker">
            Donut Auto Clickers Owned: 0 <br />
          </p>
          <button
            ref={buyAutoClickBtn}
            id="buyAutoButton"
            onClick={function () {
              myDonut.addAutoClicker();
              currentAutoClickers.innerText =
                'Donut Auto Clickers Owned: ' + myDonut.getAutoClickerCount();
              currentAutoClickersPrice.innerText =
                'Price: ' + myDonut.priceForAuto + ' donuts';
              myDonut.startClickerInterval();
              buyAutoClickBtn.current.focus();
            }}
          >
            Buy Auto Clicker
          </button>{' '}
          <br />
          <p ref={currentAutoClickersPrice} id="priceForAuto" className="priceForAuto">
            Price: 100 donuts
          </p>
          <p
            ref={buyDonutMultiplierBtn}
            id="clickMultiplier"
            name="clickMultiplier"
            onClick={function () {
              myDonut.addDonutMultiplier();
              currentDonutMultipliers.innerText =
                'Donuts Per Click: ' + myDonut.donutsEarned;
              currentDonutMultipliersPrice.innerText =
                'Price: ' + myDonut.priceForMultiply + ' donuts';
              buyDonutMultiplierBtn.current.focus();
            }}
          >
            Donuts Per Click: 1
          </p>
          <br />
          <button ref={currentDonutMultipliers} id="buyclickMultiplier">
            Buy Donut Multiplier
          </button>
          <br />
          <p
            ref={currentDonutMultipliersPrice}
            id="priceForMultiplier"
            name="priceForMultiplier"
          >
            {' '}
          <br /> Price: 100 donuts
          </p>
          <br />
        </div>
          <button
            ref={resetGameBtn}
            id="resetButton"
            onClick={function () {
            myDonut.resetGame();
            resetGameBtn.current.focus();
          }}
        >
          Reset Game
        </button>
        </body>
        </div>
      </Fragment>
    );
      }
    
 

