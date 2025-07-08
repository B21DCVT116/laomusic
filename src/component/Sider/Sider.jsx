import { useState } from "react";
import "./Sider.scss";

const SiderMusic = ({ menuItem }) => {
  const [selectKey, setSelectKey] = useState("1");
  const handleClick = (key) => {
    setSelectKey(key);
  };

  return (
    <>
      <div className="Sider">
        <div className="Sider__logo">
          <img src="/image/logo.png" alt="LaoMusic" />
        </div>
        <div className="Sider__menu">
          {menuItem.map((item, index) => (
            <div key={index}>
              <hr />
              <ul className="Sider__menu__ul">
                {item.map((items ) => (
                  <li
                    key={items.key}
                    className={`Sider__menu__ul__li ${
                      selectKey === items.key ? "active" : ""
                    }`}
                    onClick={() => handleClick(items.key)}
                  >
                    <span className="Sider__menu__ul__li__icon">
                      {items.icon}
                    </span>
                    <p className="Sider__menu__ul__li__label">{items.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default SiderMusic;
