import React, {useEffect, useState} from "react";

import { startTimer } from "../timer"
import eye from "../assets/img/eye.svg";
import {Link} from "react-router-dom";
import {logDOM} from "@testing-library/react";

function Lot({ data }) {
    const { lot_photo_path, lot_name, lot_end_datetime, current_bet, id } = data;
    const [time, setTime] = useState({})
    const [bid, setBid] = useState(null)

    // let MySQLDate = "2023-05-12T11:40:10.048321";
    let timer

    useEffect(() => {
        if (current_bet !== undefined) {
            if (current_bet !== null) {
                setBid(current_bet)
            }
        }
        if (lot_end_datetime !== undefined) {
            startTimer(setTime, timer, lot_end_datetime)
        }
    }, [])
    return (
        <div className="lot">
            <div className="img_frag">
                <img className="lot_img" src={lot_photo_path} alt=""/>
                    <div className="lot_btns">
                        <Link to={`/lot?id=${id}`} className="btn_lot eye">
                            <img src={eye} alt="eye"/>
                        </Link>
                    </div>
                    {Object.keys(time).length !== 0 && <div className="time_info">
                        <p className="time_head">Осталось времени:</p>
                        <div className="time_sectors">
                            {Object.keys(time).map((keyName, i) => (
                                <div key={i + keyName} className="time_sector">
                                    <p className="time_num">{time[keyName]}</p>
                                    <p className="time_type">{keyName}</p>
                                </div>
                            ))}
                        </div>
                    </div>}
            </div>
            <div className="text_frag">
                <h3 className="name_lot">{lot_name}</h3>
                {bid !== null ?
                    <p className="status">Активен: <span>{bid} ₽</span></p> :
                    <p className="status">Прошедший</p>}
            </div>
        </div>
    );
}

export default Lot;