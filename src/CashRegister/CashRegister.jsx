import './CashRegister.css';
import { AddProductToSell } from './Modal';
import { useUiStore } from '../Hooks';
import { useCashRegisterHandler } from '../Hooks/useCashRegisterHandler';
import { useEffect, useState } from 'react';

export function CashRegister() {

    const [receivedProduct, useReceivedProduct] = useState([])
    const [total, useTotal] = useState(0);

    const { OpenModal } = useUiStore();
    const { libraries } = useCashRegisterHandler()

    useEffect(() => {
        if (libraries) {

            useReceivedProduct(libraries);

            console.log(libraries)

            let newTotal = 0;
            for (let i = 0; i < libraries.length; i++) {
                newTotal += parseFloat(libraries[i].subtotal || 0);
            }
            useTotal(newTotal);
        }
    }, [libraries])


    const HTMLproducts = receivedProduct.map((product) => {
        return (
            <div key={product.id} className="border-bottom p-3 item">
                <h5>{product.title}</h5>
                <p>ID: {product.id}</p>
                <div className="d-flex justify-content-between mr-5 p-0 m-0">
                    <h5>Qtt: {product.quantity}</h5>
                    <h5>P/U: ${product.pricePerUnit}</h5>
                    <h5>Subtotal: ${product.subtotal}</h5>
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

            <div className="row mt-3">
                <div className="col-12 col-lg-8 pt-3 ps-5">
                    <button className="btn prods m-3" onClick={OpenModal}>Just Testing</button>
                    <button className="btn prods m-3" >Just Testing</button>
                    <button className="btn prods m-3" >Just Testing</button>
                    <button className="btn prods m-3" >Just Testing</button>
                </div>
                <div className="thisSale col-12 col-lg-4 pt-3 pb-5 pe-5">
                    <div className="card showProducts rounded-top">
                        {HTMLproducts}
                    </div>


                    <div className="toPay p-3 ">
                        <h5 className="mb-0">Total: ${total}</h5>
                    </div>
                </div>
            </div>
            <AddProductToSell></AddProductToSell>
        </div>
    )
}