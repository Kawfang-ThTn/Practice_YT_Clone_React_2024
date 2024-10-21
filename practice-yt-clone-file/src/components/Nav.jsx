import "./NavStyle.css";

function Nav() {
  return (
    <section id="nav">

        <div className="bar-logo">
            <div className="hamburger-bar">
                <img src="https://via.placeholder.com/24x24" alt="" />
            </div>
            <div className="logo">
            <img src="https://via.placeholder.com/97x20" alt="" />
            </div>
        </div>

        <div className="center">
            <div className="search-area">
                <div className="search-box">
                    <input type="text" className="search-input" />
                </div>
                <div className="search-btn">Q</div>
            </div>
            
            <div className="voice-btn"></div>
        </div>

        <div className="user-menu">
            <div className="noti-menu">x</div>
            <div className="noti-menu">x</div>
            <div className="noti-menu">x</div>
        </div>
    </section>
  )
}

export default Nav