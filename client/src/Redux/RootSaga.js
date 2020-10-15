import { all, call } from 'redux-saga/effects';

import { cartSaga } from './Cart/CartSagas';
import { shopSagas } from './Shop/ShopSagas';
import { userSagas } from './User/UserSagas'

export default function* rootSaga() {
    yield all([
        call(shopSagas),
        call(userSagas),
        call(cartSaga)
    ])
}