// const API_BASE_ADDR = 'http://127.0.0.1:3000/api/v1';

async function getBooksFromAPI() {
  console.log('inside api call');
  const res = await fetch('http://localhost:3000/api/v1/books', {
    method: 'GET', mode: 'no-cors',
  });
  console.log(res);
  const data = await res.json();
  console.log(data);
  return data;
}

export default getBooksFromAPI;
