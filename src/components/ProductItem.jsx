import './ProductItem.scss';

const ProductItem = ({
    className = '',
    image,
    name,
    price,
    favoriteCount,
  }) => {  
  return (
    <div className={`product ${className}`}>
      <div className='img-box'>
        <a href='#'>
          <img src={image} alt='Product Image' />
        </a>
      </div>
      <p className='title'>
        <a href='#'>{name}</a>
      </p>
      <p className='price'>
        <a href='#'>{price?.toLocaleString()}원</a>
      </p>
      <button className='like-btn'>
        <span className='like-count'>{favoriteCount}</span>
      </button>
    </div>
  );
};

export default ProductItem;