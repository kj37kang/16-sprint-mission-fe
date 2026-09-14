import './ProductItem.scss';

const ProductItem = ({className = ''}) => {
  return (
    <div className={`product ${className}`}>
      <div className='img-box'>
        <a href='#'>
          <img src='https://images.unsplash.com/photo-1592355591829-aaae33fcff1d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVpZ2UlMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D' alt='Product Image' />
        </a>
      </div>
      <p className='title'>
        <a href='#'>아이패드 미니 팝니다</a>
      </p>
      <p className='price'>
        <a href='#'>500,000원</a>
      </p>
      <button className='like-btn'>
        <span className='like-count'>240</span>
      </button>
    </div>
  );
};

export default ProductItem;