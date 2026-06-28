import { Component } from "react";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      newTask: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  addTask = () => {
    const { task, newTask } = this.state;
    if (newTask.trim()) {
      this.setState({
        task: [...task, newTask],
        newTask: "",
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Список задач</h1>
        <input
          onChange={this.handleInputChange}
          type="text"
          value={this.state.newTask}
        />
        <button onClick={this.addTask}>Добавить задачу</button>
        <ul>
          {this.state.task.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
