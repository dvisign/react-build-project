# React-Project Doc.

## PHP API
- 서버위치 : /api/index.php
- 사용법 : axios get?쿼리파라미터 전달
- status 
1. GET Mathod
  1) main : $status = "main" $bo_table 게시판의 댓글이 아닌 글을 모두 조회 메인슬라이드 출력시 사용<br /> 
  - 전송 파라미터<br />
  bo_table : 조회할 게시판 table <br />
  - 데이터 DB 필드 및 함수<br />
  wr_subject : 메인슬라이드 배너에 출력할 포트폴리오 타이틀<br />
  wr_content : 메인슬라이드 배너에 출력할 포트폴리오 소개텍스트<br />
  wr_link1 : 메인슬라이드 배너에 보여줄 포트폴리오 링크<br />
  function get_list_thumbnail : 썸네일 추출 함수<br /> 
  wr_1 : 텍스트 좌우정렬 (left or right)<br />
  wr_2 : 슬라이더 출력순서 (낮은순서 대로 출력)<br />
  wr_3 : 타이틀 글자 색상(#를 제외한 rgb코드)<br />
  wr_4 : 텍스트 글자 색상(#를 제외한 rgb코드)<br />
  - 데이터 JSON Key Name<br />
  wr_subject : 메인슬라이드 배너에 출력할 포트폴리오 타이틀<br/>
  wr_text : 메인슬라이드 배너에 출력할 포트폴리오 소개텍스트<br/>
  wr_link : 메인슬라이드 배너에 보여줄 포트폴리오 링크<br/>
  wr_img : 썸네일url<br/>
  wr_aligin : 텍스트 좌우정렬 (left or right)<br/>
  titleColor : 타이틀 글자 색상(#를 제외한 rgb코드)<br/>
  textColor : 텍스트 글자 색상(#를 제외한 rgb코드)<br/>

  2) list : $status = "list" $bo_table 게시판의 댓글이 아닌 글중에 메인에 출력할 게시물 조회 후 최근날짜 순으로 출력<br />
  - 전송파라미터<br />
  bo_table : 조회할 게시판<br />
  leng : state에 저장된 조회할 게시글 수, 조회후 state update ++5 <br />
  - 데이터 DB 필드 및 함수<br />
  wr_subject : 프로젝트 타이틀<br />
  get_list_thumbnail : 프로젝트 썸네일 추출함수<br />
  wr_id : 게시글 wr_id<br />
  - 데이터 JSON Key Name<br />
  wr_subject : 프로젝트 타이틀<br />
  wr_img : 프로젝트 썸네일 url<br />
  bo_table : 조회한 게시판<br />
  wr_id : 조회한 각 게시글 wr_id<br />
