import './pagescss/food.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
const items = [
  // ---------------- Veg Items ----------------
  {
    name: "Paneer Tikka",
    image: "https://www.cookforindia.com/wp-content/uploads/2016/08/Paneer-Tikka-_LR.jpg",
    price: 120,
    category: "Veg"
  },
  {
    name: "Chana Masala",
    image: "https://www.livofy.com/health/wp-content/uploads/2023/03/2023_01_25_creamy_chana_masala_1-1024x683.jpg",
    price: 80,
    category: "Veg"
  },
  {
    name: "Aloo Gobhi",
    image: "https://png.pngtree.com/png-vector/20240723/ourmid/pngtree-aloo-gobi-indian-and-pakistani-food-cauliflower-png-image_13007774.png",
    price: 60,
    category: "Veg"
  },
  {
    name: "Daal Makhni",
    image: "https://tse4.mm.bing.net/th/id/OIP.giZqQvtTXt3PFYe6G3MG7AHaE8?r=0",
    price: 70,
    category: "Veg"
  },
  {
    name: "Rajma",
    image: "https://www.slurrp.com/web/_next/image?url=https:%2F%2Fimages.slurrp.com%2Fprodarticles%2Fwvv3e18g1po.webp",
    price: 90,
    category: "Veg"
  },
  {
    name: "Palak Paneer",
    image: "https://tse2.mm.bing.net/th/id/OIP.UYURV91iSB8xZjxamIcBMgHaE6?r=0",
    price: 110,
    category: "Veg"
  },
  {
    name: "Matar Paneer",
    image: "https://tse1.mm.bing.net/th/id/OIP.sahG6XHCcAP1M4Ihb0QV-gHaEJ?r=0",
    price: 140,
    category: "Veg"
  },
  {
    name: "Shahi Paneer",
    image: "https://recipesblob.oetker.in/assets/6c0ac2f3ce204d3d9bb1df9709fc06c9/1272x764/shahi-paneer.jpg",
    price: 150,
    category: "Veg"
  },
  {
    name: "Bharwa Bhindi",
    image: "https://tse2.mm.bing.net/th/id/OIP.IesjIMDSbBQyueB7IbiobQAAAA?r=0",
    price: 65,
    category: "Veg"
  },
  {
    name: "Kadhayi Paneer",
    image: "https://tse2.mm.bing.net/th/id/OIP.LeLxEvsyjm-6u1pT6xqczQHaDu?r=0",
    price: 155,
    category: "Veg"
  },

  // ---------------- Non Veg Items ----------------
  {
    name: "Butter Chicken",
    image: "https://www.simplyrecipes.com/thmb/1SXZ_F1GC6ww_ppWnrdbKgHi9fQ=/2000x1333",
    price: 220,
    category: "Non-Veg"
  },
  {
    name: "Rogan Josh",
    image: "https://th.bing.com/th/id/OIP.wK3jnZiQXn2lB2LYujy_egHaE5",
    price: 300,
    category: "Non-Veg"
  },
  {
    name: "Fish Curry",
    image: "https://tse2.mm.bing.net/th/id/OIP.7URTj-dLKyHX16W7wPrFIAHaEV",
    price: 120,
    category: "Non-Veg"
  },
  {
    name: "Chicken Tikka",
    image: "https://static01.nyt.com/images/2023/02/02/multimedia/cp-chicken-tikka-pqtk/cp-chicken-tikka-pqtk-threeByTwoMediumAt2X.jpg",
    price: 150,
    category: "Non-Veg"
  },
  {
    name: "Kabab",
    image: "https://images.news18.com/ibnlive/uploads/2023/07/mutton-seekh-kebab-169030200216x9.jpg",
    price: 170,
    category: "Non-Veg"
  },
  {
    name: "Chicken Biryani",
    image: "https://tse1.mm.bing.net/th/id/OIP.fpZH5oPD42wphiwsJBaHFQHaFC",
    price: 270,
    category: "Non-Veg"
  },
  {
    name: "Prawns Masala",
    image: "https://tse4.mm.bing.net/th/id/OIP.GMZ4IPFNO9dsHBKJhla0CAHaEK",
    price: 280,
    category: "Non-Veg"
  },
  {
    name: "Mutton Keema",
    image: "https://tse4.mm.bing.net/th/id/OIP.lRej3VT7ZrC80y0TateUJAHaE8",
    price: 370,
    category: "Non-Veg"
  },
  {
    name: "Tandoori Chicken",
    image: "https://tse2.mm.bing.net/th/id/OIP.21xfGQ9jUczQhBfBTgASHwHaEJ",
    price: 450,
    category: "Non-Veg"
  },
  {
    name: "Mutton Curry",
    image: "https://tse4.mm.bing.net/th/id/OIP.vvJq-_pR1IS4zkyiCs02-AAAAA",
    price: 550,
    category: "Non-Veg"
  },
];

const North_indian_food=()=>{
    const { addToCart } = useCart(); // access addToCart

    const vegItems = items.filter(item => item.category === "Veg");
    const nonVegItems = items.filter(item => item.category === "Non-Veg");
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
      <img src="https://maunikagowardhan.co.uk/wp-content/uploads/2016/08/Bengali-Aloo-Posto-700x467.jpg" height="700" className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <div className="text">Delicious Food Delevered to your Doorsteps</div>
        <p>Order from your favorite local restaurants with just a few clicks and get it delivered fast</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg" height="700" className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <div className="text">Delicious Food Delevered to your Doorsteps</div>
        <p>Order from your favorite local restaurants with just a few clicks and get it delivered fast</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg" height="700" className="d-block w-100"/>
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
export default North_indian_food;