import React, { Component } from 'react';
import axios from 'axios';
class WorkContain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board : this.props.tabData.bo_table
    };
  }
  componentDidMount() {
    this.test();
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.tabData.bo_table !== this.state.board) {
      console.log("1회 렌더링");
      console.log(nextProps.tabData.bo_table)
      console.log(this.state.board)
      this.test();
      return true;
    } else {
      console.log("렌더링 않함")
      console.log(nextProps.tabData.bo_table)
      console.log(this.state.board)
      return false;
    }
  }
  test = () => {
    this.setState({
      board : this.props.tabData.bo_table
    })
  }
  render() {
    return (
      <div>
        <div className="pageTitles">
          <h1 className="avenir_heavy">Work</h1>
        </div>
        <div>
          <div id="workDataLists" className="clear">
            {this.props.tabData.bo_table}
          </div>
        </div>
      </div>
    )
  }
}

export default WorkContain;