import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import ProductsCard from '../components/ProductsCard';

function Products() {
  const { products, setProducts } = useContext(AppContext);

  useEffect(() => {

  });

  return (
    <div>
      <NavBar />
      <ProductsCard />
    </div>
  );
}

export default Products;
