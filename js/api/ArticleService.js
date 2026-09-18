import { baseUrl, validateResponse, throwFormattedError } from './client.js';


// ===== 전역 변수 선언 ===== //
const url = baseUrl + '/articles';


// ===== 게시글 관련 함수 정의 ===== //

// 게시글 목록 불러오기
export const getArticleList = (params = {}) => {
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

  return fetch(`${url}?${queryUrl}`)
    .then(response => validateResponse(response))
    .then(data => data)
    .catch(error => throwFormattedError(error));
};

// 게시글 정보 불러오기
export const getArticle = ({id} = {}) => {
  return fetch(`${url}/${id}`)
    .then(response => validateResponse(response))
    .then(article => article)
    .catch(error => throwFormattedError(error));
};

// 게시글 작성하기
export const createArticle = (articleData = {}) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(articleData)
  })
    .then(response => validateResponse(response))
    .then(article => article)
    .catch(error => throwFormattedError(error));
};

// 게시글 수정하기
export const patchArticle = ({id, ...articleData} = {}) => {
  return fetch(`${url}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(articleData)
  })
    .then(response => validateResponse(response))
    .then(article => article)
    .catch(error => throwFormattedError(error));
};

// 게시글 삭제하기
export const deleteArticle = ({id} = {}) => {
  fetch(`${url}/${id}`, {
    method: 'DELETE'
  })
    .then(response => validateResponse(response))
    .then(article => article)
    .catch(error => throwFormattedError(error));
};