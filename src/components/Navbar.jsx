
function Navbar() {
    return (
        <div>
            <div class="navbar">
                <div class="navbar__s1">
                    <h1 class="navbar__s1__title">Udemy</h1>
                </div>
                <div class="navbar__s2">
                    {/* Font Awesome Icon Link for Search Icon */}
                    <i class="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i>
                    <input placeholder="Search for anything here. Tech, Business, Art..."></input>
                </div>
                <div class="navbar__s3">
                    <p>Courses</p>
                    <div class="mylearning">
                        <p>My Learning</p>
                        <div class="mylearning__popup">
                            <p>You did not purchase anything yet</p>
                        </div>
                    </div>
                    {/* Font Awesome Icon Link for Cart, Bell and User Icons */}
                    <i class="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i>
                    <i class="fa-solid fa-bell" style={{color: "#000000"}}></i>
                    <i class="fa-solid fa-user" style={{color: "#000000"}}></i>
                </div>
                <div class="navbar__s4">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar;