/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import ToggleButton from "./ToggleButton";
import { clientInviation } from "../../notification/MailHandler/clientInviation";
import { useSelector, useDispatch } from "react-redux";
import { getAgencyDetails } from "../../redux/agency/agencySlice";

function InvitationModal({
  invitationModalclose,
  isStaff,
  isAdmin,
  link,
  linkStaff,
  linkAdmin,
  isParam,
  modalOpen,
}) {
  const dispatch = useDispatch();
  const [mailTitle, setMailTitle] = useState("");
  const [mailBody, setMailBody] = useState("");
  const [targetMail, setTargetMail] = useState("");
  const [forClient, setForClient] = useState(false);
  const [forStaff, setForStaff] = useState(false);
  const [forAdmin, setForAdmin] = useState(false);
  const { messages } = useSelector((state) => state.messageSlice);
  const [msgType, setMsgType] = useState(null);

  useEffect(() => {
    if (isParam) {
      dispatch(getAgencyDetails(isParam));
    }
  }, []);
  const { agencyDetails } = useSelector((state) => state.agencySlice);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const loadSelectedMessage = (type) => {
    let targetMessage = null;
    targetMessage = messages.find((obj) => obj.type === type);
    setMailTitle(targetMessage.header);
    setMailBody(targetMessage.Text);
    setMsgType(type);
  };

  const sendMailConfirm = () => {
    let newTitle = null;
    if (isParam) {
      newTitle = mailTitle.concat(
        ` under supervision of ${agencyDetails ? agencyDetails.agencyName : ""}`
      );
    }
    let mailObject = {
      to: targetMail,
      subject: msgType,
      text: mailBody,
      header: isParam ? newTitle : mailTitle,
      link: forClient
        ? link
        : forStaff
        ? linkStaff
        : forAdmin
        ? linkAdmin
        : null,
    };
    invitationModalclose();
    clientInviation(mailObject);
  };
  return (
    <>
      <div className="w-full max-w-[800px] rounded bg-white border border-form-stroke ">
        <div className="flex sm:flex-row items-center justify-between lg:flex-row bg-gray py-6 lg:px-12 sm:px-4 xs:px-2">
          <h4 className="text-primary text-xl sm:text-2xl w-full sm:w-1/2 ">
            Send Email
          </h4>

          <a href="#" onClick={() => invitationModalclose()}>
            <FontAwesomeIcon icon={faClose} />
          </a>
        </div>

        <div className="flex felx-wrap justify-between md:justify-end mr-2 flex-col xs:flex-row sm:px-4 lg:px-10 xl:px-15 xs:px-1">
          <div className="flex  flex-col sm:flex-row">
            <div className="mt-5 mx-4">
              {!isStaff && !isAdmin && (
                <ToggleButton
                  name="Client"
                  isChecked={!forStaff && !forAdmin && forClient ? true : false}
                  onClick={(e) => {
                    if (!forClient) {
                      setForClient(true);
                      setForAdmin(false);
                      setForStaff(false);
                    } else {
                      setForClient(false);
                    }
                  }}
                />
              )}
            </div>

            {isStaff && (
              <div className="mt-5 mx-4">
                <ToggleButton
                  name="Staff"
                  isChecked={forStaff && !forAdmin && !forClient ? true : false}
                  onClick={(e) => {
                    if (!forStaff) {
                      setForClient(false);
                      setForAdmin(false);
                      setForStaff(true);
                    } else {
                      setForStaff(false);
                    }
                  }}
                />
              </div>
            )}

            {isAdmin && (
              <>
                <div className="mt-5 mx-4">
                  <ToggleButton
                    name="Staff"
                    isChecked={
                      forStaff && !forAdmin && !forClient ? true : false
                    }
                    onClick={(e) => {
                      if (!forStaff) {
                        setForClient(false);
                        setForAdmin(false);
                        setForStaff(true);
                      } else {
                        setForStaff(false);
                      }
                    }}
                  />
                </div>

                <div className="mt-5 mx-4">
                  <ToggleButton
                    name="Admin"
                    isChecked={
                      !forStaff && forAdmin && !forClient ? true : false
                    }
                    onClick={(e) => {
                      if (!forAdmin) {
                        setForClient(false);
                        setForAdmin(true);
                        setForStaff(false);
                      } else {
                        setForAdmin(false);
                      }
                    }}
                  />
                </div>
              </>
            )}

            <select
              className="border mt-4 ml-4 text-gray__400 "
              onChange={(e) => loadSelectedMessage(e.target.value)}
            >
              <option value="none">Select type</option>
              {messages &&
                messages.map((item, index) => (
                  <option key={index} value={item.type}>
                    {item.type}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="sm:px-8 lg:px-12 xl:px-15 xs:px-1">
          <div
            className={`px-4 sm:p-0 ${
              forClient ? "" : forAdmin ? "" : forStaff ? "" : "hidden"
            }`}
          >
            <ActiveInput
              label="Invite Link"
              value={
                forClient
                  ? link
                  : forStaff
                  ? linkStaff
                  : forAdmin
                  ? linkAdmin
                  : ""
              }
              onChange={(e) => setTargetMail(e.target.value)}
            />
          </div>

          <div className="px-4 sm:p-0">
            <ActiveInput
              label="To"
              type="email"
              value={targetMail}
              onChange={(e) => setTargetMail(e.target.value)}
            />

            <ActiveInput
              label="Subject"
              value={mailTitle}
              onChange={(e) => setMailTitle(e.target.value)}
            />

            <ActiveTextArea
              label="Email Body"
              value={mailBody}
              onChange={(e) => setMailBody(e.target.value)}
            />
          </div>

          <div className="-mx-3 flex flex-wrap justify-end lg:px-0 sm:px-0 xs:px-0  mb-2">
            <div className="w-full sm:w-1/4 p-3 ">
              <button
                className="text-dark block w-full  border border-[#dddddd] p-1 text-center text-base  font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                onClick={() => invitationModalclose()}
              >
                Cancel
              </button>
            </div>

            <div className="w-full sm:w-1/4 p-3">
              <button
                className="block w-full border border-primary bg-primary disabled:bg-[#dddddd] disabled:border-[#dddddd] p-1 text-center text-base  font-medium text-white transition hover:bg-opacity-100 "
                onClick={sendMailConfirm}
                disabled={
                  !emailRegex.test(targetMail) ||
                  targetMail === "" ||
                  msgType === null ||
                  (msgType === "Invitation" &&
                    !forClient &&
                    !forAdmin &&
                    !forStaff)
                    ? true
                    : false
                }
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvitationModal;

const ActiveInput = ({ label, value, onChange, type = "text", ...props }) => {
  return (
    <>
      <label className="mt-4 mb-1 block text-lg text-gray__400 text-left">
        {label}
      </label>
      <input
        {...props}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=""
        className="h-10 w-full border border-form-stroke bg-gray-200 bg-opacity-25 px-4 py-4 text-body-color rounded outline-none focus:border-primary focus-visible:shadow-none"
      />
    </>
  );
};

const ActiveTextArea = ({ label, value, onChange, ...props }) => {
  return (
    <>
      <label className="mt-4 mb-1 block text-lg text-gray__400 text-left">
        {label}
      </label>

      <textarea
        {...props}
        rows="5"
        value={value}
        onChange={onChange}
        placeholder=""
        className=" border-form-stroke bg-gray-200 bg-opacity-25 text-body-color placeholder-body-color  w-full rounded-lg border-[1.5px] py-4 px-4 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
      />
    </>
  );
};
