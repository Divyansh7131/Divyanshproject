import './pagescss/food.css';
import { Link } from 'react-router-dom';
const Sea_food=()=>{
    return(
    <>
     <section className="categories">
        <div className="container">
            <h2 className="section-title">Sea Food</h2>
            <div className="categories-grid">
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://vaya.in/recipes/wp-content/uploads/2018/04/Kerala-Fish-Curry.jpg" alt="Fish Curry"/>
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
                        <img src="https://images.squarespace-cdn.com/content/v1/52d3fafee4b03c7eaedee15f/1505699195515-PQJ8XZV54C3FNANC17I8/fish+lemongrass-3.jpg" alt="Fried Fish"/>
                    </div>
                    <div className="category-info">
                        <h3>Fried Fish</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 90.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://th.bing.com/th/id/R.66da47ef23ee32d93c7e63db8c15016e?rik=fWu2oNPuqm4DpA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-O2lJI9WuS1M%2fUtbaUlCSK6I%2fAAAAAAAAAlw%2f0GwXpo8GVRU%2fs1600%2fprawn%2bmasala%2b5.JPG&ehk=9YKisilzjSAfuQBLcjDdQsk6Ba7%2fsXdwMjsqMqpsuRk%3d&risl=&pid=ImgRaw&r=0" alt="Prawns Masala"/>
                    </div>
                    <div className="category-info">
                        <h3>Prawns Masala</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 570.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse2.mm.bing.net/th/id/OIP.uC9tY8tWv7nkkti1EKJv2AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Crab Soup"/>
                    </div>
                    <div className="category-info">
                        <h3>Crab Soup</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 470.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.thespruceeats.com/thmb/5xkGMB8ZXz3KGF_y4Uxf7ZfQAvQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ebi-fry-fried-shrimp-2031450-hero-01-46c436a89c164a9ab5980f888097fcd2.jpg" alt="Fried Prawns"/>
                    </div>
                    <div className="category-info">
                        <h3>Fried Prawns</h3>
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
export default Sea_food;