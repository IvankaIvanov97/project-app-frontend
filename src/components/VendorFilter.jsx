import React from "react";
import {Link} from "react-router-dom";
import no_ava from "../assets/img/no_ava.jpg"

function VendorFilter({ data }) {
    const { id, name, image } = data;
    return (
        <Link to={`/vendor/${id}`} className="filter_vendor">
            {image !== null ?
                <img src={image} alt="" /> :
                <img src={no_ava} alt="" />
            }
            <p>{name}</p>
        </Link>
    );
}

export default VendorFilter;