import React, {useEffect, useState} from "react";

import lot from "../assets/img/lot.png";
import ava from "../assets/img/ava.png";
import map from "../assets/img/map.svg";
import phone from "../assets/img/phone.svg";

import {prepareTime, startTimer} from "../timer";
import {Link, useParams} from "react-router-dom";
import web from "../assets/img/web.svg";
import Lot from "../components/Lot";
import axios from "axios";
import {API_URL} from "../timer";
function ProductCard() {
    const { id } = useParams();
    const [auction, setAuction] = useState({})
    const [products, setProducts] = useState([])

    const [bet, setBet] = useState(0)
    const [minBet, setMinBet] = useState(0)
    function checkInput(e) {
        e.target.value < minBet ? setBet(minBet) : setBet(e.target.value)
    }

    useEffect(() => {
        axios({
            method: 'get',
            url:
                API_URL + 'auction/' + id,
            headers: { 'Content-Type': 'application/json' },
        })
            .then(function (response) {
                let data = response.data
                if (Array.isArray(data.auction_bets)) {
                    data.auction_bets.sort()
                    data.auction_bets.reverse()
                }
                setMinBet(data.auction_bets.length > 0 ? data.auction_bets[0].bet_size : data.lot_min_bet)
                setAuction(data)
                axios({
                    method: 'get',
                    url:
                        API_URL + 'auctions/vendor/' + id,
                    headers: { 'Content-Type': 'application/json' },
                })
                    .then(function (response) {
                        setProducts(response.data)
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        // обработка ошибок
                        console.log(error);
                    });
                console.log(response.data);
            })
            .catch(function (error) {
                // обработка ошибок
                console.log(error);
            });
    }, [])
    const data1 = {
        id: 1,
        image: lot,
        name: "Шляпы Ивана",
        timeIn: "2023-05-12T11:40:10.048321",
        bidIn: "73Битка"
    }
    const prod = {
        id: 1,
        lot_name: "Шляпы Ивана",
        lot_photo_path: lot,
        lot_description: "Отец Айвена-шляпный мастер в Хэтвилле, где все носили шляпы, которые должны были показать, какая у них карьера. Иван приближался к своему собственному Шляпному Дню, когда он получит свою собственную шляпу.",
        auction_bets: [
            {
                bet_datetime: "2023-04-05T20:02:51.780748",
                bet_size: 100,
                bet_user: null,
                id: 1
            },
            {
                bet_datetime: "2023-04-05T20:02:51.780848",
                bet_size: 200,
                bet_user: null,
                id: 2
            }
        ],
        lot_min_bet: 11.5,
        lot_hot_price: 2000,
        bid: "91Битка",
        lot_end_datetime: "2023-05-12T11:40:10.048321",
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
                {Object.keys(auction).length > 0 &&
                    <>
                        <h1>{auction.lot_name}</h1>
                        <div className="line"></div>
                        <div className="lot_first">
                            <div className="lot_galery">
                                <img className="lot_main" src={auction.lot_photo_path} alt="" />
                                {/*<div className="lot_carusel">*/}
                                {/*    {prod.imagesCarousel && prod.imagesCarousel.map((image, index) =>*/}
                                {/*        <img key={index} src={image} alt="" />*/}
                                {/*    )}*/}
                                {/*</div>*/}
                            </div>
                            <div className="lot_info">
                                <p className="lot_desc">{auction.lot_description}</p>
                                <p className="lot_bid">{auction.auction_bets.length > 0 ? `Текущая ставка: ${auction.auction_bets[0].bet_size} ₽` : auction.lot_min_bet !== null ? `Текущая ставка: ${auction.lot_min_bet} ₽` : "Прошедший аукцион"}</p>
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
                                        <input value={bet} onChange={(e) => checkInput(e)} min={auction.auction_bets.length > 0 ? auction.auction_bets[0].bet_size : auction.lot_min_bet} type="number" name="bid" id="bid" />
                                        <button onClick={() => {}}>Ставка</button>
                                    </label>
                                    <button className="lot_buy">Купить сейчас за {auction.lot_hot_price} ₽</button>
                                </div>
                                <p className="lot_category">
                                    Категория: <Link to={`/auctions/category/${auction.category.id}`}>{auction.category.name}</Link>
                                </p>
                            </div>
                        </div>
                        <div className="lot_second">
                            <ul className="lot_tabs">
                                <li className={tab === 0 ? "active" : undefined} onClick={()=>{tabHandler(0)}}>Описание</li>
                                <li className={tab === 1 ? "active" : undefined} onClick={()=>{tabHandler(1)}}>История аукциона</li>
                                <li className={tab === 2 ? "active" : undefined} onClick={()=>{tabHandler(2)}}>О продавце</li>
                            </ul>
                            {tab === 0 && <p className="lot_description active">{auction.lot_description}</p>}
                            {tab === 1 && <div className="lot_history active">
                                <div className="row_title">
                                    <div className="col">Время</div>
                                    <div className="col">Ставка</div>
                                    <div className="col">Пользователь</div>
                                </div>
                                {auction.auction_bets && auction.auction_bets.map((obj, index) =>
                                    (
                                        <div key={index} className="row">
                                            <div className="col">{new Date(prepareTime(obj.bet_datetime)).toString()}</div>
                                            <div className="col">{obj.bet_size}</div>
                                            <div className="col">{obj.bet_user}</div>
                                        </div>
                                    )
                                )}
                            </div>}
                            {tab === 2 && <div className="lot_vendor active">
                                <div className="card_vendor">
                                    <img src={auction.lot_vendor.vendor_photo_path} alt="" />
                                    <p>{auction.lot_vendor.vendor_name}</p>
                                </div>
                                <div className="vendor_string">
                                    <img src={map} alt="" />
                                    <p>{auction.lot_vendor.store_address}</p>
                                </div>
                                <div className="vendor_string">
                                    <img src={phone} alt="" />
                                    <Link to={`tel:${auction.lot_vendor.store_phone_number}`}>{auction.lot_vendor.store_phone_number}</Link>
                                </div>
                                <div className="vendor_string">
                                    <img src={web} alt="" />
                                    <Link to={auction.lot_vendor.store_site}>{auction.lot_vendor.store_site}</Link>
                                </div>
                            </div>}

                        </div>
                        <div className="lot_products">
                            <h2>Продукты продавца</h2>
                            <div className="grid_auctions">
                                <Lot data={data1} />
                            </div>
                        </div>
                    </>
                }

            </div>
        </section>
    );
}

export default ProductCard;