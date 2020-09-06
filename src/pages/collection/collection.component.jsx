import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../component/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selector";

import {
  CollectionContainer,
  ItemsContainer,
  TitleStyles,
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionContainer>
      <TitleStyles>{title}</TitleStyles>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
