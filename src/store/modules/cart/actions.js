export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product
  };
}

export function removeFromCart(id) {
  return { type: '@cart/REMOVER', id };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_RESQUEST',
    id,
    amount
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount
  };
}
