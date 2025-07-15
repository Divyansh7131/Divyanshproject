import './pagescss/food.css';
import { Link } from 'react-router-dom';
const North_indian_food=()=>{
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
{/* food-category*/}

   <section className="categories">
        <div className="container">
            <h2 className="section-title">Vegiterian Food</h2>
            <div className="categories-grid">
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.cookforindia.com/wp-content/uploads/2016/08/Paneer-Tikka-_LR.jpg" alt="Paneer Tikka"/>
                    </div>
                    <div className="category-info">
                        <h3>Paneer Tikka</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                       <div className="dish-price">Rs.- 120.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.livofy.com/health/wp-content/uploads/2023/03/2023_01_25_creamy_chana_masala_1-1024x683.jpg" alt="Chana Masala"/>
                    </div>
                    <div className="category-info">
                        <h3>Chana Masala</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                       <div className="dish-price">Rs.- 80.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://png.pngtree.com/png-vector/20240723/ourmid/pngtree-aloo-gobi-indian-and-pakistani-food-cauliflower-png-image_13007774.png" alt="Aloo Gobhi"/>
                    </div>
                    <div className="category-info">
                        <h3>Aloo Gobhi</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                       <div className="dish-price">Rs.- 60.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse4.mm.bing.net/th/id/OIP.giZqQvtTXt3PFYe6G3MG7AHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" alt="Daal Makhni"/>
                    </div>
                    <div className="category-info">
                        <h3>Daal Makhni</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                       <div className="dish-price">Rs.- 70.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.slurrp.com/web/_next/image?url=https:%2F%2Fimages.slurrp.com%2Fprodarticles%2Fwvv3e18g1po.webp%3Fimpolicy%3Dslurrp-20210601%26width%3D1200%26height%3D675&w=3840&q=75" alt="Rajma"/>
                    </div>
                    <div className="category-info">
                        <h3>Rajma</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                       <div className="dish-price">Rs.- 90.00 /-</div>
                    </div>
                </div>
            </div>
        </div>
<br/>
         <div className="container">
            <div className="categories-grid">
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse2.mm.bing.net/th/id/OIP.UYURV91iSB8xZjxamIcBMgHaE6?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" alt="Palak Paneer"/>
                    </div>
                    <div className="category-info">
                        <h3>Palak Paneer</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                       <div className="dish-price">Rs.- 110.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse1.mm.bing.net/th/id/OIP.sahG6XHCcAP1M4Ihb0QV-gHaEJ?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" alt="Matar Paneer"/>
                    </div>
                    <div className="category-info">
                        <h3>Matar paneer</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                       <div className="dish-price">Rs.- 140.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://recipesblob.oetker.in/assets/6c0ac2f3ce204d3d9bb1df9709fc06c9/1272x764/shahi-paneer.jpg" alt="Shahi Paneer"/>
                    </div>
                    <div className="category-info">
                        <h3>Shahi Paneer</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                       <div className="dish-price">Rs.- 150 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse2.mm.bing.net/th/id/OIP.IesjIMDSbBQyueB7IbiobQAAAA?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" alt="Bharwa Bhindi"/>
                    </div>
                    <div className="category-info">
                        <h3>Bharwa Bhindi</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                       <div className="dish-price">Rs.- 65.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse2.mm.bing.net/th/id/OIP.LeLxEvsyjm-6u1pT6xqczQHaDu?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" alt="Kadhayi Paneer"/>
                    </div>
                    <div className="category-info">
                        <h3>Kadhayi Paneer</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 155.00 /-</div>
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
</>);
};
export default North_indian_food;