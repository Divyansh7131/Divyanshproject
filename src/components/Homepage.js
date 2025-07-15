import React from "react";
import { Link } from "react-router-dom";
import './pagescss/home.css';

const Homepage=()=>{
    
   
    return(
    <>
    {/* Image Slider */}
     <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" classNameName="active" aria-current="true" aria-label="Slide 1"></button>
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
{/* Food Categories */}

   <section className="categories">
        <div className="container">
            <h2 className="section-title">Food Categories</h2>
           <div className="categories-grid">
             <Link to="/vegfood">  
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse4.mm.bing.net/th/id/OIP.GjIwCh89aXCNSbCMbriWkwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Veg Food"/>
                    </div>
                    <div className="category-info">
                        <h3>Veg food</h3>
                       
                    </div>
                </div>
              </Link>
              <Link to="/non-veg">
              <div className="category-card">
                    <div className="category-img">
                        <img src="https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=20&m=1155240408&s=612x612&w=0&h=Zvr3TwVQ-wlfBnvGrgJCtv-_P_LUcIK301rCygnirbk=" alt="Non-Veg Food"/>
                    </div>
                    <div className="category-info">
                        <h3>Non-Veg Food</h3>
                        
                    </div>
                </div>
              </Link>
              <Link to="/sea_food">
              <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse1.mm.bing.net/th/id/OIP.aOmIbjloargN5d9lkpCgPQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Sea food"/>
                    </div>
                    <div className="category-info">
                        <h3>Sea Food</h3>
                        
                    </div>
                </div>
              </Link>
              <Link to="/chinies_food">
              <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse1.mm.bing.net/th/id/OIP.RWxHHdgNaidR3t5IX6hkmAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Chinies Food"/>
                    </div>
                    <div className="category-info">
                        <h3>Chinies Food</h3>
                        
                    </div>
                </div>
              </Link>
              <Link to="/fast_food">
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://wallpapercave.com/wp/wp1929444.jpg" alt="Fast Food"/>
                    </div>
                    <div className="category-info">
                        <h3>Fast Food</h3>
                    
                    </div>
                </div>
              </Link>
            </div>
        </div>
    </section>

{/* Popular Dishes */}

     <section className="popular-dishes">
        <div className="container">
            <h2 className="section-title">Popular Dishes Near You</h2>
            <div className="dishes-grid">
                   
                <div className="dish-card">
                    <div className="dish-img">
                        <img src="https://wallpaperaccess.com/full/9313971.jpg" alt="Shahi Paneer"/>
                        <div className="dish-rating"/>
                            <i className="fas fa-star"></i>
                        </div>
                    <div className="dish-info">
                        <div className="flex-row">
                            <h3>Shahi Paneer</h3>
                            <div className="dish-price">Rs. 199</div>
                        </div>
                        <button className="btn">Add to Cart</button>
                     <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                    </div>
                </div>
                <div className="dish-card">
                    <div className="dish-img">
                        <img src="https://cookingwithbenazir.com/img/chickenchangezi.jpg" alt="chickenchangezi"/>
                        <div className="dish-rating">
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                    <div className="dish-info">
                        <div className="flex-row">
                            <h3>chickenchangezi</h3>
                            <div className="dish-price">Rs. 270</div>
                        </div>
                        <button className="btn">Add to Cart</button>
                        <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                    </div>
                </div>

                <div className="dish-card">
                    <div className="dish-img">
                        <img src="https://th.bing.com/th/id/OIP.QanMv1fHxhbffifGOrfx7gHaFF?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" alt="Fried Fish"/>
                        <div className="dish-rating">
                            <i className="fas fa-star"></i> 
                        </div>
                    </div>
                    <div className="dish-info">
                        <div className="flex-row">
                            <h3>Fried Fish</h3>
                            <div className="dish-price">Rs. 230</div>
                        </div>
                        <button className="btn">Add to Cart</button>
                        <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                    </div>
                </div>
                </div>
            </div>
      </section>

      
</>);
};
export default Homepage;