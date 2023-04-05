import React from "react";
import { Link } from "react-router-dom";
import category_back from "../assets/img/categoty_back.jpg";

function Category({ data }) {
    const { id, category_photo_path, name, count_of_active_auctions } = data
    return(
        <div className="category" style={{ backgroundImage:`url(${category_photo_path})`}} >
            <h3 className="category_name">{name}</h3>
            <p className="category_count">Аукционов: {count_of_active_auctions}</p>
            <Link to="/auctions" state={{ id: id }}>Ебашь как не в себя</Link>
        </div>
    );
}

export default Category;