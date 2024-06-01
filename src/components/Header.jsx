import "../App.css"
function Header(){
    return (
        <>
        <nav>
            <div className="logodiv">
                <img src="https://cdn-icons-png.flaticon.com/128/2276/2276931.png" alt="logo" className="logo" />
                <h1>GeekFoods</h1>
            </div>
            <div className="navigation">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Quote</a></li>
                    <li><a href="">Resturants</a></li>
                    <li><a href="">Foods</a></li>
                    <li><a href="">Contants</a></li>
                </ul>
            </div>
            <div className="buttondiv">
                <button>Get Started</button>
            </div>
        </nav>
        </>
    )
}
export default Header