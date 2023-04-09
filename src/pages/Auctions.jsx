import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Lot from "../components/Lot";

import lot from "../assets/img/lot.png";
import ava from "../assets/img/ava.png";
import VendorFilter from "../components/VendorFilter";
import AuctionFilter from "../components/AuctionFilter";
import {Link, useParams, useSearchParams} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../timer";

function Auctions() {
    const [queryParameters] = useSearchParams()
    const [auctions, setAuctions] = useState([])
    const [vendors, setVendors] = useState([])
    const [newAuctions, setNewAuctions] = useState([])
    const [categories, setCategories] = useState([])
    const categoryId = queryParameters.get("category")
    useEffect(() => {
        axios({
            method: 'get',
            url:
                API_URL + 'auctions/vendors',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(function (response) {
                setVendors(response.data)
            })
            .catch(function (error) {
                // обработка ошибок
                console.log(error);
            });

        axios({
            method: 'get',
            url:
                API_URL + 'auctions/status/OPEN',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(function (response) {
                setNewAuctions(response.data)
            })
            .catch(function (error) {
                // обработка ошибок
                console.log(error);
            });

        axios({
            method: 'get',
            url:
                API_URL + 'auctions/category',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(function (response) {
                setCategories(response.data)
            })
            .catch(function (error) {
                // обработка ошибок
                console.log(error);
            });

        if (categoryId !== null) {
            axios({
                method: 'get',
                url:
                    API_URL + 'auctions/category/' + categoryId,
                headers: { 'Content-Type': 'application/json' },
            })
                .then(function (response) {
                    setAuctions(response.data)
                })
                .catch(function (error) {
                    // обработка ошибок
                    console.log(error);
                });
        }
        else {
            axios({
                method: 'get',
                url:
                    API_URL + 'auctions',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(function (response) {
                    setAuctions(response.data)
                })
                .catch(function (error) {
                    // обработка ошибок
                    console.log(error);
                });
        }
    }, [queryParameters])
    const category_ = {
        id: 1,
        name: "Шляпское искусство"
    }
    const data1 = {
        image: lot,
        name: "Шляпы Ивана",
        timeIn: "2023-05-12T11:40:10.048321",
        bidIn: "73Битка"
    }
    const vendor_ = {
        id: 1,
        name: "Тони Старк",
        image: ava
    }
    const auction = {
        id: 1,
        lot_name: "Шляпа Ивана",
        image: lot,
        current_bet: "73"
    }
    return (
            <section>
                <div className="cont auctions">
                    <div className="filter">
                        <div className="filter_block">
                            <p className="filter_head">Фильтр по продавцам</p>
                            <VendorFilter data={vendor_} />
                            <VendorFilter data={vendor_} />
                        </div>
                        {newAuctions.length > 0 && <div className="filter_block">
                            <p className="filter_head">Новые аукционы</p>
                            <div className="filter_auctions">
                                {newAuctions.map((newAuction, i) =>
                                    <AuctionFilter key={i} data={newAuction} />
                                )}
                            </div>
                        </div>}
                        <div className="filter_block">
                            <p className="filter_head">Категории аукционов</p>
                            <div className="filter_categories">
                                {categories.map((category, i) =>
                                    <Link key={i} to={`/auctions?category=${category.id}`} >{category.name}</Link>
                                )}
                            </div>
                        </div>

                    </div>
                    <div className="shop">
                        <div className="shop_sort">
                            <p>Показано: {auctions.length}</p>
                            <div className="sort">По убыванию</div>
                        </div>
                        <div className="shop_grid">
                            {auctions.map((auction, i) =>
                                <Lot key={i} data={auction}/>
                            )}
                        </div>
                    </div>
                </div>
            </section>
    );
}
export default Auctions;