import React from "react";

function Main() {
    return(
        <>
            <section>
                <div className="cont">
                    <h2>Актуальные аукционы</h2>
                    <div className="line"></div>
                    <div className="grid_auctions">

                    </div>
                </div>
            </section>
            <section>
                <div className="cont categories">
                    <div className="category" style="background-image: url('./img/categoty_back.jpg')">
                        <h3 className="category_name">Шляпское искусство</h3>
                        <p className="category_count">Аукционов: 2</p>
                        <a href="#">Ебашь как не в себя</a>
                    </div>
                </div>
            </section>
            <section>
                <div className="cont">
                    <h2>Последние аукционы</h2>
                    <div className="line"></div>
                    <div className="grid_auctions">
                        <div className="lot">
                            <div className="img_frag">
                                <img className="lot_img" src="./img/lot.png" alt="">
                                    <div className="lot_btns">
                                        <a href="#" className="btn_lot eye">
                                            <img src="./img/eye.svg" alt="eye">
                                        </a>
                                        <a href="#" className="btn_lot like">
                                            <img src="./img/like.svg" alt="like">
                                        </a>
                                    </div>
                            </div>
                            <div className="text_frag">
                                <h3 className="name_lot">Шляпа Ивана</h3>
                                <p className="status">Был 23.02.2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Main;