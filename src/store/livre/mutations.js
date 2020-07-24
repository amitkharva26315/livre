export function someMutation (/* state */) {
    console.log("someMutation");
}
export const addCountry = (state, newCountry) => {
    state.countries = newCountry
  }
// export function getCountries ({state}) {
//     return state.countries;
// }
export const updateCountries = (state, opened) => {
    state.countries = opened
  }
  
export const updateDrawerState = (state, opened) => {
    state.drawerState = opened
  }