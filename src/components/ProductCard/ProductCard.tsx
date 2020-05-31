import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFavorites, getProducts } from '../../redux';
import { deleteFavorite, setFavorite } from '../../redux/favorites';
import { PRODUCT_PATHS } from '../../common/constants';

export const ProductCard = ({
  name,
  type,
  imageUrl,
  price,
  screen,
  capacity,
  ram,
  discount,
  id,
  productCardRef,
}: ProductProps) => {
  const preparedScreen = useMemo(() => (
    screen.replace(' inches', '"')
  ), [screen]);
  const preparedFullPrice = useMemo(() => (
    price * (discount / 100) + price
  ), [price, discount]);
  const preparedCapacity = useMemo(() => (
    `${parseInt((capacity || '32000'), 10)} MB`
  ), [capacity]);
  const preparedRam = useMemo(() => (
    `${parseInt((ram || '1000'), 10)} MB`
  ), [ram]);

  const favorites: Product[] = useSelector(getFavorites);
  const products: Product[] = useSelector(getProducts);
  const dispatch = useDispatch();

  const addToFavorites = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, prodId: string) => {
      const product = products.find(p => p.id === prodId);

      if (e.target.checked) {
        dispatch(setFavorite(product));
      } else {
        dispatch(deleteFavorite(prodId));
      }
    }, [dispatch, products],
  );

  return (
    <article
      id={id}
      className="product"
      ref={productCardRef}
    >
      <Link
        to={`${PRODUCT_PATHS[type]}/${id}`}
        className="product__link"
      >
        <img className="product__image" src={imageUrl} alt={name} />
        <p className="product__title">{name}</p>
      </Link>
      <div className="product__price-container">
        <span className="product__price">
          {`$${price}`}
        </span>
        {discount > 0 && (
          <span className="product__discount">
            {`$${preparedFullPrice}`}
          </span>
        )}
      </div>
      <span className="product__split-line" />
      <div className="product__details">
        <div className="product__details-container">
          <span className="product__details-title">
            Screen
          </span>
          <span className="product__details-info">
            {preparedScreen}
          </span>
        </div>
        <div className="product__details-container">
          <span className="product__details-title">
            Capacity
          </span>
          <span className="product__details-info">
            {preparedCapacity}
          </span>
        </div>
        <div className="product__details-container">
          <span className="product__details-title">
            RAM
          </span>
          <span className="product__details-info">
            {preparedRam}
          </span>
        </div>
      </div>
      <div className="product__buttons__container">
        <button className="product__button" type="button">
          Add to cart
        </button>
        <label
          className="product__button-favorite"
          htmlFor={`button-favorite-${id}`}
        >
          <input
            className="product__button-favorite-input"
            type="checkbox"
            id={`button-favorite-${id}`}
            checked={favorites.some(person => person.id === id)}
            onChange={(e) => addToFavorites(e, id)}
          />
          <span className="product__button-favorite-checkmark" />
        </label>
      </div>
    </article>
  );
};