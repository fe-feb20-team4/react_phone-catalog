import React from 'react';
import { Product } from '../Product/Product';
import { useProductsList } from '../_hooks/useProductsList';

export const ProductsList = () => {
  const { currentProducts, numberOfProducts } = useProductsList();

  return (
    <>
      {numberOfProducts ? (
        <div className="products section__products">
          {currentProducts.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      )
        : (
          <p className="section__no-products-info">
            No products with such title...try again.
          </p>
        )}
    </>
  );
};
