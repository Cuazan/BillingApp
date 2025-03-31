import { useDispatch, useSelector } from "react-redux";
import { onCloseModalOpen, onOpenAddProductModal, onOpenUpdateProductModal, onCloseUpdateModalOpen, onOpenDeleteProductModal, onCloseDeleteModalOpen } from "../Store";

export const  useUiStore = () =>{
    const { isAddProductModalOpen } = useSelector(state => state.ui);
    const { isUpdateProductModalOpen} = useSelector(state => state.updateModal);
    const { isDeleteProductModalOpen} = useSelector( state => state.deleteModal);

    const dispatch = useDispatch();

    const OpenModal = () =>{
        dispatch(onOpenAddProductModal());
    }

    const CloseModal = () => {
        dispatch(onCloseModalOpen());
    }

    const OpenUpdateModal = () =>{
        dispatch(onOpenUpdateProductModal());
    }

    const CloseUpdateModalOpen = () =>{
        dispatch(onCloseUpdateModalOpen());
    }

    const OpenDeleteModal = () =>{
        dispatch(onOpenDeleteProductModal());
    }

    const CloseDeleteModalOpen = () =>{
        dispatch(onCloseDeleteModalOpen());
    }

    return{
        isAddProductModalOpen,
        isUpdateProductModalOpen,
        isDeleteProductModalOpen,

        OpenModal,
        CloseModal,
        OpenUpdateModal,
        CloseUpdateModalOpen,
        OpenDeleteModal,
        CloseDeleteModalOpen

    }
}
