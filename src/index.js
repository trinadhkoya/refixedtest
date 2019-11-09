import React from "react";
import ReactDOM from "react-dom";
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
    return (
      <div>
        {posts.map((item, index) => (
          <div key={index}>
            <li>
              <b>{item.title}</b>
              <p>{item.body}</p>
            </li>
          </div>
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
