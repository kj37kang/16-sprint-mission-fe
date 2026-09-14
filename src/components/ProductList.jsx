import './ProductList.scss';
import ProductItem from './ProductItem';

const ProductList = () => {
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
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
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