import React from "react";
import "./styles.css";
import axios from "axios";
import MonsterCardList from "./Components/MonsterCard.List";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = { monsters: [] };
  }
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
    return (
      <div className="App">
        <MonsterCardList monsters={this.state.monsters} />
      </div>
    );
  }
}
