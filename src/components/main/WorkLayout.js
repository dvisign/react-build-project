import React, { Component } from 'react'
import axios from 'axios';
import ScrollAnimation from 'react-animate-on-scroll';

class WorkLayout extends Component {
  state = {
    getData : []
  }
  UNSAFE_componentWillMount() {
    this.getSlideData();      
  }
  componentWillUnmount() {
    this.getSlideData();
  }
  getSlideData = () => {
    if (this.props.host === "localhost") {
      console.log("로컬작업")
    } else {
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
  }
  render() {
    let dataResult = this.state.getData;
    return (
      <div id="indexWork">
        <div className="customContainer">
          <ScrollAnimation animateIn="fadeInUp">
            <div id="indexWorkTitle"> 
              <h1 className="avenir_heavy">{this.props.titles}</h1>
            </div>
          </ScrollAnimation>
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