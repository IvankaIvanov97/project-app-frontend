import React from "react";
import {Link} from "react-router-dom";

function AuctionFilter({ data }) {
    const { id, name, image, bid } = data;
    return (
        <Link to={`/lot/${id}`} className="filter_auction">
            <img src={image} alt="" />
            <div className="filter_auction_info">
                <p className="filter_auction_info_name">{name}</p>
                <p className="filter_auction_info_status">Активен: <span>{bid}</span></p>
            </div>
        </Link>
    );
}

export default AuctionFilter;