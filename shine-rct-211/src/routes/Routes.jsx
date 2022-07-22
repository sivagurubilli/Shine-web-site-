import {Routes,Route} from "react-router-dom"


import Login from "../Components/login/Login"
import Register from "../Components/register/Register"

import {JobDetailsPage} from "../Pages/JobDetailsPage"



const Routesall =()=>{
    return(
<div>
    <Routes >
       
<Route path ="/login" element={<Login />}>

</Route>
<Route path="/register" element={<Register/>}></Route>
<Route path="/jobDetails/:id" element={<JobDetailsPage/>} />
    </Routes>
</div>


    )
}

export default Routesall