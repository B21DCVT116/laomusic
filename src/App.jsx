import LayoutMusic from './component/Layout'
import SiderMusic from './component/Layout/Sider/Sider'

import {
  HomeOutlined,
  FireOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";

const menuItems = [
  { key: "1", icon: <HomeOutlined />, label: "Trang chủ" },
  { key: "2", icon: <FireOutlined />, label: "Thịnh hành" },
  { key: "3", icon: <FolderOpenOutlined />, label: "Thư viện" },
];

function App() {
  return (
    <>
      <LayoutMusic/>
    </>
  )
}

export default App
