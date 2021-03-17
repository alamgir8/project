import React, { useEffect, useState } from 'react';
import foodData from '../FakeData/FoodData.json'
import Food from '../Food/Food';

const Home = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        setFoods(foodData);
    }, [])
    return (
        <div className='row'>
            {
                foods.map(food => <Food food={food} key={food.id}></Food>)
            }
        </div>
    );
};

export default Home;