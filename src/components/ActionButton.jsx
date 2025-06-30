import { ArrowRight, Mail, Phone, Send } from 'lucide-react'

const ActionButton = ({ text, textSize, type, isBgDark }) => {
  return (
    <button className={`py-2 pr-4 flex justify-between items-center gap-3
    border rounded-full cursor-pointer hover:bg-[#338333]
    ${isBgDark ? 'border-white' : 'border-black dark:border-white'}`}>
      <div className={`p-2 border rounded-[90%]
        ${isBgDark ? 'border-white' : 'border-black dark:border-white'}`}>
        {type === 'action' && <ArrowRight className={`text-base
         ${isBgDark ? 'text-white' : 'text-black dark:text-white'}`} />}
        {type === 'call' && <Phone className={`text-base
         ${isBgDark ? 'text-white' : 'text-black dark:text-white'}`} />}
        {type === 'send' && <Send className={`text-base
         ${isBgDark ? 'text-white' : 'text-black dark:text-white'}`} />}
        {type === 'email' && <Mail className={`text-base
         ${isBgDark ? 'text-white' : 'text-black dark:text-white'}`} />}
      </div>
      <div className='h-auto w-auto'>
        <h2 className={`font-grotesque font-medium
        ${isBgDark ? 'text-white' : 'text-black dark:text-white'}
        ${textSize === 'sm' ? 'text-base' : 'text-[18px]'}`}>
          {text}
        </h2>
      </div>
    </button>
  )
}

export default ActionButton