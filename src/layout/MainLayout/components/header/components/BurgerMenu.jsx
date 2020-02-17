import React, { useEffect } from "react";

export default function BurgerMenu() {
  useEffect(() => {
    return () => {
      document.body.removeEventListener("click", hideOnClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleBurgerMenu() {
    const activeClass = "nav-active";
    const body = document.body;
    if (!body.classList.contains(activeClass)) {
      body.classList.add(activeClass);
      body.addEventListener("click", hideOnClickOutside);
      return;
    }
    body.removeEventListener("click", hideOnClickOutside);
    body.classList.remove(activeClass);
  }

  function hideOnClickOutside(e) {
    const target = e.target;
    const ignoreOnClick = [".header"];

    //used for-loop on purpose
    for (let i = 0; i < ignoreOnClick.length; i++) {
      const ingoredElement = document.querySelector(ignoreOnClick[i]);
      if (ingoredElement.contains(target)) {
        return;
      }
    }

    toggleBurgerMenu();
  }

  return (
    <div className="burger-menu" onClick={toggleBurgerMenu}>
      <span className="burger-span"></span>
      <span className="burger-span"></span>
      <span className="burger-span"></span>
    </div>
  );
}
