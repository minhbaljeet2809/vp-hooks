import queryString from "query-string";
import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { getProducts } from "../services/Api";
import ProductList from "./../components/ProductList";

export default function Search(props) {
  const [products, setProduct] = useState([]);
  const [pages, setPages] = useState({
    limit: 12,
    totalDocument: 0,
  });

  const search = queryString.parse(props.location.search);
  const key = search.key;
  const page = search.page;
  

  useEffect(() => {
      getProducts({
        params :{
          name: key,
          limit : 12,
          page: page
        }
      }).then((res) =>{
        console.log(res.data)
        if(res?.data?.data?.docs){
          setProduct(res.data.data.docs);
        }
        if(res?.data?.data?.pages){
          setPages({ ...pages , totalDocument: res.data.data.pages.total });
        }
      });

  }, [key, page])

  return (
    <div>
      <div className="products">
        {key ? (
          <div id="search-result">
            Kết quả tìm kiếm với từ khóa <span>{key}</span>
          </div>
        ) : null}

        <ProductList productList={products} />
      </div>
      {/*	End List Product	*/}
      <div id="pagination">
        <Pagination {... pages} />
      </div>
    </div>
  );
}
