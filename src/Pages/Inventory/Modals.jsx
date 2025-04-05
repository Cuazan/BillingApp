import Modal from "react-modal";
import "./Modal.css"
import { useUiStore, useUpdateProducts } from "../../Hooks";
import { PostItem } from '../../Requester'
import { useState, useEffect } from "react";

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
    const [price, setPrice] = useState('');
    const [provider, setProvider] = useState('');    
    const [id, setID] = useState('');

    const { isAddProductModalOpen, CloseModal } = useUiStore();

    function PostElement(e) {
        e.preventDefault();
        PostItem({ id, name, category, stock, price, provider });
        console.log('Product added');
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
                <h2>Add Product</h2>
                <hr></hr>
                <form className="m-3" onSubmit={PostElement}>
                <div className="mb-4">
                        <label htmlFor="name" className="form-label">ID</label>
                        <input type="text" className="form-control" id="name" onChange={(e) => setID(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className="form-label">Category</label>
                        <input type="text" className="form-control" id="category" onChange={(e) => setCategory(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="stock" className="form-label">Stock</label>
                        <input type="text" className="form-control" id="stock" onChange={(e) => setStock(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="text" className="form-control" id="price" onChange={(e) => setPrice(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="provider" className="form-label">Provider</label>
                        <input type="text" className="form-control" id="provider" onChange={(e) => setProvider(e.target.value)} required />
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-danger mt-2" onClick={CloseModal}>Cancel</button>
                        <button type="submit" className="btn btn-primary mt-2">Accept</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export function UpdateProductModal() {
    const { isUpdateProductModalOpen, CloseUpdateModalOpen } = useUiStore();
    const { product } = useUpdateProducts();

    const [formValues, setFormValues] = useState({
        name: "",
        category: "",
        stock: "",
        price: "",
        provider: "",
    });

    useEffect(() => {
        if (product) {
            setFormValues({
                name: product.name || "",
                category: product.categoryId || "",
                stock: product.stock || "",
                price: product.price || "",
                provider: product.providerId || "",
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

    function UpdateElement(e) {
        e.preventDefault();
        console.log(formValues);
        CloseUpdateModalOpen();
    }

    return (
        <Modal
            isOpen={isUpdateProductModalOpen}
            onRequestClose={CloseUpdateModalOpen}
            style={customStyles}
            closeTimeoutMS={200}
        >
            <h2>Update Product</h2>
            <hr />
            <form className="m-3" onSubmit={UpdateElement}>
                <div className="mb-4">
                    <label htmlFor="name" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formValues.name} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input type="text" className="form-control" id="category" name="category" value={formValues.category} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="stock" className="form-label">Stock</label>
                    <input type="text" className="form-control" id="stock" name="stock" value={formValues.stock} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="text" className="form-control" id="price" name="price" value={formValues.price} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="provider" className="form-label">Provider</label>
                    <input type="text" className="form-control" id="provider" name="provider" value={formValues.provider} onChange={handleChange} required />
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-danger mt-2" onClick={CloseUpdateModalOpen}>Cancel</button>
                    <button type="submit" className="btn btn-primary mt-2">Accept</button>
                </div>
            </form>
        </Modal>
    );
}

export function DeletePrpductModal() {
    const { isDeleteProductModalOpen, CloseDeleteModalOpen } = useUiStore();
    const { product } = useUpdateProducts();

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