import { useState, useEffect } from 'react'
import './App.css'
import { EmpProvider } from './context/EmpContext'
import EmpForm from './components/EmpForm'
import EmpData from './components/EmpData'
function App() {
  const [empData, setempData] = useState([])

  const addEmp = (emp) => {
    setempData((prev) => [...prev, { id: Date.now(), ...emp }])
  }

  // const deleteEmp = (id) => {
  //   setempData((prev) => prev.filter((emp) => emp.id !== id))
  // }

  const deleteEmp = (id) => {
    setempData((prev) => prev.filter((emp) => emp.id !== id))
  }

  const updateEmp = (id, emp) => {
    setempData((prev) => prev.map((prevEmp) => (
      prevEmp.id === id ? emp : prevEmp
    )))
  }

  useEffect(() => {
    const empData = JSON.parse(localStorage.getItem("employeesdata"))
    if (empData && empData.length > 0) {
      setempData(empData)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("employeesdata", JSON.stringify(empData))
  }, [empData])

  return (
    <EmpProvider value={{ empData, addEmp, deleteEmp, updateEmp }}>
      <div id='maindiv'>
        <div className='formdiv'>
          <div className='heading'>XYZ COMPANY EMPLOYEE PANEL</div>
         <div><EmpForm /></div>
        </div>
        <div id='datadiv'>
          <div id='dataheading'>Employees Details:</div>
          {
            empData.map((singleEmp) => (
              <div key={singleEmp.id}>
                <EmpData singleEmp={singleEmp} />
              </div>
            ))
          }
        </div>
      </div>
    </EmpProvider>

  )
}

export default App
