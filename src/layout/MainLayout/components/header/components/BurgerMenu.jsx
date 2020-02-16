import React from "react";

export default function BurgerMenu() {
  function toggleBurgerMenu() {
    const activeClass = "nav-active";
    document.body.classList.toggle(activeClass);
  }

  return (
    <div className="burger-menu" onClick={toggleBurgerMenu}>
      <span className="burger-span"></span>
      <span className="burger-span"></span>
      <span className="burger-span"></span>
    </div>
  );
}
