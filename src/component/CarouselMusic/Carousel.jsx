import React from 'react';
import { Carousel, Card, Typography } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; // hoặc 'antd/dist/antd.css' tùy phiên bản

const { Title } = Typography;

const data = [
  {
    title: 'Hãy Trao Cho Anh',
    img: 'link-to-image-1.jpg',
  },
  {
    title: 'klkk',
    img: 'link-to-image-2.jpg',
  },
  {
    title: 'Tặng Rồi Không Nhận',
    img: 'link-to-image-3.jpg',
  },
  {
    title: '...và 1 bài nữa',
    img: 'link-to-image-4.jpg',
  },
];

const Carouseltest = () => {
  return (
    <div style={{ padding: '24px', background: '#141414' }}>
      <Title level={3} style={{ color: '#fff', marginBottom: 16 }}>
        Nghe gì hôm nay
      </Title>

      <Carousel
        dots={false}
        slidesToShow={4}
        slidesToScroll={1}
        infinite={false}
        nextArrow={<RightOutlined style={{ fontSize: 24, color: '#fff' }} />}
        prevArrow={<LeftOutlined style={{ fontSize: 24, color: '#fff' }} />}
        responsive={[
          { breakpoint: 1200, settings: { slidesToShow: 3 } },
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ]}
      >
        {data.map((item, idx) => (
          <div key={idx} style={{ padding: '0 8px' }}>
            <Card
              hoverable
              cover={<img alt={item.title} src={item.img} style={{ borderRadius: 8 }} />}
              bodyStyle={{ padding: '8px', background: '#1f1f1f' }}
              style={{ background: '#1f1f1f' }}
            >
              <Card.Meta
                title={<span style={{ color: '#fff' }}>{item.title}</span>}
              />
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carouseltest;
