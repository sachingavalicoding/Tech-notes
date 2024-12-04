import Navbar from "../../Components/Navbar"


const ReactLayout = () => {
  const reactNotes = [
    {
      title: "What is React?",
      content: `
        <div class="p-4 bg-blue-50 rounded-lg shadow-md">
          <h2 class="text-xl font-bold text-blue-600 mb-2">What is React?</h2>
          <p class="text-base text-gray-700">
            React is a <strong class="font-semibold">JavaScript library</strong> for building user interfaces. It allows developers to create reusable UI components and manage the state of web applications efficiently.
          </p>
          <blockquote class="text-sm italic text-gray-500 border-l-4 border-blue-400 pl-4 mt-3">
            "React makes it painless to create interactive UIs."
          </blockquote>
        </div>
      `
    },
    {
      title: "Key Features of React",
      content: `
        <div class="p-4 bg-green-50 rounded-lg shadow-md">
          <h2 class="text-xl font-bold text-green-600 mb-2">Key Features of React</h2>
          <ul class="list-disc pl-5 text-gray-700">
            <li><span class="font-semibold">Component-Based:</span> Build encapsulated components that manage their own state.</li>
            <li><span class="font-semibold">Virtual DOM:</span> React uses a virtual DOM to efficiently update the UI.</li>
            <li><span class="font-semibold">Declarative:</span> Describe how the UI should look and React takes care of the updates.</li>
          </ul>
        </div>
      `
    },
    {
      title: "JSX in React",
      content: `
        <div class="p-4 bg-purple-50 rounded-lg shadow-md">
          <h2 class="text-xl font-bold text-purple-600 mb-2">JSX in React</h2>
          <p class="text-base text-gray-700">
            JSX is a syntax extension for JavaScript that looks like HTML. It allows you to write HTML-like code within your JavaScript files.
          </p>
          <pre class="bg-gray-100 p-3 rounded-lg text-sm text-gray-700 mt-3">
            { '<div>Hello, React!</div>' }
          </pre>
        </div>
      `
    },
    {
      title: "State and Props",
      content: `
        <div class="p-4 bg-yellow-50 rounded-lg shadow-md">
          <h2 class="text-xl font-bold text-yellow-600 mb-2">State and Props</h2>
          <p class="text-base text-gray-700">
            <strong class="font-semibold">State:</strong> A React component's local state managed within the component.<br />
            <strong class="font-semibold">Props:</strong> Data passed from a parent component to a child component.
          </p>
          <blockquote class="text-sm italic text-gray-500 border-l-4 border-yellow-400 pl-4 mt-3">
            "State is for internal use, Props are for external data."
          </blockquote>
        </div>
      `
    },
     {
      title: "State and Props",
      content: `
        <div class="p-4 bg-yellow-50 rounded-lg shadow-md">
          <h2 class="text-xl font-bold text-yellow-600 mb-2">State and Props</h2>
          <p class="text-base text-gray-700">
            <strong class="font-semibold">State:</strong> A React component's local state managed within the component.<br />
            <strong class="font-semibold">Props:</strong> Data passed from a parent component to a child component.
          </p>
          <blockquote class="text-sm italic text-gray-500 border-l-4 border-yellow-400 pl-4 mt-3">
            "State is for internal use, Props are for external data."
          </blockquote>
        </div>
      `
    },
    {
      title: "What is React?",
      content: `
        <div class="p-4 bg-blue-50 rounded-lg shadow-md">
          <h2 class="text-xl font-bold text-blue-600 mb-2">What is React?</h2>
          <p class="text-base text-gray-700">
            React is a <strong class="font-semibold">JavaScript library</strong> for building user interfaces. It allows developers to create reusable UI components and manage the state of web applications efficiently.
          </p>
          <blockquote class="text-sm italic text-gray-500 border-l-4 border-blue-400 pl-4 mt-3">
            "React makes it painless to create interactive UIs."
          </blockquote>
        </div>
      `
    },
    {
      title: "Key Features of React",
      content: `
        <div class="p-4 bg-green-50 rounded-lg shadow-md">
          <h2 class="text-xl font-bold text-green-600 mb-2">Key Features of React</h2>
          <ul class="list-disc pl-5 text-gray-700">
            <li><span class="font-semibold">Component-Based:</span> Build encapsulated components that manage their own state.</li>
            <li><span class="font-semibold">Virtual DOM:</span> React uses a virtual DOM to efficiently update the UI.</li>
            <li><span class="font-semibold">Declarative:</span> Describe how the UI should look and React takes care of the updates.</li>
          </ul>
        </div>
      `
    },
    {
      title: "JSX in React",
      content: `
        <div class="p-4 bg-purple-50 rounded-lg shadow-md">
          <h2 class="text-xl font-bold text-purple-600 mb-2">JSX in React</h2>
          <p class="text-base text-gray-700">
            JSX is a syntax extension for JavaScript that looks like HTML. It allows you to write HTML-like code within your JavaScript files.
          </p>
          <pre class="bg-gray-100 p-3 rounded-lg text-sm text-gray-700 mt-3">
            { '<div>Hello, React!</div>' }
          </pre>
        </div>
      `
    },
    {
      title: "State and Props",
      content: `
        <div class="p-4 bg-yellow-50 rounded-lg shadow-md">
          <h2 class="text-xl font-bold text-yellow-600 mb-2">State and Props</h2>
          <p class="text-base text-gray-700">
            <strong class="font-semibold">State:</strong> A React component's local state managed within the component.<br />
            <strong class="font-semibold">Props:</strong> Data passed from a parent component to a child component.
          </p>
          <blockquote class="text-sm italic text-gray-500 border-l-4 border-yellow-400 pl-4 mt-3">
            "State is for internal use, Props are for external data."
          </blockquote>
        </div>
      `
    },
     {
      title: "State and Props",
      content: `
        <div class="p-4 bg-yellow-50 rounded-lg shadow-md">
          <h2 class="text-xl font-bold text-yellow-600 mb-2">State and Props</h2>
          <p class="text-base text-gray-700">
            <strong class="font-semibold">State:</strong> A React component's local state managed within the component.<br />
            <strong class="font-semibold">Props:</strong> Data passed from a parent component to a child component.
          </p>
          <blockquote class="text-sm italic text-gray-500 border-l-4 border-yellow-400 pl-4 mt-3">
            "State is for internal use, Props are for external data."
          </blockquote>
        </div>
      `
    },
    {
      title: "What is React?",
      content: `
        <div class="p-4 bg-blue-50 rounded-lg shadow-md">
          <h2 class="text-xl font-bold text-blue-600 mb-2">What is React?</h2>
          <p class="text-base text-gray-700">
            React is a <strong class="font-semibold">JavaScript library</strong> for building user interfaces. It allows developers to create reusable UI components and manage the state of web applications efficiently.
          </p>
          <blockquote class="text-sm italic text-gray-500 border-l-4 border-blue-400 pl-4 mt-3">
            "React makes it painless to create interactive UIs."
          </blockquote>
        </div>
      `
    },
    {
      title: "Key Features of React",
      content: `
        <div class="p-4 bg-green-50 rounded-lg shadow-md">
          <h2 class="text-xl font-bold text-green-600 mb-2">Key Features of React</h2>
          <ul class="list-disc pl-5 text-gray-700">
            <li><span class="font-semibold">Component-Based:</span> Build encapsulated components that manage their own state.</li>
            <li><span class="font-semibold">Virtual DOM:</span> React uses a virtual DOM to efficiently update the UI.</li>
            <li><span class="font-semibold">Declarative:</span> Describe how the UI should look and React takes care of the updates.</li>
          </ul>
        </div>
      `
    },
    {
      title: "JSX in React",
      content: `
        <div class="p-4 bg-purple-50 rounded-lg shadow-md">
          <h2 class="text-xl font-bold text-purple-600 mb-2">JSX in React</h2>
          <p class="text-base text-gray-700">
            JSX is a syntax extension for JavaScript that looks like HTML. It allows you to write HTML-like code within your JavaScript files.
          </p>
          <pre class="bg-gray-100 p-3 rounded-lg text-sm text-gray-700 mt-3">
            { '<div>Hello, React!</div>' }
          </pre>
        </div>
      `
    },
    {
      title: "State and Props",
      content: `
        <div class="p-4 bg-yellow-50 rounded-lg shadow-md">
          <h2 class="text-xl font-bold text-yellow-600 mb-2">State and Props</h2>
          <p class="text-base text-gray-700">
            <strong class="font-semibold">State:</strong> A React component's local state managed within the component.<br />
            <strong class="font-semibold">Props:</strong> Data passed from a parent component to a child component.
          </p>
          <blockquote class="text-sm italic text-gray-500 border-l-4 border-yellow-400 pl-4 mt-3">
            "State is for internal use, Props are for external data."
          </blockquote>
        </div>
      `
    },
     {
      title: "State and Props",
      content: `
        <div class="p-4 bg-yellow-50 rounded-lg shadow-md">
          <h2 class="text-xl font-bold text-yellow-600 mb-2">State and Props</h2>
          <p class="text-base text-gray-700">
            <strong class="font-semibold">State:</strong> A React component's local state managed within the component.<br />
            <strong class="font-semibold">Props:</strong> Data passed from a parent component to a child component.
          </p>
          <blockquote class="text-sm italic text-gray-500 border-l-4 border-yellow-400 pl-4 mt-3">
            "State is for internal use, Props are for external data."
          </blockquote>
        </div>
      `
    }
  ];
  
  return (
    <>
    <Navbar />
    <main className=" w-full min-h-screen flex gap-4">
      <aside className=" border-2  min-h-screen  w-[22rem] bg-slate-950 text-white flex flex-col gap-4 py-6 px-4 ">
        <h2 className="text-center"> Topics </h2>
        <ul className="flex flex-col gap-2 ">
          <li className=" text-white py-3 px-2  shadow-md shadow-slate-700"> Navbar Desgin </li>
          <li className=" text-white py-3 px-2  shadow-md shadow-white"> Navbar Desgin </li>
          <li className=" text-white py-3 px-2  shadow-md shadow-white"> Navbar Desgin </li>
          <li className=" text-white py-3 px-2  shadow-md shadow-white"> Navbar Desgin </li>
        </ul>
      </aside>
      <section>
       {
        reactNotes.map((ele , index) => {
          return (<div key={index}
            dangerouslySetInnerHTML={{ __html: ele.content }}
            >
          </div> )
         })
       }
      </section>
    </main>
    </>
  )
}

export default ReactLayout