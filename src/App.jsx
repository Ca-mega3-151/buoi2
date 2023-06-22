import "./App.css";
import products from "./data";
import PropTypes from "prop-types";



//khai báo kiểu pokemon (obj pokemon thì bao gồm những gì)
/**
 * @typedef product
 *
 * @property {number} id - Id của sản phẩm
 * @property {string} title - tên của sản phẩm
 * @property {string} description - Giới thiệu của Sản phẩm
 * @property {string} thumbnail - ảnh của sản phẩm
 * @property {string} brand - thương hiệu của sản phẩm
 * @property {string} price - giá của sản phẩm
 */

/**
 * @typedef RenderProductsProps
 *
 * @property {Product} product - Obj chứa thông tin Product
 */
/**
 * Render 1 sản phẩm card
 * @param {RenderProductsProps} props props tuyền vào
 */

RenderProducts.propTypes = PropTypes.shape({
  product: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number
  })
});

function RenderProducts({ product }) {

  return (
    <div className="product">
      <img
        className="product-thumbnail"
        src={product.thumbnail}
      />
      <h3 className="product-title">{product.title} </h3>
      <div className="product-description"> {product.description}</div>
      <div className="footer-cart">
        <p className="product-brand"> Thương hiệu : {product.brand}</p>
        <p className="product-price"> Giá : {product.price}</p>
      </div>

      
    </div>
  );
}


export default function App() {
  const item = products.map((product) => <RenderProducts key={product.id} product={product} />);
  return (
    <div className="App">
     
        <h2>List Sản phẩm </h2>
        <div className="products-list">{item}</div>
      
    </div>
  )
};
