import { useDispatch, useSelector } from "react-redux";
import { clearSelectedProducts, setProducts } from "../Store";

export const useUpdateProducts = () => {
    const { product } = useSelector(state => state.updateHandler);

    const dispatch = useDispatch();

    const updateProduct = (product) => {
        dispatch(setProducts(product));
    }

    const ClearProduct = () => {
        dispatch(clearSelectedProducts());
    }


    return {
        product,

        updateProduct,
        ClearProduct
    }
}