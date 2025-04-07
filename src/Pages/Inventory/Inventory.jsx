import { useEffect, useState } from "react";
import { GetProducts } from "../../Requester";
import "./Inventory.css"
import { AddProductModal, DeletePrpductModal, UpdateProductModal } from "./Modals"
import { useUiStore, useUpdateProducts } from "../../Hooks";


export function Inventory() {
  const [products, useProducts] = useState([]);

  const { OpenModal } = useUiStore();
  const { OpenUpdateModal } = useUiStore();
  const { OpenDeleteModal } = useUiStore();
  const { updateProduct } = useUpdateProducts();

  const getProds = async () => {
    try {
      const response = await GetProducts();
      useProducts(response)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getProds();
  }, [])

  function UpdateProducts(product) {
    updateProduct(product);
    OpenUpdateModal();
  }

  function DeleteProducts(product) {
    updateProduct(product);
    OpenDeleteModal();
  }


  const HTMLproducts = products.map((product) => {
    return (
      <tr key={product.id}>
        <td scope="col">{product.id}</td>
        <td scope="col"> <img src={product.imageUrl} className="img"></img></td>
        <td scope="col">{product.name}</td>
        <td scope="col">{product.categoryName}</td>
        <td scope="col">{product.stock}</td>
        <td scope="col">${product.price}</td>
        <td scope="col">{product.providerName}</td>
        <td><button className="btn" onClick={() => UpdateProducts(product)}><i className=" fa-solid fa-pen-to-square"></i></button></td>
        <td><button className="btn" onClick={() => DeleteProducts(product)}><i className=" fa-solid fa-trash"></i></button></td>
      </tr>
    )
  })

  return (
    <>
      <div className="btn i-button m-3" onClick={OpenModal}>Add Product</div>
      <div className="btn i-button m-3" onClick={getProds}><i className="fa-solid fa-rotate-right"></i></div>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th></th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Stock</th>
              <th scope="col">Price</th>
              <th scope="col">Provider</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">

            {HTMLproducts}

          </tbody>
        </table>
      </div>
      <AddProductModal></AddProductModal>
      <UpdateProductModal></UpdateProductModal>
      <DeletePrpductModal></DeletePrpductModal>
    </>
  );
}
