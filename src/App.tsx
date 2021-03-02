import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Container from './components/Container/Container';
import Dashboard from './components/Dashboard/Dashboard';
import Food from './components/Food/Food';

function App() {
  return (
    <div className="min-h-screen text-center bg-black">
     {/* <h1 className="text-white">THUNDERDOME</h1> */}
     <Container>
       <Banner/>
       <Food/>
       <Dashboard />
     </Container>
    </div>
  );
}

export default App;
