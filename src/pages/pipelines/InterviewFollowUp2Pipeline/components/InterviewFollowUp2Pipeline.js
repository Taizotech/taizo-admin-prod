/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import style from "../../candidatePipeline/pipeline.module.scss";
import { Autocomplete, Pagination, TextField } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { LoadingButton } from "@mui/lab";
import {
  GetCandidatePipeline,
  GetNotAttendEvent,
  UpdateCanPipelineStatus,
  UpdateFollowup2PipelineStatus,
  getCandidateLead,
  getcandidateDetails,
} from "../../../../apiServices";
import {
  MyModal,
  addDaysToDate,
  dateFormate,
  getCurrentDateTime,
  modifyDate,
} from "../../../../utility";
import ModalContainer from "../../../../components/modal_popup";
import greengif from "../../../../assets/images/imgpsh_fullsize_anim (1).gif";
import {
  CandidatePipelineActions,
  commonPopupActions,
} from "../../../../redux-store/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { HiOutlineRefresh } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import InterviewFollowUp2Filter from "./interviewFollowUp2Filter";
import ScheduleInterview from "../../../Candidate/CandidateInterview/scheduleInterview";

function InterviewFollowUp2Pipeline() {
  const [leadData, setLeadData] = useState({
    data: [],
  });

  let filterDetails = useSelector(
    (state) => state.CandidatePipelineDetails.interviewFollowUp2Filter
  );

  let refreshPage = useSelector(
    (state) => state.CandidatePipelineDetails.refreshCountIncrement
  );
  const [callRemainder, setCallRemainder] = useState({
    notes: "",
    date: null,
  });
  const [dateTimeError, setDateTimeError] = useState(false);
  const [enableSubmit, setenableSubmit] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [notAttendEventArray, setNotAttendEventArray] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [notAttendEvent, setNotAttendEvent] = useState("");
  const [eventError, setEventError] = useState("");
  const [leadDetails, setleadDetails] = useState("");
  const [popups, setShowPopups] = useState({
    callRemainder: false,
    success: false,
    confirmation: false,
  });
  const [totalCount, setTotalCount] = useState(0);
  const [showRedDot, setShowRedDot] = useState(false);
  const Dispatch = useDispatch();
  const currentDate = new Date();
  currentDate.setSeconds(0);
  currentDate.setMilliseconds(0);

  const maxDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);

  const handleCandidateDetails = async (candidateleadId, type) => {
    let data;
    if (type === "CandidateLead") {
      data = await getCandidateLead(candidateleadId);
    } else if (type === "RegisterCandidate") {
      data = await getcandidateDetails(candidateleadId);
    }

    // Dispatch action to show the popup and pass the fetched data
    Dispatch(
      commonPopupActions.setShowPopup({
        name: "candidateDetails",
        id: candidateleadId,
        type: type,
        data: data,
      })
    );
  };

  function handleCallRemainderChange(name, value) {
    console.log(value, "date formate");
    if (name === "date") {
      setDateTimeError(false);
      setCallRemainder((prev) => ({ ...prev, [name]: value }));
    } else {
      setCallRemainder((prev) => ({ ...prev, [name]: value }));
    }
  }
  const formattedDateTime = getCurrentDateTime();
  console.log(formattedDateTime, "CurrentDateandTime");
  function submitNotAttend() {
    if (notAttendEvent === "") {
      setEventError("Please select an event.");
      return;
    }
    setenableSubmit(true);
    let obj = {
      notAttend: true,
      event: notAttendEvent,
      dates: formattedDateTime,
      mn: leadDetails.mobileNumber,
    };
    UpdateFollowup2PipelineStatus(obj).then(() => {
      showNotattend(false);
      setenableSubmit(false);
      setNotAttendEvent("");
      Dispatch(CandidatePipelineActions.setRefreshCount());
    }, []);
  }
  useEffect(() => {
    GetNotAttendEvent().then((data) => {
      console.log(data, "status");
      setNotAttendEventArray(data);
    });
  }, []);
  async function fetchData() {
    setIsRotating(true);
    let data = await GetCandidatePipeline(filterDetails);

    if (data.status == "success") {
      setLeadData(data);
      setTotalCount(data.totalElements);
    } else {
      setLeadData({
        data: [],
      });
      setTotalCount(0);
    }
    setTimeout(() => {
      setIsRotating(false);
    }, 1000);
  }
  useEffect(() => {
    fetchData();
    setShowRedDot(ShowRedDot(initialFilterObj, filterDetails));
  }, [filterDetails, refreshPage]);

  function paginationChange(event, page) {
    Dispatch(
      CandidatePipelineActions.setPageChange({
        type: "interviewFollowUp2Filter",
        value: page - 1,
      })
    );
  }
  function showNotQualify(value) {
    setShowPopups((prev) => ({ ...prev, confirmation: value }));
  }
  function submitconfirmed() {
    let obj = {
      confirmed: true,
      dates: formattedDateTime,
      mn: leadDetails.mobileNumber,
    };
    UpdateFollowup2PipelineStatus(obj).then(() => {
      handleOpenConfirmFollowUp(false);
      Dispatch(CandidatePipelineActions.setRefreshCount());
    }, []);
  }

  function showNotattend(value) {
    setShowPopups((prev) => ({ ...prev, notAttend: value }));
  }
  function handleOpenConfirmFollowUp(value) {
    setShowPopups((prev) => ({ ...prev, confirmation: value }));
  }
  function handleCallRemainder(value) {
    setShowPopups((prev) => ({ ...prev, callRemainder: value }));
  }
  function submitCallRemainder(e) {
    e.preventDefault();
    if (!callRemainder.date || !callRemainder.notes) {
      setDateTimeError(!callRemainder.date);
      return;
    }
    setenableSubmit(true);
    let obj = {
      connectingQualify: true,
      dates:
        callRemainder.date instanceof Date
          ? callRemainder.date.toISOString().split("T").join(" ")
          : callRemainder.date.split("T").join(" "),
      notes: callRemainder.notes,
      mn: leadDetails.mobileNumber,
    };
    setShowLoader(true);

    UpdateFollowup2PipelineStatus(obj)
      .then((res) => {
        setShowLoader(false);
        handleCallRemainder(false);
        setenableSubmit(false);
        handleCallRemainderChange("date", "");
        setCallRemainder({
          notes: "",
          date: "",
        });
        Dispatch(CandidatePipelineActions.setRefreshCount());
      })
      .catch((error) => {
        console.error("Error submitting call remainder:", error);
        setShowLoader(false);
        // Handle error state or message display
      });
  }
  let initialFilterObj = {
    mobileNumber: -1,
    assignTo: localStorage.getItem("adminID"),
    profilePageNo: -1,
    fromSource: "",
    jobCategory: "",
    currentStatus: "",
    dateFilterType: "",
    // createdTimeStart: "2020-01-01",
    // createdTimeEnd: dateFormate(addDaysToDate(1)),
    expYearsMax: -1,
    expYearsMin: -1,
    page: "",
    followupStatus: -1,
    stages: 11,
    pipelineStage: "Interview date set",
    startDate: dateFormate(modifyDate("sub", 120)),
    endDate: dateFormate(new Date()),
  };

  function ShowRedDot(obj1, obj2) {
    // Omitting the 'page' key from both objects
    const obj1WithoutPage = { ...obj1 };
    delete obj1WithoutPage.page;

    const obj2WithoutPage = { ...obj2 };
    delete obj2WithoutPage.page;
    for (let key in obj1WithoutPage) {
      if (obj1WithoutPage.hasOwnProperty(key)) {
        if (obj1WithoutPage[key] !== obj2WithoutPage[key]) {
          return true;
        }
      }
    }
    return false;
  }

  return (
    <div className={`${style.pipelineContainer} mx-2`}>
      <div className={`${style.headerCard} p-2 d-flex justify-content-between`}>
        <b>Follow Up 2 ({totalCount})</b>{" "}
        <div className="mt-1">
          <div className="d-inline-block">
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                fetchData();
              }}
            >
              {" "}
              <HiOutlineRefresh
                className={`${
                  isRotating ? style.refreshRotate : style.refreshcolor
                }`}
              />
            </span>
          </div>{" "}
          <div
            onClick={() => {
              setShowFilter(true);
            }}
            style={{ cursor: "pointer", color: "#858585" }}
            className="d-inline-block mx-2"
          >
            <FaFilter />
            <p
              style={{
                backgroundColor: showRedDot ? "red" : "transparent",
                width: "9px",
                height: "9px",
                marginTop: "-12px",
                zIndex: 1000,
                marginLeft: "10px",
                borderRadius: "50%",
              }}
            ></p>{" "}
          </div>
        </div>
      </div>

      <div className={`${style.bodyContainer}`}>
        {leadData.data.map((el) => (
          <div
            key={el.id}
            onClick={() => {
              setleadDetails(el);
            }}
          >
            <div className={`${style.bodyCard} p-1 `}>
              <div className={`${style.textContent} p-1 `}>
                <div className="d-flex justify-content-between">
                  <div
                    onClick={() => {
                      handleCandidateDetails(el.id, "RegisterCandidate");
                    }}
                    className="text-success"
                    style={{ cursor: "pointer" }}
                  >
                    <b>
                      {" "}
                      {el.firstName ? el.firstName : "-"}{" "}
                      {el.lastName ? el.lastName : ""}
                    </b>
                  </div>{" "}
                  {/* style={{backgroundColor:"#f5f2f2", height:"25px",width:"40px",borderRadius:"50%"}} */}
                  <div>
                    <>
                      {el.followUpDate2 === dateFormate(new Date()) ? (
                        <div className="d-flex align-items-center justify-content-center">
                          <img
                            src={greengif}
                            alt=""
                            className=""
                            width={"40px"}
                            height={"25px"}
                            style={{ marginTop: "2.3px" }}
                          />
                        </div>
                      ) : (
                        <span>
                          {(() => {
                            const differenceDays = Math.floor(
                              (new Date().getTime() -
                                new Date(el.followUpDate2).getTime()) /
                                (1000 * 60 * 60 * 24)
                            );

                            const daysAgo = Math.abs(differenceDays);
                            if (daysAgo === 1) {
                              return (
                                <b style={{ fontSize: "12px" }}>Yesterday</b>
                              );
                            } else {
                              return (
                                <>
                                  {" "}
                                  <b style={{ fontSize: "12px" }}>
                                    {daysAgo} days ago
                                  </b>
                                </>
                              );
                            }
                          })()}
                        </span>
                      )}
                    </>
                  </div>
                </div>
                {el.jobCategory ? el.jobCategory : "-"} <br />
                {/* {el.mobileNumber ? el.mobileNumber : "-"} */}
                <div className="d-flex justify-content-between">
                  <div>{el.mobileNumber ? el.mobileNumber : "-"}</div>
                  <b
                    style={{
                      border: "1px solid yellow",
                      backgroundColor: "lightyellow",
                      fontSize: "10px",
                      borderRadius: "8px",
                      marginRight: "18px",
                      padding: "4px",
                    }}
                  >
                    {el.fromSource === "Retention"
                      ? "Old lead"
                      : el.fromSource === null
                      ? "Meta lead"
                      : el.fromSource}
                  </b>
                </div>
              </div>
              <div
                style={{ marginTop: "-20px", marginBottom: "17px" }}
                className="d-flex justify-content-end"
              >
                <div>
                  <div className="dropdown"></div>
                </div>
                <div></div>
              </div>
              <div
                style={{ marginTop: "-20px" }}
                className="d-flex justify-content-end"
              >
                <div>
                  <div className="dropdown">
                    <span
                      style={{ cursor: "pointer" }}
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <BsThreeDotsVertical />
                    </span>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li onClick={showNotattend}>
                        <a className="dropdown-item" href="#">
                          Not Attend
                        </a>
                      </li>
                      <li
                        onClick={() => {
                          handleCallRemainder(true);
                        }}
                      >
                        <a className="dropdown-item" href="#">
                          Call Remainder
                        </a>
                      </li>
                      <li onClick={handleOpenConfirmFollowUp}>
                        <a className="dropdown-item" href="#">
                          <ScheduleInterview
                            candidateId={el.id}
                            relationName={el.relationName}
                            relationType={el.relationshipType}
                            relationNumber={el.emergencyContactNumber}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 d-grid justify-content-center">
        <Pagination
          // variant="outlined"
          shape="rounded"
          color="success"
          boundaryCount={1}
          siblingCount={0}
          onChange={paginationChange}
          count={leadData.totalPages}
          size="small"
        />
      </div>

      {showFilter && (
        <MyModal>
          <ModalContainer
            // zIndex={2}
            childComponent={
              <>
                <InterviewFollowUp2Filter
                  onclose={() => {
                    setShowFilter(false);
                  }}
                />
              </>
            }
          />
        </MyModal>
      )}

      {/* {popups.confirmation && (
        <>
          <MyModal>
            <ModalContainer
              zIndex="5000"
              childComponent={
                <>
                  <div>
                    <h4 className=""> Confirmation </h4>
                    <div>
                      Are you sure that you want to confirm{" "}
                      <b>
                        {" "}
                        {leadDetails.firstName}
                        {leadDetails.lastName}
                      </b>
                      ?
                    </div>
                    <div className="d-flex justify-content-end flex-row mt-3 ">
                      <button
                        onClick={() => {
                          handleOpenConfirmFollowUp(false);
                        }}
                        className="btn btn-danger mx-3"
                      >
                        No
                      </button>{" "}
                      <button
                        onClick={submitconfirmed}
                        className="btn btn-success"
                      >
                        Yes
                      </button>
                    </div>
                  </div>
                </>
              }
            />
          </MyModal>
        </>
      )} */}
      {popups.notAttend && (
        <>
          <MyModal>
            <ModalContainer
              // zIndex="5000"
              childComponent={
                <>
                  <div>
                    <h5 className=""> Confirmation </h5>
                    <div>
                      Are you sure that you want to not attend{" "}
                      <b>
                        {" "}
                        {leadDetails.firstName} {leadDetails.lastName}
                      </b>
                      , please select <b>event</b>?
                    </div>
                    <div>
                      <Autocomplete
                        id="tags-outlined"
                        className="mt-3"
                        options={notAttendEventArray.map((option) => option)}
                        fullWidth
                        getOptionLabel={(option) => option}
                        value={notAttendEvent}
                        onChange={(e, newValue) => {
                          setNotAttendEvent(newValue);
                          console.log(newValue);
                          setEventError("");
                        }}
                        required
                        filterSelectedOptions
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Event"
                            placeholder="Event"
                          />
                        )}
                      />
                      {eventError && (
                        <div className="text-danger">{eventError}</div>
                      )}
                    </div>
                    <div className="d-flex justify-content-end flex-row mt-3 ">
                      <button
                        onClick={() => {
                          showNotattend(false);
                          setNotAttendEvent("");
                          setEventError("");
                        }}
                        className="btn btn-danger mx-3"
                      >
                        No
                      </button>{" "}
                      <button
                        onClick={submitNotAttend}
                        className="btn btn-success"
                        disabled={enableSubmit}
                      >
                        Yes
                      </button>
                    </div>
                  </div>
                </>
              }
            />
          </MyModal>
        </>
      )}
      {popups.callRemainder && (
        <>
          <MyModal>
            <ModalContainer
              childComponent={
                <>
                  <div style={{ width: "300px" }}>
                    {" "}
                    <div className="d-flex justify-content-between mb-3">
                      <h4 className="text-center">Call Remainder</h4>
                      <span
                        onClick={() => {
                          handleCallRemainder(false);
                        }}
                        className="btn btn-outline-danger"
                      >
                        {" "}
                        <IoMdClose />
                      </span>
                    </div>
                    <form onSubmit={(e) => submitCallRemainder(e)}>
                      <label htmlFor="">Follow up date : </label>
                      <input
                        type="datetime-local"
                        id="date"
                        name="date"
                        min={currentDate.toISOString().slice(0, -8)}
                        max={maxDate.toISOString().slice(0, -8)}
                        className="form-control"
                        onChange={(e) => {
                          const inputDateTime = e.target.value;
                          const formattedDateTime = inputDateTime + ":00"; // Append ":00" for seconds
                          handleCallRemainderChange("date", formattedDateTime);
                        }}
                        required
                      />

                      <div>
                        {" "}
                        <TextField
                          label="Add Notes"
                          multiline
                          value={callRemainder.notes}
                          onChange={(e) => {
                            handleCallRemainderChange("notes", e.target.value);
                          }}
                          variant="outlined"
                          fullWidth
                          required
                          margin="normal"
                        />
                      </div>
                      <LoadingButton
                        type="submit"
                        loading={showLoader}
                        variant="outlined"
                        disabled={enableSubmit}
                      >
                        <span>Submit</span>
                      </LoadingButton>
                    </form>
                  </div>

                  {/* <div className="d-flex flex-row justify-content-end mt-3  ">
                      <button
                        type="button"
                        className="btn btn-danger mx-2"
                        onClick={() => {
                          setShowPopups((prev) => ({
                            ...prev,
                            callRemainder: false,
                          }));
                        }}
                      >
                        Close
                      </button>
                      <button className="btn btn-success" type="submit">
                        Submit
                      </button>
                    </div> */}
                </>
              }
            />
          </MyModal>
        </>
      )}
    </div>
  );
}

export default InterviewFollowUp2Pipeline;
