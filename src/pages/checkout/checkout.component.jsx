import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import CheckoutItem from "../../component/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

import StripeCheckoutButton from "../../component/stripe-button/stripe-button.component";

import {
  CheckoutContainer,
  HeaderBlockContainer,
  CheckoutHeaderContainer,
  TestWarningStyles,
  TotalStyles,
} from "./checkout.styles";

const CheckOutPage = ({ cartItems, total }) => (
  <CheckoutContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalStyles>
      <span>TOTAL: ${total}</span>
    </TotalStyles>
    <TestWarningStyles>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 -CVV: 123
    </TestWarningStyles>
    <StripeCheckoutButton price={total} />
  </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
