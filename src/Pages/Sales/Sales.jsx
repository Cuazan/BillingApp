import { useState, useEffect } from "react";
import { GetSales } from "../../Requester";

export function Sales() {

  const [sales, setsales] = useState([]);

  const getSales = async () => {
    try {
      const response = await GetSales();
      setsales(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSales();
  }, [])




  const HTMLsales = sales.map((sale) => {
    return (
      <tr key={sale.id}>
        <td scope="col">{sale.id}</td>
        <td scope="col">{sale.customerName}</td>
        <td scope="col">${sale.amountPaid}</td>
        <td scope="col">{sale.date}</td>        
      </tr>
    )
  })

  return (
    <>
      <div className="btn i-button m-3" onClick={getSales}><i className="fa-solid fa-rotate-right"></i></div>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Amount Paid</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">

            {HTMLsales}

          </tbody>
        </table>
      </div>
    </>
  )
}