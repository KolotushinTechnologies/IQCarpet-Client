import { Fragment } from "react";
import { connect } from "react-redux";
import MobileHomePage from "./Mobile/homePage";
import PCHomePage from "./PC/homePage";

function HomePage({pageFormat}) {
    console.log(pageFormat);
    return (
        <Fragment>
            {pageFormat == "Mobile" ? <MobileHomePage/> : <PCHomePage/>}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    pageFormat: state.pageFormat
});

export default connect(mapStateToProps)(HomePage);