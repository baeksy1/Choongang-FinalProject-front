import { useEffect, useState } from "react";
import "../enMain/EnMain.css";

import "../enMain/EnTeam.css";
import EnL_TeamassingmentModal from "./EnL_TeamassginmentModal";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

function EnL_newProjectDetail() {
  //쿼리파라미터 값

  const location = useLocation();
  // console.log(location);

  // const pageDetail = async () => {
  //   const response = await axios
  //     .get(`/api/engineer/newProjectDetail/${pro_id}`)
  //     .then((response) => setProjectDetail(response.data));
  //   console.log(response.data);
  // };

  // useEffect(() => {
  //   pageDetail();
  // }, []);

  return (
    <>
      <div className="page-wrapper">
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-7 align-self-center">
              <h4 className="page-title text-truncate text-dark font-weight-medium mb-1">
                프로젝트 세부
              </h4>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card1">
                <div className="card-body">
                  <form action="#" method="post">
                    <div className="form-body">
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">회사명</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <p className="infoUser-answer">
                              {location.state.project.cus_company_name}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">대표자명</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <p className="infoUser-answer">
                              {location.state.project.cus_boss}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">회사 전화번호</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <p className="infoUser-answer">
                              {location.state.project.cus_company_ph}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">사업자 등록번호</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <p className="infoUser-answer">
                              {location.state.project.cus_business_id}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">사업자 주소</div>
                          </div>
                        </div>

                        <div className="col-md-2 col-md-2-1">
                          <div className="form-group mb-3">
                            <p className="infoUser-answer">
                              {location.state.project.cus_address1}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <p className="infoUser-answer">
                              {location.state.project.cus_address2}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">계약기간</div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                          <div>
                            <div className="form-group">
                              <p className="infoUser-answer">
                                {location.state.project.pro_startDate} -{" "}
                                {location.state.project.pro_endDate}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-2">
                            <div className="form-group mb-3">
                              <div className="infoUser">관리대상 OS</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <p className="infoUser-answer">서버불러와야됑</p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <div className="form-group mb-3">
                              <div className="infoUser">대표 IP</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <p className="infoUser-answer">서버불러오기</p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <div className="form-group mb-3">
                              <div className="infoUser">담당자</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <p className="infoUser-answer">
                                {location.state.project.pro_rep}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <div className="form-group mb-3">
                              <div className="infoUser">담당자 연락처</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <p className="infoUser-answer">
                                {location.state.project.cus_phone_number}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row ">
                          <div className="col-md-2">
                            <div className="form-group mb-3">
                              <div className="infoUser">담당자 이메일</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <p className="infoUser-answer">
                                {location.state.project.cus_email}
                              </p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-2">
                              <div className="form-group mb-3">
                                <div className="infoUser">서버 이름</div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group mb-3">
                                <p className="infoUser-answer">
                                  서버이름 나열하기
                                </p>
                              </div>
                            </div>
                            <EnL_TeamassingmentModal />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnL_newProjectDetail;