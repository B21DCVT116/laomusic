import "./CardList.scss";
import { EllipsisOutlined, HeartOutlined } from "@ant-design/icons";

const CardList = ({ data }) => {
  return (
    <div className="video-card">

        <div className="video-card__thumbnail">
          <HeartOutlined style={{ fontSize : '24px'}} className="video-card__thumbnail__icon"/>
          <img src={data.img} alt={data.alt} />
          <span className="video-card__duration">{data.duration}</span>
        </div>
        <div className="video-card__footer">
          <div className="video-card__footer__avatar">
            <img src={data.img} alt={data.alt} />
          </div>
          <div className="video-card__footer__info">
            <p className="video-card__footer__info__title">{data.title}</p>
            <p className="video-card__footer__info__channel">{data.channel}</p>
          </div>
          <EllipsisOutlined rotate={90} />
        </div>
    </div>
  );
};

export default CardList;
