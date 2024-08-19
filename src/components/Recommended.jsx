import c1 from '../assets/images/c1.jpg';
import c2 from '../assets/images/c2.jpg';
import c3 from '../assets/images/c3.jpg';
import c4 from '../assets/images/c4.jpg';

function Recommended() {
    return (
        <div>
            <div class="recommended">
                <h1 class="recommended__title">Recommended for you</h1>
                <p>Pick the best fit</p>
                <div class="recommended__container">
                    <div class="course__card">
                        <img src={c1} alt="recommended_image"></img>
                        <h3>2024 Python Master class</h3>
                        <p>Colt Steele</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>449 <del>1999</del></p>
                    </div>
                    <div class="course__card">
                        <img src={c2} alt="recommended_image"></img>
                        <h3>Web Development Bootcamp 2024</h3>
                        <p>Angela Yu</p>
                        <p>4.2 ⭐⭐⭐⭐</p>
                        <p>339 <del>1599</del></p>
                    </div>
                    <div class="course__card">
                        <img src={c3} alt="recommended_image"></img>
                        <h3>Master UI/UX Designing with Figma</h3>
                        <p>Stephen John</p>
                        <p>3.2 ⭐⭐⭐</p>
                        <p>549 <del>3500</del></p>
                    </div>
                    <div class="course__card">
                        <img src={c4} alt="recommended_image"></img>
                        <h3>Basic to Advanaced Python Programming</h3>
                        <p>Zarah</p>
                        <p>3.7 ⭐⭐⭐</p>
                        <p>3999 <del>7999</del></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommended;