

interface DataToSaveInLocal{
    value: string | number | object, 
    expiry: number
}


// const allCountries = () => {
//     const unfiltered = getCountries();
//     const filteredCountries = unfiltered.map(country => {
//         return{
//             value: country.name,
//             name: country.name
//         }
//     })
//     return filteredCountries
// }

// const getStatesFromCountry = (country) => {
//     const allCountries = getCountries() 
//     const theCountry = allCountries.find(count => count.name == country)
//     const allStates = getStates(theCountry.code)
//     const filteredState =  allStates.map(state => {
//        return{
//             value: state, 
//             name: state
//        }
//     })

//     return filteredState
// }

// const handleErrorResponse = (err, dispatch) => {
//     if(err.response){
//         dispatch(showAlert({
//             status: "error",
//             message: err.response.data.message
//         }))
//     }else{
//         dispatch(showAlert({
//             status: "error", 
//             message: "An error occured, try again"
//         }))
//     }
// }

const setInLocalStorage = (key: string, value: string, expiryTimeInMillSec: number)=>{
    const now = new Date();
    const expiry = now.getTime() + expiryTimeInMillSec
    let item = {
        value, 
        expiry
    };
    localStorage.setItem(key, JSON.stringify(item))
}

const getInLocalStorage = (key: string) => {
    let item: any  = localStorage.getItem(key)
    if(!item) return null
    item = JSON.parse(item)
    const now = new Date()
    if(now.getTime() > item.expiry){
        localStorage.removeItem(key)
        return null
    }
    return item.value
}

// const draftingQueryStrings = (queryString) =>{
//     let allQuery = queryString.split("&")
//     const splittedQuery = allQuery.map(query => {
//         const splitQuery = query.split("=")
//         if(splitQuery[0].startsWith("?")) {
//             splitQuery[0] = splitQuery[0].substr(1)
//         }
//         return{
//             key: splitQuery[0], 
//             value: splitQuery[1]
//         }
//     })

//     return splittedQuery
// }

// const routerOnLogin = (userData) => {
//     let routeToFollow = '/dashboard';
//     if(userData.role == "admin"){
//         routeToFollow = "/admin"
//     }
//     return routeToFollow
// }

// const getDateDifference = (date1,date2 ) => {
//     const theDate1= new Date(date1);
//     const theDate2 = new Date(date2);
//     const diffTime = Math.abs(theDate1 - theDate2);
//     const diffDays = diffTime / (1000 * 60 * 60 * 24); 
//     return diffDays
// }

// const getYield = (plan, dueDate, confirmationDate) => {
//     let totalYieldForPlan = (parseFloat(plan.percentageIncrease)/100 )
//         * parseFloat(plan.amount)
//     // Since the days are varying, we need to get the date difference for a particular investment
//     let dateDifferenceForInvestment = getDateDifference(dueDate, confirmationDate)



//     //Get the yield per day
//     let yieldPerDay = totalYieldForPlan/dateDifferenceForInvestment

//     // Compute Recent yeild for precent day
//     let dayDifferenceToPresent = null
//     if( new Date() - new Date(dueDate) > 0 ){
//         dayDifferenceToPresent = getDateDifference(confirmationDate, dueDate)
//     }else{
//         dayDifferenceToPresent = getDateDifference(confirmationDate, new Date())
//     }

//     const presentYield = yieldPerDay * dayDifferenceToPresent

//     return presentYield

// }

export {
    // allCountries, 
    // getStatesFromCountry, 
    // handleErrorResponse, 
    setInLocalStorage, 
    getInLocalStorage, 
    // draftingQueryStrings, 
    // routerOnLogin, 
    // getDateDifference, 
    // getYield
}





