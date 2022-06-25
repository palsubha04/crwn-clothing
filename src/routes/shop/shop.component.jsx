import { Route, Routes } from 'react-router-dom';
import CategoriesPrview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPrview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
};

export default Shop;