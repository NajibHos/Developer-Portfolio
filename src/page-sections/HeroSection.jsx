import { Facebook, Instagram, Moon, Sun, Twitter } from "lucide-react";
import ActionButton from "../components/ActionButton";
import { useTheme } from "../context/ThemeContext";

const HeroSection = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="h-auto w-full flex justify-center items-start
    bg-[url(/hero_sec_bg.png)] bg-center bg-no-repeat bg-cover
    bg-white dark:bg-black">
      <div className="h-auto w-[90%] flex flex-col justify-start items-center">
        {/* desktop header */}
        <div className="h-auto w-full hidden lg:block">
          <div className="h-auto py-5 w-full flex justify-between items-center">
            <div className="h-auto w-auto">
              <h2 className="text-4xl font-grotesque font-extrabold text-black
              dark:text-white">
                DEVLOP.ME
              </h2>
            </div>
            <div className="h-auto w-auto flex justify-between items-center gap-10">
              <div className="h-auto w-auto flex justify-center items-center gap-10">
                <div className="h-auto w-auto text-center">
                  <h2 className="text-base font-grotesque font-medium text-black
                  dark:text-white cursor-pointer">
                    Home
                  </h2>
                </div>
                <div className="h-auto w-auto text-center">
                  <h2 className="text-base font-grotesque font-medium text-black
                  dark:text-white cursor-pointer">
                    About
                  </h2>
                </div>
                <div className="h-auto w-auto text-center">
                  <h2 className="text-base font-grotesque font-medium text-black
                  dark:text-white cursor-pointer">
                    Portfolio
                  </h2>
                </div>
                <div className="h-auto w-auto text-center">
                  <h2 className="text-base font-grotesque font-medium text-black
                  dark:text-white cursor-pointer">
                    Blog
                  </h2>
                </div>
              </div>
              <div className="h-auto w-auto">
                {
                  theme === 'light' && <button  className="text-base text-black
                   cursor-pointer" onClick={toggleTheme}>
                    <Moon />
                  </button>
                }
                {
                  theme === 'dark' && <button className="text-base text-white
                   cursor-pointer" onClick={toggleTheme}>
                    <Sun />
                  </button>
                }
              </div>
              <div className="h-auto w-auto">
                <ActionButton text={'Start Project'} textSize={'sm'} type={'action'}
                isBgDark={false} />
              </div>
            </div>
        </div>
        </div>
        {/* mobile header*/}
        <div className="h-auto py-5 w-full block lg:hidden">
          <div className="h-auto w-full flex flex-col justify-center items-center
          gap-5">
            {/* header */}
            <div className="h-auto w-full flex justify-between items-center">
          <div className="h-auto w-auto">
            <h2 className="text-2xl lg:text-4xl font-grotesque font-extrabold text-black
              dark:text-white">
                DEVLOP.ME
            </h2>
          </div>
          <div className="h-auto w-auto">
            {
              theme === 'light' && <button onClick={toggleTheme}>
                <Moon size={28} className=" text-black" />
              </button>
            }
            {
              theme === 'dark' && <button onClick={toggleTheme}>
                <Sun size={28} className="text-white" />
              </button>
            }
          </div>
            </div>
            {/* mobile menu */}
            <div className="h-auto w-full flex justify-center items-center gap-8">
            <div className="h-auto w-auto text-center">
              <h2 className="text-base font-grotesque font-medium text-black
              dark:text-white cursor-pointer">
                Home
                </h2>
            </div>
            <div className="h-auto w-auto text-center">
              <h2 className="text-base font-grotesque font-medium text-black
              dark:text-white cursor-pointer">
                About
              </h2>
            </div>
            <div className="h-auto w-auto text-center">
              <h2 className="text-base font-grotesque font-medium text-black
              dark:text-white cursor-pointer">
                Portfolio
              </h2>
            </div>
            <div className="h-auto w-auto text-center">
              <h2 className="text-base font-grotesque font-medium text-black
              dark:text-white cursor-pointer">
                Blog
              </h2>
            </div>
            </div>
          </div>
        </div>
        {/* hero section */}
        <div className="h-auto w-full py-24 flex flex-col justify-center
         items-center gap-16">
        <div className="h-auto w-full text-left">
          <h2 className="text-[50px] lg:text-[65px] font-grotesque font-medium
            leading-[100px] lg:leading-[150px] text-black dark:text-white">
            Trusted <span className="p-2 rounded bg-black dark:bg-white text-white
             dark:text-black">Partner</span> for <br /> Your Website <span className="p-2
             rounded-xl bg-black dark:bg-white text-white
             dark:text-black">Develop.</span>
          </h2>
        </div>
        <div className="h-auto w-full flex justify-between items-center">
          <div className="h-auto w-[10%] flex flex-col justify-between
          items-center relative">
            <div className="h-auto w-auto absolute left-[-40px] -rotate-90">
              <h2 className="text-[18px] font-grotesque font-medium text-black
              dark:text-white">
                @williamrey
              </h2>
            </div>
            <div className="h-auto w-auto flex justify-center items-center gap-2
            absolute -right-24 lg:-right-5 -top-[10px] -rotate-90">
              <div className="h-auto w-auto">
                <hr className="w-[40px] text-black dark:text-white" />
              </div>
              <div className="h-auto w-auto flex justify-center items-center gap-3">
                <div className="h-auto w-auto">
                  <Facebook className="text-sm text-black dark:text-white" />
                </div>
                <div className="h-auto w-auto">
                  <Instagram className="text-sm text-black dark:text-white" />
                </div>
                <div className="h-auto w-auto">
                  <Twitter className="text-sm text-black dark:text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto w-[70%] flex flex-col justify-center
           items-center gap-12">
            <div className="h-auto w-[90%] text-left">
              <p className="text-[18px] font-grotesque font-medium text-black
              dark:text-white">
                Building the worlds best marketing websites for over a decade. Your
                trusted partner for strategy, design, and dev.
              </p>
            </div>
            <div className="h-auto w-auto">
              <ActionButton text={'Schedule a Call'} textSize={'md'} type={'call'}
              isBgDark={false} />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection