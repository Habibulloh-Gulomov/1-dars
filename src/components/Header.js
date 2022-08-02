import "./header.css"
import Moon from "../img/moon.png"

let Header = () => {
  return(
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <p className="title">Where in the world?</p>
          <button className="button"><img className="imgmoon" src={Moon}  />Dark Mode</button>
        </div>
      </div>
    </header>
  )
}

export default Header