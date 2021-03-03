import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Container from './components/Container/Container';
import Dashboard from './components/Dashboard/Dashboard';
import Food from './components/Food/Food';
import { FoodList } from '../src/utils/data';

function App() {
  let randomFood = FoodList[Math.floor(Math.random() * FoodList.length)];

  const [state, setState] = useState({
    dish: randomFood,
    veggo: false,
  });

  const showRecipe = () => {
    //console.log(state);
    setState({
      ...state,
      dish: FoodList[Math.floor(Math.random() * FoodList.length)],
      veggo: false,
    });
  };

  const handleFoodType = () => {
    alert('1234');
    /*   const veggo = FoodList.filter((e: any) => {
      return e.veggo;
    });

    console.log(veggo);

    setState({
      ...state,
      dish: veggo[Math.floor(Math.random() * FoodList.length)],
      veggo: true,
    }) */
  };

  /*   const handleTakeOut = () => {
    alert('TAKEOUT WORKING');
  }; */

  return (
    <div className='min-h-screen text-center bg-black'>
      <Container>
        <Banner />
        <Food food={state} />
        {/* <Takeaway /> */}
        <Dashboard
          recipe={showRecipe}
          type={handleFoodType}
          /*   takeout={handleTakeOut} */
        />
      </Container>
    </div>
  );
}

export default App;
