import { useDispatch, useSelector } from "react-redux";
import { addProd } from "../Store";


export const useCashRegisterHandler = () =>{
    const { libraries } = useSelector(state => state.productHandler);

    console.log(libraries);

    const dispatch = useDispatch();

    const AddProduct = (prod) =>{
        dispatch(addProd(prod));
    }

    return{
        libraries,

        AddProduct
    }
}