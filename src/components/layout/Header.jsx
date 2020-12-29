import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

Header.propTypes = {};

function Header() {
  const history = useHistory();
  const { count, items } = useSelector((state) => state.cart);

  console.log(items);

  const [searchValue, setSearchValue] = useState("");

  const onSubmitFrom = (e) => {
    e.preventDefault();
    history.push(`/search?key=${searchValue}`);
  };

  const onChangeInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div id="logo" className="col-lg-3 col-md-3 col-sm-12">
            <h1>
              <a href="#">
                <img className="img-fluid" src="images/logo.png" />
              </a>
            </h1>
          </div>
          <div id="search" className="col-lg-6 col-md-6 col-sm-12">
            <form className="form-inline" onSubmit={onSubmitFrom}>
              <input
                className="form-control mt-3"
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Search"
                value={searchValue}
                onChange={onChangeInput}
              />
              <button className="btn btn-danger mt-3" type="submit">
                Tìm kiếm
              </button>
            </form>
          </div>
          <div id="cart" className="col-lg-3 col-md-3 col-sm-12">
            <a className="mt-4 mr-1" href="#">
              giỏ hàng
            </a>
            <span className="mt-3">{items.reduce((a, c) => a + c.qty, 0)}</span>
          </div>
        </div>
      </div>
      {/* Toggler/collapsibe Button */}
      <button
        className="navbar-toggler navbar-light"
        type="button"
        data-toggle="collapse"
        data-target="#menu"
      >
        <span className="navbar-toggler-icon" />
      </button>
    </div>
  );
}

export default Header;
