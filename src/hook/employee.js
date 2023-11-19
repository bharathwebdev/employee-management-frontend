import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export function ThemeProvider({children}){
const [data,setData] = useState([]);
const [openDeleteCard,setOpenDeleteCard] = useState(false);
const [openUpdateCard,setOpenUpdateCard]= useState(false);
const [openAddCard,setOpenAddCard]= useState(false);
const [selectEmp,setSelectEmp] = useState({});
const [reload,setreload] =useState(false);

useEffect(()=>{
  axios.get("http://localhost:8080/api/v1/employee")
  .then(res=>setData(res.data))
},[reload])
    return <MyContext.Provider value={{
        data,
        openDeleteCard,
        setOpenDeleteCard,
        openUpdateCard,
        setOpenUpdateCard,
        setOpenAddCard,
        openAddCard,
        selectEmp,
        setSelectEmp,
        setreload,
        reload
        }}>
{children}
    </MyContext.Provider>
}
