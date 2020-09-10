import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props); //To use "super" must be a extend

    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    //Update the react state from the form events
    this.setState({
      [key]: value,
    });
  }

  //Function called by the button onClick event
  addItem() {
    //Create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      //Take the value from the temporal state of newItem
      value: this.state.newItem.slice(),
    };

    //Copy of current list of items
    const currentItems = [...this.state.list];

    //Add newItem to the list
    currentItems.push(newItem);

    //Update state with new list with newItem added
    this.setState({
      list: currentItems,
      newItem: "",
    });
  }

  deleteItem(id) {
    //Copy of current list of items
    const currentItems = [...this.state.list];

    //Delete newItem to the list
    const updatedItems = currentItems.filter((item) => item.id !== id);

    //Update state with new list with newItem deleted
    this.setState({
      list: updatedItems,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="listContainer">
          <h1 id="title">To Do List:</h1>
          <br />
          <input
            id="textinput"
            name="textinput"
            type="text"
            placeholder="Type your new item..."
            className="form-control input-md"
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />
          <button
            id="button1id"
            className="button1id"
            class="btn btn-success"
            onClick={() => this.addItem()}
          >
            Add new item!
          </button>
          <br />
          <ul className="items">
            {this.state.list.map((item) => {
              return (
                <li className="item" key={item.id}>
                  {item.value}

                  <button
                    id="button2id"
                    name="button2id"
                    class="btn btn-danger"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
