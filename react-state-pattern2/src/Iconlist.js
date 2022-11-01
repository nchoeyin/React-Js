import React, { Component } from "react";
class Iconlist extends Component {
  static defaultProps = {
    options: ["angry", "anchor", "archive", "at", "archway"],
  };
  constructor(props) {
    super(props);
    this.state = { icons: ["bone", "cloud"] };
    this.addIcon = this.addIcon.bind(this); // for each component refers to the individual component
  }

  addIcon() {
    let idx = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[idx];
    let icons = this.state.icons;
    icons.push(newIcon);
    this.setState({ icons: icons });
  }

  render() {
    const icons = this.state.icons.map((i) => <i className={`fas fa-${i}`} />);
    return (
      <div className="Iconlist">
        <button onClick={this.addIcon}>Add new Icon</button>
      </div>
    );
  }
}
export default Iconlist;
