import Items from "./Item";
import Card from "../UI/Button/Card";
import './availableItems.css'
const DUMMY_ITEMS = [
  {
    id:'i1',
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id:'i2',
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id:'i3',
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id:'i4',
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableItems = () => {
    const itemList = DUMMY_ITEMS.map((item) => (
        <Items
          key={Math.random()}
          id={item.id}
          name={item.title}
          img={item.imageUrl}
          price={item.price}
        />
      ));
      
        
   
    
  
    return (
      <section className="items">
        <Card>
          <ul>{itemList}</ul>
        </Card>
      </section>
    );
  };
  
  export default AvailableItems;