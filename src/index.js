import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  async componentDidMount() {
    return await fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            posts: responseJson
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { posts } = this.state;
    if (this.state.posts.length > 0) {
      return (
        <div>
          {posts.map(item => (
            <li>{item.title}</li>
          ))}
        </div>
      );
    }

    return <div />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
