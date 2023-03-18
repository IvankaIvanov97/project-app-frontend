import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Lot from "../components/Lot";

import lot from "../assets/img/lot.png";
import ava from "../assets/img/ava.png";
import VendorFilter from "../components/VendorFilter";
import AuctionFilter from "../components/AuctionFilter";
import {Link} from "react-router-dom";

function Auctions() {
    const category = {
        id: 1,
        name: "Шляпское искусство"
    }
    const data1 = {
        image: lot,
        name: "Шляпы Ивана",
        timeIn: "2023-05-12T11:40:10.048321",
        bidIn: "73Битка"
    }
    const vendor = {
        id: 1,
        name: "Тони Старк",
        image: ava
    }
    const auction = {
        id: 1,
        name: "Шляпа Ивана",
        image: lot,
        bid: "73Битка"
    }
    return (
            <section>
                <div className="cont auctions">
                    <div className="filter">
                        <div className="filter_block">
                            <p className="filter_head">Фильтр по продавцам</p>
                            <VendorFilter data={vendor} />
                            <VendorFilter data={vendor} />
                        </div>
                        <div className="filter_block">
                            <p className="filter_head">Новые аункционы</p>
                            <div className="filter_auctions">
                                <AuctionFilter data={auction} />
                                <AuctionFilter data={auction} />
                            </div>
                        </div>
                        <div className="filter_block">
                            <p className="filter_head">Категории аукционов</p>
                            <div className="filter_categories">
                                <Link to={`auctions/category=${category.name}`}>{category.name}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="shop">
                        <div className="shop_sort">
                            <p>Показано 9 из 33</p>
                            <div className="sort">По убыванию</div>
                        </div>
                        <div className="shop_grid">
                            <Lot data={data1} />
                            <Lot data={data1} />
                            <Lot data={data1} />
                        </div>
                    </div>
                </div>
            </section>
    );
}
export default Auctions;