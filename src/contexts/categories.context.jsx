import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
//import SHOP_DATA from '../shop-data.js';
//import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    
    //run this effect to store data once in firebase
    /* useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA);
    })*/

    //to fetch data from firebase
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');
            //console.log(categoryMap);
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    },[]);

    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
};