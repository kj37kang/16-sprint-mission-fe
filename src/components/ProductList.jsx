import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './ProductList.scss';
import ProductItem from './ProductItem';

let pageSize = 10;
let maxPage;

const ProductList = () => {
  const createIndicators = (targetPage) => {
    const startNum = targetPage % 5 !== 0
      ? Math.floor(targetPage / 5) * 5 + 1
      : targetPage - 4;

    const indicatorPool = [];
    const indicatorCount = targetPage <= maxPage - (maxPage % 5) ? 5 : maxPage % 5;

    for(let i = 0; i < indicatorCount; i++){
      indicatorPool.push(startNum + i);
    }
    
    return indicatorPool;
  };

  const inputRef = useRef(null);
  const selectRef = useRef(null);

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [indicators, setIndicators] = useState([]);
  const [order, setOrder] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const [hasProducts, setHasProducts] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const url = 'https://panda-market-api.vercel.app/products';
      const query = !keyword
        ? `?page=${page}&pageSize=${pageSize}&orderBy=${order}`
        : `?page=${page}&pageSize=${pageSize}&orderBy=${order}&keyword=${keyword}`;

      const envelop = await axios.get(url + query);
      const { list, totalCount } = envelop.data;
      

      maxPage = Math.ceil(totalCount / pageSize);

      totalCount !== 0 ? setHasProducts(true) : setHasProducts(false);
      setProducts(list);
      setIndicators(createIndicators(page));
    };

    loadProducts();
  }, [page, order, keyword]);

  const handlePage = (event, item) => {
    event.preventDefault();

    setPage(item);
  };

  const handleIndicator = (event, targetPage) => {
    event.preventDefault();
    if (targetPage < 1 || targetPage > maxPage) return;

    setPage(targetPage);
  };

  const handleForm = (event) => {
    setPage(1);

    switch (event.target){
      case inputRef.current:
        setKeyword(event.target.value);
        break;
      case selectRef.current:
        setOrder(event.target.value);
        break;
    }
  }

  return (
    <section className='inner'>
      <div className='product-container-header'>
        <h2 className='product-container-title'>판매 중인 상품</h2>
        <form onChange={(event) => handleForm(event)}>
          <input
            id='searchInput'
            type='text'
            placeholder='검색할 상품을 입력해주세요'
            // value={keyword}
            ref={inputRef}
          />
          <button className='open-modal-btn' type='button'>상품 등록하기</button>
          <select
            name='sort'
            id='sort'
            ref={selectRef}
          >
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
      {
        hasProducts &&
        <ul className='pagination'>
          <li className='prev-btn' onClick={(event) => handleIndicator(event, page - 1)}>
            <a href='#'>이전</a>
          </li>
          <ul className="indicators">
            {
              indicators
                .map(item =>
                  item === page
                  ? <li key={item} className='on' onClick={(event) => handlePage(event, item)}>
                      <a href='#'>{item}</a>
                    </li>
                  : <li key={item} onClick={(event) => handlePage(event, item)}>
                      <a href='#'>{item}</a>
                    </li>
                )
            }
          </ul>
          <li className='next-btn' onClick={(event) => handleIndicator(event, page + 1)}>
            <a href='#'>다음</a>
          </li>
        </ul>
      }
    </section>
  );
};

export default ProductList;