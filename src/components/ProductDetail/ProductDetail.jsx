import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  let { id } = useParams();
  const [productDetail, setProductDetail] = useState({});


  useEffect(() => {
    fetchProductDetail();
  }, []);

  const fetchProductDetail = async () => {
    let response = await axios.get(`https://dummyjson.com/products/${id}`)
    setProductDetail(response.data);
    //console.log(response.data);
  }



  return (
    <div className="container">
    <div className="card" style={{ width: 25 + "rem" }}>
      <img src={`https://i.dummyjson.com/data/products/${id}/2.jpg`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{productDetail.title}</h5>
        <p className="card-text">{productDetail.description}</p>
        <p className="card-text">Price: {productDetail.price}$</p>
        <p className="card-text">Rating: {productDetail.rating} ⭐</p>

        <a href="#" className="btn btn-primary">
          Add to Cart
        </a>
      </div>
    </div>
    </div>
  );
}
