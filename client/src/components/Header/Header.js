import React from "react";
import "../../css/Header/Header.css";
import { Static } from "../../Static";

function Header () {
    return(
        <header>
         {Static.headerTitle}
        </header>
    )
}

export default Header