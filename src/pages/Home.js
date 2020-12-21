import React, { useEffect, useState } from "react";
import { getProducts } from "../services/Api";

export default function Home() {
  const [ newProduct, setNewProduct ] = useState([]);
  const [ featureProduct, setFeatureProduct] = useState([]);


  useEffect(() => {
      getProducts({
        params:{
          limit: 6,
        },
      }).then(function(res){
          console.log("resss", res.data?.data?.docs);
          if(res.data?.data?.docs){
            setNewProduct(res.data.data.docs);
          }
      });
  },[])


  return (
    <>
      <div className="products">
        <h3>Sản phẩm nổi bật</h3>
        <div className="product-list card-deck">
          <div className="product-item card text-center">
            <a href="#">
              <img src="images/product-1.png" />
            </a>
            <h4>
              <a href="#">iPhone Xs Max 2 Sim - 256GB</a>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
          <div className="product-item card text-center">
            <a href="#">
              <img src="images/product-2.png" />
            </a>
            <h4>
              <a href="#">iPhone Xs Max 2 Sim - 256GB</a>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
          <div className="product-item card text-center">
            <a href="#">
              <img src="images/product-3.png" />
            </a>
            <h4>
              <a href="#">iPhone Xs Max 2 Sim - 256GB</a>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
        </div>
        <div className="product-list card-deck">
          <div className="product-item card text-center">
            <a href="#">
              <img src="images/product-4.png" />
            </a>
            <h4>
              <a href="#">iPhone Xs Max 2 Sim - 256GB</a>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
          <div className="product-item card text-center">
            <a href="#">
              <img src="images/product-5.png" />
            </a>
            <h4>
              <a href="#">iPhone Xs Max 2 Sim - 256GB</a>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
          <div className="product-item card text-center">
            <a href="#">
              <img src="images/product-6.png" />
            </a>
            <h4>
              <a href="#">iPhone Xs Max 2 Sim - 256GB</a>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
        </div>
      </div>

      <div className="products">
        <h3>Sản phẩm mới</h3>
        <div className="product-list card-deck">
          <div className="product-item card text-center">
            <a href="#">
              <img src="images/product-7.png" />
            </a>
            <h4>
              <a href="#">iPhone Xs Max 2 Sim - 256GB</a>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
          <div className="product-item card text-center">
            <a href="#">
              <img src="images/product-8.png" />
            </a>
            <h4>
              <a href="#">iPhone Xs Max 2 Sim - 256GB</a>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
          <div className="product-item card text-center">
            <a href="#">
              <img src="images/product-9.png" />
            </a>
            <h4>
              <a href="#">iPhone Xs Max 2 Sim - 256GB</a>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
        </div>
        <div className="product-list card-deck">
          <div className="product-item card text-center">
            <a href="#">
              <img src="images/product-10.png" />
            </a>
            <h4>
              <a href="#">iPhone Xs Max 2 Sim - 256GB</a>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
          <div className="product-item card text-center">
            <a href="#">
              <img src="images/product-11.png" />
            </a>
            <h4>
              <a href="#">iPhone Xs Max 2 Sim - 256GB</a>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
          <div className="product-item card text-center">
            <a href="#">
              <img src="images/product-12.png" />
            </a>
            <h4>
              <a href="#">iPhone Xs Max 2 Sim - 256GB</a>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
