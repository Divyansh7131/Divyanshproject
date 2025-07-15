import './pagescss/food.css';
import { Link } from 'react-router-dom';
const Non_veg=()=>{
    return(
<>
 <section className="categories">
        <div className="container">
            <h2 className="section-title">Non-Vegiterian Food</h2>
            <div className="categories-grid">
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.simplyrecipes.com/thmb/1SXZ_F1GC6ww_ppWnrdbKgHi9fQ=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg" alt="Butter Chicken"/>
                    </div>
                    <div className="category-info">
                        <h3>Butter Chicken</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 220.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://th.bing.com/th/id/OIP.wK3jnZiQXn2lB2LYujy_egHaE5?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Rogan Josh"/>
                    </div>
                    <div className="category-info">
                        <h3>Rogan Josh</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 300.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse2.mm.bing.net/th/id/OIP.7URTj-dLKyHX16W7wPrFIAHaEV?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Fish Curry"/>
                    </div>
                    <div className="category-info">
                        <h3>Fish Curry</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 120.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://static01.nyt.com/images/2023/02/02/multimedia/cp-chicken-tikka-pqtk/cp-chicken-tikka-pqtk-threeByTwoMediumAt2X.jpg" alt="Chicken Tikka"/>
                    </div>
                    <div className="category-info">
                        <h3>Chicken Tikka</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 150.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://images.news18.com/ibnlive/uploads/2023/07/mutton-seekh-kebab-169030200216x9.jpg" alt="Kabab"/>
                    </div>
                    <div className="category-info">
                        <h3>Kabab</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 170.00 /-</div>
                    </div>
                </div>
            </div>
        </div>
<br/>
         <div className="container">
            <div className="categories-grid">
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse1.mm.bing.net/th/id/OIP.fpZH5oPD42wphiwsJBaHFQHaFC?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Chicken Biryani"/>
                    </div>
                    <div className="category-info">
                        <h3>Chicken Biryani</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 270.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse4.mm.bing.net/th/id/OIP.GMZ4IPFNO9dsHBKJhla0CAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Prawns Masala"/>
                    </div>
                    <div className="category-info">
                        <h3>Prawns Masala</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 280.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse4.mm.bing.net/th/id/OIP.lRej3VT7ZrC80y0TateUJAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Mutton Keema"/>
                    </div>
                    <div className="category-info">
                        <h3>Mutton Keema</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 370.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse2.mm.bing.net/th/id/OIP.21xfGQ9jUczQhBfBTgASHwHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Tanduri Chicken"/>
                    </div>
                    <div className="category-info">
                        <h3>Tanduri Chicken</h3>
                      <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 450.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse4.mm.bing.net/th/id/OIP.vvJq-_pR1IS4zkyiCs02-AAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Mutton Curry"/>
                    </div>
                    <div className="category-info">
                        <h3>Mutton Curry</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 550.00 /-</div>
                    </div>
                </div>
            </div>
        </div>

    </section>

     <section className="categories">
        <div className="container">
            <div className="categories-grid">
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://recipes.timesofindia.com/thumb/55224612.cms?imgsize=539861&width=800&height=800" alt="Goan Fish Curry"/>
                    </div>
                    <div className="category-info">
                        <h3>Goan Fish Curry</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 170.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://th.bing.com/th/id/OIP.wK3jnZiQXn2lB2LYujy_egHaE5?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Rogan Josh"/>
                    </div>
                    <div className="category-info">
                        <h3>Rogan Josh</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 400.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse2.mm.bing.net/th/id/OIP.7URTj-dLKyHX16W7wPrFIAHaEV?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Fish Curry"/>
                    </div>
                    <div className="category-info">
                        <h3>Fish Curry</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 90.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://thebigmansworld.com/wp-content/uploads/2023/03/chicken-vindaloo-recipe-768x768.jpg" alt="Chicken Vindaloo"/>
                    </div>
                    <div className="category-info">
                        <h3>Chicken Vindaloo</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 180.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.kannammacooks.com/wp-content/uploads/masala-fish-fry-recipe-ayala-meen-Mackerel-fry-8.jpg" alt="Fish Fry"/>
                    </div>
                    <div className="category-info">
                        <h3>Fish Fry</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 170.00 /-</div>
                    </div>
                </div>
            </div>
        </div>
<br/>
         <div className="container">
            <div className="categories-grid">
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.thespruceeats.com/thmb/c8N9E3KFhTkDWakAHz61g45RuYQ=/5618x3750/filters:fill(auto,1)/goan-prawn-balchao-1957451-hero-01-91d750c35f6545269350a483ef61b90f.jpg" alt="Prawn Balchao"/>
                    </div>
                    <div className="category-info">
                        <h3>Prawn Balchao</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 370.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_750/https://www.thetakeiteasychef.com/wp-content/uploads/2016/02/1-750x629.jpg" alt="Chicken Xacuti"/>
                    </div>
                    <div className="category-info">
                        <h3>Chicken Xacuti</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 290.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse2.mm.bing.net/th/id/OIP.qMxhIUTvGnF_xuz8vEIduwHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Mutton Biryani"/>
                    </div>
                    <div className="category-info">
                        <h3>Mutton Biryani</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 650.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://img-global.cpcdn.com/recipes/68984c45715aac7c/680x482cq70/bombilbombay-duck-fry-recipe-main-photo.jpg" alt="Bombay Duck Fry"/>
                    </div>
                    <div className="category-info">
                        <h3>Bombay Duck Fry</h3>
                      <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 350.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.thespruceeats.com/thmb/aFymP_UKEBo36d9wcGacDhoSieQ=/4738x2533/filters:fill(auto,1)/close-up-of-crab-gravy-served-on-table-677147575-588b52995f9b5874ee1af765.jpg" alt="Crab Curry"/>
                    </div>
                    <div className="category-info">
                        <h3>Crab Curry</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 390.00 /-</div>
                    </div>
                </div>
            </div>
        </div>

    </section>

     <section className="categories">
        <div className="container">
            <div className="categories-grid">
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.simplyrecipes.com/thmb/1SXZ_F1GC6ww_ppWnrdbKgHi9fQ=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg/" alt="Illish Bhapa"/>
                    </div>
                    <div className="category-info">
                        <h3>Illish Bhapa</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 270.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://th.bing.com/th/id/R.39b94d8009af66e524b740847d385262?rik=Ew6cXeK7i10bhw&riu=http%3a%2f%2fspicyworld.in%2frecipeimages%2fmacher-jhol.jpg&ehk=BUrz0L3KddIE%2bO4vk32FbbySXJH9%2fMjcTcD4aWw0GhI%3d&risl=&pid=ImgRaw&r=0" alt="Macher Jhol"/>
                    </div>
                    <div className="category-info">
                        <h3>Macher Jhol</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 170.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse2.mm.bing.net/th/id/OIP.3I21zrjetyG8l3T01xT-jwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Prawns Malai Curry"/>
                    </div>
                    <div className="category-info">
                        <h3>Prawns Malai Curry</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 600.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.whiskaffair.com/wp-content/uploads/2019/02/Kosha-Mangsho-2-2.jpg" alt="Kosha Mangso"/>
                    </div>
                    <div className="category-info">
                        <h3>Kosha Mangso</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 140.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://st4.depositphotos.com/18645588/25026/i/450/depositphotos_250266054-stock-photo-crispy-delicious-fried-fish.jpg" alt="Fish Fry"/>
                    </div>
                    <div className="category-info">
                        <h3>Fish Fry</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 140.00 /-</div>
                    </div>
                </div>
            </div>
        </div>
<br/>
         <div className="container">
            <div className="categories-grid">
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.boldsky.com/img/2017/09/600x700-27-1506516071.jpg" alt="Chingri Bhapa"/>
                    </div>
                    <div className="category-info">
                        <h3>Chingri Bhapa</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 270.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://c8.alamy.com/comp/M598EK/spicy-baked-indian-fish-cuisine-made-of-bhetki-fish-popularly-known-M598EK.jpg" alt="Betki Paturi"/>
                    </div>
                    <div className="category-info">
                        <h3>Betki Paturi</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 290.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://lifestyletoppings.com/wp-content/uploads/2023/04/Egg-Curry.jpg" alt="Egg Curry"/>
                    </div>
                    <div className="category-info">
                        <h3>Egg Curry</h3>
                      <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 90.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse4.mm.bing.net/th/id/OIP.vvJq-_pR1IS4zkyiCs02-AAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Mutton Curry"/>
                    </div>
                    <div className="category-info">
                        <h3>Mutton Curry</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 500.00 /-</div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</>);
};
export default Non_veg;