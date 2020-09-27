import React from "react";
import "./styles.css";
import axios from "axios";
import MonsterCardList from "./Components/MonsterCard.List";
import SearchBar from "./Components/SearchBar";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { monsters: [], text: "" };
  }
  setSearch = (data) => {
    this.setState({ text: data });
  };
  async componentDidMount() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      this.setState({ monsters: res.data });
      // console.log(res.data);
    } catch (error) {
      // console.log(error);
    }
  }
  render() {
    const { monsters, text } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(text.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Grid</h1>
        <SearchBar setSearch={this.setSearch} />
        <MonsterCardList monsters={filteredMonsters} />
      </div>
    );
  }
}
