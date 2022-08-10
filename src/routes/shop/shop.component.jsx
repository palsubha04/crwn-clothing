import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import CategoriesPrview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { setCategories } from '../../store/categories/category.action';

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments('categories');
            //console.log(categoriesArray);
            dispatch(setCategories(categoriesArray));
        };
        getCategoriesMap();
    },[]);


    return (
        <Routes>
            <Route index element={<CategoriesPrview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
};

export default Shop;