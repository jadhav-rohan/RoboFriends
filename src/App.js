import React from "react";
import { CardList } from "./CardList";

import SearchBox from "./SearchBox";
import "./index.css";
import Scroll from "./Scroll";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      setRobots: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ setRobots: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        this.setState({ robots: user });
      });
  }

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.setRobots.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">ROBO-FRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
