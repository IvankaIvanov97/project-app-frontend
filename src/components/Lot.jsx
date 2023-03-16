import React, {useEffect, useState} from "react";

function Lot({ image, timeIn, name, bid }) {
    const [time, setTime] = useState([])
    useEffect(() => {
        // var d = new Date();
        // var timeCurrent = d.getTime();
        let timeNeed = (timeIn - new Date().valueOf()) * 0.001;
        let timer = setInterval(function () {
            const seconds = timeNeed%60 // Получаем секунды
            const minutes = timeNeed/60%60 // Получаем минуты
            const hour = timeNeed/60/60%60 // Получаем часы
            const days = timeNeed/24/60/60%60 // Получаем часы
            if (days > 0) {
                let element = {
                    number: days,
                    type: "Дней"
                }
                setTime(time.push(element))
            }
            if (hour > 0) {
                let element = {
                    number: hour,
                    type: "Часов"
                }
                setTime(time.push(element))
            }
            if (minutes > 0) {
                let element = {
                    number: minutes,
                    type: "Минут"
                }
                setTime(time.push(element))
            }
            if (seconds > 0) {
                let element = {
                    number: seconds,
                    type: "Секунд"
                }
                setTime(time.push(element))
            }
        }, 1000)
    }, [])
    return (
        <div className="lot">
            <div className="img_frag">
                <img className="lot_img" src={image} alt=""/>
                    <div className="lot_btns">
                        <a href="#" className="btn_lot eye">
                            <img src="./img/eye.svg" alt="eye"/>
                        </a>
                        <a href="#" className="btn_lot like">
                            <img src="./img/like.svg" alt="like"/>
                        </a>
                    </div>
                    <div className="time_info">
                        <p className="time_head">Осталось времени:</p>
                        <div className="time_sectors">
                            {time &&
                                time.map((timeElem, index) => (
                                    <div key={index} className="time_sector">
                                        <p className="time_num">{timeElem.number}</p>
                                        <p className="time_type">{timeElem.type}</p>
                                    </div>
                                ))}
                            <div className="time_sector">
                                <p className="time_num">24</p>
                                <p className="time_type">Часа</p>
                            </div>
                            <div className="time_sector">
                                <p className="time_num">32</p>
                                <p className="time_type">Мин</p>
                            </div>
                            <div className="time_sector">
                                <p className="time_num">1</p>
                                <p className="time_type">Сек</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="text_frag">
                <h3 className="name_lot">{name}</h3>
                <p className="status">Активен: <span>{bid}</span></p>
            </div>
        </div>
    );
}

export default Lot;