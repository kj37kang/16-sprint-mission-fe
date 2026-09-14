import { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.scss';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {   
      const response = await axios.get('https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=recent');
      setProducts(response.data.list);
    }

    loadProducts();
  }, []);

  return (
    <section className='inner'>
      <div className='product-container-header'>
        <h2 className='product-container-title'>판매 중인 상품</h2>
        <form>
          <input id='searchInput' type='text' placeholder='검색할 상품을 입력해주세요' />
          <button className='open-modal-btn' type='button'>상품 등록하기</button>
          <select name='sort' id='sort'>
            <option selected value='recent'>최신순</option> 
            <option value='favorite'>좋아요순</option>
          </select>
        </form>
      </div>
      <div className='product-container'>
        {
          products.map(product => 
            <ProductItem 
              key={product.id}
              image={product.images[0]}
              name={product.name}
              price={product.price}
              favoriteCount={product.favoriteCount}
            />
          )
        }
      </div>
      <ul className='pagination'>
        <li className='prev'><a href='#'>&lt;</a></li>
        <li className='on'><a href='#'>1</a></li>
        <li><a href='#'>2</a></li>
        <li><a href='#'>3</a></li>
        <li><a href='#'>4</a></li>
        <li><a href='#'>5</a></li>
        <li className='next'><a href='#'>&gt;</a></li>
      </ul>
    </section>
  );
};

export default ProductList;