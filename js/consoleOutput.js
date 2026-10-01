import { formatDate } from './utils/format.js';


// ===== 게시글 관련 함수 정의 ===== //

// 게시글 목록 불러오기
export const articleList = ({ list, totalCount }) => {
  console.log('\n📜 게시글 목록을 불러왔습니다.\n');
  console.log(`전체 게시글: ${totalCount}개`);
  console.log(`불러온 게시글: ${list.length}개\n`);
  list.forEach(article => {
    console.log(`[${article.id}] ${article.title} | ${formatDate(article.createdAt)}`);
  });
};

// 게시글 정보 불러오기
export const article = article => {
  console.log('\n📄 게시글 정보를 불러왔습니다.\n');
  console.log(`번호: ${article.id}`);
  console.log(`제목: ${article.title}`);
  console.log(`내용: ${article.content}`);
  console.log(`이미지: ${article.image}`);
  console.log(`작성일: ${formatDate(article.createdAt)}`);
  console.log(`수정일: ${formatDate(article.updatedAt)}`);
};

// 게시글 작성하기
export const createArticle = article => {
  console.log('\n📝 게시글을 작성했습니다.\n');
  console.log(`번호: ${article.id}`);
  console.log(`제목: ${article.title}`);
  console.log(`내용: ${article.content}`);
  console.log(`이미지: ${article.image}`);
  console.log(`작성일: ${formatDate(article.createdAt)}`);
};

// 게시글 수정하기
export const patchArticle = article => {
  console.log('\n✍🏻 게시글을 수정했습니다.\n');
  console.log(`번호: ${article.id}`);
  console.log(`제목: ${article.title}`);
  console.log(`내용: ${article.content}`);
  console.log(`이미지: ${article.image}`);
  console.log(`작성일: ${formatDate(article.createdAt)}`);
  console.log(`수정일: ${formatDate(article.updatedAt)}`);
};

// 게시글 삭제하기
export const deleteArticle = article => {
  console.log('\n🗑️ 게시글을 삭제했습니다.\n');
};


// ===== 상품 관련 함수 정의 ===== //

// 상품 목록 불러오기
export const productList = data => {
  console.log('\n🛒 상품 목록을 불러왔습니다.\n');
  console.log(`전체 상품: ${data.totalCount}개`);
  console.log(`불러온 상품: ${data.list.length}개\n`);
  data.list.forEach(product => {
    console.log(`[${product.id}] ${product.name} | ${product.price.toLocaleString()}원`);
  });
};

// 상품 정보 불러오기
export const product = product => {
  console.log('\n🎁 상품 정보를 불러왔습니다.\n');
  console.log(`번호: ${product.id}`);
  console.log(`상품: ${product.name}`);
  console.log(`설명: ${product.description}`);
  console.log(`가격: ${product.price.toLocaleString()}원`);
  console.log(`태그: ${product.tags.join(', ')}`);
  console.log(`이미지: ${product.images.join(', ')}`);
  console.log(`등록일: ${formatDate(product.createdAt)}`);
  console.log(`수정일: ${formatDate(product.updatedAt)}`);
};

// 상품 등록하기
export const createProduct = product => {
  console.log('\n🖼️ 상품을 등록했습니다.\n');
  console.log(`번호: ${product.id}`);
  console.log(`상품: ${product.name}`);
  console.log(`설명: ${product.description}`);
  console.log(`가격: ${product.price.toLocaleString()}원`);
  console.log(`태그: ${product.tags.join(', ')}`);
  console.log(`이미지: ${product.images.join(', ')}`);
  console.log(`등록일: ${formatDate(product.createdAt)}`);
};

// 상품 수정하기
export const patchProduct = product => {
  console.log('\n🏷️ 상품을 수정했습니다.\n');
  console.log(`번호: ${product.id}`);
  console.log(`상품: ${product.name}`);
  console.log(`설명: ${product.description}`);
  console.log(`가격: ${product.price.toLocaleString()}원`);
  console.log(`태그: ${product.tags.join(', ')}`);
  console.log(`이미지: ${product.images.join(', ')}`);
  console.log(`등록일: ${formatDate(product.createdAt)}`);
  console.log(`수정일: ${formatDate(product.updatedAt)}`);
};

// 상품 삭제하기
export const deleteProduct = () => {
  console.log('\n🗑️ 상품을 삭제했습니다.\n');
};