import { Fragment } from "react";
import { Link } from "react-router-dom";
import BackButton from "../backButton/BackButton";
import ChatsButton from "../chatsButton/ChatsButton";
import Dateield from "../filter/DateField";
import Filter from "../filter/Filter";
import FilterField from "../filter/FilterField";
import OrderCard from "../orderCard/OrderCard";

import "./Orders.css";

const Orders = () => {
    return (
        <Fragment>
            <div className="contentHeaderButtonsDiv">
                <BackButton />
                <ChatsButton className="ordersChatsButton" />
            </div>
            <h1 className="ordersHeader">My orders (10)</h1>
            <div className="ordersContent">
                <Filter>
                    <Dateield />
                    <FilterField name="Status" params={["New", "Under consideration", "Offer has been send", "Closed"]} />
                </Filter>
                <div className="ordersList">
                    <OrderCard isSent name="Favorit-Capret" />
                    <OrderCard name="Favorit-Capret" />
                    <OrderCard name="Favorit-Capret" />
                    <OrderCard name="Favorit-Capret" />
                    <OrderCard isSent name="Favorit-Capret" />
                    <OrderCard name="Favorit-Capret" />
                    <OrderCard name="Favorit-Capret" />
                    <OrderCard name="Favorit-Capret" />
                </div>
            </div>
            <div class="pagesListDiv">
                <Link to="1">1</Link>
            </div>
        </Fragment>
    )
}

export default Orders;