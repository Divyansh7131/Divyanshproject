import './pagescss/food.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

 const items = [
  {
    name: "Idli",
    img: "https://www.healthifyme.com/blog/wp-content/uploads/2018/03/idly2.jpeg",
    price: 60
  },
  {
    name: "Dosa",
    img: "https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg",
    price: 80
  },
  {
    name: "Sambar",
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/sambar-680x510.jpg",
    price: 60
  },
  {
    name: "Rasam",
    img: "https://th.bing.com/th/id/R.5af16500cf986c38955f59e4762e3cbb?rik=Irzd3z%2b7%2fnye%2fg&riu=http%3a%2f%2fwww.blueberriesfoods.com%2fwp-content%2fuploads%2f2018%2f10%2frasam-1.png&ehk=oYjS7yUQPk%2bn9CBiHQ1e6mQgiYed14z0Wc0GxtlIgGY%3d&risl=&pid=ImgRaw&r=0",
    price: 60
  },
  {
    name: "Vada",
    img: "https://foodiewish.com/wp-content/uploads/2020/05/Medu-Vada-Recipe-1.jpg",
    price: 70
  },
  {
    name: "Upma",
    img: "https://www.seema.com/wp-content/uploads/2022/08/Upma.jpg",
    price: 80
  },
  {
    name: "Pongal",
    img: "https://tse2.mm.bing.net/th/id/OIP.VqkIvD_jNJTXRCQotzKOUQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 90
  },
  {
    name: "Avial",
    img: "https://easyday.snydle.com/files/2015/03/Avial.jpg",
    price: 90
  },
  {
    name: "Kootu",
    img: "https://3.bp.blogspot.com/-68Qz0RPvC1I/UmUDsB4e-MI/AAAAAAAABzU/duKRLXDdXDY/s1600/Podalangai+Kootu.jpg",
    price: 50
  },
  {
    name: "Coconut Rice",
    img: "https://tse1.explicit.bing.net/th/id/OIP.mOe-GxKL9NZFE_wTJwLIogHaFL?r=0&w=936&h=655&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 50
  },
   {
    name: "Goan Fish Curry",
    img: "https://recipes.timesofindia.com/thumb/55224612.cms?imgsize=539861&width=800&height=800",
    price: 170
  },
  {
    name: "Rogan Josh",
    img: "https://th.bing.com/th/id/OIP.wK3jnZiQXn2lB2LYujy_egHaE5?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 400
  },
  {
    name: "Fish Curry",
    img: "https://tse2.mm.bing.net/th/id/OIP.7URTj-dLKyHX16W7wPrFIAHaEV?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 90
  },
  {
    name: "Chicken Vindaloo",
    img: "https://thebigmansworld.com/wp-content/uploads/2023/03/chicken-vindaloo-recipe-768x768.jpg",
    price: 180
  },
  {
    name: "Fish Fry",
    img: "https://www.kannammacooks.com/wp-content/uploads/masala-fish-fry-recipe-ayala-meen-Mackerel-fry-8.jpg",
    price: 170
  },
  {
    name: "Prawn Balchao",
    img: "https://www.thespruceeats.com/thmb/c8N9E3KFhTkDWakAHz61g45RuYQ=/5618x3750/filters:fill(auto,1)/goan-prawn-balchao-1957451-hero-01-91d750c35f6545269350a483ef61b90f.jpg",
    price: 370
  },
  {
    name: "Chicken Xacuti",
    img: "https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_750/https://www.thetakeiteasychef.com/wp-content/uploads/2016/02/1-750x629.jpg",
    price: 290
  },
  {
    name: "Mutton Biryani",
    img: "https://tse2.mm.bing.net/th/id/OIP.qMxhIUTvGnF_xuz8vEIduwHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 650
  },
  {
    name: "Bombay Duck Fry",
    img: "https://img-global.cpcdn.com/recipes/68984c45715aac7c/680x482cq70/bombilbombay-duck-fry-recipe-main-photo.jpg",
    price: 350
  },
  {
    name: "Crab Curry",
    img: "https://www.thespruceeats.com/thmb/aFymP_UKEBo36d9wcGacDhoSieQ=/4738x2533/filters:fill(auto,1)/close-up-of-crab-gravy-served-on-table-677147575-588b52995f9b5874ee1af765.jpg",
    price: 390
  }

];

const South_indian_food=()=>{
    const addToCart = useCart(); // access addToCart
    const vegItems = items.slice(0,10);
    const nonVegItems = items.slice(10,);
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
export default South_indian_food;