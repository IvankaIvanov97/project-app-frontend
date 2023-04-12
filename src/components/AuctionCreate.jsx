import React, {useState} from "react";
import axios from "axios";
import {API_URL, handler} from "../timer";
import krest from "../assets/img/krest.svg"

function AuctionCreate({ state }) {
    // "lot_name": "string",
    //     "lot_description": "string",
    //     "lot_photo_path": "string",
    //     "lot_min_bet": 0,
    //     "lot_hot_price": 0,
    //     "lot_status": "ON_MODERATE",
    //     "lot_begin_datetime": "2023-04-11T21:18:31.809Z",
    //     "lot_end_datetime": "2023-04-11T21:18:31.809Z"
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [bet, setBet] = useState("")
    const [hotPrice, setHotPrice] = useState("")
    const [beginTime, setBeginTime] = useState("")
    const [endTime, setEndTime] = useState("")
    const [photo, setPhoto] = useState("")

    function send() {
        console.log(beginTime)
        // axios({
        //     method: 'post',
        //     url: API_URL + "auction",
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     },
        //     data: {
        //     }
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    return (
        <div className="back">
            <div className="to_vendor_form">
                <img onClick={() => state(false)} src={krest} alt="cross"/>
                <div className="to_vendor_form_block">
                    <p className="head">Войти</p>
                    <input value={name} onChange={(e) => handler(e, setName)} type="text" name="lot_name" placeholder="Имя товара"/>
                    <textarea name="lot_description" placeholder="Описание" onChange={(e) => handler(e, setDesc)}>{desc}</textarea>
                    <input value={bet} onChange={(e) => handler(e, setBet)} type="text" name="lot_min_bet" placeholder="Ссылка на сайт"/>
                    <input value={hotPrice} onChange={(e) => handler(e, setHotPrice)} type="text" name="lot_hot_price" placeholder="Адрес магазина"/>
                    <input value={beginTime} onChange={(e) => handler(e, setBeginTime)} type="datetime-local" name="lot_begin_datetime" placeholder="Время начала аукциона"/>
                    <input value={endTime} onChange={(e) => handler(e, setEndTime)} type="datetime-local" name="lot_end_datetime" placeholder="Время конца аукциона"/>
                    <input onChange={(e) => setPhoto(e.target.files[0])} type="file" name="avatar" accept="image/png, image/jpeg"/>
                    <button onClick={send}>Войти</button>
                </div>
            </div>
        </div>
    );
}

export default AuctionCreate