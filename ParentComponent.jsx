import { Component } from "react";
import ChildrenComponents from "./ChildrenComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <ChildrenComponents
          count={this.state.count}
          onIncrement={this.increment}
        />
      </div>
    );
  }
}

export default ParentComponent;
