// 날짜 형식 변경
export const formatDate = (dateValue) => {
  const createdDate = new Date(dateValue);

  const year = createdDate.getFullYear();
  const month = createdDate.getMonth() + 1;
  const date = createdDate.getDate();
  const hours = createdDate.getHours();
  let minutes = createdDate.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return `${year}.${month}.${date} ${hours}:${minutes}`;
}