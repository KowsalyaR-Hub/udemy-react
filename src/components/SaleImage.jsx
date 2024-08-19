import Saleimg from '../assets/images/sale_image.jpg';

function SaleImage() {
    return (
        <div>
            <div class="sale-image">
                <img src={Saleimg} alt="Sale_Image"></img>
                <div class="sale-image__offer">
                    <h2>Udemy Flash Sale! 24 hours to save.</h2>
                    <p>Get a top Courses for just 399. Just one day to save but a lifetime to learn</p>
                </div>
            </div>
        </div>
    )
}

export default SaleImage;