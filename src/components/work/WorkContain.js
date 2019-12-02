import React, { Component } from 'react'
import queryString from 'query-string';
import axios from 'axios';

class WorkContain extends Component {
  querys = () => {
    const query = queryString.parse(this.props.data.location.search);
    return query;
  }
  getData = () => {
    if (window.location.host === "localhost:3000") {
      console.log("로컬");
      console.log(this.querys().status)
    } else {
      axios.get("/api", {
        params: {
          bo_table : this.querys().bo_table,
          status : this.querys().status
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(response => {
        console.log(response);
      })
    }
  }
  componentWillMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        adfsaf
      </div>
    )
  }
}

export default WorkContain;