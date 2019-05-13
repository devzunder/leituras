import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavItem } from "react-materialize";

export default function Nav() {
  return (
    <div className="blue-grey darken-1">
      <h2>Minhas Leituras</h2>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/new">Novo Post</NavLink>
    </div>
  );
}
