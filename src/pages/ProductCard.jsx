import React, {useEffect, useState} from "react";

import lot from "../assets/img/lot.png";
import ava from "../assets/img/ava.png";
import map from "../assets/img/map.svg";
import phone from "../assets/img/phone.svg";

import {prepareTime, startTimer} from "../timer";
import {Link} from "react-router-dom";
import web from "../assets/img/web.svg";
import Lot from "../components/Lot";
import VendorFilter from "../components/VendorFilter";
function ProductCard() {
    const data1 = {
        id: 1,
        image: lot,
        name: "Шляпы Ивана",
        timeIn: "2023-05-12T11:40:10.048321",
        bidIn: "73Битка"
    }
    const prod = {
        id: 1,
        image: lot,
        imagesCarousel: [lot, lot, lot, lot],
        description: "Отец Айвена-шляпный мастер в Хэтвилле, где все носили шляпы, которые должны были показать, какая у них карьера. Иван приближался к своему собственному Шляпному Дню, когда он получит свою собственную шляпу.",
        bid: "91Битка",
        time: "2023-05-12T11:40:10.048321",
        buyNow: "200Битков",
        category: 1,
        history: [
            {
                time: "2023-04-11T11:40:10.048321",
                bid: "91",
                user: "Иван Царевич",
            },
            {
                time: "2023-04-01T11:40:10.048321",
                bid: "5",
                user: "Тони Старк",
            }
        ],
        vendor: {
            image: ava,
            name: "Тони Старк",
            address: "ул. Строителей, д.10, 5 этаж",
            phone: "89952455313",
            site: "tony-top.com",
        }
    }
    let timer
    const [time, setTime] = useState({})
    useEffect(() => {
        if (prod.time !== undefined) {
            startTimer(setTime, timer, prod.time)
        }
    }, [])
    const [tab, setTab] = useState(0)
    
    function tabHandler(e) {
        setTab(e)
    }
    return (
        <section>
            <div className="cont">
                <h1>Шляпы Ивана</h1>
                <div className="line"></div>
                <div className="lot_first">
                    <div className="lot_galery">
                        <img className="lot_main" src={prod.image} alt="" />
                            <div className="lot_carusel">
                                {prod.imagesCarousel && prod.imagesCarousel.map((image, index) =>
                                    <img key={index} src={image} alt="" />
                                )}
                            </div>
                    </div>
                    <div className="lot_info">
                        <p className="lot_desc">{prod.description}</p>
                        <p className="lot_bid">{prod.bid !== undefined ? `Текущая ставка: ${prod.bid}` : "Прошедший аукцион"}</p>
                        <div className="lot_time">
                            <p className="lot_time_head">Осталось времени:</p>
                            <div className="lot_time_sectors">
                                {Object.keys(time).map((keyName, i) => (
                                    <div key={i + keyName} className="lot_time_sector">
                                        <p className="lot_time_num">{time[keyName]}</p>
                                        <p className="lot_time_type">{keyName}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lot_form">
                            <label htmlFor="bid">
                                <input type="number" name="bid" id="bid" />
                                    <button onClick={(s) => {}}>Ставка</button>
                            </label>
                            <button className="lot_buy">Купить сейчас за {prod.buyNow}</button>
                        </div>
                        <p className="lot_category">
                            Категория: <Link to={`/auctions`} state={{ category: prod.category }}>Шляпское искусство</Link>
                        </p>
                    </div>
                </div>
                <div className="lot_second">
                    <ul className="lot_tabs">
                        <li className={tab === 0 && "active"} onClick={()=>{tabHandler(0)}}>Описание</li>
                        <li className={tab === 1 && "active"} onClick={()=>{tabHandler(1)}}>История аукциона</li>
                        <li className={tab === 2 && "active"} onClick={()=>{tabHandler(2)}}>О продавце</li>
                    </ul>
                    <p className={`lot_description ${tab === 0 ? "active" : ""}`}>{prod.description}</p>
                    <div className={`lot_history ${tab === 1 ? "active" : ""}`}>
                        <div className="row_title">
                            <div className="col">Время</div>
                            <div className="col">Ставка</div>
                            <div className="col">Пользователь</div>
                        </div>
                        {prod.history && prod.history.map((obj, index) =>
                            (
                                <div key={index} className="row">
                                    <div className="col">{new Date(prepareTime(obj.time)).toString()}</div>
                                    <div className="col">{obj.bid}</div>
                                    <div className="col">{obj.user}</div>
                                </div>
                            )
                        )}
                    </div>
                    <div className={`lot_vendor ${tab === 2 ? "active" : ""}`}>
                        <div className="card_vendor">
                            <img src={prod.vendor.image} alt="" />
                            <p>{prod.vendor.name}</p>
                        </div>
                        <div className="vendor_string">
                            <img src={map} alt="" />
                            <p>{prod.vendor.address}</p>
                        </div>
                        <div className="vendor_string">
                            <img src={phone} alt="" />
                            <Link to={`tel:${prod.vendor.phone}`}>{prod.vendor.phone}</Link>
                        </div>
                        <div className="vendor_string">
                            <img src={web} alt="" />
                            <Link to={prod.vendor.site}>{prod.vendor.site}</Link>
                        </div>
                    </div>
                </div>
                <div className="lot_products">
                    <h2>Продукты продавца</h2>
                    <div className="grid_auctions">
                        <Lot data={data1} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductCard;