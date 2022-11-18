import React from "react";
import logo from "../IMG/STOREY LOGO.png";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useGlobalContext } from "../context";

export default function Navbar() {
  const { cart } = useGlobalContext();
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <div className="nav-text">
            <Link className="navbar-brand" to={"/"}>
              All Products
            </Link>
            <Link className="navbar-brand cart" to={"/cart"}>
              <AiOutlineShoppingCart size={"1.5rem"} />
              <div className="cart-count">{cart.length}</div>
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
