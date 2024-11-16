/* eslint-disable react/prop-types */


const Card = ({icon , id , title }) => {
  return (
    <article id={id} className="px-4 py-6 border-2 ">
     <p>  {icon}  </p>
     <p className="text-white font-thin text-3xl">{title}</p>
    </article>
  )
}

export default Card