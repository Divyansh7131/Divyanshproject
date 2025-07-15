import './pagescss/food.css'
import { Link } from 'react-router-dom';
const Fast_food=()=>{
    return(
    <>
     <section className="categories">
        <div className="container">
            <h2 className="section-title">Fast Food</h2>
            <div className="categories-grid">
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.blondelish.com/wp-content/uploads/2019/02/Easy-Veggie-Burger-Recipe-Vegan-Healthy-9.jpg" alt="Vegie burger"/>
                    </div>
                    <div className="category-info">
                        <h3>Vegie burger</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 70.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse3.mm.bing.net/th/id/OIP.x2vg5HgA4Rl9W12EEh1w1wHaF6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Chicken burger"/>
                    </div>
                    <div className="category-info">
                        <h3>Chicken burger</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 90.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Cheeseburger.jpg" alt="Cheeseburger"/>
                    </div>
                    <div className="category-info">
                        <h3>Cheese burger</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 80.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://bakingamoment.com/wp-content/uploads/2024/06/IMG_3443-barbecue-chicken-pizza.jpg" alt="BBQ Ckicken Pizza"/>
                    </div>
                    <div className="category-info">
                        <h3>BBQ Ckicken Pizza</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 470.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://au.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?v=1737368217&width=1080" alt="Margehrita Pizza"/>
                    </div>
                    <div className="category-info">
                        <h3>Margehrita Pizza</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 400.00 /-</div>
                    </div>
                </div>
            </div>
        </div>
<br/>
         <div className="container">
            <div className="categories-grid">
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.simplyrecipes.com/thmb/rLl58QZmVP4C3zSlpkKBo72EUws=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg" alt="Peperoni Pizza"/>
                    </div>
                    <div className="category-info">
                        <h3>Peperoni Pizza</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 370.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://cdn.cdkitchen.com/images/cats/1318/cat-1318-720-1.jpg" alt="Wraps"/>
                    </div>
                    <div className="category-info">
                        <h3>Wraps Sandwich</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 90.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.tastingtable.com/img/gallery/italian-sandwich-meat-cheese-recipe/l-intro-1641315527.jpg" alt="Submarine Sandwich"/>
                    </div>
                    <div className="category-info">
                        <h3>Submarine Sandwich</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 80.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse2.mm.bing.net/th/id/OIP.X0qmfZ2JOaGtTgUeF40g-wHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Club Sandwich"/>
                    </div>
                    <div className="category-info">
                        <h3>Club Sandwich</h3>
                      <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 70.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse2.mm.bing.net/th/id/OIP.GqUvr8wmgKYa7LL8YpnGMAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="French Fry"/>
                    </div>
                    <div className="category-info">
                        <h3>French Fries</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 80.00 /-</div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    </>);
};
export default Fast_food;