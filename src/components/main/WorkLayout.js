import React, { Component } from 'react'
import axios from 'axios';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';

class WorkLayout extends Component {
  state = {
    getDataGroup : [],
    leng:1
  }
  UNSAFE_componentWillMount() {
    this.getSlideData();      
  }
  componentWillUnmount() {
    this.getSlideData();
  }
  getSlideData = () => {
    if (this.props.host === "localhost") {
      this.setState({
        getDataGroup : [
          [
            {
              "wr_subject": "\ud504\ub85c\uc81d\ud2b81",
              "wr_img": "http:\/\/dbrandtest.com\/gnu\/data\/editor\/1911\/a9942743e8884f23966a461701481938_1573091147_8462.jpg",
              "bo_table": "work",
              "wr_id": "4"
            }, {
              "wr_subject": "\ud504\ub85c\uc81d\ud2b82",
              "wr_img": "http:\/\/dbrandtest.com\/gnu\/data\/editor\/1911\/a9942743e8884f23966a461701481938_1573091176_7629.png",
              "bo_table": "work",
              "wr_id": "5"
            }, {
              "wr_subject": "\ud504\ub85c\uc81d\ud2b83",
              "wr_img": "http:\/\/dbrandtest.com\/gnu\/data\/editor\/1911\/a9942743e8884f23966a461701481938_1573091203_127.png",
              "bo_table": "work",
              "wr_id": "6"
            }, {
              "wr_subject": "\ud504\ub85c\uc81d\ud2b84",
              "wr_img": "http:\/\/dbrandtest.com\/gnu\/data\/editor\/1911\/a9942743e8884f23966a461701481938_1573091228_4278.png",
              "bo_table": "work",
              "wr_id": "7"
            }, {
              "wr_subject": "\ud504\ub85c\uc81d\ud2b85",
              "wr_img": "http:\/\/dbrandtest.com\/gnu\/data\/editor\/1911\/a9942743e8884f23966a461701481938_1573091244_1595.png",
              "bo_table": "work",
              "wr_id": "8"
            }
          ],
          [
            {
              "wr_subject": "\ud504\ub85c\uc81d\ud2b86",
              "wr_img": "http:\/\/dbrandtest.com\/gnu\/data\/editor\/1911\/a9942743e8884f23966a461701481938_1573091147_8462.jpg",
              "bo_table": "work",
              "wr_id": "9"
            }, {
              "wr_subject": "\ud504\ub85c\uc81d\ud2b87",
              "wr_img": "http:\/\/dbrandtest.com\/gnu\/data\/editor\/1911\/a9942743e8884f23966a461701481938_1573091176_7629.png",
              "bo_table": "work",
              "wr_id": "10"
            }, {
              "wr_subject": "\ud504\ub85c\uc81d\ud2b88",
              "wr_img": "http:\/\/dbrandtest.com\/gnu\/data\/editor\/1911\/a9942743e8884f23966a461701481938_1573091203_127.png",
              "bo_table": "work",
              "wr_id": "11"
            }, {
              "wr_subject": "\ud504\ub85c\uc81d\ud2b89",
              "wr_img": "http:\/\/dbrandtest.com\/gnu\/data\/editor\/1911\/a9942743e8884f23966a461701481938_1573091228_4278.png",
              "bo_table": "work",
              "wr_id": "12"
            }, {
              "wr_subject": "\ud504\ub85c\uc81d\ud2b810",
              "wr_img": "http:\/\/dbrandtest.com\/gnu\/data\/editor\/1911\/a9942743e8884f23966a461701481938_1573091244_1595.png",
              "bo_table": "work",
              "wr_id": "13"
            }
          ]
        ]
      })
    } else {
      axios.get("/api",{
        params : {
          bo_table : this.props.bo_table,
          status : this.props.status,
          leng:1
        }
      })
      .then(response => {
        console.log(response.data)
        this.setState({
          getDataGroup: response.data
        })
      })
      .catch(response => {
        console.log(response.data)
      });
    }
  }
  render() {
    const dataResult = this.state.getDataGroup;
    return (
      <div id="indexWork">
        <div className="customContainer">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <div id="indexWorkTitle"> 
              <h1 className="avenir_heavy">{this.props.titles}</h1>
            </div>
          </ScrollAnimation>
          {dataResult.length === 0 ? (
            <div>작성된 글이 없습니다.</div>
          ):(
            <div className="indexWorkList">
              {this.state.getDataGroup.map((workGroup, i) => (
                <ScrollAnimation animateIn="fadeInUp" delay={i*500} key={i} animateOnce={true}>
                  <div className={i % 2 === 0 ? ("leftModel clear") : ("rightModel clear")}>
                    {this.state.getDataGroup[i].map((workData, index) => (
                      <div className="indexWorkItems" key={index} style={{backgroundImage : "url("+workData.wr_img+")"}}>
                        <Link to="/">
                          <div className="LinkTitleWrapper">
                            <h2>{workData.wr_subject}</h2>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default WorkLayout;