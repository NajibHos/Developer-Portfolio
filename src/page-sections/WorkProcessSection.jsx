import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export const WorkProcessSection = () => {
  return (
    <div className="h-auto w-full py-16 flex justify-center items-center bg-[#141414]">
      <div className="h-full w-[90%] flex flex-col justify-center items-center
      gap-16">
        <div className='h-auto w-full flex flex-col justify-center lg:flex-row
         lg:justify-between items-center gap-12 lg:gap-0'>
          <div className="h-auto w-full lg:w-[20%] flex justify-start items-center">
            <SectionHeading text={'Work Process'} isBGDark={true} />
          </div>
          <div className='h-auto w-full lg:w-[75%] text-right lg:text-left'>
            <h2 className='text-[50px] lg:text-[65px] font-grotesque font-medium
             text-white'>
              My Work Process
            </h2>
          </div>
        </div>
        <div className='h-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10
        lg:gap-5'>
          <div className='h-[360px] lg:h-[280px] w-full p-5 lg:p-8 flex flex-col
          justify-center items-center gap-10 rounded-2xl bg-[#000000]'>
            <div className='h-auto w-full flex justify-between items-center'>
              <div className='h-auto w-auto text-left'>
                <div className='px-6 py-2 rounded-2xl bg-green-300'>
                  <h2 className='text-xl font-grotesque font-medium text-black'>
                    Discovery
                  </h2>
                </div>
              </div>
              <div className='h-auto w-auto'>
                <button className='h-auto w-auto flex justify-center items-center
                gap-2 cursor-pointer'>
                  <div className='h-auto w-auto'>
                    <ArrowRight className='text-lg text-white' />
                  </div>
                  <div className='h-auto w-auto'>
                    <h2 className='text-base font-grotesque font-medium
                     text-white underline'>
                      Read More
                    </h2>
                  </div>
                </button>
              </div>
            </div>
            <div className='h-auto w-full text-left'>
              <p className='text-[18px] font-grotesque font-medium text-zinc-400'>
                We start every new client interaction with an in-depth discovery call
                where we get to know each other, discuss your current and future
                objectives, and recommend the best course of action.
              </p>
            </div>
          </div>
          <div className='h-[360px] lg:h-[280px] w-full p-5 lg:p-8 flex flex-col
          justify-center items-center gap-10 rounded-2xl bg-[#c5ff41] rotate-6'>
            <div className='h-auto w-full flex justify-between items-center'>
              <div className='h-auto w-auto text-left'>
                <div className='px-6 py-2 rounded-2xl bg-black'>
                  <h2 className='text-xl font-grotesque font-medium text-white'>
                    Strategy
                  </h2>
                </div>
              </div>
              <div className='h-auto w-auto'>
                <button className='h-auto w-auto flex justify-center items-center
                gap-2 cursor-pointer'>
                  <div className='h-auto w-auto'>
                    <ArrowRight className='text-lg text-black' />
                  </div>
                  <div className='h-auto w-auto'>
                    <h2 className='text-base font-grotesque font-medium
                     text-black underline'>
                      Read More
                    </h2>
                  </div>
                </button>
              </div>
            </div>
            <div className='h-auto w-full text-left'>
              <p className='text-[18px] font-grotesque font-medium text-[#141414]'>
                Every end-to-end project of ours begins with a tEspoke pre-build strateu.
                From brand ID consultation to in-depth ccxle reviews we're here to set
                the stage for success.
              </p>
            </div>
          </div>
          <div className='h-[360px] lg:h-[280px] w-full p-5 lg:p-8 flex flex-col
          justify-center items-center gap-10 rounded-2xl bg-[#000000]'>
            <div className='h-auto w-full flex justify-between items-center'>
              <div className='h-auto w-auto text-left'>
                <div className='px-6 py-2 rounded-2xl bg-green-300'>
                  <h2 className='text-xl font-grotesque font-medium text-black'>
                    Design
                  </h2>
                </div>
              </div>
              <div className='h-auto w-auto'>
                <button className='h-auto w-auto flex justify-center items-center
                gap-2 cursor-pointer'>
                  <div className='h-auto w-auto'>
                    <ArrowRight className='text-lg text-white' />
                  </div>
                  <div className='h-auto w-auto'>
                    <h2 className='text-base font-grotesque font-medium
                     text-white underline'>
                      Read More
                    </h2>
                  </div>
                </button>
              </div>
            </div>
            <div className='h-auto w-full text-left'>
              <p className='text-[18px] font-grotesque font-medium text-zinc-400'>
                After we have a comprehensive understanding of your brand, we'll be ready
                to move onto design. Each page or will be designed, reviewed,
                and given your stamp of approval.
              </p>
            </div>
          </div>
          <div className='h-[360px] lg:h-[280px] w-full p-5 lg:p-8 flex flex-col
          justify-center items-center gap-10 rounded-2xl bg-[#000000]'>
            <div className='h-auto w-full flex justify-between items-center'>
              <div className='h-auto w-auto text-left'>
                <div className='px-6 py-2 rounded-2xl bg-green-300'>
                  <h2 className='text-xl font-grotesque font-medium text-black'>
                    Build
                  </h2>
                </div>
              </div>
              <div className='h-auto w-auto'>
                <button className='h-auto w-auto flex justify-center items-center
                gap-2 cursor-pointer'>
                  <div className='h-auto w-auto'>
                    <ArrowRight className='text-lg text-white' />
                  </div>
                  <div className='h-auto w-auto'>
                    <h2 className='text-base font-grotesque font-medium
                     text-white underline'>
                      Read More
                    </h2>
                  </div>
                </button>
              </div>
            </div>
            <div className='h-auto w-full text-left'>
              <p className='text-[18px] font-grotesque font-medium text-zinc-400'>
                Whether we've just finished designing your new site or you're handing off
                finished designs for us to develop in Webflow, we're here to apply our
                trusted development process to your project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
