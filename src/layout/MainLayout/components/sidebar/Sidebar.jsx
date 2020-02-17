import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { setActiveCategory } from "../../../../store/action";
import { CSSTransition } from "react-transition-group";

class Sidebar extends Component {
  componentDidMount() {
    const { setActiveCategory, match } = this.props;
    const activeCategoryId = match.params.slug;
    setActiveCategory(activeCategoryId);
  }

  componentDidUpdate(prevProps) {
    const { setActiveCategory, match } = this.props;
    const activeCategoryId = match.params.slug;
    if (prevProps.match.params.slug !== activeCategoryId && activeCategoryId) {
      setActiveCategory(activeCategoryId);
    }
  }

  render() {
    return (
      <CSSTransition
        in={true}
        appear={true}
        timeout={200}
        classNames={"transition"}
      >
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
      </CSSTransition>
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
