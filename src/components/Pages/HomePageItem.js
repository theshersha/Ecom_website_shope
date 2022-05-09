import "./HomePageItem.css";
import Button from "../UI/Button/Button";
const HomeItem = (props) => {
  return (
    <div>
    
      <li className="item">
        <div>{props.date}</div>
        <div>{props.loc}</div>
        <div>{props.dec}</div>
        <Button>Buy Ticket</Button>
      </li>
      <hr></hr>
    </div>
  );
};

export default HomeItem;
