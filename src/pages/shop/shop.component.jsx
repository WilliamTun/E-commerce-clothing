import React from 'react';
import { Route } from 'react-router-dom'

//import SHOP_DATA from './shop.data.js';

//import {connect} from 'react-redux'
//import { createStructuredSelector} from 'reselect'
//import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
  </div>
)

export default ShopPage;

//const mapStateToProps = createStructuredSelector({
//  collections: selectCollections
//})

//export default connect(mapStateToProps)(ShopPage);

  /* - Don't need constructor anymore because of shop folder in redux 
  class ShopPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

  */

  