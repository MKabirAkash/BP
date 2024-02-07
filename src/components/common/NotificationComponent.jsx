import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NotificationComponent = () => {
  const { notificationTosta } = useSelector((state) => state.template);

  useEffect(() => { 
    switch ( notificationTosta.status) {
      case 'success':
        toast.success(notificationTosta.message,  {
          position: toast.POSITION.TOP_RIGHT,
          closeButton: true,
          className: 'bg-gray-200 dark:bg-gray__800 dark:text-gray__200', // Change the background color for error toast
        });
        break;
      case 'error':
        
        toast.error(notificationTosta.message,  {
          position: toast.POSITION.TOP_RIGHT,
          closeButton: false,
          className: 'bg-gray-200 dark:bg-gray__800 dark:text-gray__200', // Change the background color for error toast
        });
        break;
      case 'warning':
        toast.warning(notificationTosta.message,  {
          position: toast.POSITION.TOP_RIGHT,
          closeButton: false,
          className: 'bg-gray-200 dark:bg-gray__800 dark:text-gray__200', // Change the background color for error toast
        });
        break;
      default:
        break;
    }
  }, [notificationTosta]);

  return (
    <div>
      <ToastContainer  />
    </div>
  );
};

export default NotificationComponent;
