import React, { Component } from "react";
import "./App.css";
import Cardlist from "./Cardlist";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("http://swapi.dev/api/people/")
      .then((people) => people.json())
      .then((people) => this.setState({ data: people.results }))
      .catch((err) => console.log("fix it!", err));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { data, searchfield } = this.state;
    const filteredData = data.filter((person) => {
      return person.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !data.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">StarWars Characters</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <Cardlist data={filteredData} />
        </Scroll>
      </div>
    );
  }
}

export default App;
