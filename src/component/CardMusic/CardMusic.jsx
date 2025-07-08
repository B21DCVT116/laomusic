import "./CardMusic.scss";
const CardMusic = ({ item }) => {
  return (
    <>
      <div className="card">
        <div className="card__image">
          <div className="card__image__wrap">
            <img src={item.img} alt={item.alt} />
          </div>
          <div className="card__image__wrap__content">
            {item.title ? (
              <p className="card__image__wrap__content__title">{item.title}</p>
            ) : (
              <></>
            )}
            {item.subtitle ? (
              <p className="card__image__wrap__content__subtitle">
                {item.subtitle}
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default CardMusic;
