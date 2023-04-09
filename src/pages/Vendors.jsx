import React from "react";

import ava from "../assets/img/ava.png"
import {Link} from "react-router-dom";
function Vendors() {
    const vendor = {
        id: 1,
        name: "Тони Старк",
        image: ava
    }
    return (
        <section>
            <div className="cont">
                <p className="total_info">
                    Показано продавцов: 9
                </p>
                <div className="vendor_grid">
                    <div className="vendor_plate">
                        <p className="vendor_name">{vendor.name}</p>
                        <img src={vendor.image} alt=""/>
                            <Link to={`/vendor/${vendor.id}`}>О продавце</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Vendors;