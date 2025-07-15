import './pagescss/food.css';
import { Link } from 'react-router-dom';
const east_indian_food=()=>{
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
            <h2 className="section-title">Vegiterian Food</h2>
        <div className="categories-grid">
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://i.cdn.newsbytesapp.com/images/l198_8311591421085.jpg" alt="Dhokla"/>
                    </div>
                    <div className="category-info">
                        <h3>Dhokla</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 60.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://th.bing.com/th/id/R.b5c604ad89221daa7386e895678b8cea?rik=JVLXEF%2fJh8hXJA&riu=http%3a%2f%2fim.rediff.com%2fgetahead%2f2014%2fjan%2f30recipe-khandvi-1.jpg&ehk=jTMsRVohgLFqm9gXyNCON1FV9IKzYLyMeVG9Xyid5Wg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="Khandvi"/>
                    </div>
                    <div className="category-info">
                        <h3>Khandvi</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 90.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.nehascookbook.com/wp-content/uploads/2022/09/Kathiyawadi-undhiyu-WS-1.jpg" alt="Undhiyu"/>
                    </div>
                    <div className="category-info">
                        <h3>Undhiyu</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 80.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://recipes.timesofindia.com/thumb/55045560.cms?imgsize=252832&width=800&height=800" alt="Puran Poli"/>
                    </div>
                    <div className="category-info">
                        <h3>Puran Poli</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 40.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://madhurasrecipe.com/wp-content/uploads/2020/10/Chicken-Baida-Roti-Feature-1.jpg" alt="Baida Roti"/>
                    </div>
                    <div className="category-info">
                        <h3>Baida Roti</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 60.00 /-</div>
                    </div>
                </div>
            </div>
        </div>
<br/>
         <div className="container">
            <div className="categories-grid">
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse4.mm.bing.net/th/id/OIP.Z9iMBrS_KmBP-KUZK7TMJQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Aloo Gobhi"/>
                    </div>
                    <div className="category-info">
                        <h3>Aloo Gobhi</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 50.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse1.mm.bing.net/th/id/OIP.xMwQlPJAH34nvpHACxr3HwHaI9?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Bhindi Masala"/>
                    </div>
                    <div className="category-info">
                        <h3>Bhindi Masala</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 50.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse2.mm.bing.net/th/id/OIP.fRZW1j0fLNdRzYyxRcu8wgHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Pav Bhaji"/>
                    </div>
                    <div className="category-info">
                        <h3>Pav Bhaji</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 60.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://static.vecteezy.com/system/resources/previews/015/933/726/non_2x/chole-bhature-is-a-north-indian-food-dish-a-combination-of-chana-masala-and-bhatura-or-puri-free-photo.jpg" alt="Chole Bhature"/>
                    </div>
                    <div className="category-info">
                        <h3>Chole Bhature</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 60.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse1.mm.bing.net/th/id/OIP.WQ6MXa9-IKlorbJ2HZbyzgHaIA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Sev temetanu saak"/>
                    </div>
                    <div className="category-info">
                        <h3>Sev temetanu saak</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 65.00 /-</div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    
   <section className="categories">
        <div className="container">
            <h2 className="section-title">Non-Vegiterian Food</h2>
                       <div className="categories-grid">
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.simplyrecipes.com/thmb/1SXZ_F1GC6ww_ppWnrdbKgHi9fQ=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg" alt="Illish Bhapa"/>
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
export default east_indian_food;