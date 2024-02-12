import React, { useState } from "react";
import QuestionCourse from "./ClassesCourse";

function CourseHeader() {
  return (
    <div>
      {/* div start */}
      <div className="container mx-auto">
        <div className="course_runing_hamberger">
          <a href="#">আমার কোর্সসমূহ</a>{" "}
          <a href="#">এইচ এস সি পাওয়ার প্লে ২৪</a>{" "}
          <a href="#">রেকর্ডেড ক্লাস</a> <a>রসায়ন</a>
          <div className="flex gap-6 mt-10">
            <div className="player w-8/12 bg-gray__600 h-[500px] relative">
              <div className="play_icon absolute top-[40%] left-[45%]">
                <iframe src="" />
              </div>
            </div>
            <div className="w-4/12 shadow-3">
              <div className="course_topic_header">
                <div className="flex flex-row justify-between border-b border-[#FF4900] py-3 px-5">
                  <div className="flex flex-row">
                    <span>icon</span>
                    <h2 className="pl-3">রসায়ন</h2>
                  </div>

                  <span className="ml-auto">icon end</span>
                </div>
                <QuestionCourse />
                <QuestionCourse />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseHeader;
