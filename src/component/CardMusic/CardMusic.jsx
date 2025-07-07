import "./CardMusic.scss";
const CardMusic = ({ item }) => {
  return (
    <>
      <div className="card">
        <div className="card__image">
          <div className="card__image__wrap">
            <img src={item.img} alt={item.title} />
          </div>
        </div>
      </div>
    </>
  );
};
export default CardMusic;
