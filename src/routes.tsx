import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import MainContent from "./pages/MainContent";
import Expertize from "./pages/Expertize";

export const RouterComponent: React.FC<any> = () => {
    return (
        <Routes>
            <Route index element={<MainContent />} />
            <Route path="about" element={<Expertize />} />
            {/* <Route path="*" element={<Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary"><Link to="/">Back Home</Link></Button>}
            />} /> */}
        </Routes>
    )
}