import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
