import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Cat from "./pages/Cart";
import OrderSuccess from "./pages/OrderSuccess";
import Search from "./pages/Search";

//Components
import Header from "./components/layout/Header";
import Slider from "./components/layout/Slider";
import Menu from "./components/layout/Menu";
import SideBar from "./components/layout/SideBar";
import Footer from "./components/layout/Footer";
import { getCategories } from "./services/Api";

 const Router =() => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      if (res?.data?.data?.docs) {
        setCategories(res.data.data.docs);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div id="body">
        <div className="container">
          <Menu data={categories} />
          <div className="row">
            <div id="main" className="col-lg-8 col-md-12 col-sm-12">
              <Slider />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/404" exact component={NotFound} />
                <Route path="/cat-:slug.:id" exact component={Category} />
                <Route path="/p-:slug.:id" exact component={ProductDetail} />
                <Route path="/cart" exact component={Cat} />
                <Route path="/order-success" exact component={OrderSuccess} />
                <Route path="/search" exact component={Search} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
            <SideBar />
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
