import Modal from "react-modal";
import { useState, useEffect } from "react";
import { useUiStore } from "../Hooks";
import { GetProductsFiltered } from "../Requester";
import "./Modal.css"
import { useCashRegisterHandler } from "../Hooks/useCashRegisterHandler";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '90vw',
        maxWidth: '1200px',
        height: '80vh',
        padding: '30px',
        overflow: 'auto'
    }
};

Modal.setAppElement('#root');

export function AddProductToSell() {

    const [products, useProducts] = useState([]);
    const [quantity, useQuantity] = useState(0);
    const [productToSave, useProductToSave] = useState({
        title:"",
        id: "",
        quantity: 0,
        pricePerUnit: "",
        subtotal: 0
    })

    const { isAddProductModalOpen, CloseModal } = useUiStore();

    const {AddProduct} = useCashRegisterHandler();

    const getProds = async () => {
        try {
            const response = await GetProductsFiltered();
            useProducts(response.products)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProds();
    }, [])

    useEffect(()=>{
        AddProduct(productToSave);
        console.log(productToSave);
    },[productToSave])

    function SetQuantity(e){
        useQuantity(e.target.value)
    }

    function SaveAddProduct(product){
        useProductToSave({
            title: product.title,
            id: product.id,
            quantity: quantity,
            pricePerUnit: product.price,
            subtotal: quantity*product.price
        })
    }

    const HTMLproducts = (
        <div className="container">
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-3" key={product.id}>
                        <div className="card h-100 p-2">
                            <img src={product.images} className="card-img-top" alt={product.title} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.title}</h5>
                                <p>{product.price}</p>
                                <div className="input-group mb-2">
                                    <span className="input-group-text">Quantity</span>
                                    <input type="number" className="form-control" onChange={SetQuantity}></input>
                                </div>
                                <a className="btn btn-primary mt-auto" onClick={()=>SaveAddProduct(product)}>Add</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <>

            <Modal
                isOpen={isAddProductModalOpen}
                onRequestClose={CloseModal}
                style={customStyles}
                closeTimeoutMS={200}
            >
                {HTMLproducts}
                <div className="modal-footer">
                    <button className="btn btn-danger" onClick={CloseModal}>Cerrar</button>
                </div>

            </Modal>


        </>
    )
}