import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchJoke, setActiveCategory } from "../../store/action";
import { CSSTransition } from "react-transition-group";
import Pagination from "./components/pagination";

class Jokes extends Component {
  state = {
    isFetchingJokes: true,
    jokes: [],
    pageIndex: 1,
    numberOfJokesPerPage: 1,
    currentJokes: []
  };

  componentDidMount() {
    const {
      jokes,
      match,
      fetchJoke,
      setActiveCategory,
      categories,
      history
    } = this.props;

    if (jokes.length !== 0 && match.params.slug === "random") {
      this.setState({
        jokes,
        currentJokes: jokes.slice(0, this.state.numberOfJokesPerPage)
      });
      this.setIsFetchingJokes(false);
      return;
    }

    fetchJoke(match.params.slug)
      .then(() => {
        this.setIsFetchingJokes(false);
      })
      .catch(() => {
        setActiveCategory(categories[0]);
        history.push(`/jokes/${categories[0]}`);
      });
  }

  componentDidUpdate(prevProps) {
    const { match, fetchJoke, jokes } = this.props;
    if (
      match.params.slug !== prevProps.match.params.slug &&
      match.params.slug !== "random"
    ) {
      this.setIsFetchingJokes(true);
      fetchJoke(match.params.slug).then(() => {
        this.setIsFetchingJokes(false);
      });
    }
    if (jokes && jokes !== prevProps.jokes) {
      this.setState({
        jokes,
        currentJokes: jokes.slice(0, this.state.numberOfJokesPerPage),
        pageIndex: 1
      });
    }
  }

  setCurrentJokes = index => {
    const { jokes, numberOfJokesPerPage } = this.state;
    this.setState({
      currentJokes: jokes.slice(
        (index - 1) * numberOfJokesPerPage,
        index * numberOfJokesPerPage
      )
    });
  };

  setIsFetchingJokes = stateParam => {
    this.setState({
      isFetchingJokes: stateParam
    });
  };

  clickHandler = () => {
    const { match, fetchJoke } = this.props;
    this.setIsFetchingJokes(true);
    fetchJoke(match.params.slug).then(() => {
      this.setIsFetchingJokes(false);
    });
  };

  setPageIndex = index => {
    this.setState({
      pageIndex: index
    });
  };

  render() {
    const { jokes, currentJokes, numberOfJokesPerPage, pageIndex } = this.state;
    return this.state.isFetchingJokes ? (
      <Loader
        type="MutatingDots"
        className="jokes-loader"
        color="#ffa500"
        height={100}
        width={100}
      />
    ) : (
      <div className="jokes">
        <div className="container">
          <div className="block-content">
            <div className="list-wrapper">
              <ul className="jokes-list">
                {currentJokes.map(joke => {
                  return (
                    <li key={joke.id}>
                      <CSSTransition
                        in={true}
                        appear={true}
                        timeout={200}
                        classNames={"transition"}
                      >
                        <div className="card">{joke.value}</div>
                      </CSSTransition>
                    </li>
                  );
                })}
              </ul>
            </div>
            {jokes.length === 1 && (
              <div className="button-block">
                <button onClick={this.clickHandler}>
                  <span>I Want More</span>
                </button>
                <div className="icon-holder">
                  <i className="icon-arrow-right"></i>
                </div>
              </div>
            )}
            <Pagination
              totalNumberOfJokes={jokes.length}
              numberOfJokesPerPage={numberOfJokesPerPage}
              pageIndex={pageIndex}
              setPageIndex={this.setPageIndex}
              setCurrentJokes={this.setCurrentJokes}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { jokes, activeCategory, categories } = state;
  return {
    jokes,
    activeCategory,
    categories
  };
};

export default connect(mapStateToProps, { fetchJoke, setActiveCategory })(
  Jokes
);
