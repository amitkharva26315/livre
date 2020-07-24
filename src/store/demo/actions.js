import axios from 'axios'
/*
export function someAction (context) {
}
*/

export const updateDrawerState = ({commit}, data) => {
    commit('updateDrawerState', data)
}
// async testUpdate(ctx) {
// export const getCountries = ({state}, data) => {
export function getCountries (context, data) {
    let {state,commit} = context;
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            let temp = data.url.split('/');
            let routeName = temp[temp.length - 1];
            console.log(routeName,state[routeName]);
            if(state[routeName] && state[routeName].length>0){
                resolve(state.countries)
            }
            else{
                console.log("axios call...");
                axios
                    .get('http://localhost:3000/'+routeName)
                    .then(function(results){
                        let response = results.data;
                        console.log(response);
                        commit('updateCountries',response);
                        resolve(response);
                    })
                    .catch(function(e){
                        console.log(e)
                        // console.log("Error: " + e.response.status)
                        reject(e)
                    })
            }
        }, 1000)
    })
}

export const addCountry = ({commit}, data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            axios
                .post('http://localhost:3000/countries',{"name":data})
                .then(function(result){
                    let response = result.data;
                    console.log(response);
                    commit('addCountry', response)
                    resolve()
                })
                .catch(function(e){
                    console.log(e)
                    // console.log("Error: " + e.response.status)
                    reject(e)
                })
        }, 1000)
    })
}

export const updateCountries = ({commit}, data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            axios
                .get('http://localhost:3000/countries')
                .then(function(results){
                    let response = results.data;
                    console.log(response);
                    commit('updateCountries',response);
                    resolve(response);
                })
                .catch(function(e){
                    console.log(e)
                    // console.log("Error: " + e.response.status)
                    reject(e)
                })
        }, 1000)
    })
}