import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../../store/action";
import Loader from "react-loader-spinner";

function Categories({ getCategories, categories }) {
  const [isFetchingCategories, setIsFetchingCategories] = useState(true);
  useEffect(() => {
    getCategories();
    document.body.addEventListener("click", cardPopup);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (categories.length !== 0) {
      setIsFetchingCategories(false);
    }
  }, [categories]);

  function toggleActiveCard(e) {
    const target = e.target;
    const parentClass = ".card";
    const activeClass = "card-active";
    const parentClassList = target.closest(parentClass).classList;
    parentClassList.toggle(activeClass);
  }

  function cardPopup(event) {
    const target = event.target;
    const parentClass = ".card";
    const parent = target.closest(parentClass);
    if (parent) {
      const parentDimensions = {
        height: parent.clientHeight,
        width: parent.clientWidth
      };
      parent.setAttribute(
        "style",
        `height: ${parentDimensions.height}px; width: ${parentDimensions.width}px `
      );
      target.classList.add("card-active");
    }
  }

  return isFetchingCategories ? (
    <Loader
      type="MutatingDots"
      className="category-loader"
      color="#ffa500"
      height={100}
      width={100}
    />
  ) : (
    <div className="category-block">
      <div className="block-header">
        <h2>Pick your Poison!!!</h2>
      </div>
      <ul className="categories-list">
        {categories.map(category => {
          return (
            <li className="card" key={category}>
              <Link to={`/categories/${category}`}>
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
  );
}

const mapStateToProps = state => {
  const { categories } = state;
  return {
    categories
  };
};

export default connect(mapStateToProps, { getCategories })(Categories);
