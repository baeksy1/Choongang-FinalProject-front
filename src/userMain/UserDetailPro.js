import { Link, useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from '../loding/Loding';


function UserDetailPro() {


  const[proDetail, setProDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const {pro_id} = useParams();

  useEffect(()=>{
    axios.get(`/api/main/user/prodetail/${pro_id}`).then((response)=>{
      setProDetail(response.data);
      console.log(response.data);
      setLoading(false);
      
    })
    .catch((error)=>{
      console.log(error);
    });
  },[]);

  

  return (
    <>
         {/* {loading ? <Loading /> : null} */}
      <div className="page-wrapper" >

        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-7 align-self-center">
              <h3>
                프로젝트 정보
              </h3>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-6">

              <div className="card">

                <div className="card-body pro-body">

                    <div className="pro-info">
                    프로젝트 이름 : <span>{proDetail?.[0]?.pro_name}</span>
                    </div>
                    
                    <div className="pro-info">
                    프로젝트 시작일 :  <span>{proDetail?.[0]?.pro_startdate}</span>
                    </div>
                    <div className="pro-info">
                    프로젝트 만료일 :  <span>{proDetail?.[0]?.pro_enddate}</span>
                    </div>
                    <div className="pro-info">
                    프로젝트 계약 상태 :  <span>{proDetail?.[0]?.pro_status}</span>
                    </div>
                    <div className="pro-info">
                    프로젝트 정보 :  <span>{proDetail?.[0]?.pro_info}</span>
                    </div>
                    <div className="pro-info">
                    프로젝트 정기점검 날짜 : <span>{proDetail?.[0]?.pro_pi}</span>
                    </div>
                    <div className="pro-info">
                    담당 엔지니어팀 : <span>{proDetail?.[0]?.pro_status == '진행 중' ? proDetail?.[0]?.team_id : '배정 미정'}</span>
                    </div>

                    </div>

                </div>
              </div>
            </div>

            <div className="page-breadcrumb">
              <div className="row">
                <div className="col-7 align-self-center">
                  <h3>
                    서버 정보
                  </h3>
                </div>
              </div>
            </div>

            <div className="container-fluid">
             <div className="row">
              <div className="col-6">

              <div className="card">
              
              <div className="card-body pro-body">

              <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">서버이름</th>
                          <th scope="col">IP주소</th>
                          <th scope="col">운영체제</th>
                          <th scope="col">CPU</th>
                          <th scope="col">RAM</th>
                          <th scope="col">디스크 용량</th>
                          <th scope="col">서버 상태</th>
                          <th scope="col">담당 엔지니어</th>
                          <th scope="col" style={{width: "20px"}}></th>
                        </tr>

                      </thead>
                      <tbody style={{marginTop: "50px"}}>

                        {proDetail.map((project,index) => (

                          <tr key={index}>
                          <th scope="row">{index+1}</th>
                          <td class="user-servername">{project.server_name}</td>
                          <td class="user-ipadress">{project.ip_address}</td>
                          <td class="user-oprationsystem">{project.operating_system}</td>
                          <td>{project.cpu}</td>
                          <td>{project.ram}</td>
                          <td>{project.disk_capacitygb}</td>
                          <td>{project.server_status}</td>
                          <td>{project.eng_name}</td>
                          <td>
                            <button className="emergency" style={{padding: "0", width: "80px", height: "20px"}}>
                              <Link to="/user/projectDetailList" className="linkto" style={{fontSize: "xx-small", padding: 0}}>긴급요청</Link>
                            </button>
                            <button className="server-btn" style={{padding: "0", width: "80px", height: "20px"}}> 
                              <Link to="/user/projectDetailList" className="linkto" style={{fontSize: "xx-small", padding: 0}}>점검내역</Link>
                            </button>
                          </td>
                          </tr>

                        ) 
                        )}
                       
                      </tbody>
                    </table>
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
export default UserDetailPro