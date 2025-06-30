import { ArrowDown } from "lucide-react"

const SectionHeading = ({ text, isBGDark }) => {

  return (
    <div className="h-auto w-auto flex justify-center items-center">
      <div className={`p-2 border rounded-[90%]
      ${isBGDark ? 'border-white' : 'border-black dark:border-white'}`}>
        <ArrowDown className={`text-base
          ${isBGDark ? 'text-white' : 'text-black dark:text-white'}`} />
      </div>
      <div className={`h-auto w-auto p-2 border rounded-full
        ${isBGDark ? 'border-white' : 'border-black dark:border-white'}`}>
        <h2 className={`text-base font-grotesque font-medium
          ${isBGDark ? 'text-white' : 'text-black dark:text-white'}`}>
          {text}
        </h2>
      </div>
    </div>
  )
}

export default SectionHeading