import Kitten from "./Kittens";
import kittensData from "./kittensData";
import Footer from "./Footer";

const kittenCard = kittensData.map((item) => {
  return (
    <Kitten
      img={item.img}
      email={item.email}
      phone={item.phone}
      name={item.name}
    />
  );
});

function Main() {
  return (
    <div className="contacts">
      {kittenCard}
      <Footer />
    </div>
  );
}
export default Main;
