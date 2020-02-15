import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchJoke } from "../../store/action";

class Jokes extends Component {
  state = {
    isFetchingJokes: true
  };

  componentDidMount() {
    const { activeCategory, jokes, match, fetchJoke } = this.props;
    if (jokes.length !== 0 && activeCategory === match.params.slug) {
      this.setIsFetchingJokes(false);
      return;
    }
    fetchJoke(match.params.slug).then(() => {
      this.setIsFetchingJokes(false);
    });
  }

  componentDidUpdate(prevProps) {
    const { match, fetchJoke } = this.props;
    if (match.params.slug !== prevProps.match.params.slug) {
      this.setIsFetchingJokes(true);
      fetchJoke(match.params.slug).then(() => {
        this.setIsFetchingJokes(false);
      });
    }
  }

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

  render() {
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
          <ul className="jokes-list">
            {this.props.jokes.map(joke => {
              return (
                <li key={joke.id}>
                  <div className="card">{joke.value}</div>
                </li>
              );
            })}
          </ul>
          <div className="button-block">
            <button onClick={this.clickHandler}>
              I Want More <i className="icon-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { jokes, activeCategory } = state;
  return {
    jokes,
    activeCategory
  };
};

export default connect(mapStateToProps, { fetchJoke })(Jokes);
