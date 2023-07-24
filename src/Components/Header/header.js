import React from "react";
import {Logo} from "./logo";
import dev from '../../images/logo.png'

export const Header = () => {
  return (
    <div>
      <header className="dev-link">
       <Logo img ={dev} />
      </header>
    </div>
  );
};

export default Header;