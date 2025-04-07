import { useState, useEffect } from "react";
import { DeleteCustomer, GetCustomers } from "../../Requester";

export function Customers() {

  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    try {
      const response = await GetCustomers();
      setCustomers(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCustomers();
  }, [])

  function DeleteCustomers(customer){
    DeleteCustomer(customer.id)
  }


  const HTMLcustomers = customers.map((customer) => {
    return (
      <tr key={customer.id}>
        <td scope="col">{customer.id}</td>
        <td scope="col">{customer.name}</td>
        <td scope="col">{customer.email}</td>
        <td scope="col">{customer.phone}</td>        
        <td><button className="btn" onClick={() => DeleteCustomers(customer)}><i className=" fa-solid fa-trash"></i></button></td>
      </tr>
    )
  })

  return (
    <>
      <div className="btn i-button m-3" onClick={getCustomers}><i className="fa-solid fa-rotate-right"></i></div>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">

            {HTMLcustomers}

          </tbody>
        </table>
      </div>
    </>
  )
}