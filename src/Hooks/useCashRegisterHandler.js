import { useDispatch, useSelector } from "react-redux";
import { addProd, removeProd } from "../Store";


export const useCashRegisterHandler = () =>{
    const { libraries } = useSelector(state => state.productHandler);

    const dispatch = useDispatch();

    const AddProduct = (prod) =>{
        dispatch(addProd(prod));
    }

    const RemoveProduct = (prod) => {
        dispatch(removeProd(prod));
    }

    return{
        libraries,

        AddProduct,
        RemoveProduct
    }
}