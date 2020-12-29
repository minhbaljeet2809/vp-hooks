import React from 'react';
import PropTypes from 'prop-types';
import ProductItemList from './ProductItemList';

ProductList.propTypes = {
    productList: PropTypes.array,
};

ProductList.defaultProps = {
    productList: [],
}

function ProductList(props) {
    const { productList } = props;
    return (
        <div className="product-list card-deck">
            {productList.map((item) => {
                return (
                    <ProductItemList ProductItemList={item} />
                )
            })};
        </div>
    );
}

export default ProductList;