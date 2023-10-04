import "./FeedbackSection.css"
import SatisfactionIcon from "./c-icon-2.png"
import CompletedICon from "./c-icon-1.png"
import DesignREsourcesIcon from "./c-icon-3.png"

function FeedbackSection() {
  return (
    <div id="feedback__section__container">
        <h1 id="f__section_subheading">WE ARE HASHTAG WEB</h1>
        <h3 id="f__section__heading">We Deploy World-Class Creative Design Team On Demand. That Can
Design, Build, Ship And Scale Your Vision In The Most Efficient Way.</h3>
        <div id="f__section__cards__container">
            <div id="f__card__1">
                <img src={SatisfactionIcon} alt="Client Satisfaction Icon" id="f__card__icon"/>
                <div id="f__card_description">
                    <p id="f__card__num">100%</p>
                    <p id="f__card__desc">Client Satisfaction</p>
                </div>
                </div>

            <div id="f__card__1">
            <img src={CompletedICon} alt="Project Completed Icon" id="f__card__icon"/>
                <div id="f__card_description">
                    <p id="f__card__num">1200+</p>
                    <p id="f__card__desc">Competed Projects</p>
                </div>
            </div>

            <div id="f__card__1">
            <img src={DesignREsourcesIcon} alt="Design Resources Icon"  id="f__card__icon"/>
                <div id="f__card_description">
                    <p id="f__card__num">1800+</p>
                    <p id="f__card__desc">Design Resources</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeedbackSection