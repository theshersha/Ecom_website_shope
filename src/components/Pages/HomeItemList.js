import HomeItem from "./HomePageItem";
import "./HomeItemList.css";
import Card from "../UI/Button/Card";

const homepageitems = [
  {
    id: "1",
    date: "JUL 17",
    loc: "TORRENTO",
    dec: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: "2",
    date: "AUG 18",
    loc: "DETROIT, MI",
    dec: "BUDWEISER STAGE",
  },
  {
    id: "3",
    date: "DEC 20",
    loc: "BRISTOW, VA",
    dec: "JIGGY LUBE LIVE",
  },
];

const HomeItemList = () => {
  return (
    <setion className="homesection">
      <Card>
        <ul className="homeitems">
          {homepageitems.map((item) => (
            <HomeItem
              key={Math.random()}
              date={item.date}
              loc={item.loc}
              dec={item.dec}
            />
          ))}
        </ul>
      </Card>
    </setion>
  );
};

export default HomeItemList;
