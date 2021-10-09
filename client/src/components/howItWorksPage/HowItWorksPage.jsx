// Import Engine
import React, { Fragment } from "react";

import "./HowItWorksPage.css";

import HowItWorksElement from "../howItWorks/HowItWorks";
import BackButton from "../backButton/BackButton";
import { Link } from "react-router-dom";

const HowItWorksPage = () => (
    <Fragment>
        <BackButton />
        <HowItWorksElement />
        <div className="newOrderButton">
            <Link to="/newOrder">
                <button>Make an Order</button>
            </Link>
        </div>
    </Fragment>
)

export default HowItWorksPage;