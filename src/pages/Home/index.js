import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import { formatPrice } from '../../util/formart';
import api from '../../services/api';

class Home extends Component {
  state = {
    products: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({
      loading: true
    });

    const response = await api.get('/products');
    const products = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }));
    this.setState({
      products,
      loading: false
    });
  }

  handleAddProduct(product) {
    const { dispatch } = this.props;
    dispatch({
      type: 'ADD_TO_CART',
      product
    });
  }

  render() {
    const { loading, products } = this.state;

    return (
      <ProductList>
        {loading ? (
          <h1>Carregando...</h1>
        ) : (
          products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
              <button
                type="button"
                onClick={() => this.handleAddProduct(product)}
              >
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" /> 3
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          ))
        )}
      </ProductList>
    );
  }
}

export default connect()(Home);
