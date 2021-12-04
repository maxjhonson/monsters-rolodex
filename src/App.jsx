import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { monsters: [], filter: "" };
  }

  handleChange(text) {
    console.log(text);
    this.setState({ filter: text });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((response) => this.setState({ monsters: response }))
    );
  }
  render() {
    const filteredMosters = this.state.monsters.filter((monster) =>
      monster.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          handleChange={(e) => this.setState({ filter: e.target.value })}
          placeholder="Search Moster"
        />
        <CardList monsters={filteredMosters} />
      </div>
    );
  }
}

export default App;
