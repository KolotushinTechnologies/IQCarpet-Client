import { Fragment } from "react";

const Dateield = () => {
    return (
        <Fragment>
            <span className="filterFieldHeader">Date</span>
            <div className="dateValuesDiv">
                <div className="dateFromDiv">
                    <span>From</span>
                    <input type="date" />
                </div>
                <div className="dateToDiv">
                    <span>To</span>
                    <input type="date" />
                </div>
                {/* TODO: Double slider */}
            </div>
        </Fragment>
    )
}

export default Dateield;