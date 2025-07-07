import { SearchOutlined, SettingOutlined } from "@ant-design/icons";
import "./header.scss";
const HeaderMusic = () => {
  return (
    <>
      <div className="header">
        <div className="header__search">
          <div className="header__search__input">
            <form action="">
              <button type="submit">
                <SearchOutlined />
              </button>
              <input type="text" placeholder="Bạn muốn nghe gì" />
            </form>
          </div>
          <div className="header__search__suggest">
            <p>Tìm kiếm xu hướng</p>
          </div>
        </div>
        <div className="header__login">
          <div className="header__login__setting">
            <SettingOutlined
              style={{
                color: "#fff",
                fontSize: "24px",
              }}
            />
          </div>
          <div className="header__login__bar"></div>
          <button className="header__login__btn">Đăng nhập</button>
        </div>
      </div>
    </>
  );
};
export default HeaderMusic;
