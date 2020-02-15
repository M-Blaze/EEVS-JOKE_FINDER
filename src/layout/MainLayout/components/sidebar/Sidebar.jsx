import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { setActiveCategory } from "../../../../store/action";
class Sidebar extends Component {
  componentDidMount() {
    const activeCategoryId = this.props.match.params.slug;
    this.props.setActiveCategory(activeCategoryId);
  }

  componentDidUpdate(prevProps) {
    const activeCategoryId = this.props.match.params.slug;
    if (prevProps.match.params.slug !== activeCategoryId && activeCategoryId) {
      this.props.setActiveCategory(activeCategoryId);
    }
  }

  render() {
    return (
      <aside className="sidebar">
        <ul className="sidebar-menu-list">
          {this.props.categories.map(category => {
            return (
              <li
                className={`sidebar-item ${
                  this.props.activeCategory === category ? "active" : ""
                }`}
                key={category}
              >
                <Link to={`/jokes/${category}`}>{category}</Link>
              </li>
            );
          })}
        </ul>
      </aside>
    );
  }
}

const mapStateToProps = state => {
  const { categories, activeCategory } = state;
  return {
    categories,
    activeCategory
  };
};

export default withRouter(
  connect(mapStateToProps, { setActiveCategory })(Sidebar)
);
