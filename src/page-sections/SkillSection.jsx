import { ArrowLeft, ArrowRight, Atom } from "lucide-react"
import SectionHeading from "../components/SectionHeading"

const SkillSection = () => {
  return (
    <div className="h-auto w-full py-16 flex justify-center items-center bg-black">
      <div className="h-full w-[95%] flex flex-col justify-center items-center
      gap-16">
        <div className="h-auto w-full flex justify-start items-center">
          <SectionHeading text={'Why choose me'} isBGDark={true} />
        </div>
        <div className="h-auto w-full flex flex-col justify-center lg:flex-row
         lg:justify-between items-center gap-16 lg:gap-0">
          <div className="h-auto w-full lg:w-[40%] text-left">
            <h2 className="text-[50px] font-grotesque font-medium text-white">
              My Extensive List of Skills
            </h2>
          </div>
          <div className="h-auto w-full lg:w-[45%] flex flex-col justify-center items-end
           gap-3">
            <div className="h-auto w-auto">
              <p className="text-[18px] font-grotesque font-medium text-white
               text-right">
                Building the worlds best marketing Your trusted partner for strategy,
                design, and dev.
              </p>
            </div>
            <div className="h-auto w-auto">
              <hr className="w-[525px] text-zinc-400" />
            </div>
          </div>
        </div>
        <div className="h-auto w-full flex justify-end items-center">
          <div className="h-auto w-auto flex justify-between items-center gap-5">
            <div className="h-auto w-auto">
              <button className="p-2 border rounded-[90%] border-white text-white
              text-base cursor-pointer">
                <ArrowLeft />
              </button>
            </div>
            <div className="h-auto w-auto">
              <button className="p-2 border rounded-[90%] border-white text-white
              text-base cursor-pointer">
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="h-[340px] w-full p-10 flex flex-col justify-center items-center
          gap-6 rounded-2xl bg-[#141414]">
            <div className="h-auto w-full text-left">
              <Atom size={100} className="text-white" />
            </div>
            <div className="h-auto w-full text-left">
              <h2 className="text-2xl font-grotesque font-medium text-white">
                HTML & CSS
              </h2>
            </div>
            <div className="h-auto w-full text-left">
              <p className="text-base font-grotesque font-medium text-zinc-300">
                Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim
                veniam, quis
              </p>
            </div>
          </div>
          <div className="h-[340px] w-full p-10 flex flex-col justify-center items-center
          gap-6 rounded-2xl bg-[#141414] rotate-6">
            <div className="h-auto w-full text-left">
              <Atom size={100} className="text-white" />
            </div>
            <div className="h-auto w-full text-left">
              <h2 className="text-2xl font-grotesque font-medium text-white">
                Javascript
              </h2>
            </div>
            <div className="h-auto w-full text-left">
              <p className="text-base font-grotesque font-medium text-zinc-300">
                Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim
                veniam, quis
              </p>
            </div>
          </div>
          <div className="h-[340px] w-full p-10 flex flex-col justify-center items-center
          gap-6 rounded-2xl bg-[#141414]">
            <div className="h-auto w-full text-left">
              <Atom size={100} className="text-white" />
            </div>
            <div className="h-auto w-full text-left">
              <h2 className="text-2xl font-grotesque font-medium text-white">
                Webflow
              </h2>
            </div>
            <div className="h-auto w-full text-left">
              <p className="text-base font-grotesque font-medium text-zinc-300">
                Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim
                veniam, quis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillSection