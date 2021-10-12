import React, { Fragment } from "react";
import BackButton from "../backButton/BackButton";

import "./Company.css";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import CompanyWhatMake from "./CompanyWhatMake/CompanyWhatMake";
import CompanyCarpets from "./CompanyCarpets/CompanyCarpets";

const CompanyProfile = () => {
    return (
        <Fragment>
            <BackButton />
            <CompanyInfo />
            <CompanyWhatMake />
            <CompanyCarpets />
        </Fragment>
    )
}

export default CompanyProfile;