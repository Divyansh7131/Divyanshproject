import './pagescss/food.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
const Non_veg=()=>{

    const { addToCart } = useCart(); // access addToCart
    const items = [
  {
    name: "Butter Chicken",
    image: "https://www.simplyrecipes.com/thmb/1SXZ_F1GC6ww_ppWnrdbKgHi9fQ=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg",
    price: 220
  },
  {
    name: "Rogan Josh",
    image: "https://th.bing.com/th/id/OIP.wK3jnZiQXn2lB2LYujy_egHaE5?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 300
  },
  {
    name: "Fish Curry",
    image: "https://tse2.mm.bing.net/th/id/OIP.7URTj-dLKyHX16W7wPrFIAHaEV?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 120
  },
  {
    name: "Chicken Tikka",
    image: "https://static01.nyt.com/images/2023/02/02/multimedia/cp-chicken-tikka-pqtk/cp-chicken-tikka-pqtk-threeByTwoMediumAt2X.jpg",
    price: 150
  },
  {
    name: "Kabab",
    image: "https://images.news18.com/ibnlive/uploads/2023/07/mutton-seekh-kebab-169030200216x9.jpg",
    price: 170
  },
  {
    name: "Chicken Biryani",
    image: "https://tse1.mm.bing.net/th/id/OIP.fpZH5oPD42wphiwsJBaHFQHaFC?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 270
  },
  {
    name: "Prawns Masala",
    image: "https://tse4.mm.bing.net/th/id/OIP.GMZ4IPFNO9dsHBKJhla0CAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 280
  },
  {
    name: "Mutton Keema",
    image: "https://tse4.mm.bing.net/th/id/OIP.lRej3VT7ZrC80y0TateUJAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 370
  },
  {
    name: "Tanduri Chicken",
    image: "https://tse2.mm.bing.net/th/id/OIP.21xfGQ9jUczQhBfBTgASHwHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 450
  },
  {
    name: "Mutton Curry",
    image: "https://tse4.mm.bing.net/th/id/OIP.vvJq-_pR1IS4zkyiCs02-AAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 550
  },
  {
    name: "Goan Fish Curry",
    image: "https://recipes.timesofindia.com/thumb/55224612.cms?imgsize=539861&width=800&height=800",
    price: 170
  },
  {
    name: "Rogan Josh",
    image: "https://th.bing.com/th/id/OIP.wK3jnZiQXn2lB2LYujy_egHaE5?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 400
  },
  {
    name: "Fish Curry",
    image: "https://tse2.mm.bing.net/th/id/OIP.7URTj-dLKyHX16W7wPrFIAHaEV?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 90
  },
  {
    name: "Chicken Vindaloo",
    image: "https://thebigmansworld.com/wp-content/uploads/2023/03/chicken-vindaloo-recipe-768x768.jpg",
    price: 180
  },
  {
    name: "Fish Fry",
    image: "https://www.kannammacooks.com/wp-content/uploads/masala-fish-fry-recipe-ayala-meen-Mackerel-fry-8.jpg",
    price: 170
  },
  {
    name: "Prawn Balchao",
    image: "https://www.thespruceeats.com/thmb/c8N9E3KFhTkDWakAHz61g45RuYQ=/5618x3750/filters:fill(auto,1)/goan-prawn-balchao-1957451-hero-01-91d750c35f6545269350a483ef61b90f.jpg",
    price: 370
  },
  {
    name: "Chicken Xacuti",
    image: "https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_750/https://www.thetakeiteasychef.com/wp-content/uploads/2016/02/1-750x629.jpg",
    price: 290
  },
  {
    name: "Mutton Biryani",
    image: "https://tse2.mm.bing.net/th/id/OIP.qMxhIUTvGnF_xuz8vEIduwHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 650
  },
  {
    name: "Bombay Duck Fry",
    image: "https://img-global.cpcdn.com/recipes/68984c45715aac7c/680x482cq70/bombilbombay-duck-fry-recipe-main-photo.jpg",
    price: 350
  },
  {
    name: "Crab Curry",
    image: "https://www.thespruceeats.com/thmb/aFymP_UKEBo36d9wcGacDhoSieQ=/4738x2533/filters:fill(auto,1)/close-up-of-crab-gravy-served-on-table-677147575-588b52995f9b5874ee1af765.jpg",
    price: 390
  },
  {
    name: "Illish Bhapa",
    image: "https://www.simplyrecipes.com/thmb/1SXZ_F1GC6ww_ppWnrdbKgHi9fQ=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg/",
    price: 270
  },
  {
    name: "Macher Jhol",
    image: "https://th.bing.com/th/id/R.39b94d8009af66e524b740847d385262?rik=Ew6cXeK7i10bhw&riu=http%3a%2f%2fspicyworld.in%2frecipeimages%2fmacher-jhol.jpg&ehk=BUrz0L3KddIE%2bO4vk32FbbySXJH9%2fMjcTcD4aWw0GhI%3d&risl=&pid=ImgRaw&r=0",
    price: 170
  },
  {
    name: "Prawns Malai Curry",
    image: "https://tse2.mm.bing.net/th/id/OIP.3I21zrjetyG8l3T01xT-jwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 600
  },
  {
    name: "Kosha Mangso",
    image: "https://www.whiskaffair.com/wp-content/uploads/2019/02/Kosha-Mangsho-2-2.jpg",
    price: 140
  },
  {
    name: "Fish Fry",
    image: "https://st4.depositphotos.com/18645588/25026/i/450/depositphotos_250266054-stock-photo-crispy-delicious-fried-fish.jpg",
    price: 140
  },
  {
    name: "Chingri Bhapa",
    image: "https://www.boldsky.com/img/2017/09/600x700-27-1506516071.jpg",
    price: 270
  },
  {
    name: "Betki Paturi",
    image: "https://c8.alamy.com/comp/M598EK/spicy-baked-indian-fish-cuisine-made-of-bhetki-fish-popularly-known-M598EK.jpg",
    price: 290
  },
  {
    name: "Egg Curry",
    image: "https://lifestyletoppings.com/wp-content/uploads/2023/04/Egg-Curry.jpg",
    price: 90
  },
  {
    name: "Mutton Curry",
    image: "https://tse4.mm.bing.net/th/id/OIP.vvJq-_pR1IS4zkyiCs02-AAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 500
  }
];

    return(
<>
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

</>);
};
export default Non_veg;