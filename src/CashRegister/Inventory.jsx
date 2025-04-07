import { useState, useEffect } from "react";
import { GetProducts } from "../Requester";
import { useCashRegisterHandler } from "../Hooks/useCashRegisterHandler";

export function AddProductToSell() {
    const [products, useProducts] = useState([]);
    const [quantity, useQuantity] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    const { libraries, AddProduct } = useCashRegisterHandler();

    const [productToSave, useProductToSave] = useState({
        title: "",
        id: "",
        quantity: 0,
        pricePerUnit: "",
        subtotal: 0
    });

    const getProds = async () => {
        try {
            const response = await GetProducts();
            useProducts(response);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getProds();
    }, []);

    useEffect(() => {
        if (productToSave.id && productToSave.quantity>0 && productToSave.quantity <= productToSave.maxStock) {
            const matches = libraries.filter(prod => prod.id === productToSave.id);

            if (matches.length === 0) {
                AddProduct(productToSave);
            } 
        }
        useQuantity(0);
    }, [productToSave]);

    function SetQuantity(e) {
        useQuantity(e.target.value);
    }

    function SaveAddProduct(product) {
        useProductToSave({
            title: product.name,
            id: product.id,
            quantity: parseInt(quantity),
            pricePerUnit: product.price,
            maxStock: product.stock,
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
                    type="text"
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
                                <img src={product.imageUrl} className="card-img-top border" alt={product.title} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p>${product.price}</p>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Quantity</span>
                                        <input type="number" className="form-control" onChange={SetQuantity}></input>
                                    </div>
                                    <p>Max: {product.stock}</p>
                                    <a className="btn btn-primary mt-auto addProd" onClick={() => SaveAddProduct(product)}>Add</a>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
