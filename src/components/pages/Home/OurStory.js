import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Our restaurant, located in the heart of Chicago, is dedicated to bringing authentic Italian cuisine to our community. From classic pasta dishes to innovative Italian creations, we strive to offer an unforgettable dining experience. Our recipes, culinary techniques, and presentations are the result of years of expertise and passion for Italian cooking.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
