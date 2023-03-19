import React, {useEffect, useState} from "react";

import { startTimer } from "../timer"
import eye from "../assets/img/eye.svg";
import like from "../assets/img/like.svg";
import {Link} from "react-router-dom";

function Lot({ data }) {
    const { image, name, timeIn, bidIn, id } = data;
    const [time, setTime] = useState({})
    const [bid, setBid] = useState(null)

    // let MySQLDate = "2023-05-12T11:40:10.048321";
    let timer

    useEffect(() => {
        if (bidIn !== undefined) {
            setBid(bidIn)
        }
        if (timeIn !== undefined) {
            startTimer(setTime, timer, timeIn)
        }
    }, [])
    return (
        <div className="lot">
            <div className="img_frag">
                <img className="lot_img" src={image} alt=""/>
                    <div className="lot_btns">
                        <Link to={`/lot/${id}`} className="btn_lot eye">
                            <img src={eye} alt="eye"/>
                        </Link>
                        <Link className="btn_lot like">
                            <img src={like} alt="like"/>
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
                <h3 className="name_lot">{name}</h3>
                {bid !== null ?
                    <p className="status">Активен: <span>{bid}</span></p> :
                    <p className="status">Прошедший</p>}
            </div>
        </div>
    );
}

export default Lot;