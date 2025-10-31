import './pagescss/food.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
const Veg_food=()=>{

    const { addToCart } = useCart(); // access addToCart

     const items = [
  {
    name: "Paneer Tikka",
    img: "https://www.cookforindia.com/wp-content/uploads/2016/08/Paneer-Tikka-_LR.jpg",
    price: 120
  },
  {
    name: "Chana Masala",
    img: "https://www.livofy.com/health/wp-content/uploads/2023/03/2023_01_25_creamy_chana_masala_1-1024x683.jpg",
    price: 80
  },
  {
    name: "Aloo Gobhi",
    img: "https://png.pngtree.com/png-vector/20240723/ourmid/pngtree-aloo-gobi-indian-and-pakistani-food-cauliflower-png-image_13007774.png",
    price: 60
  },
  {
    name: "Daal Makhni",
    img: "https://tse4.mm.bing.net/th/id/OIP.giZqQvtTXt3PFYe6G3MG7AHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
    price: 70
  },
  {
    name: "Rajma",
    img: "https://www.slurrp.com/web/_next/image?url=https:%2F%2Fimages.slurrp.com%2Fprodarticles%2Fwvv3e18g1po.webp%3Fimpolicy%3Dslurrp-20210601%26width%3D1200%26height%3D675&w=3840&q=75",
    price: 90
  },
  {
    name: "Palak Paneer",
    img: "https://tse2.mm.bing.net/th/id/OIP.UYURV91iSB8xZjxamIcBMgHaE6?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
    price: 110
  },
  {
    name: "Matar Paneer",
    img: "https://tse1.mm.bing.net/th/id/OIP.sahG6XHCcAP1M4Ihb0QV-gHaEJ?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
    price: 140
  },
  {
    name: "Shahi Paneer",
    img: "https://recipesblob.oetker.in/assets/6c0ac2f3ce204d3d9bb1df9709fc06c9/1272x764/shahi-paneer.jpg",
    price: 150
  },
  {
    name: "Bharwa Bhindi",
    img: "https://tse2.mm.bing.net/th/id/OIP.IesjIMDSbBQyueB7IbiobQAAAA?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
    price: 65
  },
  {
    name: "Kadhayi Paneer",
    img: "https://tse2.mm.bing.net/th/id/OIP.LeLxEvsyjm-6u1pT6xqczQHaDu?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
    price: 155
  },
  {
    name: "Idli",
    img: "https://www.healthifyme.com/blog/wp-content/uploads/2018/03/idly2.jpeg",
    price: 60
  },
  {
    name: "Dosa",
    img: "https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg",
    price: 80
  },
  {
    name: "Sambar",
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/sambar-680x510.jpg",
    price: 60
  },
  {
    name: "Rasam",
    img: "https://th.bing.com/th/id/R.5af16500cf986c38955f59e4762e3cbb?rik=Irzd3z%2b7%2fnye%2fg&riu=http%3a%2f%2fwww.blueberriesfoods.com%2fwp-content%2fuploads%2f2018%2f10%2frasam-1.png&ehk=oYjS7yUQPk%2bn9CBiHQ1e6mQgiYed14z0Wc0GxtlIgGY%3d&risl=&pid=ImgRaw&r=0",
    price: 60
  },
  {
    name: "Vada",
    img: "https://foodiewish.com/wp-content/uploads/2020/05/Medu-Vada-Recipe-1.jpg",
    price: 70
  },
  {
    name: "Upma",
    img: "https://www.seema.com/wp-content/uploads/2022/08/Upma.jpg",
    price: 80
  },
  {
    name: "Pongal",
    img: "https://tse2.mm.bing.net/th/id/OIP.VqkIvD_jNJTXRCQotzKOUQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 90
  },
  {
    name: "Avial",
    img: "https://easyday.snydle.com/files/2015/03/Avial.jpg",
    price: 90
  },
  {
    name: "Kootu",
    img: "https://3.bp.blogspot.com/-68Qz0RPvC1I/UmUDsB4e-MI/AAAAAAAABzU/duKRLXDdXDY/s1600/Podalangai+Kootu.jpg",
    price: 50
  },
  {
    name: "Coconut Rice",
    img: "https://tse1.explicit.bing.net/th/id/OIP.mOe-GxKL9NZFE_wTJwLIogHaFL?r=0&w=936&h=655&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 50
  },
  {
    name: "Cholar Daal",
    img: "https://vegecravings.com/wp-content/uploads/2024/08/Cholar-Dal-Recipe-Step-By-Step-Instructions-scaled.jpg",
    price: 70
  },
  {
    name: "Aloo Posto",
    img: "https://maunikagowardhan.co.uk/wp-content/uploads/2016/08/Bengali-Aloo-Posto-700x467.jpg",
    price: 45
  },
  {
    name: "Shorshe llish",
    img: "https://tse4.mm.bing.net/th/id/OIP.iYIdOQIcu-jAvLBpPH__UgHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 70
  },
  {
    name: "Beguni",
    img: "https://th.bing.com/th/id/R.6642bf8af5a3b3e54ad537498018a159?rik=E3TC6D0njJpqrw&riu=http%3a%2f%2fspicyworld.in%2frecipeimages%2fbeguni.jpg&ehk=%2ffb1%2f4GXhRR7MkK%2bJlfnvIr6ARZ6kPdSeTQG4TRIQh8%3d&risl=&pid=ImgRaw&r=0",
    price: 70
  },
  {
    name: "Dhoker Dalna",
    img: "https://static.toiimg.com/photo/98282489.cms",
    price: 70
  },
  {
    name: "Macher Jhol",
    img: "https://speakingaloud.in/wp-content/uploads/2021/02/Aloo-Phulkopi-Macher-Jhol-recipe-480x270.jpg",
    price: 70
  },
  {
    name: "Lentil Soup",
    img: "https://tse1.mm.bing.net/th/id/OIP.nO5zEUn_Ig0y9d2zSRfuFgHaFk?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 70
  },
  {
    name: "Sobji Bhaja",
    img: "https://i0.wp.com/pikturenama.com/wp-content/uploads/2018/04/Sobji-diye-bhaja-muger-dal-logo-004.jpg?w=900&ssl=1",
    price: 70
  },
  {
    name: "Paturi",
    img: "https://media.vogue.in/wp-content/uploads/2020/10/bhetki-paturi-1920x1080.jpg",
    price: 70
  },
  {
    name: "Hingri Malai Curry",
    img: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chingri-Malai-Curry-600x600.jpg",
    price: 70
  },
  {
    name: "Dhokla",
    img: "https://i.cdn.newsbytesapp.com/images/l198_8311591421085.jpg",
    price: 60
  },
  {
    name: "Khandvi",
    img: "https://th.bing.com/th/id/R.b5c604ad89221daa7386e895678b8cea?rik=JVLXEF%2fJh8hXJA&riu=http%3a%2f%2fim.rediff.com%2fgetahead%2f2014%2fjan%2f30recipe-khandvi-1.jpg&ehk=jTMsRVohgLFqm9gXyNCON1FV9IKzYLyMeVG9Xyid5Wg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
    price: 90
  },
  {
    name: "Undhiyu",
    img: "https://www.nehascookbook.com/wp-content/uploads/2022/09/Kathiyawadi-undhiyu-WS-1.jpg",
    price: 80
  },
  {
    name: "Puran Poli",
    img: "https://recipes.timesofindia.com/thumb/55045560.cms?imgsize=252832&width=800&height=800",
    price: 40
  },
  {
    name: "Baida Roti",
    img: "https://madhurasrecipe.com/wp-content/uploads/2020/10/Chicken-Baida-Roti-Feature-1.jpg",
    price: 60
  },
  {
    name: "Aloo Gobhi",
    img: "https://tse4.mm.bing.net/th/id/OIP.Z9iMBrS_KmBP-KUZK7TMJQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 50
  },
  {
    name: "Bhindi Masala",
    img: "https://tse1.mm.bing.net/th/id/OIP.xMwQlPJAH34nvpHACxr3HwHaI9?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 50
  },
  {
    name: "Pav Bhaji",
    img: "https://tse2.mm.bing.net/th/id/OIP.fRZW1j0fLNdRzYyxRcu8wgHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 60
  },
  {
    name: "Chole Bhature",
    img: "https://static.vecteezy.com/system/resources/previews/015/933/726/non_2x/chole-bhature-is-a-north-indian-food-dish-a-combination-of-chana-masala-and-bhatura-or-puri-free-photo.jpg",
    price: 60
  },
  {
    name: "Sev Temetanu Saak",
    img: "https://tse1.mm.bing.net/th/id/OIP.WQ6MXa9-IKlorbJ2HZbyzgHaIA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 65
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
export default Veg_food;