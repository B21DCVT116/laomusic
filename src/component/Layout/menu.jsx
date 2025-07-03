import { Menu } from "antd";

const Menutest = (props) => {
  const item = props.items;
  const handleClickMenu = () =>{
    
  }
  return (
    <>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{
          backgroundColor: "transparent",
          overflow: "hidden",
          padding: "12px 0 32px",
          borderBottom: "1px solid #FFFFFF12",
          
        }}
        items = {item}
        onClick={handleClickMenu}
      />
    </>
  );
};
export default Menutest;
