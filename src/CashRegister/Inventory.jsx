import { useState, useEffect } from "react";
import { useUiStore } from "../Hooks";
import { GetProductsFiltered } from "../Requester";
import "./Inventory.css"
import { useCashRegisterHandler } from "../Hooks/useCashRegisterHandler";




export function AddProductToSell() {

    const [products, useProducts] = useState([]);
    const [quantity, useQuantity] = useState(0);
    const [productToSave, useProductToSave] = useState({
        title: "",
        id: "",
        quantity: 0,
        pricePerUnit: "",
        subtotal: 0
    })

    const { isAddProductModalOpen, CloseModal } = useUiStore();

    const { AddProduct } = useCashRegisterHandler();

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

    useEffect(() => {
        if (productToSave.id && productToSave.quantity) {
            AddProduct(productToSave);
            console.log(productToSave);
        }
        useQuantity(0)
    }, [productToSave])

    function SetQuantity(e) {
        useQuantity(e.target.value)
    }

    function SaveAddProduct(product) {
        useProductToSave({
            title: product.title,
            id: product.id,
            quantity: quantity,
            pricePerUnit: product.price,
            subtotal: quantity * product.price
        })
    }

    const HTMLproducts = (
        <div className="container pt-0">
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
                                <a className="btn btn-primary mt-auto" onClick={() => SaveAddProduct(product)}>Add</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <>

                {HTMLproducts}



        </>
    )
}