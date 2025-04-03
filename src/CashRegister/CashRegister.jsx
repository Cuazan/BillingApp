import './CashRegister.css';
import { AddProductToSell } from './Modal';
import { useUiStore } from '../Hooks';
import { useCashRegisterHandler } from '../Hooks/useCashRegisterHandler';
import { useEffect, useState } from 'react';

export function CashRegister() {

    const [receivedProduct, useReceivedProduct] = useState([])

    const { OpenModal } = useUiStore();
    const { libraries } = useCashRegisterHandler()

    useEffect(() => {
        if (libraries) {

            useReceivedProduct(libraries);

            console.log(libraries)

        }
    }, [libraries])


    const HTMLproducts = receivedProduct.map((product) => {
        return (
            <div key={product.id} className="border">
                <h5>{product.title}</h5>
                <p>ID: {product.id}</p>
                <div className="d-flex justify-content-between mr-5 p-0 m-0">
                    <h5>{product.quantity}</h5>
                    <h5>${product.pricePerUnit}</h5>
                    <h5>${product.subtotal}</h5>
                </div>
            </div>
        )
    })

    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg nav-box m-0">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="m-3">
                            <button className="addCustomer btn" >
                                Add Customer
                            </button>
                        </li>
                    </ul>
                    <button className="btn" id="logout" >Logout <i className="fa-solid fa-right-from-bracket"></i> </button>
                </div>
            </nav>

            <div className="row border border-primary mt-3">
                <div className="col-12 col-lg-8 border p-5">
                    <button className="btn prods m-3" onClick={OpenModal}>Just Testing</button>
                    <button className="btn prods m-3" >Just Testing</button>
                    <button className="btn prods m-3" >Just Testing</button>
                    <button className="btn prods m-3" >Just Testing</button>
                </div>
                <div className="thisSale col-12 col-lg-4 border border-danger">
                    <div className="card">
                        {HTMLproducts}
                    </div>
                </div>
            </div>
            <AddProductToSell></AddProductToSell>
        </div>
    )
}