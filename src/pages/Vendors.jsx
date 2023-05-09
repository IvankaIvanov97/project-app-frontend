import React, { useEffect, useState } from "react";

import no_ava from "../assets/img/no_ava.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL, IMG_URL } from "../timer";
function Vendors() {
  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: API_URL + "vendors",
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        setVendors(response.data);
      })
      .catch(function (error) {
        // обработка ошибок
        console.log(error);
      });
  }, []);
  return (
    <section>
      <div className="cont">
        <p className="total_info">Показано продавцов: {vendors.length}</p>
        <div className="vendor_grid">
          {vendors.length > 0 &&
            vendors.map((vendor, i) => (
              <div key={i} className="vendor_plate">
                <p className="vendor_name">{vendor.vendor_name}</p>
                {vendor.vendor_photo_path !== null ? (
                  <img src={IMG_URL + vendor.vendor_photo_path} alt="" />
                ) : (
                  <img src={no_ava} alt="" />
                )}
                <Link to={`/vendor?id=${vendor.id}`}>О продавце</Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Vendors;
