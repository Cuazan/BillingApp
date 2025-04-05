import './CashRegister.css';
import { AddProductToSell } from './Inventory';
import { useUiStore } from '../Hooks';
import { useCashRegisterHandler } from '../Hooks/useCashRegisterHandler';
import { useEffect, useState } from 'react';
import { AddCustomerModal } from './AddCustomerModal';
import { useNavigate } from 'react-router-dom';

export function CashRegister() {

    const [receivedProduct, useReceivedProduct] = useState([])
    const [total, useTotal] = useState(0);
    const [customerID, useCustomerID] = useState(0);
    const navigation = useNavigate();

    const Logut  = () =>{
        navigation( '/', {replace : true})
    }

    console.log(customerID);

    const { OpenModal } = useUiStore();
    const { libraries, RemoveProduct } = useCashRegisterHandler()

    useEffect(() => {
        if (libraries) {

            useReceivedProduct(libraries);

            let newTotal = 0;
            for (let i = 0; i < libraries.length; i++) {
                newTotal += parseFloat(libraries[i].subtotal || 0);
            }
            useTotal(newTotal);
        }
    }, [libraries])

    function ProductToRemove(product) {
        RemoveProduct(product);
    }


    const HTMLproducts = receivedProduct.map((product) => {
        return (
            <div key={product.id} className="border-bottom p-3 item">
                <div className="d-flex justify-content-between">
                    <h5>{product.title}</h5>
                    <span><button className="btn rounded-circle eliminateProd" onClick={() => ProductToRemove(product.id)}><i className="fa-regular fa-circle-xmark"></i> </button></span>
                </div>
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
        <div className="container-fluid pageBody p-0">
            <nav className="navbar navbar-expand-lg nav-box m-0">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="m-3">
                            <button className="addCustomer btn" onClick={OpenModal} >
                                Add Customer
                            </button>
                        </li>
                    </ul>
                    <button className="btn" id="logout" onClick={Logut} >Logout <i className="fa-solid fa-right-from-bracket"></i> </button>
                </div>
            </nav>

            <div className="row mt-3">
                <div className="col-12 col-lg-8 pt-3 ">

                    <AddProductToSell></AddProductToSell>
                </div>
                <div className="thisSale col-12 col-lg-4 pt-3 pb-5">
                    <div className="card showProducts rounded-top">
                        <div className="input-group mb-2">
                            <span className="input-group-text">Customer ID</span>
                            <input type="number" className="form-control" onChange={(e) => useCustomerID(e.target.value)}></input>
                        </div>
                        {HTMLproducts}
                    </div>
                    <div className="toPay p-3 ">
                        <h5 className="mb-0">Total: ${total.toFixed(2)}</h5>
                        <button className="payButton btn">Pay<span><i className="fa-solid fa-dollar-sign ms-3"></i></span></button>
                    </div>
                </div>
            </div>
            <AddCustomerModal></AddCustomerModal>
        </div>
    )
}