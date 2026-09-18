import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle } from './api/ArticleService.js';
import { getProductList, getProduct, createProduct, patchProduct, deleteProduct } from './api/ProductService.js';
import * as print from './consoleOutput.js';

// ===== 게시글 관련 ===== //

// 📜 게시글 목록 조회
getArticleList({
  keyword: '',
}).then(data => {
  print.articleList(data);

  // 📄 게시글 정보 조회
  return getArticle({
    id: data.list[0].id,
  });
}).then(article => {
  print.article(article);

  // 📝게시글 작성
  return createArticle({
    title: '제목',
    content: '내용',
    image: 'https://example.com/image.jpg',
  })
}).then(article => {
  print.createArticle(article);

  // ✍🏻 게시글 수정
  return patchArticle({
    id: article.id,
    title: '제목 수정',
    content: '내용 수정',
    image: 'https://example.com/image_edited.jpg',
  })
}).then(article => {
  print.patchArticle(article);

  // 🗑️ 게시글 삭제
  deleteArticle({
    id: article.id,
  });
  print.deleteArticle(article);
}).catch(error => {
  console.error(`⛔ 에러: ${error.message}`);
});

// ===== 상품 관련 ===== //

try{
  // 🛒 상품 목록 조회
  const data = await getProductList({
    keyword: '',
  });
  print.productList(data);

  // 🎁 상품 정보 조회
  await getProduct({
    id: data.list[0].id,
  });
  print.product(data.list[0]);

  // 🖼️ 상품 등록
  const product = await createProduct({
    name: '상품',
    description: '설명',
    price: 10000,
    tags: ['태그1', '태그2'],
    images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
  });
  print.createProduct(product);

  // 🏷️ 상품 수정
  await patchProduct({
    id: product.id,
    name: '상품 수정',
    description: '설명 수정',
    price: 30000,
    tags: ['태그 수정 1', '태그 수정 2'],
    images: ['https://example.com/image1.png', 'https://example.com/image2.png'],
  });
  print.patchProduct(product);

  // 🗑️ 상품 삭제
  await deleteProduct({
    id: product.id,
  });
  print.deleteProduct(product);
}catch(error){
  console.error(`⛔ 에러: ${error.message}`);
}