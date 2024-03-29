import { useDispatch } from "react-redux";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden h-screen  font-sans">
      <div className="p-4 lg:p-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8 ">
          <>
            <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-primary/10">
              <div className="text-base leading-7">
                <h3 className="font-semibold text-web_clr text-2xl mb-2">
                  Course
                </h3>
                <p className="text-4xl font-bold tracking-tight text-web_clr sm:text-6x">
                  3
                </p>
              </div>
            </div>
          </>

          <div className="flex gap-x-4 rounded-xl bg-white/5  ring-1 ring-inset ring-primary/10">
            <div className="text-base leading-7">
              <h3 className="font-semibold text-2xl mb-2 text-web_clr">
                Teacher
              </h3>
              <p className="text-4xl font-bold tracking-tight text-web_clr sm:text-6x">
                100
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-primary/10">
            <div className="text-base leading-7">
              <h3 className="font-semibold text-web_clr text-2xl mb-2">
                Student
              </h3>
              <p className="text-4xl font-bold tracking-tight text-web_clr sm:text-6x">
                200
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-primary/10">
            <div className="text-base leading-7">
              <h3 className="font-semibold text-web_clr text-2xl mb-2">
                Student
              </h3>
              <p className="text-4xl font-bold tracking-tight text-web_clr sm:text-6x">
                200
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
