import { Link } from 'react-router-dom';
import restaurantFoodImage from './assets/restaurant-food.jpg';
import './Hero.css';
import pages from '../../../utils/pages';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Discover the essence of Italy at our restaurant, located in the vibrant heart of Chicago. We bring you a culinary journey that features both classic pasta dishes and creative Italian specialties. Our commitment to authenticity is evident in every recipe, technique, and presentation. With years of expertise and a deep passion for Italian cuisine, we offer an unforgettable dining experience that transports you to Italy.
          </p>
          <Link className="button-primary" to={pages.get('bookings').path}>
            Reserve a table
          </Link>
        </div>
        <img
          className="hero-image"
          src={restaurantFoodImage}
          alt="Restaurant food"
        />
      </div>
    </section>
  );
};

export default Hero;
