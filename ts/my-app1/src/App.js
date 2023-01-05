import React from "react";
import { Routes, Route } from "react-router-dom";

import { GramSchmidt } from "./pages";

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<GramSchmidt />} />
        </Routes>
    );
};

export default App;
