import { useDispatch, useSelector } from "react-redux";
import { onCloseModalOpen, onOpenAddProductModal, onOpenUpdateProductModal, onCloseUpdateModalOpen } from "../Store";

export const  useUiStore = () =>{
    const { isAddProductModalOpen } = useSelector(state => state.ui);
    const { isUpdateProductModalOpen} = useSelector(state => state.updateModal)

    const dispatch = useDispatch();

    const OpenAddProductModal = () =>{
        dispatch(onOpenAddProductModal());
    }

    const CloseModal = () => {
        dispatch(onCloseModalOpen());
    }

    const OpenUpdateProductModal = () =>{
        dispatch(onOpenUpdateProductModal());
    }

    const CloseUpdateModalOpen = () =>{
        dispatch(onCloseUpdateModalOpen());
    }

    return{
        isAddProductModalOpen,
        isUpdateProductModalOpen,

        OpenAddProductModal,
        CloseModal,
        OpenUpdateProductModal,
        CloseUpdateModalOpen

    }
}
