import React, { useState } from 'react'
import { useEmp } from '../context/EmpContext'

function EmpData({ singleEmp }) {

    const [singleEmpName, setSingleEmpName] = useState(singleEmp.empName)
    const [singleEmpDepart, setSingleEmpDepart] = useState(singleEmp.empDepart)
    const[isEmpEditable , setIsEmpEditable] = useState(false)
    const{addEmp , deleteEmp , updateEmp} = useEmp()

    const editEmp = () =>{
        updateEmp(singleEmp.id , {...singleEmp, empName: singleEmpName , empDepart : singleEmpDepart })
        setIsEmpEditable(false)
    }

    return (
        <>
            <input type='text'
            id='nameoutput'
                value={singleEmpName}
                onChange={(e) => setSingleEmpName(e.target.value)}
                readOnly={!isEmpEditable}
            />
            {/* <input type='text'
                value={singleEmpDepart}
                readOnly={!isEmpEditable}
            /> */}

            <select id="departments" name="departmentslist" value={singleEmpDepart} form="empDetails" onChange={(e) => setSingleEmpDepart(e.target.value)} disabled={!isEmpEditable}>
                <option value="Finance">Finance</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Engineering">Engineering</option>
            </select>

            <button onClick={() => {
                    if (isEmpEditable) {
                        editEmp();
                    } else setIsEmpEditable((prev) => !prev);
                }} id='btn'>
                {isEmpEditable ? "Save" : "Edit"}
            </button>
            <button onClick={()=> deleteEmp(singleEmp.id)} id='btn'>
             Delete
            </button>
        </>
    )
}

export default EmpData