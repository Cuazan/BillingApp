import { useState, useEffect } from "react";
import { GetProducts } from "../Requester";
import { useCashRegisterHandler } from "../Hooks/useCashRegisterHandler";

export function AddProductToSell() {
    const [products, useProducts] = useState([]);
    const [quantity, useQuantity] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    const [productToSave, useProductToSave] = useState({
        title: "",
        id: "",
        quantity: 0,
        pricePerUnit: "",
        subtotal: 0
    });

    const { AddProduct } = useCashRegisterHandler();

    useEffect(() => {
        const getProds = async () => {
            try {
                const response = await GetProducts();
                useProducts(response.products);
            } catch (error) {
                console.log(error);
            }
        };
        getProds();
    }, []);

    useEffect(() => {
        if (productToSave.id && productToSave.quantity) {
            AddProduct(productToSave);
            console.log(productToSave);
        }
        useQuantity(0);
    }, [productToSave]);

    function SetQuantity(e) {
        useQuantity(e.target.value);
    }

    function SaveAddProduct(product) {
        useProductToSave({
            title: product.title,
            id: product.id,
            quantity: quantity,
            pricePerUnit: product.price,
            subtotal: quantity * product.price
        });
    }

    function handleSearchChange(e) {
        setSearchTerm(e.target.value);
    }

    return (
        <div className="container pt-0">
            <div className="mb-3">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Search by code"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="row d-flex">
                {products
                    .filter((product) =>
                        product.id.toString().includes(searchTerm)
                    )
                    .map((product) => (
                        <div className="col-md-3 col-6 mb-3" key={product.id}>
                            <div className="card h-100 p-2">
                                <img src={product.images} className="card-img-top border" alt={product.title} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p>${product.price}</p>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Quantity</span>
                                        <input type="number" className="form-control" onChange={SetQuantity}></input>
                                    </div>
                                    <a className="btn btn-primary mt-auto addProd" onClick={() => SaveAddProduct(product)}>Add</a>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
