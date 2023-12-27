import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProductCard(props) {
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteProduct = async () => {
    const response = await axios.delete(
      `https://dummyjson.com/products/${props.product.id}`
    );
    setIsDeleted(response.data.isDeleted);
  };

  return (
    <>
      {isDeleted ? null : (
        <div key={props.product.id} className="col-lg-3 col-md-6 col-12 mb-5">
          <div className="card">
            <img
              src={props.product.thumbnail}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.product.title}</h5>
              <p className="card-text">{props.product.description}</p>
              <Link
                to={"/products/" + props.product.id}
                className="btn btn-primary"
              >
                Details
              </Link>
              <button
                onClick={deleteProduct}
                className="btn btn-danger"
              >
                Sil
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
