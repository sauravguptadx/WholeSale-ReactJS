import React, {Component} from 'react';
//import React from 'react';
import './Tables.css'
class OrdersTable extends Component{


        data = [
            [1, 3,  4, 100, 5000, 'Yes', 100,'2019-12-31 23:59:59'],
            [2, 2,  5, 56, 300,  'Yes',50,'2019-12-31 23:59:59'],
            [3, 4,  6, 265, 10000, 'No', 500,'2019-12-31 23:59:59'],
            [4, 6,  8, 82, 8000, 'Yes', 300,'2019-12-31 23:59:59'],
            [5, 3,  7, 343, 15000, 'No', 1000,'2019-12-31 23:59:59'],
            [6, 9,  2, 93, 10000, 'No', 600,'2019-12-31 23:59:59'],
          ];
    

    render() {
        return <div background-color='#F1F6F6'> 
         <h1 className = 'tableCustomer'> Orders Table </h1>
         <table border = '1'>
         
            <tr>
                <th>Order_id</th>
                <th>Customer_id</th>
                <th>Stock_id</th>
                <th>Quantity_ordered</th>
                <th>TotalPrice</th>
                <th>isPaid</th>
                <th>Pending</th>
                <th>Date_of_Delivery</th>
            </tr>

            <tbody>
            { 
                this.data.map((numList,i) =>(
                   <tr key={i}>
                    {
                      numList.map((num,j)=>
                         <td key={j}>{num}</td>
                      )
                    }
                   </tr>
                ))
            }
            </tbody>
         </table>
         <div id = 'bottompart'> 
                <h2 id = 'hInsert'> Insert </h2>
                <h2 id = 'hUpdate'> Update </h2>
                <h2 id = 'hDelete'> Delete </h2>
         </div>
         
         
         
         </div>
    }
    }

export default OrdersTable;