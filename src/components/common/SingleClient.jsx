import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

import PayStatusModal from "../components/client/PayStatusModal";
import { historySlideAction } from "../redux/common/template";
import SlideOver from "../components/admin/SlideOver";
import moment from "moment/moment";
import axios from "axios";
import {
  getClientData,
  updateClientComment,
  updateClientNote,
} from "../redux/client/clientSlice";
import { getAllAgencies } from "../redux/sysadmin/adminSlice";
import {
  BackIcon,
  BadgeIcon,
  EditIcon,
  EmailIcon,
  HistoryIcon,
  PercentIcon,
} from "../components/SVG/SVGIcons";
import InvitationModal from "../components/common/InvitationModal";
import DetailUpdateModal from "../components/client/DetailUpdateModal";
import { SucccessBadge } from "../components/client/Badges";

const SingleClient = () => {
  const dispatch = useDispatch();
  const { name, id, status, agency } = useParams();
  const navigate = useNavigate();
  let decodedName = name.replace(/\+/g, ".");
  let [statModal, setStatModal] = useState(false);
  const { agencies } = useSelector((state) => state.adminSlice);
  const { userProfile } = useSelector((state) => state.profile);
  let [clientData, setClientData] = useState(null);
  let [selectedStatus, setSelectedStatus] = useState(status);
  let [history, setHistory] = useState(null);
  let [clientNotes, setClientNotes] = useState(null);
  let [clientComs, setClientComs] = useState(null);
  let [comment, setComment] = useState(null);
  let [note, setNote] = useState(null);
  let [showCom, setShowCom] = useState(false);
  let [showNote, setShowNote] = useState(false);
  let [billInterval, setBillInterval] = useState(null);
  let [clientInfo, setClientInfo] = useState(null);
  let [modalOpen, setModalOpen] = useState(false);
  let [fixedMail, setFixedMail] = useState(null);
  let [update, setUpdate] = useState(null);
  let [discount, setDiscount] = useState(null);
  let [billDate, setBillDate] = useState(null);
  const encKey = import.meta.env.VITE_ENCRYPTION_KEY;
  const statusmodalopen = () => {
    setStatModal(true);
  };
  const statusmodalclose = () => {
    setStatModal(false);
  };
  const setInvitationModalClose = () => {
    setModalOpen(false);
  };
  const UpdateModalClose = () => {
    setUpdate(null);
  };
  const saveComment = (e) => {
    e.preventDefault();
    dispatch(updateClientComment(id, comment, userProfile));
    let newComment = {
      text: comment,
      done_by: userProfile.firstName + " " + userProfile.lastName,
    };
    let coms = [...clientComs, newComment];
    setClientComs(coms);
  };
  const saveNote = (e) => {
    e.preventDefault();
    dispatch(updateClientNote(id, note, userProfile));
    let newNote = {
      text: note,
      done_by: userProfile.firstName + " " + userProfile.lastName,
    };
    let notes = [...clientNotes, newNote];
    setClientNotes(notes);
  };

  useEffect(() => {
    getClientData(id).then((response) => {
      setHistory(response.history);
      setClientComs(response.comment);
      setClientNotes(response.note);
      setClientInfo(response);
    });
  }, []);
  useEffect(() => {
    dispatch(getAllAgencies(encKey, agency));
  }, []);
  useEffect(() => {
    async function fetchInterval() {
      const url =
        "https://us-central1-activeagency.cloudfunctions.net/getBillingInterval";
      const api = "activeagencyapiversion1forinternaluse";
      const res = await axios.get(url, {
        params: {
          enKey: encKey,
          agencyId: agency,
          api: api,
          name: decodedName,
        },
      });

      if (res && res.data && res.data.bill) {
        setBillInterval(res.data.bill.billing_interval);
      }
    }
    fetchInterval();

    if (agencies && agencies.length > 0) {
      const info = agencies.find((item) => item.account_name === decodedName);
      setClientData(info);
    }
  }, [decodedName, agencies]);

  return (
    <div className="overflow-hidden min-h-screen bg-gray p-6 md:p-8 lg:p-12 ">
      {history && <SlideOver data={history} />}
      {/* heading section start */}
      <div className="mx-auto max-w-full lg:mx-0 grid grid-cols-6">
        <div className="col-span-5">
          <div className="flex justify-start">
            <div
              className="min-w-max mt-2 mr-4 cursor-pointer"
              onClick={(e) => {
                navigate(-1);
              }}
            >
              <span className="">
                {" "}
                <BackIcon />
              </span>
            </div>
            <div className="min-w-maxs">
              <h2 className=" text-xl font-bold tracking-tight text-pg_title lg:text-2xl">
                Client Details
              </h2>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex justify-end">
          <button
            className="w-full max-w-[200px] rounded-lg text-profile_name border border-gray__200 py-2 px-1 sm:p-2 lg:px-2 lg:py-2 flex justify-center xl:justify-start"
            onClick={() => {
              setFixedMail(clientInfo.email);
              setModalOpen(true);
            }}
          >
            <span className="flex flex-row mx-auto">
              <div className="pt-1.5">
                <EmailIcon colour="#242F57" />
              </div>
              <span className="px-1 sm:px-1.5 ml-1 text-profile_name text-xs lg:text-sm xl:text-base font-medium hidden sm:inline pt-1 lg:pt-0">
                Send Mail
              </span>
            </span>
          </button>
        </div>
      </div>
      {/* heading section ends */}
      {/* basic info section start */}
      <div className="mx-auto max-w-full lg:mx-0 bg-white rounded-md mt-6">
        <div className="p-6 flex flex-col md:flex-row">
          <div className="w-full md:w-[30%] flex flex-row justify-start border-r border-table_low mr-4">
            <div className="rounded-full h-16 w-16 max-h-16 max-w-16">
              <img
                src={
                  clientInfo && clientInfo.profileImage
                    ? clientInfo.profileImage
                    : "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                }
                className="rounded-full h-full w-full max-h-16 max-w-16 "
              />
            </div>
            <div className=" ml-3 my-auto ">
              <div className="w-full py-2 flex flex-col ">
                <span className="flex flex-row ">
                  <span className="text-profile_name text-base font-semibold">
                    {clientInfo && clientInfo.firstName && clientInfo.lastName
                      ? clientInfo.firstName + " " + clientInfo.lastName
                      : "No name"}
                  </span>

                  <span
                    className={`ml-2 text-xs rounded-sm px-2 text-center my-auto ${
                      status === "0" ||
                      status === "1" ||
                      status === "2" ||
                      status === "4"
                        ? "border-info text-info "
                        : status === "3" || status === "5"
                        ? "border-[#69A75E] text-[#69A75E]"
                        : status === "6" || status === "7"
                        ? "border-[#FFA114] text-[#FFA114]"
                        : "border-[#FF3014] text-[#FF3014]"
                    } border bg-opacity-20`}
                  >
                    {status === "0"
                      ? "Invited"
                      : status === "1"
                      ? "Pending"
                      : status === "2"
                      ? "Waiting"
                      : status === "3"
                      ? "Approved"
                      : status === "4"
                      ? "Invoice sent"
                      : status === "5"
                      ? "Active"
                      : status === "6"
                      ? "Late 4"
                      : status === "7"
                      ? "Late 3"
                      : status === "8"
                      ? "Deactivated"
                      : status === "9"
                      ? "Cancelled"
                      : "Inactive"}
                  </span>
                </span>
                <span className="text-base text-table_low font-medium">
                  Client
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[53%] flex justify-start">
            <div>
              <div className="w-full py-2 flex flex-col ">
                <p className="text-profile_name text-base font-semibold">
                  {decodedName ? decodedName : "No name found"}
                </p>
                <p className="text-base text-table_low font-medium">
                  {clientInfo && clientInfo.email
                    ? clientInfo.email
                    : "not set"}
                </p>
              </div>
            </div>
          </div>
          {/* history part start */}
          <div className="w-full  md:w-[17%] flex justify-center md:justify-end">
            {history && history !== null && (
              <span
                className="flex flex-row bg-[#3B5CEE] rounded-md px-5 py-3 max-h-11 my-auto cursor-pointer"
                onClick={() => dispatch(historySlideAction(true))}
              >
                <div className="mt-0.5">
                  <HistoryIcon colour="#FFFFFF" />
                </div>
                <span className="px-1 sm:px-1.5 ml-1 text-white text-xs lg:text-sm xl:text-base font-semibold pt-1 lg:pt-0">
                  History
                </span>
              </span>
            )}
          </div>
          {/* history part end */}
        </div>
      </div>
      {/* basic info section end */}

      {/* account status change action end */}

      <div className="flex flex-col md:flex-row w-full items-center gap-6 pl-7 pr-8 py-6 mt-5 relative bg-primary rounded-md border border-solid border-transparent ">
        <div className="w-full md:w-[70%] flex flex-col items-start justify-center gap-[12px] relative flex-1 grow ">
          <p className="relative w-fit mt-[-1.00px] font-medium text-white text-lg whitespace-nowrap">
            Change status of client's account
          </p>
          <p className="relative self-stretch font-normal text-white text-sm ">
            Account status can be set manually or once an account is Approved in
            Active Agency,further status of account is dynamically set based on
            client's payment status.An account is cancelled if client's payment
            is due till AC campaign due date.
          </p>
        </div>
        <div className="flex w-full md:w-[30%]  items-center  relative mr-[-1.00px] bg-white rounded-md">
          <select
            className="w-full text-profile_name rounded-lg border-none bg-white h-14 py-2 pr-6 pl-10 text-base outline-none focus:border-opacity-100 focus-visible:shadow-none font-roboto"
            // style={{ height: "2.75rem" }}
            value={selectedStatus}
            onChange={(e) => {
              setSelectedStatus(e.target.value);
              if (e.target.value !== status) {
                statusmodalopen();
              }
            }}
          >
            {status && Number(status) === 0 && (
              <option value="0" className="sm:text-base lg:text-xl ">
                Invite sent
              </option>
            )}
            {status && Number(status) === 1 && (
              <option value="1" className="sm:text-base lg:text-xl ">
                Requested
              </option>
            )}
            {status && Number(status) === 2 && (
              <option value="2" className="sm:text-base lg:text-xl">
                Waiting
              </option>
            )}
            {status && Number(status) <= 3 && (
              <option value="3" className="sm:text-base lg:text-xl">
                Approved
              </option>
            )}

            <option value="5" className="sm:text-base lg:text-xl">
              Active
            </option>
            <option value="6" className="sm:text-base lg:text-xl">
              Late 4
            </option>
            <option value="7" className="sm:text-base lg:text-xl">
              Late 3
            </option>
            <option value="8" className="sm:text-base lg:text-xl">
              Deactivated
            </option>
            <option value="9" className="sm:text-base lg:text-xl">
              Cancelled
            </option>
          </select>
        </div>
      </div>
      {/* account status change action end */}
      {/* discount section start */}
      <div className="mx-auto max-w-full lg:mx-0 rounded-md mt-5 grid grid-cols-2 gap-5">
        <div className="col-span-full md:col-span-1 bg-white rounded-md p-5 flex flex-row">
          <div className="w-[75%]">
            <span className="flex flex-row">
              <div className="mt-1 bg-[#FFF3E0] p-1 rounded-md">
                <PercentIcon />
              </div>

              <div className="flex flex-col ml-4">
                <span className="text-[#242F5799] mt-1">Discount</span>
                <span className="mt-1 text-profile_name text-xl font-semibold">
                  {clientData && clientData.discount_percentage
                    ? clientData.discount_percentage
                    : ""}
                </span>
              </div>
            </span>
          </div>
          <div className="w-[25%]">
            <div className="w-full mt-5 flex justify-end">
              <button
                className="border border-gray__200 w-20 rounded-md py-1 outline-none"
                onClick={() => {
                  setUpdate("discount");
                  setDiscount(clientData.discount_percentage);
                }}
              >
                <span className="text-primary text-base">
                  <FontAwesomeIcon icon={faEdit} className="pr-2" />
                  Edit
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-full md:col-span-1 bg-white rounded-md p-5">
          <div>
            <span className="flex flex-row">
              <div className="mt-1 bg-[#FFF3E0] p-1 rounded-md">
                <BadgeIcon />
              </div>

              <div className="flex flex-col ml-4">
                <span className="text-[#242F5799] mt-1">Reseller Discount</span>
                <span className="mt-1 text-profile_name text-xl font-semibold">
                  {clientData && clientData.discount_percentage
                    ? clientData.discount_percentage
                    : ""}
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
      {/* discount section end */}

      {/* 2 type details start here */}
      <div className="mx-auto max-w-full lg:mx-0 rounded-md mt-5 grid grid-cols-2 gap-5">
        <div className="col-span-full lg:col-span-1 bg-white rounded-md p-5 ">
          <div className="border-b border-[#D9D9D9] mb-2 ">
            <p className="py-2 text-base text-profile_name font-medium">
              {" "}
              Billing History{" "}
            </p>
          </div>
          <div className="flex flex-col">
            <div className="w-full px-2 lg:px-4 py-3 grid grid-cols-12 gap-2">
              <div className="col-span-6">
                <p className="mt-1.5 text-sm text-detail_tag font-medium">
                  Billing Date
                </p>
              </div>
              <div className="col-span-6  flex justify-end">
                <div className="my-auto mr-2">
                  <p className="my-auto text-profile_name text-sm font-medium min-w-max">
                    {clientData && clientData.expire
                      ? new Date(
                          new Date(clientData.expire) - 5 * 24 * 60 * 60 * 1000
                        )
                          .toISOString()
                          .split("T")[0]
                      : ""}
                  </p>
                </div>
                <div className="flex justify-start">
                  <button
                    className="border border-gray__200 w-20 rounded-md py-1 outline-none"
                    onClick={() => {
                      setUpdate("billing");
                      setBillDate(
                        new Date(
                          new Date(clientData.expire) - 5 * 24 * 60 * 60 * 1000
                        )
                          .toISOString()
                          .split("T")[0]
                      );
                    }}
                  >
                    <span className="text-primary text-sm sm:text-base">
                      <FontAwesomeIcon icon={faEdit} className="pr-2 " />
                      Edit
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#F7F9FD] px-2 lg:px-4 py-3  grid grid-cols-12 gap-2">
              <div className="col-span-9">
                <p className="my-1.5 text-sm text-detail_tag font-medium">
                  Products
                </p>
              </div>
              <div className="col-span-3  flex justify-end">
                <div className="my-auto mr-2">
                  <p className="my-1.5 text-end text-profile_name text-sm font-medium min-w-max">
                    {clientData && clientData.product_code
                      ? clientData.product_code
                      : ""}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full  px-2 lg:px-4 py-3  grid grid-cols-12 gap-2">
              <div className="col-span-9">
                <p className="my-1.5 text-sm text-detail_tag font-medium">
                  User seats
                </p>
              </div>
              <div className="col-span-3  flex justify-end">
                <div className="my-auto mr-2">
                  <p className="my-1.5 text-end text-profile_name text-sm font-medium min-w-max">
                    {clientData &&
                    clientData.products &&
                    clientData.products[0].entitlements &&
                    (clientData.products[0].entitlements.find(
                      (item) => item.code === "user-seats"
                    )?.limit?.included_units ||
                      clientData.products[0].entitlements.find(
                        (item) => item.code === "user-seats"
                      )?.limit?.purchased_units)
                      ? clientData.products[0].entitlements.find(
                          (item) => item.code === "user-seats"
                        )?.limit?.purchased_units +
                        clientData.products[0].entitlements.find(
                          (item) => item.code === "user-seats"
                        )?.limit?.included_units
                      : 0}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full  bg-[#F7F9FD] px-2 lg:px-4 py-3  grid grid-cols-12 gap-2">
              <div className="col-span-9">
                <p className="my-1.5 text-sm text-detail_tag font-medium">
                  Contacts
                </p>
              </div>
              <div className="col-span-3  flex justify-end">
                <div className="my-auto mr-2">
                  <p className="my-1.5 text-end text-profile_name text-sm font-medium min-w-max">
                    {clientData &&
                    clientData.products &&
                    clientData.products[0].entitlements &&
                    (clientData.products[0].entitlements.find(
                      (item) => item.code === "contacts"
                    )?.limit?.included_units ||
                      clientData.products[0].entitlements.find(
                        (item) => item.code === "contacts"
                      )?.limit?.purchased_units)
                      ? clientData.products[0].entitlements.find(
                          (item) => item.code === "contacts"
                        )?.limit?.purchased_units +
                        clientData.products[0].entitlements.find(
                          (item) => item.code === "contacts"
                        )?.limit?.included_units
                      : 0}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full  px-2 lg:px-4 py-3  grid grid-cols-12 gap-2">
              <div className="col-span-9">
                <p className="my-1.5 text-sm text-detail_tag font-medium">
                  Ac Billing date
                </p>
              </div>
              <div className="col-span-3  flex justify-end">
                <div className="my-auto mr-2">
                  <p className="my-1.5 text-end text-profile_name text-sm font-medium min-w-max">
                    {clientData && clientData.expire ? clientData.expire : ""}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full  bg-[#F7F9FD] px-2 lg:px-4 py-3  grid grid-cols-12 gap-2">
              <div className="col-span-9">
                <p className="my-1.5 text-sm text-detail_tag font-medium">
                  Tier
                </p>
              </div>
              <div className="col-span-3  flex justify-end">
                <div className="my-auto mr-2">
                  <p className="my-1.5 text-end text-profile_name text-sm font-medium min-w-max">
                    {clientData && clientData.product_tier
                      ? clientData.product_tier
                      : ""}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full   px-2 lg:px-4 py-3  grid grid-cols-12 gap-2">
              <div className="col-span-9">
                <p className="my-1.5 text-sm text-detail_tag font-medium">
                  Reserved seats
                </p>
              </div>
              <div className="col-span-3  flex justify-end">
                <div className="my-auto mr-2">
                  <p className="my-1.5 text-end text-profile_name text-sm font-medium min-w-max">
                    {clientData &&
                    clientData.products &&
                    clientData.products[0].entitlements &&
                    (clientData.products[0].entitlements.find(
                      (item) => item.code === "user-seats"
                    )?.limit?.included_units ||
                      clientData.products[0].entitlements.find(
                        (item) => item.code === "user-seats"
                      )?.limit?.purchased_units)
                      ? clientData.products[0].entitlements.find(
                          (item) => item.code === "user-seats"
                        )?.limit?.purchased_units +
                        clientData.products[0].entitlements.find(
                          (item) => item.code === "user-seats"
                        )?.limit?.included_units
                      : 0}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full  bg-[#F7F9FD] px-2 lg:px-4 py-3  grid grid-cols-12 gap-2">
              <div className="col-span-9">
                <p className="my-1.5 text-sm text-detail_tag font-medium">
                  Frequency
                </p>
              </div>
              <div className="col-span-3  flex justify-end">
                <div className="my-auto mr-2">
                  <p className="my-1.5 text-end text-profile_name text-sm font-medium min-w-max">
                    {billInterval && Number(billInterval) === 1
                      ? "Monthly"
                      : "Yearly"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-full lg:col-span-1 bg-white rounded-md p-5 ">
          <div className="border-b border-[#D9D9D9] mb-2 ">
            <p className="py-2 text-base text-profile_name font-medium">
              Other pricing history
            </p>
          </div>
          <div className="flex flex-col">
            <div className="w-full px-2 lg:px-4 py-3 grid grid-cols-12 gap-2">
              <div className="col-span-9">
                <p className="mt-1.5 text-sm text-detail_tag font-medium">
                  AC Retail Price
                </p>
              </div>
              <div className="col-span-3  flex justify-end">
                <div className="my-auto mr-2">
                  <p className="my-auto text-profile_name text-sm font-medium min-w-max">
                    ${" "}
                    {clientData && clientData.product_price
                      ? clientData.product_price
                      : ""}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#F7F9FD] px-2 lg:px-4 py-3  grid grid-cols-12 gap-2">
              <div className="col-span-9">
                <p className="my-1.5 text-sm text-detail_tag font-medium">
                  Emmatic Price
                </p>
              </div>
              <div className="col-span-3  flex justify-end">
                <div className="my-auto mr-2">
                  <p className="my-1.5 text-end text-profile_name text-sm font-medium min-w-max">
                    ${" "}
                    {clientData &&
                    clientData.product_price &&
                    clientData.discount_percentage
                      ? parseFloat(
                          (
                            clientData.product_price -
                            clientData.product_price *
                              (clientData.discount_percentage / 100)
                          ).toFixed(2)
                        )
                      : ""}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full  px-2 lg:px-4 py-3  grid grid-cols-12 gap-2">
              <div className="col-span-9">
                <p className="my-1.5 text-sm text-detail_tag font-medium">
                  Client Price
                </p>
              </div>
              <div className="col-span-3  flex justify-end">
                <div className="my-auto mr-2">
                  <p className="my-1.5 text-end text-profile_name text-sm font-medium min-w-max">
                    ${" "}
                    {clientData &&
                    clientData.product_price &&
                    clientData.discount_percentage
                      ? parseFloat(
                          (
                            clientData.product_price -
                            clientData.product_price *
                              (clientData.discount_percentage / 100)
                          ).toFixed(2)
                        )
                      : ""}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full  bg-[#F7F9FD] px-2 lg:px-4 py-3  grid grid-cols-12 gap-2">
              <div className="col-span-9">
                <p className="my-1.5 text-sm text-detail_tag font-medium">
                  Billing Platform
                </p>
              </div>
              <div className="col-span-3  flex justify-end">
                <div className="my-auto mr-2">
                  <p className="my-1.5 text-end text-profile_name text-sm font-medium min-w-max">
                    <strong>Stripe</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2 type details end here */}
      {/* comment and note */}
      <div className="mx-auto max-w-full lg:mx-0 rounded-md mt-5 grid grid-cols-2 gap-5">
        {/* comment start */}
        <div className="col-span-full lg:col-span-1 bg-white rounded-md p-5 ">
          <div className="flex flex-col border-b border-[#EAEDF7] pb-5 ">
            <label className="text-profile_name text-sm font-roboto font-semibold">
              Comment
            </label>
            <textarea
              rows={5}
              className="w-full mt-1 rounded border border-[#EAEDF7] bg-white  py-2 px-2 text-dark placeholder:text-table_low outline-none focus:border-opacity-100 focus-visible:shadow-none font-roboto"
              onChange={(e) => {
                setComment(e.target.value);
              }}
              placeholder="Write your comment here"
            />
            <div className="flex justify-between mt-3">
              <div className="w-4/6">
                <p
                  className={` px-1 pt-3 text-sm font-medium underline text-blue-500 cursor-pointer `}
                  onClick={() => {
                    setShowCom(!showCom);
                  }}
                >
                  {!showCom ? "Show" : "Hide"} comments
                </p>
              </div>
              <button
                className="bg-white border border-[#3B5CEE] mt-1 rounded-md px-7 py-2.5 text-sm lg:text-base text-[#3B5CEE] w-2/6 max-w-fit"
                onClick={saveComment}
              >
                Save
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col mt-5">
            <div className={` ${showCom ? "block" : "hidden"} `}>
              {clientComs &&
                clientComs.map((item, index) => (
                  <div
                    className="flex flex-col my-2 border-b border-[#EAEDF7] pb-2"
                    key={index}
                  >
                    <div className="w-full">
                      <div className=" flex justify-between">
                        <div className="flex flex-row">
                          <img
                            className="max-h-12"
                            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                          />
                          <div className="flex flex-col ml-2 my-auto">
                            <p className="text-profile_name text-base">
                              <strong>{item.done_by}</strong>
                            </p>
                            <p className="text-sm text-table_low">Author</p>
                          </div>
                        </div>

                        <p className="text-xs lg:text-sm text-profile_name font-medium my-auto ">
                          {item.timestamp && item.timestamp.seconds
                            ? moment(
                                item.timestamp.seconds * 1000 +
                                  item.timestamp.nanoseconds / 1e6
                              ).format("dddd, Do MMM YYYY, h:mm:ss A")
                            : "Now"}
                        </p>
                      </div>
                    </div>
                    <div className="w-full mt-4 ml-2">
                      <p className="text-sm lg:text-base text-[#7985AE] font-medium">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* comment end */}

        {/* note start */}
        <div className="col-span-full lg:col-span-1 bg-white rounded-md p-5 ">
          <div className="flex flex-col border-b border-[#EAEDF7] pb-5 ">
            <label className="text-profile_name text-sm font-roboto font-semibold">
              Note
            </label>
            <textarea
              rows={5}
              className="w-full mt-1 rounded border border-[#EAEDF7] bg-white  py-2 px-2 text-dark placeholder:text-table_low outline-none focus:border-opacity-100 focus-visible:shadow-none font-roboto"
              onChange={(e) => {
                setNote(e.target.value);
              }}
              placeholder="Write your note here"
            />
            <div className="flex justify-between mt-3">
              <div className="w-4/6">
                <p
                  className={` px-1 pt-3 text-sm font-medium underline text-blue-500 cursor-pointer `}
                  onClick={() => {
                    setShowNote(!showNote);
                  }}
                >
                  {!showNote ? "Show" : "Hide"} Note
                </p>
              </div>
              <button
                className="bg-white border border-[#3B5CEE] mt-1 rounded-md px-7 py-2.5 text-sm lg:text-base text-[#3B5CEE] w-2/6 max-w-fit"
                onClick={saveNote}
              >
                Save
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col mt-5">
            <div className={` ${showNote ? "block" : "hidden"} `}>
              {clientNotes &&
                clientNotes.map((item, index) => (
                  <div
                    className="flex flex-col my-2 border-b border-[#EAEDF7] pb-2"
                    key={index}
                  >
                    <div className="w-full">
                      <div className=" flex justify-between">
                        <div className="flex flex-row">
                          <img
                            className="max-h-12"
                            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                          />
                          <div className="flex flex-col ml-2 my-auto">
                            <p className="text-profile_name text-base">
                              <strong>{item.done_by}</strong>
                            </p>
                            <p className="text-sm text-table_low">Author</p>
                          </div>
                        </div>

                        <p className="text-xs lg:text-sm text-profile_name font-medium my-auto ">
                          {item.timestamp && item.timestamp.seconds
                            ? moment(
                                item.timestamp.seconds * 1000 +
                                  item.timestamp.nanoseconds / 1e6
                              ).format("dddd, Do MMM YYYY, h:mm:ss A")
                            : "Now"}
                        </p>
                      </div>
                    </div>
                    <div className="w-full mt-4 ml-2">
                      <p className="text-sm lg:text-base text-[#7985AE] font-medium">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* note end */}
      </div>
      {/* comment and note */}
      {statModal && (
        <div className="contactmodal-container">
          <div className="contactmodal-wrapper">
            <PayStatusModal
              statusmodalclose={statusmodalclose}
              stat={selectedStatus}
              targetId={id}
              userData={clientData}
              bill={billInterval}
            />
          </div>
        </div>
      )}
      {modalOpen && (
        <div className="invitationmodal-container">
          <div className="invitationmodal-wrapper">
            <InvitationModal
              invitationModalclose={setInvitationModalClose}
              modalOpen={true}
              fixedAddress={fixedMail}
            />
          </div>
        </div>
      )}
      {update && update === "discount" && (
        <div className="contactmodal-container">
          <div className="contactmodal-wrapper">
            <DetailUpdateModal
              field="Discount"
              percent={discount}
              detailUpdateModalClose={UpdateModalClose}
            />
          </div>
        </div>
      )}
      {update && update === "billing" && (
        <div className="contactmodal-container">
          <div className="contactmodal-wrapper">
            <DetailUpdateModal
              field="Billing Date"
              date={billDate}
              detailUpdateModalClose={UpdateModalClose}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleClient;
