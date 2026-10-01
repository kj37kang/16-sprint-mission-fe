import { baseUrl, validateResponse, throwFormattedError } from './client.js';


// ===== 전역 변수 선언 ===== //
const url = baseUrl + '/products';


// ===== 상품 관련 함수 정의 ===== //

// 상품 목록 불러오기
export const getProductList = async (params = {}) => {
  try{
    const queryParams = {
      page: 1,
      pageSize: 10,
      orderBy: 'recent',
      ...params
    };
    const queryUrl = new URLSearchParams();
    for(const key in queryParams){
      if(queryParams[key] !== ''){
        queryUrl.append(key, queryParams[key]);
      }
    }
    
    const response = await fetch(`${url}?${queryUrl}`);
    const data = await validateResponse(response);
    return data;
  }catch(error){
    throwFormattedError(error);
  }
};

// 상품 정보 불러오기
export const getProduct = async ({id} = {}) => {
  try{
    const response = await fetch(`${url}/${id}`);
    const product = await validateResponse(response);
    return product;
  }catch(error){
    throwFormattedError(error);
  }
};

// 상품 등록하기
export const createProduct = async (productData = {}) => {
  try{
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(productData)
    });
    const product = await validateResponse(response);
    return product;
  }catch(error){
    throwFormattedError(error);
  }
};

// 상품 수정하기
export const patchProduct = async ({id, ...productData} = {}) => {
  try{
    const response = await fetch(`${url}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(productData)
    });
    const product = await validateResponse(response);
    return product;
  }catch(error){
    throwFormattedError(error);
  }
};

// 상품 삭제하기
export const deleteProduct = async ({id} = {}) => {
  try{
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE'
    });
    const product = await validateResponse(response);
    return product;
  }catch(error){
    throwFormattedError(error);
  }
};