import './pagescss/food.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
const items = [
{
name: "Dhokla",
price: 60,
img: "https://i.cdn.newsbytesapp.com/images/l198_8311591421085.jpg",
type: "veg"
},
{
name: "Khandvi",
price: 90,
img: "https://th.bing.com/th/id/R.b5c604ad89221daa7386e895678b8cea?rik=JVLXEF%2fJh8hXJA&riu=http%3a%2f%2fim.rediff.com%2fgetahead%2f2014%2fjan%2f30recipe-khandvi-1.jpg",
type: "veg"
},
{
name: "Undhiyu",
price: 80,
img: "https://www.nehascookbook.com/wp-content/uploads/2022/09/Kathiyawadi-undhiyu-WS-1.jpg",
type: "veg"
},
{
name: "Puran Poli",
price: 40,
img: "https://recipes.timesofindia.com/thumb/55045560.cms?imgsize=252832&width=800&height=800",
type: "veg"
},
{
name: "Baida Roti",
price: 60,
img: "https://madhurasrecipe.com/wp-content/uploads/2020/10/Chicken-Baida-Roti-Feature-1.jpg",
type: "veg"
},
{
name: "Aloo Gobhi",
price: 50,
img: "https://tse4.mm.bing.net/th/id/OIP.Z9iMBrS_KmBP-KUZK7TMJQHaE7",
type: "veg"
},
{
name: "Bhindi Masala",
price: 50,
img: "https://tse1.mm.bing.net/th/id/OIP.xMwQlPJAH34nvpHACxr3HwHaI9",
type: "veg"
},
{
name: "Pav Bhaji",
price: 60,
img: "https://tse2.mm.bing.net/th/id/OIP.fRZW1j0fLNdRzYyxRcu8wgHaFj",
type: "veg"
},
{
name: "Chole Bhature",
price: 60,
img: "https://static.vecteezy.com/system/resources/previews/015/933/726/non_2x/chole-bhature",
type: "veg"
},
{
name: "Sev temetanu saak",
price: 65,
img: "https://tse1.mm.bing.net/th/id/OIP.WQ6MXa9-IKlorbJ2HZbyzgHaIA",
type: "veg"
},
{
name: "Illish Bhapa",
price: 270,
img: "https://www.simplyrecipes.com/thmb/1SXZ_F1GC6ww_ppWnrdbKgHi9fQ",
type: "nonveg"
},
{
name: "Macher Jhol",
price: 170,
img: "https://th.bing.com/th/id/R.39b94d8009af66e524b740847d385262",
type: "nonveg"
},
{
name: "Prawns Malai Curry",
price: 600,
img: "https://tse2.mm.bing.net/th/id/OIP.3I21zrjetyG8l3T01xT-jwHaEK",
type: "nonveg"
},
{
name: "Kosha Mangso",
price: 140,
img: "https://www.whiskaffair.com/wp-content/uploads/2019/02/Kosha-Mangsho",
type: "nonveg"
},
{
name: "Fish Fry",
price: 140,
img: "https://st4.depositphotos.com/18645588/25026/i/450/depositphotos_250266054-stock-photo-crispy-delicious-fried-fish",
type: "nonveg"
},
{
name: "Chingri Bhapa",
price: 270,
img: "https://www.boldsky.com/img/2017/09/600x700-27-1506516071.jpg",
type: "nonveg"
},
{
name: "Betki Paturi",
price: 290,
img: "https://c8.alamy.com/comp/M598EK/spicy-baked-indian-fish-cuisine",
type: "nonveg"
},
{
name: "Egg Curry",
price: 90,
img: "https://lifestyletoppings.com/wp-content/uploads/2023/04/Egg-Curry.jpg",
type: "nonveg"
},
{
name: "Mutton Curry",
price: 500,
img: "https://tse4.mm.bing.net/th/id/OIP.vvJq-_pR1IS4zkyiCs02-AAAAA",
type: "nonveg"
},
];
const EastIndianFood=()=>{

    const vegItems = items.filter(item => item.type === "veg");
    const nonVegItems = items.filter(item => item.type === "nonveg"); 
    const { addToCart } = useCart().addToCart;

    return(
    <>
     {/*image slider*/}
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg" height="700" className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <div className="text">Delicious Food Delevered to your Doorsteps</div>
        <p>Order from your favorite local restaurants with just a few clicks and get it delivered fast</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://tse2.mm.bing.net/th/id/OIP.pviiqj3olxcnc17XudSbagHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" height="700" className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <div className="text">Delicious Food Delevered to your Doorsteps</div>
        <p>Order from your favorite local restaurants with just a few clicks and get it delivered fast</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://tse2.mm.bing.net/th/id/OIP.F8BJS2eSnjyqvWlS4qfFjgHaE2?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" height="700" className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <div className="text">Delicious Food Delevered to your Doorsteps</div>
        <p>Order from your favorite local restaurants with just a few clicks and get it delivered fast</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

  
</div>

 <section className="categories">
        <div className="container">
          <h2 className="section-title">Vegetarian Food</h2>
          <div className="categories-grid">
            {vegItems.map((item, index) => (
              <div className="category-card" key={index}>
                <div className="category-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="category-info">
                  <h3>{item.name}</h3>
                  <button className="btn" onClick={() => addToCart(item)} >Add to Cart</button>
                  <Link to="/Order_form">
                    <button className="btn">Buy</button>
                  </Link>
                  <div className="dish-price">Rs.- {item.price} /-</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non Veg Section */}
      <section className="categories">
        <div className="container">
          <h2 className="section-title">Non-Vegetarian Food</h2>
          <div className="categories-grid">
            {nonVegItems.map((item, index) => (
              <div className="category-card" key={index}>
                <div className="category-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="category-info">
                  <h3>{item.name}</h3>
                  <button className="btn" onClick={() => addToCart(item)} >Add to Cart</button>
                  <Link to="/Order_form">
                    <button className="btn">Buy</button>
                  </Link>
                  <div className="dish-price">Rs.- {item.price} /-</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
</>);
};
export default EastIndianFood;