import { Component } from "react";

class ChildrenComponents extends Component {
  render() {
    const { count, onIncrement } = this.props;
    return (
      <div>
        <p>Еще счетчик: {count}</p>
        <button onClick={onIncrement}>Прибавить 1</button>
      </div>
    );
  }
}

export default ChildrenComponents;
