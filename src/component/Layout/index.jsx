import { Outlet } from "react-router-dom";
import CarouselMusic from "../CarouselMusic/Carousel";
import HeaderMusic from "../Header/Header";
import SiderMusic from "../Sider/Sider";
import "./index.scss";
import {
  HomeOutlined,
  FireOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";
import MusicDisc from "../MusicDisc/MusicDisc";

const menuItems = [
  [
    { key: "1", icon: <HomeOutlined />, label: "Trang chủ" },
    { key: "2", icon: <FireOutlined />, label: "Bảng xếp hạng" },
    { key: "3", icon: <FolderOpenOutlined />, label: "Chủ đề và thể loại" },
  ],

  [{ key: "4", icon: <HomeOutlined />, label: "Thư viện" }],
];

const LayoutMusic = () => {
  return (
    <>
      <div className="Layout">
        <div className="Layout__body">
          <SiderMusic menuItem={menuItems} />
          <div className="Layout__body__content">
            <HeaderMusic />
            <Outlet />
          </div>
        </div>
        <div className="Layout__footer">
          <MusicDisc/>
        </div>
      </div>
    </>
  );
};
export default LayoutMusic;
