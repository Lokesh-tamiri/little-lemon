import React from "react";
import "../styles/main.css";

import { Link } from "react-router-dom";
import TitleComponent from "./TitleComponent";
import Menu from "./Menu";

const Main = () => {
    return (
        <main >
            <TitleComponent />
            <Menu />
        </main>
    );
};

export default Main;