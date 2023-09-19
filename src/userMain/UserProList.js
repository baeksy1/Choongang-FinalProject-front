import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import SearchIcon from "../engineerLeader/SearchIcon";
import { Background } from "../loding/Styles";

function UserProList({state}) {

  const[proList, setProList] = useState([]);
  
  //페이지 리스트
 // const [list, setList] = useState([]); // 
  const [first,setFirst] = useState([]); //처음으로 불러온 response값 저장

  //검색
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 정보 저장
  const itemsPerPage = 10; // 페이지당 아이템 수

  const handlePageChange = (page) => { // 페이지 핸들링
    setCurrentPage(page);
  };

  //search 버튼을 눌렀을때의 이벤트
  const handleSearch = (e) => { 

    const searchWord = document.querySelector(".select-word-engl").value; //검색 단어
    const filter = document.querySelector(".selectee").value; // 회사명 프로젝트명(옵션값)

    // 데이터를 복사하여 필터링
    const filteredList = first.filter((item) => { //검색시작
      if (filter === "프로젝트명") {
        return item.pro_name.includes(searchWord);
      } else if (filter === "계약상태") {
        return item.pro_status.includes(searchWord);
      } else if (filter === "계약시작일") {
        return item.pro_startdate.includes(searchWord);
      } else if (filter === "정기점검일") {
        return item.pro_pi.includes(searchWord);
      } else if (filter === "전체" && searchWord === "") {
        return item;
      } else if (filter === "전체") {
        return (
          item.pro_name.includes(searchWord) ||
          item.pro_status.includes(searchWord) ||
          item.pro_startdate.includes(searchWord) ||
          item.pro_pi.includes(searchWord) 
        );
      }
      return true;
    });

    // 필터링된 데이터를 업데이트
    setProList(filteredList); //list
    setCurrentPage(1); // 페이지를 첫 번째 페이지로 리셋
  }; // 검색끝

  const indexOfLastItem = currentPage * itemsPerPage; //마지막 페이지 계산
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; 
  var currentItems = proList.slice(indexOfFirstItem, indexOfLastItem); //list
 
 useEffect(()=>{
    axios.get(`/api/main/user/list/${state.cus_id}`).then((response)=>{
      setProList(response.data);
      console.log(response.data);
      console.log('state: ',state);
    })
    .catch((error)=>{
      console.log(error);
    });
  },[state.cus_id]);


  return (
    <>
      <div className="page-wrapper" >

        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-7 align-self-center">
              <h3>
                프로젝트 목록
              </h3>
            </div>


          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">

              <div className="card">

                <div className="card-body">
                <label style={{ display: 'flex', justifyContent: 'right', marginBottom: '50px' }}> 
                  <div className="customize-input right select-proengl" style={{marginRight: '30px'}}>
                    <select style={{ display: 'inline-block'}} className="selectee">
                      <option className="selecteeop">전체</option>
                      <option className="selecteeop">프로젝트명</option>
                      <option className="selecteeop">계약상태</option>
                      <option className="selecteeop">계약시작일</option>
                      <option className="selecteeop">정기점검일</option>
                    </select>
                  </div>
                    <input type="search" className="form-control form-control-sm" placeholder="검색하기" aria-controls="zero_config" style={{ width: '150px', marginRight: '10px' }} />
                    <div className="search-click-engl" onClick={handleSearch}> 
                      <SearchIcon color="#9cbba6" />
                    </div>
                  </label> 
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">NO</th>
                          <th scope="col">프로젝트이름</th>
                          <th scope="col">계약상태</th>
                          <th scope="col">계약시작</th>
                          <th scope="col">정기점검날짜</th>
                        </tr>

                      </thead>
                      <tbody>
                        {currentItems.map((project,index) => (

                          <tr key={project.pro_id}>
                          <th scope="row">{(currentPage - 1) * itemsPerPage + index + 1}</th>
                          <td class="user-proname"><Link to={{pathname: `/user/prodetail/${project.pro_id}` }}>{project.pro_name}</Link></td>
                          <td>{project.pro_status}</td>
                          <td>{project.pro_startdate}</td>
                          <td>{project.pro_pi}</td>
                          </tr>

                        ) 
                        )}
                       
                        {/* <tr>
                          <th scope="row">2</th>
                          <td class="user-proname"><Link to="/user/prodetail">CyberGuardian</Link> </td>
                          <td>계약중</td>
                          <td>2023.09.01</td>
                          <td>23일</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td class="user-proname"><Link to="/user/prodetail"> QuantumSynergy</Link></td>
                          <td>계약중</td>
                          <td>2023.08.13</td>
                          <td>12일</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td class="user-proname"><Link to="/user/prodetail">DataPulse</Link></td>
                          <td>계약중</td>
                          <td>2023.08.09</td>
                          <td>1일</td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td class="user-proname"><Link to="/user/prodetail">InnovateTech</Link></td>
                          <td>계약만료</td>
                          <td>2022.08.11</td>
                          <td>30일</td>
                        </tr> */}


                      </tbody>
                    </table>
                  </div>
                  <div style={{ textAlign: 'center'}}>
                    {/* <ul className="pagination" >
                      <li className="page-item disabled">
                        <Link className="page-link" href="#" tabindex="-1">
                          Prev
                        </Link>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" href="#">
                          2 <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" href="#">
                          Next
                        </Link>
                      </li>
                    </ul> */}
                     <div className="pagedivengl pagination-engl">
                      <Pagination
                          activePage={currentPage}
                          itemsCountPerPage={itemsPerPage}
                          totalItemsCount={proList.length} //list
                          pageRangeDisplayed={5}
                          prevPageText={"prev"}
                          nextPageText={"next"}
                          onChange={handlePageChange}
                        />
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>



        </div>
      </div>


    </>
  )

}

export default UserProList