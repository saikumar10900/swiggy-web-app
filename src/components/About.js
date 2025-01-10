import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor called");
  }

  componentDidMount() {
    console.log("Parent componentDidMount called");
    this.timer = setInterval(() => {
      console.log("hi");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate called");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Parent componentWillUnmount called");
  }

  render() {
    console.log("Parent render called");
    return (
      <div>
        <h1>About</h1>
        <User />

        <UserClass
          name={"Saikumar from class"}
          designation={"UI Developer from class"}
          location={"Hyderabad from class"}
        />
        <UserClass
          name={"Saikumar from class"}
          designation={"UI Developer from class"}
          location={"Hyderabad from class"}
        />
      </div>
    );
  }
}
export default About;
