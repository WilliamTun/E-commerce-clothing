import { createSelector } from 'reselect';


/* Works if data is stored in an array...
// url is a string.. eg. /hat
// but in the shop.data.js file
// the id is a number...
// so this is a MAP of string to number
const COLLECTION_ID_MAP = {
    hats: 1, 
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}
*/

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

// select to convert object into an array
export const selectorCollectionsForPreview = createSelector(
    [selectCollections],
    // return keys from collection as an array + map over array of keys to get value
    collections => Object.keys(collections).map(key => collections[key]) 
)



// select collections
// and pass into the select the url parameters which is a string
// and return a curried function (function that returns a function)
// takes the state and does a transformation.
// lecture 139:
// https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15175872#overview
export const selectCollection = collectionUrlParam => 
createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
    
    // -> works if data is stored in an array
    //collections => collections.find(
    //    collection => 
    //    collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    //    )
);