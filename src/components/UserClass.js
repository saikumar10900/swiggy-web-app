import { Component } from "react";
import UserContext from "./utils/UserContext";

class UserClass extends Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor called");

    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("Child componentDidMount called");
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("Child componentWillUnmount called");
  }

  render() {
    console.log("Child render called");

    const { name, designation, location } = this.props;
    return (
      <div className="user-card">
        <h1 className="text-2xl font-bold">
          <UserContext.Consumer>
            {({ loggedUser }) => loggedUser}
          </UserContext.Consumer>
          Count from class: {this.state.count}
        </h1>{" "}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <h1>Name: {name}</h1>
        <h2>Designation: {designation}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}
export default UserClass;
