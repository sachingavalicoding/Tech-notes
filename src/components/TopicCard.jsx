


// eslint-disable-next-line react/prop-types
const TopicCard = ({icon , text }) => {
  return (
    <article className="flex items-center flex-col justify-center gap-4 px-16 py-8 bg-slate-900">
         <p className="text-7xl "> {icon} </p>
        <p className="text-2xl "> {text}</p>
    </article>
  )
}

export default TopicCard