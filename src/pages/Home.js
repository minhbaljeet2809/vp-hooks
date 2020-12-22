import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
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
          if(res.data?.data?.docs){
            setNewProduct(res.data.data.docs);
          }
      });

      getProducts({
        params: {
          limit: 6,
          "filter[is_featured]": true
        }
      }).then(function(res){
          if(res.data?.data?.docs){
            setFeatureProduct(res.data.data.docs);
          }
      });

  },[])


  return (
    <>
      <div className="products">
        <h3>Sản phẩm nổi bật</h3>
        <ProductList productList={featureProduct} />
      </div>

      <div className="products">
        <h3>Sản phẩm mới</h3>
        <div className="product-list card-deck">
            <ProductList productList = {newProduct} />
        </div>
      </div>
    </>
  );
}
