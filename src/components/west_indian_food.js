import './pagescss/food.css';
import { Link } from 'react-router-dom';
const West_indian_food=()=>{
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
      <img src="https://tse2.mm.bing.net/th/id/OIP.F8BJS2eSnjyqvWlS4qfFjgHaE2?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" height="700" className="d-block w-100"/>
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
            <h2 className="section-title">Vegiterian Food</h2>
            <div className="categories-grid">
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://vegecravings.com/wp-content/uploads/2024/08/Cholar-Dal-Recipe-Step-By-Step-Instructions-scaled.jpg" alt="Cholar Daal"/>
                    </div>
                    <div className="category-info">
                        <h3>Cholar Daal</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 70.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://maunikagowardhan.co.uk/wp-content/uploads/2016/08/Bengali-Aloo-Posto-700x467.jpg" alt="Aloo Posto"/>
                    </div>
                    <div className="category-info">
                        <h3>Aloo Posto</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 45.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse4.mm.bing.net/th/id/OIP.iYIdOQIcu-jAvLBpPH__UgHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Shorshe llish"/>
                    </div>
                    <div className="category-info">
                        <h3>Shorshe llish</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 70.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://th.bing.com/th/id/R.6642bf8af5a3b3e54ad537498018a159?rik=E3TC6D0njJpqrw&riu=http%3a%2f%2fspicyworld.in%2frecipeimages%2fbeguni.jpg&ehk=%2ffb1%2f4GXhRR7MkK%2bJlfnvIr6ARZ6kPdSeTQG4TRIQh8%3d&risl=&pid=ImgRaw&r=0" alt="Beguni"/>
                    </div>
                    <div className="category-info">
                        <h3>Beguni</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 70.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://static.toiimg.com/photo/98282489.cms" alt="Dhoker Dalna"/>
                    </div>
                    <div className="category-info">
                        <h3>Dhoker Dalna</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 70.00 /-</div>
                    </div>
                </div>
            </div>
        </div>
<br/>
         <div className="container">
            <div className="categories-grid">
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://speakingaloud.in/wp-content/uploads/2021/02/Aloo-Phulkopi-Macher-Jhol-recipe-480x270.jpg" alt="Macher Jhol"/>
                    </div>
                    <div className="category-info">
                        <h3>Macher Jhol</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 70.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse1.mm.bing.net/th/id/OIP.nO5zEUn_Ig0y9d2zSRfuFgHaFk?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Lentil Soup"/>
                    </div>
                    <div className="category-info">
                        <h3>Lentil Soup</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 70.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://i0.wp.com/pikturenama.com/wp-content/uploads/2018/04/Sobji-diye-bhaja-muger-dal-logo-004.jpg?w=900&ssl=1" alt="Sobji Bhaja"/>
                    </div>
                    <div className="category-info">
                        <h3>Sobji Bhaja</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 70.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://media.vogue.in/wp-content/uploads/2020/10/bhetki-paturi-1920x1080.jpg" alt="Paturi"/>
                    </div>
                    <div className="category-info">
                        <h3>Paturi</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 70.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.licious.in/blog/wp-content/uploads/2020/12/Chingri-Malai-Curry-600x600.jpg" alt="hingri malai Curry"/>
                    </div>
                    <div className="category-info">
                        <h3>hingri malai Curry</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 70.00 /-</div>
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
                        <img src="https://recipes.timesofindia.com/thumb/55224612.cms?imgsize=539861&width=800&height=800" alt="Goan Fish Curry"/>
                    </div>
                    <div className="category-info">
                        <h3>Goan Fish Curry</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 140.00 /-</div>
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
                      <div className="dish-price">Rs.- 450.00 /-</div>
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
                      <div className="dish-price">Rs.- 130.00 /-</div>
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
                      <div className="dish-price">Rs.- 290.00 /-</div>
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
                      <div className="dish-price">Rs.- 400.00 /-</div>
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
                      <div className="dish-price">Rs.- 320.00 /-</div>
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
                      <div className="dish-price">Rs.- 600.00 /-</div>
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
                      <div className="dish-price">Rs.- 300.00 /-</div>
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
                      <div className="dish-price">Rs.- 350.00 /-</div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    </>);
    }
    export default West_indian_food;