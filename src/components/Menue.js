import './pagescss/menu.css';
import { Link } from 'react-router-dom';
const Menue=()=>{
    return(
    <>
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
                      <Link to="/Order_form">  <button className="btn">Buy</button></Link>
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
            <div className="categories-grid">
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.healthifyme.com/blog/wp-content/uploads/2018/03/idly2.jpeg" alt="Idli"/>
                    </div>
                    <div className="category-info">
                        <h3>Idli</h3>
                      <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 60.00 /-</div>
                    </div>
                     
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg" alt="Dosa"/>
                    </div>
                    <div className="category-info">
                        <h3>Dosa</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 80.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/sambar-680x510.jpg" alt="Sambar"/>
                    </div>
                    <div className="category-info">
                        <h3>Sambar</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 60.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://th.bing.com/th/id/R.5af16500cf986c38955f59e4762e3cbb?rik=Irzd3z%2b7%2fnye%2fg&riu=http%3a%2f%2fwww.blueberriesfoods.com%2fwp-content%2fuploads%2f2018%2f10%2frasam-1.png&ehk=oYjS7yUQPk%2bn9CBiHQ1e6mQgiYed14z0Wc0GxtlIgGY%3d&risl=&pid=ImgRaw&r=0" alt="Rasam"/>
                    </div>
                    <div className="category-info">
                        <h3>Rasam</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 60.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://foodiewish.com/wp-content/uploads/2020/05/Medu-Vada-Recipe-1.jpg" alt="Vada"/>
                    </div>
                    <div className="category-info">
                        <h3>Vada</h3>
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
                        <img src="https://www.seema.com/wp-content/uploads/2022/08/Upma.jpg" alt="Upma"/>
                    </div>
                    <div className="category-info">
                        <h3>Upma</h3>
                       <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 80.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse2.mm.bing.net/th/id/OIP.VqkIvD_jNJTXRCQotzKOUQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Pongal"/>
                    </div>
                    <div className="category-info">
                        <h3>Pongal</h3>
                        <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 90.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://easyday.snydle.com/files/2015/03/Avial.jpg" alt="Avial"/>
                    </div>
                    <div className="category-info">
                        <h3>Avial</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 90.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://3.bp.blogspot.com/-68Qz0RPvC1I/UmUDsB4e-MI/AAAAAAAABzU/duKRLXDdXDY/s1600/Podalangai+Kootu.jpg" alt="Kootu"/>
                    </div>
                    <div className="category-info">
                        <h3>Kootu</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 50.00 /-</div>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                        <img src="https://tse1.explicit.bing.net/th/id/OIP.mOe-GxKL9NZFE_wTJwLIogHaFL?r=0&w=936&h=655&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Coconut Rice"/>
                    </div>
                    <div className="category-info">
                        <h3>Coconut Rice</h3>
                         <button className="btn">Add to Cart</button>
                      <Link to="/Order_form">   <button className="btn">Buy</button></Link>
                      <div className="dish-price">Rs.- 50.00 /-</div>
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
{/*non-veg*/}
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
    {/*Sea food*/}
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
{/*fast food*/}
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
export default Menue;