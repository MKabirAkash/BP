import {
  faBook,
  faChalkboard,
  faChalkboardTeacher,
  faComments,
  faDownload,
  faGraduationCap,
  faHome,
  faLightbulb,
  faStickyNote,
  faTicketAlt,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

export const navigation_admin = [
  {
    name: "Dashboard",
    to: "/",
    icon: faHome,
    current: false,
    subItem: [
      { name: "Finance", to: "/", current: false },
      { name: "Analytics", to: "/", current: false },
    ],
  },
  {
    name: "Students",
    to: "/",
    icon: faGraduationCap,
    current: false,
    subItem: [
      { name: "Student List", to: "/students", current: false },
      { name: "Export Student", to: "/students/export", current: false },
      { name: "Notice", to: "/students/notice", current: false },
      { name: "Notification", to: "/students/notification", current: false },
    ],
  },
  { name: "Course", to: "/coursedetail", icon: faChalkboard, current: false },
  { name: "Exam", to: "/exam", icon: faStickyNote, current: false },
  { name: "Books", to: "/books", icon: faBook, current: false },
  {
    name: "Administration",
    to: "/administration",
    icon: faStickyNote,
    current: false,
  },
  {
    name: "Teacher",
    to: "/teacher",
    icon: faChalkboardTeacher,
    current: false,
  },
  {
    name: "Discussion Forum",
    to: "/discussion",
    icon: faComments,
    current: false,
  },
  {
    name: "Doubt Solve",
    to: "/doubt",
    icon: faLightbulb,
    current: false,
  },
  { name: "Coupons", to: "/coursedetail", icon: faTicketAlt, current: false },
  {
    name: "Resource & Tools",
    to: "/resource",
    icon: faTools,
    current: false,
  },
  {
    name: "Send Message",
    to: "/message",
    icon: faDownload,
    current: false,
  },
];
