
// eslint-disable-next-line react/prop-types
const Button = ({text ,className}) => {
  return (
    <div className={`className="px-8 py-3 text-[1rem] text-white rounded-md bg-transparent hover:bg-red-500 border-[2px] border-slate-300 ${className} `}>{text} </div>
  )
}

export default Button