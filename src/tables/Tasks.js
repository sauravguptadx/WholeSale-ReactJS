import React, {Component} from 'react';
//import React from 'react';
import './Tables.css'
class Tasks extends Component{
    render() {
        return  <div id = 'taskbackground'>
            <h1 id = 'h1task'> Tasks </h1>;
            <ol>
                <li>Maintain the details of stock</li>
                <li>Maintain the details of buyers from which manager has to buy the stocks</li>
                <li>Maintain the details of customers</li>
                <li>Defaulters list of customers who have not paid their pending amount</li>
                <li>List of Payment paid or pending</li>
                <li>The stock to buy if quantity goes less than a particular amount</li>
                <li>Profit calculation for a month</li>
                <li>Maintain date of delivery of product if required amount of stock is not availabe</li>
            </ol>
        </div>
    }
    }

export default Tasks;