import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoriesPrview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { fetchCategoriesStartAsync } from '../../store/categories/category.action';

const Shop = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchCategoriesStartAsync());
    },[]);


    return (
        <Routes>
            <Route index element={<CategoriesPrview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
};

export default Shop;