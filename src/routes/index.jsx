import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../Layouts/'
import Home from "../pages/Home/Home";
import {Error} from '../pages/Error/Error'

const Ways = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                    </Route>   
                    <Route path="*" element={<Error />}/>
                </Routes>
            </BrowserRouter>                
        </>
    )
}

export default Ways;