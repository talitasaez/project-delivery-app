// const headers = {
//   Accept: 'application/json, text/plain, */*',
//   'Access-Control-Allow-Origin': '*',
//   'Content-Type': 'application/json',
// };

const fetchProducts = async () => {
  // const number = 3001;
  console.log('olá');
  const response = await fetch(
    `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/products`,
    {
      method: 'GET',
      // headers,
    },
  );
  console.log('response', response);
  const data = await response.json();
  console.log('data', data);
  return data;
};

export default fetchProducts;
