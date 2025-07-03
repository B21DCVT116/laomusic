import { SearchOutlined, SettingOutlined } from "@ant-design/icons";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__search">
          <div className="header__search__input">
            <form action="">
              <button type="submit">
                <SearchOutlined />
              </button>
              <input type="text" placeholder="Bạn muốn nghe gì"/>
            </form>
          </div>
          <div className="header__search__suggest">
            <p>Tim</p>
          </div>
        </div>
        <div className="header__login">
          <SettingOutlined />
          <button>
            Đăng nhập
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
