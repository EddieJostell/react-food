import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Container from './components/Container/Container';
import Dashboard from './components/Dashboard/Dashboard';
import Food from './components/Food/Food';
import { FoodList, IRecipe, TakeAway, ITakeAway } from '../src/utils/data';
import Takeaway from './components/Takeaway/Takeaway';

function App() {
  const [veggoState, setVeggoState] = useState<boolean>(false);
  const [takeOut, setTakeOut] = useState<boolean>(false);

  let takeaway = TakeAway[Math.floor(Math.random() * TakeAway.length)];
  let randomFood = FoodList[Math.floor(Math.random() * FoodList.length)];
  let onlyVeggo = FoodList.filter((filterFood: IRecipe) => {
    return filterFood.veggo;
  });
  let veggoRecipes = onlyVeggo[Math.floor(Math.random() * onlyVeggo.length)];

  const [state, setState] = useState<object>({
    allRecipes: randomFood,
    veggoRecipes: veggoRecipes,
  });

  const [companyState, setcompState] = useState<object>({
    companies: takeaway,
  });

  const showRecipe = (): void => {
    if (takeOut) {
      setcompState({
        ...companyState,
        companies: TakeAway[Math.floor(Math.random() * TakeAway.length)],
      });
    } else {
      if (veggoState) {
        setState({ ...state, allRecipes: veggoRecipes });
      } else {
        setState({
          ...state,
          allRecipes: FoodList[Math.floor(Math.random() * FoodList.length)],
        });
      }
    }
  };

  const handleFoodType = (): void => {
    setVeggoState(!veggoState);
  };

  const handleTakeOut = (): void => {
    setTakeOut(!takeOut);
  };

  return (
    <div className='min-h-screen text-center bg-black'>
      <Container>
        <Banner />
        {!takeOut ? <Food food={state} /> : <Takeaway company={companyState} />}
        <Dashboard
          fastfood={takeOut}
          recipe={showRecipe}
          type={handleFoodType}
          takeout={handleTakeOut}
        />
      </Container>
    </div>
  );
}

export default App;
