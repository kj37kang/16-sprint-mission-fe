import { useEffect, useState } from 'react';
import { productApi } from '../services/api';
import './ProductList.scss';
import ProductItem from './ProductItem';

const BestProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const query = 'page=1&pageSize=4&orderBy=favorite';
      const envelop = await productApi.getProducts(query);
      setProducts(envelop.data.list);
    }

    loadProducts();
  }, []);

  return (
    <section className='inner'>
      <h2 className='product-container-title'>베스트 상품</h2>
      <div className='product-container'>
        {
          products.map(product => 
            <ProductItem 
              key={product.id}
              className='best-product'
              image={product.images[0]}
              name={product.name}
              price={product.price}
              favoriteCount={product.favoriteCount}
            />
          )
        }
      </div>
    </section>
  );
};

export default BestProductList;