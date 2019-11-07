# React-Project Doc.

## PHP API
- 서버위치 : /api/index.php
- 사용법 : axios get?쿼리파라미터 전달
- status 
1) main : $status = "main" $bo_table 게시판의 댓글이 아닌 글을 모두 조회 메인슬라이드 출력시 사용<br /> 
- 데이터 DB 필드
wr_subject : 메인슬라이드 배너에 출력할 포트폴리오 타이틀<br />
wr_content : 메인슬라이드 배너에 출력할 포트폴리오 소개텍스트<br />
wr_link1 : 메인슬라이드 배너에 보여줄 포트폴리오 링크<br />
function get_list_thumbnail : 썸네일 추출 함수<br /> 
wr_1 : 텍스트 좌우정렬 (left or right)<br />
wr_2 : 슬라이더 출력순서 (낮은순서 대로 출력)<br />
wr_3 : 타이틀 글자 색상(#를 제외한 rgb코드)<br />
wr_4 : 텍스트 글자 색상(#를 제외한 rgb코드)<br />
- 데이터 json key name
wr_subject : 메인슬라이드 배너에 출력할 포트폴리오 타이틀<br/>
wr_text : 메인슬라이드 배너에 출력할 포트폴리오 소개텍스트<br/>
wr_link : 메인슬라이드 배너에 보여줄 포트폴리오 링크<br/>
wr_img : 썸네일url<br/>
wr_aligin : 텍스트 좌우정렬 (left or right)<br/>
titleColor : 타이틀 글자 색상(#를 제외한 rgb코드)<br/>
textColor : 텍스트 글자 색상(#를 제외한 rgb코드)<br/>