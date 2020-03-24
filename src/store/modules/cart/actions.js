export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product
  };
}

export function removeFromCart(id) {
  return { type: '@cart/REMOVER', id };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount
  };
}
