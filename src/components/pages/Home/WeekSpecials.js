import { Link } from 'react-router-dom';
import bruschettaImage from './assets/bruschetta.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
import lemonDessertImage from './assets/lemon-dessert.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$12.99',
    description: `Little Lemon's Greek Salad features fresh romaine, tomatoes, cucumbers, and red onions, with creamy feta and Kalamata olives, tossed in a zesty vinaigrette of olive oil, vinegar, and oregano. A refreshing Mediterranean dish.`,
  },
  {
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$7',
    description: `Bruschetta features toasted bread topped with a mix of diced tomatoes, garlic, basil, and olive oil. It's a simple yet flavorful Italian appetizer that highlights fresh, vibrant ingredients.`,
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$2.50',
    description: `A lemon dessert, like lemon tart, features a zesty lemon custard filling in a buttery crust, often topped with a light dusting of powdered sugar. It's a refreshing and tangy treat that balances sweet and tart flavors..`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <Link className="button-primary" to={pages.get('orderOnline').path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => 
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;
