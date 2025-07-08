import CardList from "../../component/CardList/CardList";
import CarouselMusic from "../../component/CarouselMusic/Carousel";

const Home = () => {

  const carouselItems = [
    { key: "1", title: "Nghe gì hôm nay", type: "music" },
    { key: "2", title: "Nhạc TOP 100", type: "list" },
    { key: "4", title: "ເພງແທຣນ / ເພງຮາວສ໌ / ເພງເທັກໂນ", type: "list"},
    { key: "5", title: "ເພງເດັກນ້ອຍ", type: "list" },
    { key: "6", title: "Youtube Trending", type: "youtube" },
  ];

  return (
    <div className="Home">
      <div className="Home__content">
        {carouselItems.map((item, index) => (
              <CarouselMusic item={item} key={index} />
            ))}
      </div>
    </div>
  );
}
export default Home;