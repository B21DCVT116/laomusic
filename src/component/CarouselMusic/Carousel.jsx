import React, { useRef } from "react";
import { Carousel, Card, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "antd/dist/reset.css"; // hoặc 'antd/dist/antd.css' tùy phiên bản
import CardMusic from "../CardMusic/CardMusic";
import "./Carousel.scss";
import CardList from "../CardList/CardList";

const { Title } = Typography;

//fetch api
const dataCardMusic = [
  {
    title: "Hãy Trao Cho Anh",
    subtitle: "Sơn Tùng M-TP",
    img: "../../../public/image/default-music.png",
  },
  {
    title: "klkk",
    img: "../../../public/image/default-music.png",
  },
  {
    title: "Tặng Rồi Không Nhận",
    img: "../../../public/image/default-music.png",
  },
  {
    title: "...và 1 bài nữa",
    img: "../../../public/image/default-music.png",
  },
  {
    title: "...và 1 bài nữa",
    img: "../../../public/image/default-music.png",
  },
  {
    title: "...và 1 bài nữa",
    img: "../../../public/image/default-music.png",
  },
  {
    title: "...và 1 bài nữa",
    img: "../../../public/image/default-music.png",
  },
  {
    title: "...và 1 bài nữa",
    img: "../../../public/image/default-music.png",
  },
  {
    title: "...và 1 bài nữa",
    img: "../../../public/image/default-music.png",
  },
];

//fetch api
const dataCardList = [
  {
    img: "../../../public/image/auth-background.png",
    alt: "Video thumbnail",
    title: "ເພງເກົ່າມ່ວນໆໄດ້ໃຈຫຼາຍໆ",
    channel: "NGA SENGAMPHONE",
    duration: "5:37",
  },
  {
    img: "../../../public/image/auth-background.png",
    alt: "Video thumbnail",
    title: "ເພງເກົ່າມ່ວນໆໄດ້ໃຈຫຼາຍໆ",
    channel: "NGA SENGAMPHONE",
    duration: "5:37",
  },
  {
    img: "../../../public/image/auth-background.png",
    alt: "Video thumbnail",
    title: "ເພງເກົ່າມ່ວນໆໄດ້ໃຈຫຼາຍໆ",
    channel: "NGA SENGAMPHONE",
    duration: "5:37",
  },
  {
    img: "../../../public/image/auth-background.png",
    alt: "Video thumbnail",
    title: "ເພງເກົ່າມ່ວນໆໄດ້ໃຈຫຼາຍໆ",
    channel: "NGA SENGAMPHONE",
    duration: "5:37",
  },
  {
    img: "../../../public/image/auth-background.png",
    alt: "Video thumbnail",
    title: "ເພງເກົ່າມ່ວນໆໄດ້ໃຈຫຼາຍໆ",
    channel: "NGA SENGAMPHONE",
    duration: "5:37",
  },
  {
    img: "../../../public/image/auth-background.png",
    alt: "Video thumbnail",
    title: "ເພງເກົ່າມ່ວນໆໄດ້ໃຈຫຼາຍໆ",
    channel: "NGA SENGAMPHONE",
    duration: "5:37",
  },
  {
    img: "../../../public/image/auth-background.png",
    alt: "Video thumbnail",
    title: "ເພງເກົ່າມ່ວນໆໄດ້ໃຈຫຼາຍໆ",
    channel: "NGA SENGAMPHONE",
    duration: "5:37",
  },
  {
    img: "../../../public/image/auth-background.png",
    alt: "Video thumbnail",
    title: "ເພງເກົ່າມ່ວນໆໄດ້ໃຈຫຼາຍໆ",
    channel: "NGA SENGAMPHONE",
    duration: "5:37",
  },
  {
    img: "../../../public/image/auth-background.png",
    alt: "Video thumbnail",
    title: "ເພງເກົ່າມ່ວນໆໄດ້ໃຈຫຼາຍໆ",
    channel: "NGA SENGAMPHONE",
    duration: "5:37",
  },
];

const CarouselMusic = ({ item }) => {
  const carouselRef = useRef(null);
  return (
    <div style={{ padding: "24px", background: "transparent" }}>
      <div className="carousel__title">
        <Title style={{ color: "#fff", marginBottom: 16, fontSize: 22 }}>
          {item.title}
        </Title>
        <a href="/">Xem thêm &gt;</a>
      </div>
      <div className="carousel__wrap">
        <button
          className="carousel__wrap__button left"
          onClick={() => carouselRef.current.prev()}
        >
          <LeftOutlined style={{ fontSize: 24, color: "#fff" }} />
        </button>
        <Carousel
          dots={false}
          slidesToShow={6.5}
          slidesToScroll={1}
          infinite={false}
          ref={carouselRef}
        >
          {(item.type === "music" || item.type === "list") &&
            dataCardMusic.map((item, idx) => (
              <CardMusic item={item} key={idx} />
            ))}

          {item.type === "youtube" &&
            dataCardList.map((item, idx) => <CardList data={item} key={idx} />)}
        </Carousel>
        <button
          className="carousel__wrap__button right"
          onClick={() => carouselRef.current.next()}
        >
          <RightOutlined style={{ fontSize: 24, color: "#fff" }} />
        </button>
      </div>
    </div>
  );
};

export default CarouselMusic;
