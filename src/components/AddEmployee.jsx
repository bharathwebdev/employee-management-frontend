import React, { useContext, useState } from 'react'
import { MyContext } from '../hook/employee'
import { TextField } from '@mui/material'
import axios from 'axios';

function AddCard() {
    const {setOpenUpdateCard,selectEmp,setreload,setOpenAddCard} = useContext(MyContext)
    const [updatedEmp,setUpdatedEmp] = useState({});
    const {fullName,age,date_of_birth,salary,department,id} = selectEmp;
    const handleChange = (e)=>{
        setUpdatedEmp(pre=>({...pre,[e.target.name]:e.target.value}))
    }
    const addEmployee = ()=>{
    
        updatedEmp.id=id;
   
     console.log(updatedEmp)
     axios.post("https://employee-management-vqs3.onrender.com/api/v1/employee",updatedEmp)
     .then(res=>res.data)
     .finally(res=>
        {
            
            setreload(pre=>!pre)
            console.log(res)
        }

        )
     
    }

  return (
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <form onSubmit={addEmployee}>
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
          
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Add new employee</h3>
              
                <div class="mt-2 flex flex-col gap-5 pt-[1rem] w-[26rem]">


                <TextField
          id="outlined-number"
          label="name"
          type="text"
          name='fullName'
          required
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />

<TextField
          id="outlined-number"
          label="Age"
          name='age'
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          required
         
          onChange={handleChange}
        />

<TextField
          id="outlined-number"
          label="Department"
          name='department'
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          required
          onChange={handleChange}
        />


        <TextField
          id="outlined-number"
          label="Date of birth"
          type="Date"
          name='date_of_birth'
          InputLabelProps={{
            shrink: true,
          }}
          // required
          onChange={handleChange}
        />

<TextField
          id="outlined-number"
          label="Salary"
          type="number"
          name='salary'
          InputLabelProps={{
            shrink: true,
          }}
          required
          onChange={handleChange}
        />

        
                </div>
             
              </div>
            </div>
          </div>
          <div class="bg-gray-50 mr-[2rem] mb-[1rem] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button type="submit" class="inline-flex w-full justify-center rounded-md bg-[#5046e5] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#6c62ff] sm:ml-3 sm:w-auto" >add</button>
            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={()=>setOpenAddCard(false)}>Cancel</button>
          </div>
          </form>
        </div>

      </div>
    </div>
  </div>
  )
}

export default AddCard
{/* <button className='bg-[#5046e5] text-white rounded-md px-[1rem] py-0' onClick={handleUpdate}>Update</button>
<button className='bg-[#eef2ff] text-[#5046e5] rounded-md px-[1rem] py-0' onClick={handleDelete}>Delete</button> */}
