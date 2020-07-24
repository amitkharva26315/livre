export function someAction (/* context */) {
    console.log('someAction');
}

export function addCountry(commit,newCountry){
// addCountry ({ commit }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            commit('addCountry',newCountry)
            resolve()
        }, 1000)
    })
}

export function getcountries (state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(state.countries);
        }, 1000)
    })
}

// checkout ({ commit, state }, products) {
//     // save the items currently in the cart
//     const savedCartItems = [...state.cart.added]
//     // send out checkout request, and optimistically
//     // clear the cart
//     commit(types.CHECKOUT_REQUEST)
//     // the shop API accepts a success callback and a failure callback
//     shop.buyProducts(
//       products,
//       // handle success
//       () => commit(types.CHECKOUT_SUCCESS),
//       // handle failure
//       () => commit(types.CHECKOUT_FAILURE, savedCartItems)
//     )
//   }