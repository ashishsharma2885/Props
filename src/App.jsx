import React from 'react';
import FoodItem from './components/FoodItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ErrorMessage from './components/ErrorMessage';

function App() {
   let foodItems = ["Sabzi", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return ( 
    <>
      <h1 className='food-heading'>Healthy Food</h1>
     <ErrorMessage items={foodItems}></ErrorMessage>
     <FoodItem items={foodItems}></FoodItem>
    </>
  );
}

export default App;
