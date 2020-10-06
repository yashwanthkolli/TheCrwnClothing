import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectonsLoaded } from '../../Redux/Shop/ShopSelector';
import withSpinner from '../../Components/withSpinner/withSpinner';
import CollectionPage from './Collection';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectonsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionPage)

export default CollectionPageContainer