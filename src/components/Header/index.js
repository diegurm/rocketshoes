import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Cart } from './styles';
import { MdShoppingBasket } from 'react-icons/md';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={require('../../assets/images/logo.svg')} alt="Rocketshoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF"></MdShoppingBasket>
      </Cart>
    </Container>
  );
}
