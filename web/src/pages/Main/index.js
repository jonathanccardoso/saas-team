import React, { Component } from "react";
import api from "~/services/api";

export default class Main extends Component {
  componentDidMount() {
    api.get("/test");
  }

  render() {
    return <h1>Hello World</h1>;
  }
}
