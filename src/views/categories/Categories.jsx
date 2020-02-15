import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Categories({ categories }) {
  function toggleActiveCard(e) {
    const target = e.target;
    const parentClass = ".card";
    const activeClass = "card-active";
    const parentClassList = target.closest(parentClass).classList;
    parentClassList.toggle(activeClass);
  }

  return (
    <div className="category-block">
      <div className="container">
        <div className="block-header">
          <h2>Pick your Poison!!!</h2>
        </div>
        <ul className="categories-list">
          {categories.map(category => {
            return (
              <li className="card" key={category}>
                <Link to={`/jokes/${category}`}>
                  <div
                    className="card-content"
                    onMouseOver={toggleActiveCard}
                    onMouseOut={toggleActiveCard}
                    style={{ backgroundImage: `url()` }}
                  >
                    {category}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  const { categories } = state;
  return {
    categories
  };
};

export default connect(mapStateToProps)(Categories);
