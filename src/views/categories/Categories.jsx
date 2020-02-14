import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../store/action";

function Categories({ getCategories, categories }) {
  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="category-block">
      <div className="block-header">
        {/* <h2>Get a Joke for you!!!</h2> */}
        <h2>Jokes Category</h2>
      </div>
      <ul className="categories-list">
        {categories.map(category => {
          return (
            <li className="card" key={category}>
              <div className="card-content">{category}</div>
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
