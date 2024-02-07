import { useDispatch } from "react-redux";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden h-screen  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Bondi PathShala
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 ">
          <>
            <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-primary/10">
              <div className="text-base leading-7">
                <h3 className="font-semibold text-primary text-2xl mb-2">
                  Course
                </h3>
                <p className="text-4xl font-bold tracking-tight text-primary sm:text-6x">
                  3
                </p>
              </div>
            </div>
          </>

          <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-primary/10">
            <div className="text-base leading-7">
              <h3 className="font-semibold text-2xl mb-2 text-primary">
                Teacher
              </h3>
              <p className="text-4xl font-bold tracking-tight text-primary sm:text-6x">
                100
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-primary/10">
            <div className="text-base leading-7">
              <h3 className="font-semibold text-primary text-2xl mb-2">
                Client
              </h3>
              <p className="text-4xl font-bold tracking-tight text-primary sm:text-6x">
                200
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
