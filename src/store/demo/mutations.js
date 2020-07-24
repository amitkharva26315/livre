/*
export function someMutation (state) {
}
*/
export const updateDrawerState = (state, opened) => {
    state.drawerState = opened
}

// export const getCountries = (state, opened) => {
//     state.drawerState = opened
// }

export const addCountry = (state, item) => {
    state.countries.push(item);//{"id":state.countries.length+1,"name":item}
}

export const updateCountries = (state, items) => {
    state.countries = items;
}