import CarouselMusic from "../CarouselMusic/Carousel";
import HeaderMusic from "./Header/Header";
import SiderMusic from "./Sider/Sider";
import "./index.scss";
import {
  HomeOutlined,
  FireOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";

const menuItems = [
  [
    { key: "1", icon: <HomeOutlined />, label: "Trang chủ" },
    { key: "2", icon: <FireOutlined />, label: "Bảng xếp hạng" },
    { key: "3", icon: <FolderOpenOutlined />, label: "Chủ đề và thể loại" },
  ],

  [{ key: "4", icon: <HomeOutlined />, label: "Thư viện" }],
];

const carouselItems = [
    { key: "1", title: "Nghe gì hôm nay" },
    { key: "2", title: "Nhạc TOP 100" },
    { key: "3", title: "ຜ່ອນຄາຍ" },
    { key: "4", title: "ເພງແທຣນ / ເພງຮາວສ໌ / ເພງເທັກໂນ"},
    { key: "5", title: "ເພງເດັກນ້ອຍ" },
    { key: "6", title: "Youtube Trending" },
  ];

const LayoutMusic = () => {
  return (
    <>
      <div className="Layout">
        <div className="Layout__body">
          <SiderMusic menuItem={menuItems} />
          <div className="Layout__body__content">
            <HeaderMusic />
            {carouselItems.map((item, index) => (
              <CarouselMusic item={item} key={index} />
            ))}
          </div>
        </div>
        <div className="Layout__footer"></div>
      </div>
    </>
  );
};
export default LayoutMusic;
