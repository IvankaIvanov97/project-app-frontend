import React from "react";
import Lot from "../components/Lot";
import Category from "../components/Category";

import lot from "../assets/img/lot.png";
import category_back from "../assets/img/categoty_back.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Main() {
    const category = {
        id: 1,
        image: category_back,
        name: "Шляпное искусство",
        countAuctions: 3
    }
    const data1 = {
        image: lot,
        name: "Шляпы Ивана",
        timeIn: "2023-05-12T11:40:10.048321",
        bidIn: "73Битка"
    }
    const data2 = {
        image: lot,
        name: "Шляпы Ивана",
    }
    return(
        <>
            <section>
                <div className="cont">
                    <h2>Актуальные аукционы</h2>
                    <div className="line"></div>
                    <div className="grid_auctions">
                        <Lot data={data1} />
                        <Lot data={data1} />
                    </div>
                </div>
            </section>
            <section>
                <div className="cont categories">
                    <Category data={category} />
                </div>
            </section>
            <section>
                <div className="cont">
                    <h2>Последние аукционы</h2>
                    <div className="line"></div>
                    <div className="grid_auctions">
                        <Lot data={data2} />
                        <Lot data={data2} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Main;