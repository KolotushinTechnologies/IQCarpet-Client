import React from "react";
import { Link } from "react-router-dom";

import "./BackButton.css";

const BackButton = () => (
    <Link to="../" className="backButton"><button>Back</button></Link>
)

export default BackButton;