import { useEffect, useState } from "react";
import { GetProducts } from "../../Requester";
import "./Inventory.css"
import {AddProductModal, DeletePrpductModal, UpdateProductModal} from "./Modals"
import { useUiStore, useUpdateProducts } from "../../Hooks";


export function Inventory() {
  const [products, useProducts] = useState([]);

  const {OpenAddProductModal}=useUiStore();
  const {OpenUpdateProductModal} = useUiStore();
  const {OpenDeleteProduct} = useUiStore();
  const {updateProduct} = useUpdateProducts();

  const getProds = async () => {
    try {
      const response = await GetProducts();
      useProducts(response.products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProds();
  }, [])

  function UpdateProducts(product) {
    updateProduct(product);
    OpenUpdateProductModal();    
  }

  function DeleteProducts(product){
    updateProduct(product);
    OpenDeleteProduct();
  }


  const HTMLproducts = products.map((product) => {
    return (
      <tr key={product.id}>
        <td scope="col">{product.id}</td>
        <td scope="col">{product.title}</td>
        <td scope="col">{product.category}</td>
        <td scope="col">{product.stock}</td>
        <td scope="col">{product.warrantyInformation}</td>
        <td scope="col">{product.sku}</td>
        <td><button className="btn" onClick={()=>UpdateProducts(product)}><i className=" fa-solid fa-pen-to-square"></i></button></td>
        <td><button className="btn" onClick={()=>DeleteProducts(product)}><i className=" fa-solid fa-trash"></i></button></td>
      </tr>
    )
  })

  return (
    <>  
    <div className="btn i-button m-3" onClick={OpenAddProductModal}>Add Product</div>
    <div className="btn i-button m-3" onClick={getProds}><i className="fa-solid fa-rotate-right"></i></div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Stock</th>
            <th scope="col">Expiration date</th>
            <th scope="col">Provider</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">

            {HTMLproducts}

        </tbody>
      </table>
      <AddProductModal></AddProductModal>
      <UpdateProductModal></UpdateProductModal>
      <DeletePrpductModal></DeletePrpductModal>
    </>
  );
}
