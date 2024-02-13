import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  faAngleDown,
  faAngleLeft,
  faBan,
  faCopy,
  faEdit,
  faMessage,
  faPaperPlane,
  faPlane,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import StudentCourseTable from "../components/student/admin_student/StudentCourseTable";
import { EyeIcon, KickOut, LockIcon } from "../components/SVG/SVGIcons";
import StudentPaymentTable from "../components/student/admin_student/StudentPaymentTable";
import StudentSearchFilter from "../components/student/admin_student/StudentSearchFilter";
import StudentBanModal from "../components/common/Modals/StudentBanModal";
const data = [1, 2, 3, 4, 5];
const data2 = [1, 2, 3];
function SingleStudent() {
  let [showBasic, setShowBasic] = useState(true);
  let [showCourse, setShowCourse] = useState(false);
  let [showActivity, setShowActivity] = useState(false);
  let [showPayment, setShowPayment] = useState(false);
  let [showActivityAdmin, setShowActivityAdmin] = useState(true);
  let [showActivityStudent, setShowActivityStudent] = useState(false);
  let [showBanModal, setShowBanModal] = useState(false);
  let [showMessageModal, setShowMessageModal] = useState(false);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const banModalClose = () => {
    setShowBanModal(false);
  };
  const messageModalClose = () => {
    setShowMessageModal(false);
  };
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="bg-gray p-4 md:px-8 md:pt-8">
        <StudentSearchFilter />
      </div>
      <div className="p-4 md:px-8 bg-gray">
        <div className="flex flex-col">
          <div className="p-4 md:p-8 flex flex-col rounded-lg bg-white">
            <div className="flex flex-row justify-between my-auto">
              <span className="text-table_heading text-lg font-medium mr-3 mt-[2px]">
                <span className=" mr-2 cursor-pointer" onClick={goBack}>
                  <FontAwesomeIcon icon={faAngleLeft} className="pt-2" />{" "}
                </span>
                <span>Student Details</span>
              </span>
            </div>
            <div className="mt-6 rounded-xl flex flex-row  text-web_clr gap-x-3">
              <div
                className={`w-1/4 mx-auto text-sm md:text-base text-center border-b-2 cursor-pointer ${
                  showBasic ? "border-web_clr" : "border-[#FFF8F5]"
                }`}
                onClick={() => {
                  setShowBasic(true);
                  setShowActivity(false);
                  setShowCourse(false);
                  setShowPayment(false);
                }}
              >
                Basic Info
              </div>
              <div
                className={`w-1/4 mx-auto text-sm md:text-base text-center border-b-2 cursor-pointer ${
                  showCourse ? "border-web_clr" : "border-[#FFF8F5]"
                }`}
                onClick={() => {
                  setShowBasic(false);
                  setShowActivity(false);
                  setShowCourse(true);
                  setShowPayment(false);
                }}
              >
                Active Courses
              </div>
              <div
                className={`w-1/4 mx-auto text-sm md:text-base text-center border-b-2 cursor-pointer ${
                  showPayment ? "border-web_clr" : "border-[#FFF8F5]"
                }`}
                onClick={() => {
                  setShowBasic(false);
                  setShowActivity(false);
                  setShowCourse(false);
                  setShowPayment(true);
                }}
              >
                Payments & Device
              </div>
              <div
                className={`w-1/4 mx-auto text-sm md:text-base text-center border-b-2 cursor-pointer ${
                  showActivity ? "border-web_clr" : "border-[#FFF8F5]"
                }`}
                onClick={() => {
                  setShowBasic(false);
                  setShowActivity(true);
                  setShowCourse(false);
                  setShowPayment(false);
                }}
              >
                Activity Log
              </div>
            </div>
          </div>
        </div>

        {showBasic && (
          <div className="bg-white rounded-xl">
            <div className="p-4 md:p-8 flex flex-row justify-between rounded-lg bg-gray pt-2 mx-2 md:mx-6 ">
              <div className="flex flex-row gap-x-3 ">
                <div>
                  {" "}
                  <img
                    className="h-20 w-20 rounded-full"
                    src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                    alt=""
                  />
                </div>
                <div className="my-auto">
                  <span className="text-table_heading font-medium text-xl">
                    Tonmoy emon
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-end my-auto pt-3 md:pt-0">
                <span
                  className="py-2.5 px-5 rounded-xl bg-white text-web_clr mr-3 cursor-pointer border border-white hover:border-web_clr"
                  onClick={() => {
                    setShowMessageModal(!showMessageModal);
                  }}
                >
                  <span className="mr-2 hidden md:inline">Send Message</span>
                  <span className="">
                    <FontAwesomeIcon icon={faPaperPlane} className="" />
                  </span>
                </span>
                <span className="py-2.5 px-4 rounded-xl bg-web_clr text-white cursor-pointer">
                  <span className="mr-3 hidden md:inline">Edit</span>
                  <span>
                    <FontAwesomeIcon icon={faEdit} />
                  </span>
                </span>
              </div>
            </div>
            <div className="p-4 md:p-8 flex flex-col  rounded-lg bg-[#fff8f5] mt-4 mx-2 md:mx-6">
              <span className="flex flex-row justify-start border-b-[1px] border-opacity-25 border-table_low py-4 my-auto">
                <span className="w-1/2 text-text_clr text-[15px]">
                  Registation Number
                </span>
                <span className="w-1/2 text-table_heading text-base font-medium">
                  ASJSJHGAJSHGJ
                </span>
              </span>
              <span className="flex flex-row justify-start border-b-[1px] border-opacity-25 border-table_low py-4 my-auto">
                <span className="w-1/2 text-text_clr text-[15px]">
                  Phone No:
                </span>
                <span className="w-1/2 text-table_heading text-base font-medium">
                  0176546987
                </span>
              </span>
              <span className="flex flex-row justify-start border-b-[1px] border-opacity-25 border-table_low py-4 my-auto">
                <span className="w-1/2 text-text_clr text-[15px]">
                  Institute
                </span>
                <span className="w-1/2 text-table_heading text-base font-medium">
                  Dhaka College
                </span>
              </span>
              <span className="flex flex-row justify-start border-b-[1px] border-opacity-25 border-table_low py-4 my-auto">
                <span className="w-1/2 text-text_clr text-[15px]">
                  SSC Batch
                </span>
                <span className="w-1/2 text-table_heading text-base font-medium">
                  2024
                </span>
              </span>
              <span className="flex flex-row justify-start border-b-[1px] border-opacity-25 border-table_low py-4 my-auto">
                <span className="w-1/2 text-text_clr text-[15px]">
                  HSC Batch
                </span>
                <span className="w-1/2 text-table_heading text-base font-medium">
                  2026
                </span>
              </span>
              <span className="flex flex-row justify-start border-b-[1px] border-opacity-25 border-table_low py-4 my-auto">
                <span className="w-1/2 text-text_clr text-[15px]">Address</span>
                <span className="w-1/2 text-table_heading text-base font-medium">
                  Dhaka , Bangladesh , Asiakjhkjhkhkllk
                </span>
              </span>
              <span className="flex flex-row justify-start border-b-[1px] border-opacity-25 border-table_low py-4 my-auto">
                <span className="w-1/2 text-text_clr text-[15px]">Mail</span>
                <span className="w-1/2 text-table_heading text-base font-medium">
                  Test@gmail.com
                </span>
              </span>
              <span className="flex flex-row justify-start border-b-[1px] border-opacity-25 border-table_low py-4 my-auto">
                <span className="w-1/2 text-text_clr text-[15px]">
                  Blood Group
                </span>
                <span className="w-1/2 text-table_heading text-base font-medium">
                  AB-
                </span>
              </span>
            </div>
            {/* buttons ban unban */}
            <span
              className="text-sm md:text-base bg-web_clr hover:bg-hover_clr_dark transition py-3 px-8 rounded-xl text-white cursor-pointer inline-block my-2 md:my-4 mx-2 md:mx-6"
              onClick={() => {
                setShowBanModal(!showBanModal);
              }}
            >
              Ban <FontAwesomeIcon icon={faBan} />
            </span>
            <span className="text-sm md:text-base bg-success hover:bg-hover_clr_dark transition py-3 px-8 rounded-xl text-white cursor-pointer inline-block my-2 md:my-4">
              Unban
            </span>
          </div>
        )}

        {/* /sub navigatio show courses start */}
        {showCourse && (
          <div className="bg-white">
            <div className="px-4 md:px-8 flex flex-row justify-between rounded-lg ">
              <span className="text-table_heading text-2xl font-medium my-auto">
                Active Courses
              </span>
              <span className="px-9 py-3 bg-web_clr rounded-xl text-white cursor-pointer">
                <span className="mr-3 hidden sm:inline">Add Course</span>

                <span>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </span>
            </div>
            <div className="p-4 md:p-8 rounded-lg   my-auto">
              <StudentCourseTable data={[1, 2, 3, 4, 5]} />
            </div>
          </div>
        )}
        {/* /sub navigatio show courses end */}

        {/* /sub navigatio show payment start */}
        {showPayment && (
          <div className="bg-white">
            <div className="p-4 md:p-8 flex flex-col justify-between rounded-lg  my-auto">
              <span className="text-table_heading text-2xl font-medium my-auto">
                Devices
              </span>
              <div className=" rounded-xl flex flex-col md:flex-row justify-between gap-x-4 ">
                <div className="w-full md:w-1/2 flex flex-col ">
                  <label className="py-2">Current Device</label>
                  <div className=" rounded-xl border border-input_border flex justify-between">
                    <div className="p-6 flex flex-col gap-y-1">
                      <span className="text-table_heading text-lg font-medium">
                        Chrome 321.6548.225
                      </span>
                      <span className="text-base font-medium text-text_clr">
                        Windows 10 08/02/2026 10:32 AM
                      </span>
                    </div>
                    <div className="p-6 my-auto">
                      <span className="bg-web_clr cursor-pointer rounded-lg text-white py-2 px-6 mx-auto flex justify-between my-auto">
                        <span className="my-auto mr-3 hidden 2xl:inline">
                          Kick Out
                        </span>
                        <span>
                          <KickOut />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col ">
                  <label className="py-2">Current Device</label>
                  <div className=" rounded-xl border border-input_border flex justify-between">
                    <div className="p-6 flex flex-col gap-y-1">
                      <span className="text-table_heading text-lg font-medium">
                        Chrome 321.6548.225
                      </span>
                      <span className="text-base font-medium text-text_clr">
                        Windows 10 08/02/2026 10:32 AM
                      </span>
                    </div>
                    <div className="p-6 my-auto">
                      <span className="bg-web_clr cursor-pointer rounded-lg text-white py-2 px-6 mx-auto flex justify-between my-auto">
                        <span className="my-auto mr-3 hidden 2xl:inline">
                          Kick Out
                        </span>
                        <span>
                          <KickOut />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" rounded-xl flex flex-row justify-between gap-x-4 mt-4">
                <div className="w-full md:w-1/2 flex flex-col ">
                  <label className="py-2">Password</label>
                  <div className=" rounded-xl border border-input_border">
                    <div className="py-3.5 px-6 flex justify-between">
                      <span className="flex ">
                        <LockIcon />
                        <span className="px-3 mt-1">**************</span>
                      </span>
                      <span className="flex my-auto cursor-pointer">
                        <span className="my-auto">
                          <EyeIcon />
                        </span>

                        <span className="pl-2 cursor-pointer">
                          <FontAwesomeIcon
                            icon={faCopy}
                            className="text-web_clr"
                          />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-5 flex flex-col justify-between rounded-lg  my-auto">
                <span className="text-table_heading text-2xl font-medium my-auto">
                  Payments
                </span>
                <div className="py-2">
                  <StudentPaymentTable
                    paymentType="completed"
                    data={[0, 28989, 233, 98, 9, 32, 3]}
                  />
                </div>
              </div>

              <div className="p-5 flex flex-row justify-between rounded-lg  mt-5 border border-input_border cursor-pointer">
                <span>Pending transactions (02)</span>
                <span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
              </div>
              <div className="flex flex-col justify-between rounded-lg  mt-5">
                <span className="text-table_heading text-2xl font-medium my-auto ">
                  Pending Transactions (02)
                </span>
                <div className="py-3">
                  <StudentPaymentTable
                    paymentType="due"
                    data={[0, 28989, 233, 98, 9, 32, 3]}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* /sub navigation show payment ends */}

        {/* /sub navigation Activity starts */}
        {showActivity && (
          <div className="bg-white ">
            <div className="mx-auto flex flex-col justify-center items-center rounded-lg  my-auto">
              <div className="w-full md:w-3/5 flex  text-table_heading text-2xl font-medium my-auto">
                <div
                  className={`w-1/2 mx-auto text-sm md:text-base text-center border-b-2 cursor-pointer  ${
                    showActivityAdmin
                      ? "border-web_clr text-web_clr"
                      : "border-[#FFF8F5]"
                  }`}
                  onClick={() => {
                    setShowActivityStudent(false);
                    setShowActivityAdmin(true);
                  }}
                >
                  Admin
                </div>
                <div
                  className={`w-1/2 mx-auto text-sm md:text-base text-center border-b-2 cursor-pointer ${
                    showActivityStudent
                      ? "border-web_clr text-web_clr"
                      : "border-[#FFF8F5]"
                  }`}
                  onClick={() => {
                    setShowActivityStudent(true);
                    setShowActivityAdmin(false);
                  }}
                >
                  Student
                </div>
              </div>
              <div className="w-11/12 lg:w-3/5 flex flex-col gap-y-3 mt-4 pb-8">
                {showActivityAdmin &&
                  data &&
                  data.map(() => (
                    <div className="flex justify-between border rounded-xl border-input_border px-5 py-3.5 mx-2 shadow-1  ">
                      <div className="flex gap-x-3 ">
                        <div className="my-auto">
                          {" "}
                          <img
                            className="h-[44px] w-[44px] md:h-[70px] md:w-[70px] rounded-full"
                            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col my-auto">
                          <span className="my-auto">
                            <span className="text-table_heading">
                              Tonmoy hasan
                            </span>{" "}
                            <span className="text-text_clr">
                              has kicked out{" "}
                            </span>
                            <span className="text-table_heading">
                              Json haider
                            </span>
                          </span>
                          <span className="text-text_clr text-sm my-auto">
                            10/02/2025 {" : "} 02:26 AM{" "}
                          </span>
                        </div>
                      </div>
                      <span className="border border-white hover:border-web_clr hover:bg-white cursor-pointer my-auto px-2 md:px-6 py-1 md:py-2 rounded-lg bg-btn_bg2 text-web_clr text-sm md:text-base min-w-max">
                        See Reason
                      </span>
                    </div>
                  ))}
                {showActivityStudent &&
                  data2 &&
                  data2.map(() => (
                    <div className="flex justify-between border rounded-xl border-input_border px-5 py-3.5 mx-2">
                      <div className="flex gap-x-3 ">
                        <div>
                          {" "}
                          <img
                            className="h-[70px] w-[70px] rounded-full"
                            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col my-auto">
                          <span className="my-auto">
                            <span className="text-table_heading">
                              Json haider
                            </span>{" "}
                            <span className="text-text_clr">
                              has changed mail
                            </span>
                          </span>
                          <span className="text-text_clr text-sm my-auto">
                            test@gmail{" "}
                            <span className="text-table_heading">to</span>{" "}
                            akash@test.com
                          </span>
                          <span className="text-text_clr text-xs my-auto">
                            10/02/2025 {" : "} 02:26 AM{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* /sub navigation Activity ends */}
      </div>

      {showBanModal && (
        <section className="modal_css mt-80">
          <StudentBanModal type="ban" banModalClose={banModalClose} />
        </section>
      )}
      {showMessageModal && (
        <section className="modal_css">
          <StudentBanModal type="message" banModalClose={messageModalClose} />
        </section>
      )}
    </div>
  );
}

export default SingleStudent;
