import React, { Component } from 'react'
import axios from 'axios';
import '../../css/main.css';

class WorkLayout extends Component {
  state = {
    getData : []
  }
  componentDidMount() {
    this.getSlideData();      
  }
  getSlideData = () => {
    axios.get("/api",{
      params : {
        bo_table : this.props.bo_table,
        status : this.props.status
      }
    })
    .then(response => {
      console.log(response.data)
      this.setState({
        getData: response.data
      })
    })
    .catch(response => {
      console.log(response.data)
    });
  }
  render() {
    let dataResult = this.state.getData;
    return (
      <div id="indexWork">
        <div className="customContainer">
          <div id="indexWorkTitle">
            <h1 class="avenir_heavy">{this.props.titles}</h1>
          </div>
          {dataResult.length === 0 ? (
            <div>작성된 글이 없습니다.</div>
          ):(
            <div>
              {this.state.getData.map(workItems => (
                <div>작성된 글이 있음</div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default WorkLayout;