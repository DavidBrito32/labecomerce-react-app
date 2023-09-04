import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../Layouts/'
import Home from "../pages/Home/Home";

import Error404 from "../pages/Error";

const Ways = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/contact" element={""} />
                    </Route>   
                    <Route path="*" element={<Error404 />}/>
                </Routes>
            </BrowserRouter>                
        </>
    )
}

export default Ways;