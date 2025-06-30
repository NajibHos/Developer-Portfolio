import SectionHeading from "../components/SectionHeading"
import ActionButton from "../components/ActionButton"
import { Facebook, Instagram, Twitter } from "lucide-react"

const ContactSection = () => {
  return (
    <div className="h-auto w-full py-16 flex justify-center items-center
    bg-[url(/contact_sec_bg.png)] bg-center bg-no-repeat bg-cover
    bg-white dark:bg-black">
      <div className="h-full w-[95%] flex flex-col justify-center lg:flex-row
       lg:justify-between items-center gap-12 lg:gap-0">
        <div className="h-auto w-full lg:w-[60%] flex flex-col justify-center
        items-start gap-12">
          <div className="h-auto w-auto">
            <SectionHeading text={'Contact'} isBGDark={false} />
          </div>
          <div className="h-auto w-full text-left">
          <h2 className="text-[50px] lg:text-[65px] font-grotesque font-medium
          leading-[110px] text-black dark:text-white">
            Interested in <span className="p-2 rounded bg-black dark:bg-white text-white
             dark:text-black">Working</span> together?
          </h2>
          </div>
          <div className="h-auto w-full text-left">
            <p className="text-[18px] font-grotesque font-medium text-black
            dark:text-white">
              We start every new client interaction with an in-depth discovery call where
              we get to know each other
            </p>
          </div>
          <div className="h-auto w-auto">
            <ActionButton text={'Schedule a Call'} textSize={'md'} type={'call'}
            isBgDark={false} />
          </div>
        </div>
        <div className="h-auto w-full lg:w-[35%] p-8 flex flex-col justify-center
         items-center gap-8 bg-black rounded-2xl">
          <form action={''} className="h-auto w-full flex flex-col justify-center
          items-center gap-8" aria-label="Contact form">
            <div className="h-auto w-full">
              <input type="text" placeholder="Enter your name"
              className="w-full py-2 border-b border-b-[#C5FF41] text-base
              font-grotesque font-medium text-white placeholder:text-white" />
            </div>
            <div className="h-auto w-full">
              <input type="email" placeholder="Your email address"
              className="w-full py-2 border-b border-b-zinc-600 text-base
              font-grotesque font-medium text-white" />
            </div>
            <div className="h-auto w-full">
              <input type="text" placeholder="Describe your project"
              className="w-full py-2 border-b border-b-zinc-600 text-base
              font-grotesque font-medium text-white" />
            </div>
          </form>
          <div className="h-auto w-full flex justify-start items-center gap-5">
            <div className="h-auto w-auto">
              <ActionButton text={'Send'} type={'send'} textSize={'sm'}
               isBgDark={true} />
            </div>
            <div className="h-auto w-auto">
              <h2 className="text-base font-grotesque font-medium text-white">
                Or
              </h2>
            </div>
            <div className="h-auto w-auto">
              <ActionButton text={'Contact me'} type={'email'} textSize={'sm'}
              isBgDark={true} />
            </div>
          </div>
          <div className="h-auto w-full mt-3 flex justify-start items-center gap-5">
            <div className="h-auto w-[35%]">
              <h2 className="text-[18px] font-grotesque font-medium text-zinc-400">
                @williamrey
              </h2>
            </div>
            <div className="h-auto w-[20%]">
              <hr className="w-[50px] h-auto text-zinc-400" />
            </div>
              <div className="h-auto w-[20%] flex justify-center items-center gap-5">
                <div className="h-auto w-auto">
                  <Facebook className="text-sm text-white cursor-pointer" />
                </div>
                <div className="h-auto w-auto">
                  <Instagram className="text-sm text-white cursor-pointer" />
                </div>
                <div className="h-auto w-auto">
                  <Twitter className="text-sm text-white cursor-pointer" />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection