import { useState } from "react"
import "./Sider.scss"

const Sider = ({items}) =>{
  const [selectKey,setSelectKey] = useState("1")
  const handleClick = (key) =>{
    setSelectKey(key);

  }

  return (
    <>
    <div className="Sider">
      <div className="Sider__logo">
        <img src="../../../public/image/logo.png" alt="LaoMusic" />
      </div>
      <div className="Sider__menu">
        <hr/>
        <ul className="Sider__menu__ul">
          {items.map(items => (
            <li key={items.key} className={`Sider__menu__ul__li + ${selectKey===items.key ? "active" : ""}`} onClick={()=>handleClick(items.key)}>
              <span className="Sider__menu__ul__li__icon">{items.icon}</span>
              <p className="Sider__menu__ul__li__label">
                {items.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )

}
export default Sider;