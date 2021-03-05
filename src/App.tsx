import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Container from './components/Container/Container';
import Dashboard from './components/Dashboard/Dashboard';
import Food from './components/Food/Food';
import {
  anotherCompany,
  anotherRecipe,
  IRecipe,
  ITakeAway,
} from '../src/utils/data';
import Takeaway from './components/Takeaway/Takeaway';

interface IAppState {
  recipe: IRecipe;
  company: ITakeAway;
  veggoState: boolean;
  takeOut: boolean;
}

function App() {
  const [appState, setAppState] = useState<IAppState>({
    recipe: anotherRecipe('', false),
    company: anotherCompany(''),
    veggoState: false,
    takeOut: false,
  });

  const showRecipe = (): void => {
    if (appState.takeOut) {
      setAppState({
        ...appState,
        company: anotherCompany(appState.company.name),
      });
    } else {
      setAppState({
        ...appState,
        recipe: anotherRecipe(appState.recipe.dish, appState.veggoState),
      });
    }
  };

  const handleFoodType = (): void => {
    setAppState({
      ...appState,
      veggoState: !appState.veggoState,
      recipe: anotherRecipe(appState.recipe.dish, !appState.veggoState),
    });
  };

  const handleTakeOut = (): void => {
    setAppState({
      ...appState,
      company: anotherCompany(appState.company.name),
      takeOut: !appState.takeOut,
    });
  };

  return (
    <div className='min-h-screen text-center bg-black px-1.5'>
      <Container>
        <Banner />
        {!appState.takeOut ? (
          <Food food={appState.recipe} />
        ) : (
          <Takeaway company={appState.company} />
        )}
        <Dashboard
          fastfood={appState.takeOut}
          recipe={showRecipe}
          type={handleFoodType}
          takeout={handleTakeOut}
        />
      </Container>
    </div>
  );
}

export default App;
