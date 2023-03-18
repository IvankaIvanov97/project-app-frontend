import React from "react";
import { Link } from "react-router-dom";

function Category({ data }) {
    const { id, image, name, countAuctions } = data
    return(
        <div className="category" style={{ backgroundImage:`url(${image})`}} >
            <h3 className="category_name">{name}</h3>
            <p className="category_count">Аукционов: {countAuctions}</p>
            <Link to={`/auctions?category=${id}`}>Ебашь как не в себя</Link>
        </div>
    );
}

export default Category;