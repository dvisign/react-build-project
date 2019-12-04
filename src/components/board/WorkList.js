import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jQuery from 'jquery';
import axios from 'axios';
class WorkContain extends Component {
  componentDidUpdate() {
    jQuery("#workDataLists").fadeIn();
  }
  shouldComponentUpdate() {
    jQuery("#workDataLists").fadeOut();
    return true;
  }
  getLists() {
    var returnData = [];
    if (window.location.host === "localhost:3000") {
      const cates = this.props.tabData.category;
      if (cates === "all") {
        returnData = [
          {
            "wr_id":"4",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b81",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091147_8462.jpg"
          },
          {
            "wr_id":"9",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b86",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091147_8462.jpg"
          },
          {
            "wr_id":"4",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b81",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091147_8462.jpg"
          },
          {
            "wr_id":"9",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b86",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091147_8462.jpg"
          },
          {
            "wr_id":"5",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b82",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091176_7629.png"
          },
          {
            "wr_id":"10",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b87",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091176_7629.png"
          },
          {
            "wr_id":"5",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b82",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091176_7629.png"
          },
          {
            "wr_id":"10",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b87",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091176_7629.png"
          },
          {
            "wr_id":"6",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b83",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091203_127.png"
          },
          {
            "wr_id":"11",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b88",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091203_127.png"
          },
          {
            "wr_id":"6",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b83",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091203_127.png"
          },
          {
            "wr_id":"11",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b88",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091203_127.png"
          },
          {
            "wr_id":"7",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b84",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091228_4278.png"
          },
          {
            "wr_id":"12",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b89",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091228_4278.png"
          },
          {
            "wr_id":"7",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b84",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091228_4278.png"
          },
          {
            "wr_id":"12",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b89",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091228_4278.png"
          },
          {
            "wr_id":"8",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b85",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091244_1595.png"
          },
          {
            "wr_id":"13",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b810",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091244_1595.png"
          },
          {
            "wr_id":"8",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b85",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091244_1595.png"
          },
          {
            "wr_id":"13",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b810",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091244_1595.png"
          }
        ];
      }
      if (cates === "work") {
        returnData = [
          {
            "wr_id":"4",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b81",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091147_8462.jpg"
          },
          {
            "wr_id":"9",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b86",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091147_8462.jpg"
          },
          {
            "wr_id":"5",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b82",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091176_7629.png"
          },
          {
            "wr_id":"10",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b87",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091176_7629.png"
          },
          {
            "wr_id":"6",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b83",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091203_127.png"
          },
          {
            "wr_id":"11",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b88",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091203_127.png"
          },
          {
            "wr_id":"7",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b84",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091228_4278.png"
          },
          {
            "wr_id":"12",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b89",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091228_4278.png"
          },
          {
            "wr_id":"8",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b85",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091244_1595.png"
          },
          {
            "wr_id":"13",
            "bo_table":"work",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b810",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091244_1595.png"
          }
        ];
      }
      if (cates === "industry") {
        returnData = [
          {
            "wr_id":"4",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b81",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091147_8462.jpg"
          },
          {
            "wr_id":"9",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b86",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091147_8462.jpg"
          },
          {
            "wr_id":"5",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b82",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091176_7629.png"
          },
          {
            "wr_id":"10",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b87",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091176_7629.png"
          },
          {
            "wr_id":"6",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b83",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091203_127.png"
          },
          {
            "wr_id":"11",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b88",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091203_127.png"
          },
          {
            "wr_id":"7",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b84",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091228_4278.png"
          },
          {
            "wr_id":"12",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b89",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091228_4278.png"
          },
          {
            "wr_id":"8",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b85",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091244_1595.png"
          },
          {
            "wr_id":"13",
            "bo_table":"industry",
            "wr_subject":"\ud504\ub85c\uc81d\ud2b810",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1911/a9942743e8884f23966a461701481938_1573091244_1595.png"
          }
        ];
        }
    } else {
      axios.get("/api", {
        params : {
          category : this.props.tabData.category,
          status : this.props.tabData.status,
          leng : 2
        }
      })
      .then(response => {
        console.log(response.data)
        returnData = response.data;
      })
      .catch(response=>{
        console.log(response)
      })
    }
    return returnData;
  }
  render() {
    var getData = this.getLists();
    console.log(getData)
    return (
      <div>
        <div className="pageTitles">
          <h1 className="avenir_heavy">Work</h1>
        </div>
        <div>
          <div id="workDataLists" className="clear">
          {getData.map((getDatas, i)=>(
            <div key={i}>
              <Link to="/work/">
                <p className="projectTitle">{getDatas.wr_subject}</p>
                <div className="listThumbs">
                  <img src={getDatas.wr_img} alt={"dbrand portfolio "+getDatas.wr_subject} />
                </div>
              </Link>
            </div>
          ))}
          </div>
        </div>
      </div>
    )
  }
}

export default WorkContain;