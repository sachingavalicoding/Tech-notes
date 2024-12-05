import Navbar from "../../Components/Navbar";

const ReactLayout = () => {
  const reactNotes = [
    {
      id: 1,
      title: "What is React?",
      content: `
        <div>
          <h2 class="note-title">What is React?</h2>
          <p class="note-description">
            React is a <strong>JavaScript library</strong> for building user interfaces. It allows developers to create reusable UI components and manage the state of web applications efficiently.
          </p>
          <div class="note-example">
            <h3>Example:</h3>
            <pre>

  import React from 'react';
  
  function App() {
   <div class="flex">  return <h1>Hello, React!</h1>; </div>
  }
  
  export default App;

            </pre>
          </div>
          <a href="https://reactjs.org/" target="_blank" class="note-link">Learn more on the official React documentation</a>
        </div>
      `,
    },
    {
      id: 2,
      title: "JSX in React",
      content: `
        <div>
          <h2 class="note-title">JSX in React</h2>
          <p class="note-description">
            JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside your JavaScript files. It makes code easier to read and understand.
          </p>
          <div class="note-example">
            <h3>Example:</h3>
            <pre>
  { 
  import React from 'react';
  
  function App() {
    const name = "React";
    <div class= "flex">return <h1>Hello, {name}!</h1>;</div>
  }
  
  export default App;
  }
            </pre>
          </div>
          <a href="https://reactjs.org/docs/introducing-jsx.html" target="_blank" class="note-link">Learn more about JSX</a>
        </div>
      `,
    },
    {
      id: 3,
      title: "State and Props",
      content: `
        <div>
          <h2 class="note-title">State and Props</h2>
          <p class="note-description">
            <strong>State:</strong> Local state is managed within a component.<br />
            <strong>Props:</strong> Props are used to pass data from parent to child components.
          </p>
          <div class="note-example">
            <h3>Example:</h3>
            <pre>
 
  import React, { useState } from 'react';
  
  function Counter() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
  
  export default Counter;

            </pre>
          </div>
          <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" class="note-link">Learn more about State and Props</a>
        </div>
      `,
    },
  ];

  console.log(reactNotes);

  return (
    <>
      <Navbar topics={reactNotes} />
      <main className="w-full min-h-screen pt-10 px-4 flex flex-col ">
        {reactNotes.map((note, index) => {
          return (
            <article
              key={index}
              className=" note-item  flex flex-col  justify-center"
            >
              <div dangerouslySetInnerHTML={{ __html: note.content }} />
            </article>
          );
        })}
      </main>
    </>
  );
};

export default ReactLayout;
