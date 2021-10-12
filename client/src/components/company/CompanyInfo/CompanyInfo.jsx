import React, { useState } from "react";

import "./CompanyInfo.css";

import ButtonBackArrow from "../../../img/buttonBackArrow.png";

const CompanyInfo = () => {
    const [mobileInfoHidden, setMobileInfoHidden] = useState(true);

    return (
        <div className="companyProfile">
            <div className="companyMainInfoDiv">
                <img className="companyImg" src="images/sellerProfileImage.png" />
                <div className="companyInfoBlock">
                    <h1 className="companyName">Carpet ink.</h1>
                    <div className="companyInfoDiv companyInfoMobileHideDiv companyInfoMobileHideDiv1" active={!mobileInfoHidden + ""}>
                        <div className="companyCountryMobileHideDiv">
                            <span className="companyInfoHeader">Country</span>
                            <span className="companyInfoContent">India</span>
                        </div>
                    </div>
                    <div>
                        <div className="companyInfoDiv">
                            <span className="companyInfoHeader">About us</span>
                            <span className="companyInfoContent">The best carpet from India! Choose your favorite carpet and we send you  in 14 days! Fast? beautiful and fluffy carpets!</span>
                        </div>
                        <span className="companyMoreDetailsText" active={!mobileInfoHidden + ""} onClick={() => setMobileInfoHidden(!mobileInfoHidden)} >More details<img src={ButtonBackArrow} /></span> {/* TODO: Replace to compponent */}
                    </div>
                </div>
            </div>
            <div className="companyLinksBlock">
                <div className="companyInfoMobileHideDiv companyInfoMobileHideDiv2" active={!mobileInfoHidden + ""}>
                    <span className="companyLinksHeader">Contacts</span>
                    <div className="companyLinkDiv">
                        <div className="companyLinkImg contactsLinkImage1_20" />
                        <div className="companyLinkImg contactLinkImage2 companyLinkPhone" />
                        <span className="contactLinkText">+7 (996) 053 81 10</span>
                    </div>
                    <div className="companyLinkDiv">
                        <div className="companyLinkImg contactsLinkImage4_20" />
                        <div className="companyLinkImg contactLinkImage2 companyLinkPhone" />
                        <span className="contactLinkText">+7 (996) 053 81 10</span>
                    </div>
                    <div className="companyLinkDiv">
                        <div className="companyLinkImg contactsLinkImage3_20" />
                        <span className="companyLinkImg contactLinkImage2">M</span>
                        <span className="contactLinkText">http://www.iselectrics.com</span>
                    </div>
                </div>
                <div className="companyContactBtns" active={!mobileInfoHidden + ""}>
                    <button className="companyContactBtn1">Send Message</button>
                    <button className="companyContactBtn2">Make an Order</button>
                </div>
            </div>
        </div>
    )
}

export default CompanyInfo;