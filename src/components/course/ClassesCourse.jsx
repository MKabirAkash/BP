import React, { useState } from "react";

function QuestionCourse() {
  const [showSub, setShowSub] = useState(false);
  const showSubmenu = () => {
    setShowSub(!showSub);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex py-3 px-5 border-b">
        <span>icon</span>
        <h2 className="pl-3">চোর ঢুকলে ঘরে কল আসবে মোবাইলে</h2>
        <span className="ml-auto" onClick={showSubmenu}>
          icon
        </span>
      </div>
      {showSub && <div>submenu</div>}
    </div>
  );
}

export default QuestionCourse;
