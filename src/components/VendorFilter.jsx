import React from "react";
import {Link} from "react-router-dom";

function VendorFilter({ data }) {
    const { id, name, image } = data;
    return (
        <Link to={`/vendor/${id}`} className="filter_vendor">
            <img src={image} alt="" />
            <p>{name}</p>
        </Link>
    );
}

export default VendorFilter;