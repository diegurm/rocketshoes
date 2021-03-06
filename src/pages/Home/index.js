import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';
import { ProductList } from './styles';
import { formatPrice } from '../../util/formart';
import * as CartActions from '../../store/modules/cart/actions';

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

  handleAddProduct(id) {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  }

  render() {
    const { loading, products } = this.state;
    const { amount } = this.props;

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
                onClick={() => this.handleAddProduct(product.id)}
              >
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" />
                  {amount[product.id] || 0}
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
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {})
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
