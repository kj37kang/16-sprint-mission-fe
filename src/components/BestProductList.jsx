import './ProductList.scss';
import ProductItem from './ProductItem';

const BestProductList = () => {
  return (
    <section className='inner'>
      <h2 className='product-container-title'>베스트 상품</h2>
      <div className='product-container'>
        <ProductItem className='best-product' />
        <ProductItem className='best-product' />
        <ProductItem className='best-product' />
        <ProductItem className='best-product' />
      </div>
    </section>
  );
};

export default BestProductList;