import React from "react";
import {Link, useParams, useSearchParams} from "react-router-dom";

import Lot from "../components/Lot";

import ava from "../assets/img/ava.png";
import map from "../assets/img/map.svg";
import phone from "../assets/img/phone.svg";
import web from "../assets/img/web.svg";
import lot from "../assets/img/lot.png";

function Vendor() {
    const { id } = useParams();
    console.log(id)
    const lotInfo = {
        image: lot,
        name: "Шляпы Ивана",
        timeIn: "2023-05-12T11:40:10.048321",
        bidIn: "73Битка"
    }
    const info = {
        id: 1,
        image: ava,
        name: "Тони старк",
        address: "ул. Строителей, д.10, 5 этаж",
        phone: "89952455313",
        site: "tony-top.com"
    }
    return(
        <section>
            <div className="cont vendor">
                <div className="vendor_block">
                    <div className="vendor_left">
                        <img className="vendor_ava" src={info.image} alt="" />
                            <p className="vendor_title">{info.name}</p>
                            <div className="vendor_info">
                                <div className="vendor_string">
                                    <img src={map} alt="" />
                                        <p>{info.address}</p>
                                </div>
                                <div className="vendor_string">
                                    <img src={phone} alt="" />
                                        <Link to={`tel:${info.phone}`}>{info.phone}</Link>
                                </div>
                                <div className="vendor_string">
                                    <img src={web} alt="" />
                                        <Link to={info.site}>{info.site}</Link>
                                </div>
                            </div>
                    </div>
                    <div className="vendor_products">
                        <h2>Продукты продавца</h2>
                        <div className="vendor_products_grid">
                            <Lot data={lotInfo}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Vendor;