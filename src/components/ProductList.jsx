import { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.scss';
import ProductItem from './ProductItem';

let pageSize = 10;
let maxPage;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [indicators, setIndicators] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    const loadProducts = async () => {
      const url = 'https://panda-market-api.vercel.app/products';
      const query = `?page=${page}&pageSize=${pageSize}&orderBy=recent`;
      const response = await axios.get(url + query);
      maxPage = Math.ceil(response.data.totalCount / pageSize);
      setProducts(response.data.list);
    };

    loadProducts();
  }, [page]);

  const createIndicators = (targetPage) => {
    const indicatorPool = [];
    const indicatorCount = ((maxPage - targetPage) / 5) > 1 ? 5 : maxPage % 5;

    for(let i = 0; i < indicatorCount; i++){
      indicatorPool.push(targetPage + i);
    }
    
    return indicatorPool;
  };

  const handlePage = (event, item) => {
    event.preventDefault();

    setPage(item);
  };

  const handleIndicator = (event, targetPage) => {
    event.preventDefault();
    if (targetPage < 1 || targetPage > maxPage) return;

    setPage(targetPage);

    switch(targetPage % 5){
      case 1:
        setIndicators(createIndicators(targetPage));
        break;
      case 0:
        setIndicators(createIndicators(targetPage - 4));
        break;
    }
  };

  return (
    <section className='inner'>
      <div className='product-container-header'>
        <h2 className='product-container-title'>판매 중인 상품</h2>
        <form>
          <input id='searchInput' type='text' placeholder='검색할 상품을 입력해주세요' />
          <button className='open-modal-btn' type='button'>상품 등록하기</button>
          <select name='sort' id='sort'>
            <option value='recent'>최신순</option> 
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
        <li className='prev-btn' onClick={() => handleIndicator(event, page - 1)}><a href='#'>이전</a></li>
        {
          indicators
            .map(item =>
              item === page
              ? <li key={item} className='on' onClick={() => handlePage(event, item)}><a href='#'>{item}</a></li>
              : <li key={item} onClick={() => handlePage(event, item)}><a href='#'>{item}</a></li>
            )
        }
        <li className='next-btn' onClick={() => handleIndicator(event, page + 1)}><a href='#'>다음</a></li>
      </ul>
    </section>
  );
};

export default ProductList;