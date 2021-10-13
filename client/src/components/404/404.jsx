import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./404.css";

const Page404 = () => {
    return (
        <div className="block-404">
            <div className="image-404" />
            <div className="div-404">
                <h1 className="header-404">Something went wrong!</h1>
                <h2 className="subheader-404">YOU CAN LOOK FOR AN UNICAL CARPET</h2>
                <Link to="/" className="btn-404">Go to Main page</Link>
            </div>
        </div>
    )
}

export default Page404;