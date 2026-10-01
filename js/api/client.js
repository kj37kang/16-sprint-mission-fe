// ===== 전역 변수 선언 ===== //
export const baseUrl = 'https://panda-market-api-crud.vercel.app';


// ===== 함수 정의 ===== //

// 서버 응답 상태 확인
export const validateResponse = async (response) => {
  if(!response.ok){
    const error = await response.json();
    throw error;
  }
  return response.json();
}

// 에러 발생
export const throwFormattedError = (error) => {
  switch(error.message){
    case 'Not Found':
      error.message = '서버 요청에 실패했습니다.'
      break;
    case 'Validation Failed':
      error.message = '매개변수가 잘못 입력됐습니다.'
      break;
  }
  throw error;
}