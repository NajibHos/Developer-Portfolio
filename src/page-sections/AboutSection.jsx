import SectionHeading from "../components/SectionHeading";

const AboutSection = () => {
  return (
    <div className="h-auto w-full py-16 flex justify-center items-center
    bg-[url(/about_sec_bg.png)] bg-center bg-no-repeat bg-cover
    bg-white dark:bg-black">
      <div className="h-full w-[90%] flex flex-col justify-center items-center
      gap-12">
        <div className="h-auto w-[90%] flex justify-end items-center">
          <SectionHeading text={'About'} isBGDark={false} />
        </div>
        <div className="h-auto w-[90%] text-right">
          <h2 className="text-[50px] lg:text-[65px] font-grotesque font-medium
          leading-[100px] lg:leading-[150px] text-black dark:text-white">
            I've Been <span className="p-2 rounded bg-black dark:bg-white text-white
             dark:text-black">Developing</span> <br /> Websites since <span
             className="p-2 rounded-xl bg-black dark:bg-white text-white
             dark:text-black">2013</span>
          </h2>
        </div>
        <div className="h-auto w-[90%] text-right lg:text-center p-0 lg:pl-80 lg:pr-10">
          <p className="text-base font-grotesque font-medium text-black dark:text-white">
            We start every new client interaction with an in-depth discovery call where
            we get to know each other and recommend the best course of action.
          </p>
        </div>
        {/* hiding on smaller screens for responsiveness */}
        <div className="h-auto w-full hidden lg:block">
          <div className="h-auto w-full flex justify-between items-center mt-5">
          <div className="h-auto w-[20%] text-left">
            <h2 className="text-2xl font-grotesque font-medium leading-[41px]  text-black
            dark:text-white">
              PREVIOUSLY <br /> WORKED ON
            </h2>
          </div>
          <div className="h-auto w-[70%] flex justify-center items-center relative">
            <div className="h-auto w-auto py-4 px-10 rounded-full bg-black
             dark:bg-white absolute left-20 -top-4 rotate-12">
              <img src="/awwards.png" alt="awwards" className="h-auto w-auto
              dark:bg-black" />
            </div>
            <div className="h-auto w-auto py-4 px-10 border border-black
             dark:border-white rounded-full absolute left-5 top-14">
              <img src="/csswinner.png" alt="csswinner" className="h-auto w-auto
              dark:bg-white" />
            </div>
            <div className="h-auto w-auto py-4 px-10 border border-black rounded-full
            dark:border-white absolute left-[270px] top-4 -rotate-[10deg]">
              <img src="/thoughtworks.png" alt="thoughtworks" className="h-auto
               w-auto dark:bg-white" />
            </div>
            <div className="h-auto w-auto py-4 px-10 border border-black rounded-full
            dark:border-white absolute -top-14 right-[200px]">
              <img src="/facebook.png" alt="facebook" className="h-auto w-auto
              dark:bg-white" />
            </div>
            <div className="h-auto w-auto py-4 px-10 border border-black rounded-full
            dark:border-white absolute top-[60px] right-40">
              <img src="/autodesk.png" alt="autodesk" className="h-auto w-auto
              dark:bg-white" />
            </div>
            <div className="h-auto w-auto py-4 px-10 border border-black rounded-full
            dark:border-white absolute -top-2 right-[40px] rotate-12">
              <img src="/cssdesignawwards.png" alt="cssdesignawwards"
              className="h-auto w-[100px] -rotate-[16deg] dark:bg-white" />
            </div>
          </div>
          </div>
        </div>
        {/* enabling on smaller screens */}
        <div className="h-auto w-full block lg:hidden">
          <div className="h-auto w-full flex flex-col justify-center items-center
          gap-12">
            <div className="h-auto w-full text-left">
            <h2 className="text-2xl font-grotesque font-medium leading-[41px]  text-black
              dark:text-white">
                PREVIOUSLY <br /> WORKED ON
            </h2>
            </div>
            <div className="h-auto w-full grid grid-cols-3 gap-5 sm:gap-16">
              <div className="h-auto w-auto py-4 px-10 rounded-full bg-black
             dark:bg-white">
              <img src="/awwards.png" alt="awwards" className="h-auto w-auto
              dark:bg-black" />
            </div>
            <div className="h-auto w-auto py-4 px-10 border border-black
             dark:border-white rounded-full">
              <img src="/csswinner.png" alt="csswinner" className="h-auto w-auto
              dark:bg-white" />
            </div>
            <div className="h-auto w-auto py-4 px-10 border border-black rounded-full
            dark:border-white">
              <img src="/thoughtworks.png" alt="thoughtworks" className="h-auto
               w-auto dark:bg-white rotate-[9deg]" />
            </div>
            <div className="h-auto w-auto py-4 px-10 border border-black rounded-full
            dark:border-white">
              <img src="/facebook.png" alt="facebook" className="h-auto w-auto
              dark:bg-white" />
            </div>
            <div className="h-auto w-auto py-4 px-10 border border-black rounded-full
            dark:border-white">
              <img src="/autodesk.png" alt="autodesk" className="h-auto w-auto
              dark:bg-white" />
            </div>
            <div className="h-auto w-auto py-4 px-10 border border-black rounded-full
            dark:border-white">
              <img src="/cssdesignawwards.png" alt="cssdesignawwards"
              className="h-auto w-auto -rotate-[16deg] dark:bg-white" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection