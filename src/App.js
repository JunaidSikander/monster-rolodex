import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state = {
      monsters: [],
        searchField: '',
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  };

  render() {
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter( monster => monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox
              placeholder='Search Monsters'
              changeHandle={(e) => this.setState({searchField: e.target.value})}
          />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
