import React, { useState } from 'react'
import { useEmp } from '../context/EmpContext'

function EmpForm() {

    const[empName , setEmpName] = useState('')
    const[empDepart , setEmpDep] = useState('Finance')
    const{addEmp , deleteEmp , updateEmp} = useEmp()

const add = (e)=>{
    e.preventDefault();
    if(!empName) return alert("Enter name !")
    addEmp({empName , empDepart})
    setEmpName('')
}
  return (

    <>
   <form onSubmit={add} id='empDetails'>
    Name: 
    <input 
    id='inputbox'
    placeholder='Enter Name'
    value={empName}
    onChange={(e)=>setEmpName(e.target.value)}
    />
   
    <label for="departments" >Department:</label>
            <select id="departments" name="departmentslist" form="empDetails" onChange={(e)=> setEmpDep(e.target.value)}>
                <option value="Finance">Finance</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Engineering">Engineering</option>
            </select>
          
    <button type='submit' id='btn'>ADD EMPLOYEE</button>
   </form>
   
   {/* <label for="departments">Department:</label>
            <select id="departments" name="departmentslist" form="empDetails" onChange={(e)=> setEmpDep(e.target.value)}>
                <option value="Finance">Finance</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Engineering">Engineering</option>
            </select> */}
   </>
  )
}

export default EmpForm;