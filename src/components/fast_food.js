import './pagescss/food.css'
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Fast_food = () => {
  const { addToCart } = useCart(); // access addToCart function

  const items = [
    { name: "Vegie burger", price: 70, img: "https://www.blondelish.com/wp-content/uploads/2019/02/Easy-Veggie-Burger-Recipe-Vegan-Healthy-9.jpg" },
    { name: "Chicken burger", price: 90, img: "https://tse3.mm.bing.net/th/id/OIP.x2vg5HgA4Rl9W12EEh1w1wHaF6" },
    { name: "Cheese burger", price: 80, img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cheeseburger.jpg" },
    { name: "BBQ Chicken Pizza", price: 470, img: "https://bakingamoment.com/wp-content/uploads/2024/06/IMG_3443-barbecue-chicken-pizza.jpg" },
    { name: "Margherita Pizza", price: 400, img: "https://au.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?v=1737368217&width=1080" },
  ];

  return (
    <section className="categories">
      <div className="container">
        <h2 className="section-title">Fast Food</h2>
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
                  onClick={() => addToCart(item)} // Add to cart
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

