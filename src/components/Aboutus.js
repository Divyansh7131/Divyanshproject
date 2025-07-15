import './pagescss/about.css';
import { Link } from 'react-router-dom';

const Aboutus = () => {
  return (
    <>
      {/* Container */}
      <div className="container">
        <div className="row">
          <div className="col" id="text">
            Our Story
            <p>From humble beginnings to delivering delicious meals to thousands of happy customers daily.</p>
            <Link to="/Menue"> {/* Use 'to' instead of 'href' */}
              <button id="explore_menu">Explore Menu</button>
            </Link>
          </div>
          <div className="col" id="img">
            <img src="https://tse4.mm.bing.net/th/id/OIP.FwLYssOmKhj8X0zn_ydf2gHaE7?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" height="auto" width="outo" alt="" />
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
    <section class="team">
        <div class="team_container">
            <h2 class="section-title">Meet Our Team</h2><br/>
            <div class="team-grid">
                <div class="team-card">
                    <div class="team-img">
                        <img src="https://img.freepik.com/premium-photo/portrait-indian-female-chef-giving-happy-expression-white-background_833908-1853.jpg?w=2000" alt="Veg Food"/>
                    </div>
                    <div class="team-info">
                        <h3>Chef Leena Rastogi</h3>
                      <h4>Founder & Executive Chef</h4>
                       <p>With 15 years of experience in gourmet cuisine, Marco brings creativity and passion to every dish.</p>
                    </div>
                </div>
                <div class="team-card">
                    <div class="team-img">
                        <img src="https://media.istockphoto.com/photos/indian-chef-working-cooking-in-a-restaurant-kitchen-picture-id182666701?k=20&m=182666701&s=612x612&w=0&h=ugmFtyC3RW9kNqc2DU2lHrVeDeK1xxt7zq9E6gYA42g=" alt="Non-Veg Food"/>
                    </div>
                    <div class="team-info">
                        <h3>Chef J.P. Singh</h3>
                        <h4>Head of Operations</h4>
                        <p>Ensuring our kitchen runs smoothly and efficiently to deliver your meals right on time.</p>
                    </div>
                </div>
                <div class="team-card">
                    <div class="team-img">
                        <img src="https://as1.ftcdn.net/v2/jpg/00/61/88/88/1000_F_61888864_eZJJkbI8KVTB68zrCYgt3S53QrDLTNcx.jpg" alt="Sea food"/>
                    </div>
                    <div class="team-info">
                        <h3>Chef Arjun Kumar</h3>
                        <h4>Customer Experience</h4>
                        <p>Leading our team to ensure every customer interaction is exceptional.</p>
                    </div>
                </div>
                <div class="team-card">
                    <div class="team-img">
                        <img src="https://img.freepik.com/premium-photo/indian-chef-presenting-beautifully-plated-dish_198067-99792.jpg" alt="Chinies Food"/>
                    </div>
                    <div class="team-info">
                        <h3>Chef Balbir Singh</h3>
                        <h4>Senior Chef</h4>
                        <p>Bringing innovation and expertise to our ever-evolving menu.</p>
                    </div>
                </div>
                <div class="team-card">
                    <div class="team-img">
                        <img src="https://tse4.mm.bing.net/th/id/OIP.YOfYdR4xvwJSa0imyDVzXQHaE7?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" alt="Fast Food"/>
                    </div>
                    <div class="team-info">
                        <h3>Chef Saloni Matray</h3>
                        <h4>Tester and Decorator</h4>
                        <p>Preparing, seasoning, and decorating meals and dishes in ways that suit the requirements or orders that are placed by customers. </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section class="Customer">
        <div class="Customer_container">
         <center>   <h2 class="section-title">What Customer Say ? </h2></center>
            <div class="Customer-grid">
                <div class="Customer-card">
                    <div class="Customer-img">
                        <img src="https://thumbs.dreamstime.com/b/profile-picture-young-indian-woman-posing-headshot-portrait-smiling-pose-show-confidence-success-confident-mixed-race-227961372.jpg" alt="Customer"/>
                    </div>
                    <div class="Customer-info">
                        
                       <p>"The best food delivery service I've ever used! Every dish arrives fresh and flavorful, just like dining in a restaurant."</p>
                    </div>
                </div>
                <div class="Customer-card">
                    <div class="Customer-img">
                        <img src="https://wallpapers.com/images/hd/professional-profile-pictures-5472-x-3648-fnzog91drg7fwyv1.jpg" alt="Customer"/>
                    </div>
                    <div class="Customer-info">
                        
                        <p>"As a busy professional, FoodExpress has been a lifesaver. The meals are restaurant-quality but delivered right to my door."</p>
                    </div>
                </div>
                <div class="Customer-card">
                    <div class="Customer-img">
                        <img src="https://static6.depositphotos.com/1008005/595/i/950/depositphotos_5954955-stock-photo-senior-indian-man.jpg" alt="Customer"/>
                    </div>
                    <div class="Customer-info">
                        
                        <p>I love how FoodExpress offers unique dishes I can't find anywhere else. Their weekly specials keep me coming back!</p>
                    </div>
                </div>
            </div>
          </div>
        </section>

      {/* Order */}
      <div className="order">
        <div className="ordertext"><br />
          <h2>Ready to taste the difference?</h2>
        </div>
        <p>Join thousands of happy customers enjoying delicious meals delivered to their door.</p>
        <Link to="/Menue">
          <button id="order_now">Order Now</button>
        </Link>
        <Link to="/Menue">
          <button id="explore_menu">Explore Menue</button>
        </Link>
      </div>
    </>
  );
};

export default Aboutus;
