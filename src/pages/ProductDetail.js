import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  getProductItem,
  getCommentByProductId,
  creatCommentByProductId,
} from "../services/Api";

ProductDetail.prototype = {};

export default function ProductDetail(props) {
  const [productDetail, setProductDetail] = useState({});
  const [comments, setComments] = useState([]);
  // const [qty, setQty] = useState(1);
  const [input, setInput] = useState({
    content: "",
    email: "",
    name: "",
  });

  const id = props?.match?.params?.id;

  const dispatch = useDispatch();

  useEffect(() => {
    getProductItem(id).then((res) => {
      if (res?.data?.data) {
        setProductDetail(res.data.data);
      }
    });

    getCommentByProductId(id, {
      params: {
        sort: "-_id",
      },
    }).then((res) => {
      if (res?.data?.data?.docs) {
        setComments(res.data.data.docs);
      }
    });

    // return () => {
    //   cleanup
    // }
  }, [id]);

  const handleChangeInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setInput({
      ...input,
      [name]: value,
    });
  };

  function onSubmitCreatComment(e) {
    e.preventDefault();
    console.log("submitttttttttttt");
    creatCommentByProductId(id, input).then((res) => {
      setInput({ ...input, content: "" });
      getCommentByProductId(id, {
        params: {
          sort: "-_id",
        },
      }).then((res) => {
        if (res?.data?.data?.docs) {
          setComments(res.data.data.docs);
        }
      });
    });
  }

  const onHandleClickCart = ()=>{
    console.log("mua hafng")
    
    dispatch({
      type : "ADD_TO_CART",
      payload: {
        id: productDetail._id,
        qty: 1,
        name: productDetail.name,
        price: productDetail.name,
        img: productDetail.image
      }
    })
  } 

  return (
    <div>
      {/*	List Product	*/}
      <div id="product">
        <div id="product-head" className="row">
          <div id="product-img" className="col-lg-6 col-md-6 col-sm-12">
            <img
              src={
                productDetail.image
                  ? `http://vietpro.online/assets/uploads/${productDetail?.image}`
                  : ""
              }
            />
          </div>
          <div id="product-details" className="col-lg-6 col-md-6 col-sm-12">
            <h1>{productDetail.name}</h1>
            <ul>
              <li>
                <span>Bảo hành:</span> 12 Tháng
              </li>
              <li>
                <span>Đi kèm: {productDetail?.accessories} </span>
              </li>
              <li>
                <span>Tình trạng: {productDetail?.status}</span>
              </li>
              <li>
                <span>Khuyến Mại: {productDetail?.promotion}</span>
              </li>
              <li id="price">Giá Bán (chưa bao gồm VAT)</li>
              <li id="price-number">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(productDetail?.price)}
              </li>
              <li>
                {productDetail?.is_stock ? (
                  <span className="badge badge-success">Còn hàng</span>
                ) : (
                  <span className="badge badge-danger">Hết hàng</span>
                )}
              </li>
            </ul>
            {productDetail?.is_stock ? (
              <div id="add-cart" onClick={onHandleClickCart}>
                <button className='btn btn-success'>Mua ngay</button>
              </div>
            ) : null}
          </div>
        </div>
        <div id="product-body" className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3>Đánh giá về iPhone X 64GB</h3>
            <div
              dangerouslySetInnerHTML={{ __html: productDetail?.details }}
            ></div>
          </div>
        </div>
        {/* { add comment } */}
        <div id="comment" className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3>Bình luận sản phẩm</h3>
            <form method="post" onSubmit={onSubmitCreatComment}>
              <div className="form-group">
                <label>Tên:</label>
                <input
                  onChange={handleChangeInput}
                  value={input.name}
                  name="name"
                  required
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  onChange={handleChangeInput}
                  value={input.email}
                  name="email"
                  required
                  type="email"
                  className="form-control"
                  id="pwd"
                />
              </div>
              <div className="form-group">
                <label>Nội dung:</label>
                <textarea
                  onChange={handleChangeInput}
                  name="content"
                  required
                  rows={8}
                  className="form-control"
                  defaultValue={""}
                  value={input.content}
                />
              </div>
              <button type="submit" name="sbm" className="btn btn-primary">
                Gửi
              </button>
            </form>
          </div>
        </div>
        {/*	End add Comment	*/}
        {/*	Comments List	*/}
        <div id="comments-list" className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            {comments.map((comment) => (
              <div className="comment-item">
                <ul>
                  <li>
                    <b>{comment.name}</b>
                  </li>
                  <li>{comment.createdAt}</li>
                  <li>
                    <p>{comment.content}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/*	End Comments List	*/}
      </div>
      {/* end Product detail */}
      <div id="pagination">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Trang trước
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Trang sau
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
