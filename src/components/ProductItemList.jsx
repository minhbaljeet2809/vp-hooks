import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import slug from 'slug';

ProductItemList.propTypes = {
  ProductItemList: PropTypes.object,
};

ProductItemList.defaultProps = {
  ProductItemList: null,
}

function ProductItemList(props) {
  const { ProductItemList } = props;
  const slugUrl = slug(ProductItemList.name, {lower:true});

  return (
    <div key={ProductItemList._id} className="product-item card text-center">
      <Link to={`/p-${slugUrl}.${ProductItemList._id}`}>
        <a href="#">
          <img src={`http://vietpro.online/assets/uploads/${ProductItemList.image}`} />
        </a>
      </Link>
      <h4>
        <a href="#">{ProductItemList.name}</a>
      </h4>
      <p>
        Giá Bán: <span>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND"
          }).format(ProductItemList.price)}
          </span>
      </p>
    </div>
  );
}

export default ProductItemList;