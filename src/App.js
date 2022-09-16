import './App.css';

import React from 'react'
import DataTable from 'react-data-table-component'


const Table = () => {


       const  rows = [
           { "Id": 1, "Name":"Usman", "City": "Lahore","Age":"24"},
           { "Id": 2, "Name":"Ahmed", "City":"Jhang", "Age":"22" },
           { "Id": 3, "Name":"Hamza", "City":"Okara", "Age":"25" },
           { "Id": 4, "Name":"Waqar", "City":"Jhang", "Age":"20" },
           { "Id": 5, "Name":"Usman", "City": "Lahore","Age":"24"},
           { "Id": 6, "Name":"Ahmed", "City":"Jhang", "Age":"22" },
           { "Id": 7, "Name":"Hamza", "City":"Okara", "Age":"25" },
           { "Id": 8, "Name":"Waqar", "City":"Jhang", "Age":"20" },
           { "Id": 9, "Name":"Usman", "City": "Lahore","Age":"24"},
           { "Id": 10, "Name":"Ahmed", "City":"Jhang", "Age":"22" },
           { "Id": 11, "Name":"Hamza", "City":"Okara", "Age":"25" },
           { "Id": 12, "Name":"Waqar", "City":"Jhang", "Age":"20" }



           
        
         ]
         const columns =[
             {
                name:"Id",
                selector:rows=>rows.Id
              },
            {
                name:"Name",
                selector: rows=>rows.Name
            },
            {
                name:"City",
                selector: rows=>rows.City
            },
            {
                name:"Age",
                selector: rows=>rows.Age
            }
         ]


  return (
    <DataTable   columns={columns}  data={rows} pagination />
  )
}

export default Table;