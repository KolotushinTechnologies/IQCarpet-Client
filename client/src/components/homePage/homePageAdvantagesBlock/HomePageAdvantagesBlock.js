import advantageImage1 from "../../../img/advantageImage1.png";
import advantageImage2 from "../../../img/advantageImage2.png";
import advantageImage3 from "../../../img/advantageImage3.png";

import "./HomePageAdvantagesBlock.css";

function HomePageAdvantagesBlock() {
    return (
        <div className="advantagesBlock">
            <p class="advantagesHeader">ADVANTAGES</p>
            <div class="advantagesDiv">
                <div class="advantage">
                    <img class="advantageImage" src={advantageImage1}></img>
                    <p class="advantageText">New source of direct sales</p>
                </div>
                <div class="advantage">
                    <img class="advantageImage" src={advantageImage2}></img>
                    <p class="advantageText">Constant feedback from the client</p>
                </div>
                <div class="advantage">
                    <img class="advantageImage" src={advantageImage3}></img>
                    <p class="advantageText">Free of charge</p>
                </div>
            </div>
        </div>
    )
}

export default HomePageAdvantagesBlock;