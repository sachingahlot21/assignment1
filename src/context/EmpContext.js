import { createContext, useContext } from "react";

export const EmpContext = createContext({
    empData : [

        {id: 1 ,
        name : 'first name',
        department : 'sales'
        }
    ] , 
    addEmp : (emp) => {} ,
    updateEmp : (emp , id) => {},
    deleteEmp : (emp) => {}
})

export const useEmp = () =>{
    return useContext(EmpContext)
}

export const EmpProvider  = EmpContext.Provider