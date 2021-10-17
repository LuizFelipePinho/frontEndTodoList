import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'

function Header() {
  return (
    <div>
        <div className="cabecalho">
          <Link to="/"> 
            Home
          </Link>

          <Link to="/add">Adicionar tarefa</Link>
        </div>
    </div>
);
}

export default Header;
