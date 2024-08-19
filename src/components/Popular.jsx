import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';
import p4 from '../assets/images/p4.jpg';
import p5 from '../assets/images/p5.jpg';
import p6 from '../assets/images/p6.jpg';
import p7 from '../assets/images/p7.jpg';
import p8 from '../assets/images/p8.jpg';

function Popular() {
    return (
        <div>
            <div class="popular">
                <h1 class="popular__title">Most Popular</h1>
                <p class="popular__subtitle">Pick the best fit</p>
                <div class="popular__container">
                    <div class="course__card">
                        <img src={p1} alt="popular_image"></img>
                        <h3>2024 Python Master class</h3>
                        <p>Colt Steele</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>449 <del>1999</del></p>
                    </div>
                    <div class="course__card">
                        <img src={p2} alt="popular_image"></img>
                        <h3>Web Development Bootcamp 2024</h3>
                        <p>Angela Yu</p>
                        <p>4.2 ⭐⭐⭐⭐</p>
                        <p>339 <del>1599</del></p>
                    </div>
                    <div class="course__card">
                        <img src={p3} alt="popular_image"></img>
                        <h3>Master UI/UX Designing with Figma</h3>
                        <p>Stephen John</p>
                        <p>3.2 ⭐⭐⭐</p>
                        <p>549 <del>3500</del></p>
                    </div>
                    <div class="course__card">
                        <img src={p4} alt="popular_image"></img>
                        <h3>Basic to Advanaced Python Programming</h3>
                        <p>Zarah</p>
                        <p>3.7 ⭐⭐⭐</p>
                        <p>3999 <del>7999</del></p>
                    </div>
                </div>
                <div class="popular__container">
                    <div class="course__card">
                        <img src={p5} alt="popular_image"></img>
                        <h3>Amazon Web Services Bootcamp</h3>
                        <p>Creative Online School</p>
                        <p>3.6 ⭐⭐⭐</p>
                        <p>10000 <del>15999</del></p>
                    </div>
                    <div class="course__card">
                        <img src={p6} alt="popular_image"></img>
                        <h3>Github Guide</h3>
                        <p>John</p>
                        <p>4.2 ⭐⭐⭐⭐</p>
                        <p>449 <del>3500</del></p>
                    </div>
                    <div class="course__card">
                        <img src={p7} alt="popular_image"></img>
                        <h3>Data Sceince, Data Analylist Bootcamp 2024</h3>
                        <p>Mathew</p>
                        <p>3.1 ⭐⭐⭐</p>
                        <p>4999 <del>9999</del></p>
                    </div>
                    <div class="course__card">
                        <img src={p8} alt="popular_image"></img>
                        <h3>Become a certified Developer: HTML, CSS and Javascript</h3>
                        <p>Angela Yu</p>
                        <p>4.2 ⭐⭐⭐⭐</p>
                        <p>339 <del>1599</del></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular;