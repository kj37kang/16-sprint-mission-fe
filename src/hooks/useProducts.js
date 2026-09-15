import { useEffect, useState } from 'react';
import { productApi } from '../services/api';

let pageSize = 10;
let maxPage;

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const [indicators, setIndicators] = useState([]);
  const [hasProducts, setHasProducts] = useState(true);

  const createIndicators = (targetPage) => {
    const indicatorPool = [];
    const indicatorSize = 5;
    const startPage = Math.floor((targetPage - 1) / indicatorSize) * indicatorSize + 1;
    const indicatorCount = Math.min(indicatorSize, maxPage - startPage + 1);

    for(let i = 0; i < indicatorCount; i++){
      indicatorPool.push(startPage + i);
    }
    
    return indicatorPool;
  };

  const goToPage = (event, targetPage) => {
    event.preventDefault();
    if (targetPage < 1 || targetPage > maxPage) return;
    setPage(targetPage);
  };

  useEffect(() => {
    const loadProducts = async () => {
      const query = !keyword
        ? `page=${page}&pageSize=${pageSize}&orderBy=${order}`
        : `page=${page}&pageSize=${pageSize}&orderBy=${order}&keyword=${keyword}`;

      const envelop = await productApi.getProducts(query);
      const { list, totalCount } = envelop.data;
      
      maxPage = Math.ceil(totalCount / pageSize);

      totalCount !== 0 ? setHasProducts(true) : setHasProducts(false);
      setProducts(list);
      setIndicators(createIndicators(page));
    };

    loadProducts();
  }, [page, order, keyword]);

  return {
    products,
    page,
    indicators,
    hasProducts,
    setPage,
    setOrder,
    setKeyword,
    goToPage
  };
};