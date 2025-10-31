import './pagescss/food.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Sea_food = () => {

  const { addToCart } = useCart(); // access addToCart

  const items = [
    {
      name: "Fish Curry",
      price: 120,
      img: "https://vaya.in/recipes/wp-content/uploads/2018/04/Kerala-Fish-Curry.jpg"
    },
    {
      name: "Fried Fish",
      price: 90,
      img: "https://images.squarespace-cdn.com/content/v1/52d3fafee4b03c7eaedee15f/1505699195515-PQJ8XZV54C3FNANC17I8/fish+lemongrass-3.jpg"
    },
    {
      name: "Prawns Masala",
      price: 570,
      img: "https://1.bp.blogspot.com/-O2lJI9WuS1M/UtbaUlCSK6I/AAAAAAAAAlw/0GwXpo8GVRU/s1600/prawn+masala+5.JPG"
    },
    {
      name: "Crab Soup",
      price: 470,
      img: "https://tse2.mm.bing.net/th/id/OIP.uC9tY8tWv7nkkti1EKJv2AHaHa"
    },
    {
      name: "Fried Prawns",
      price: 500,
      img: "https://www.thespruceeats.com/thmb/5xkGMB8ZXz3KGF_y4Uxf7ZfQAvQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ebi-fry-fried-shrimp-2031450-hero-01-46c436a89c164a9ab5980f888097fcd2.jpg"
    }
  ];

  return (
    <section className="categories">
      <div className="container">
        <h2 className="section-title">Sea Food</h2>
        <div className="categories-grid">

          {items.map((item, index) => (
            <div key={index} className="category-card">
              <div className="category-img">
                <img src={item.img} alt={item.name} />
              </div>

              <div className="category-info">
                <h3>{item.name}</h3>

                <button
                  className="btn"
                  onClick={() => addToCart(item)} // add item to cart
                >
                  Add to Cart
                </button>

                <Link to="/Order_form">
                  <button className="btn">Buy</button>
                </Link>

                <div className="dish-price">Rs. {item.price} /-</div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Sea_food;
