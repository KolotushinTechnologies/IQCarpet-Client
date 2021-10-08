import "./HomePage.css";

import { Fragment } from "react"
import HomePageIntroBlock from "./homePageIntroBlock/HomePageIntroBlock"
import HowItWorks from "../howItWorks/HowItWorks";
import HomePageWhyUsBlock from "./homePageWhyUsBlock/HomePageWhyUsBlock";

function HomePage(){
    return (
        <Fragment>
            <HomePageIntroBlock />
            <HowItWorks />
            <HomePageWhyUsBlock />
        </Fragment>
    )
}

export default HomePage