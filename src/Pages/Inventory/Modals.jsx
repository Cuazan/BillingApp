import Modal from "react-modal";
import "./Modal.css"
import { useUiStore, useUpdateProducts } from "../../Hooks";
import { PostItem } from '../../Requester'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { updateProduct } from "../../Store";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        padding: '30px'
    }
};

Modal.setAppElement('#root');

export function AddProductModal() {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');
    const [expDate, setExpDate] = useState('');
    const [provider, setProvider] = useState('');

    const { isAddProductModalOpen } = useUiStore();
    const { CloseModal } = useUiStore();

    function Name(e) {
        setName(e.target.value);
    }

    function Category(e) {
        setCategory(e.target.value);
    }

    function Stock(e) {
        setStock(e.target.value);
    }

    function ExpirationDate(e) {
        setExpDate(e.target.value);
    }

    function Provider(e) {
        setProvider(e.target.value);
    }

    function PostElement() {
        PostItem({ name });
        console.log('hola');
        CloseModal();
    }


    return (
        <>
            <Modal
                isOpen={isAddProductModalOpen}
                onRequestClose={CloseModal}
                style={customStyles}
                closeTimeoutMS={200}
            >
                <h2>Add item</h2>
                <hr></hr>
                <form className="m-3">
                    <div className="mb-4">
                        <label
                            htmlFor="Item"
                            className="form-label"
                        >
                            Item
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="Item"
                            onChange={Name}
                        ></input>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="inputPassword"
                            className=" form-label"
                        >
                            Category
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputPassword"
                            onChange={Category}
                        ></input>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="Stock"
                            className=" form-label"
                        >
                            Stock
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="Stock"
                            onChange={Stock}
                        ></input>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="ExpirationDate"
                            className=" form-label"
                        >
                            Expiration Date
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="ExpirationDate"
                            onChange={ExpirationDate}
                        ></input>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="Provider"
                            className=" form-label"
                        >
                            Provider
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="Provider"
                            onChange={Provider}
                        ></input>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-danger mt-2" onClick={CloseModal}>
                            Cancel
                        </button>
                        <button type="button" id="accept" className="btn btn-primary mt-2" onClick={PostElement}>
                            Accept
                        </button>
                    </div>
                </form>
            </Modal>

        </>
    )
}

export function UpdateProductModal() {
    const { isUpdateProductModalOpen, CloseUpdateModalOpen } = useUiStore();
    const { product } = useUpdateProducts(); 
    
    const [formValues, setFormValues] = useState({
        title: "",
        category: "",
        stock: "",
        expirationDate: "",
        provider: "",
    });

    useEffect(() => {
        if (product) {
            setFormValues({
                title: product.title || "",
                category: product.category || "",
                stock: product.stock || "",
                expirationDate: product.warrantyInformation || "",
                provider: product.sku || "",
            });
        }
    }, [product]);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

     function UpdateElement(product) {
        console.log(product)
    }

    return (
        <Modal
            isOpen={isUpdateProductModalOpen}
            onRequestClose={CloseUpdateModalOpen}
            style={customStyles}
            closeTimeoutMS={200}
        >
            <h2>Update Item</h2>
            <hr />
            <form className="m-3">
                <div className="mb-4">
                    <label htmlFor="title" className="form-label">Item Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={formValues.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input
                        type="text"
                        className="form-control"
                        id="category"
                        name="category"
                        value={formValues.category}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="stock" className="form-label">Stock</label>
                    <input
                        type="text"
                        className="form-control"
                        id="stock"
                        name="stock"
                        value={formValues.stock}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="expirationDate" className="form-label">Expiration Date</label>
                    <input
                        type="text"
                        className="form-control"
                        id="expirationDate"
                        name="expirationDate"
                        value={formValues.expirationDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="provider" className="form-label">Provider</label>
                    <input
                        type="text"
                        className="form-control"
                        id="provider"
                        name="provider"
                        value={formValues.provider}
                        onChange={handleChange}
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-danger mt-2" onClick={CloseUpdateModalOpen}>
                        Cancel
                    </button>
                    <button type="button" className="btn btn-primary mt-2" onClick={()=> UpdateElement(formValues)}>
                        Accept
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export function DeletePrpductModal() {
    const { isDeleteProductModalOpen } = useUiStore();
    const { CloseDeleteModalOpen } = useUiStore();

    const{ product } = useUpdateProducts();

    const prodId = product.id;

    function Delete() {
        console.log(prodId);
        CloseDeleteModalOpen();
    }

    return (
        <>
            <Modal
                isOpen={isDeleteProductModalOpen}
                onRequestClose={CloseDeleteModalOpen}
                style={customStyles}
                closeTimeoutMS={200}
            >
                <h2>Delete Item</h2>
                <hr></hr>
                <form className="m-3">
                    <h5>Are you sure you wish to delete {product.title}?</h5>
                    <div className="d-flex justify-content-between mt-3">
                        <button type="button" className="btn btn-danger mt-2" onClick={CloseDeleteModalOpen}>
                            Cancel
                        </button>
                        <button type="button" id="accept" className="btn btn-primary mt-2" onClick={Delete}>
                            Accept
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    )
}