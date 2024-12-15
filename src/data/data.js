export const WebNotes = [
    {
      react: [
        {
          notes: [
            {
              id: 1,
              title: "What is React?",
              content: `
                <div >
                  <h2 class="note-title">What is React?</h2>
                  <p class="note-description">
                    React is a <strong>JavaScript library</strong> for building user interfaces. It allows developers to create reusable UI components and manage the state of web applications efficiently.
                  </p>
                  <div class="note-example">
                    <h3>Example:</h3>
                    <pre>
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="tag">&lt;div</span><span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, React!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="keyword">const</span> name = <span class="string">"React"</span>;
                        <span class="tag">&lt;div</span> class="flex"<span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">Counter</span>() {
                        <span class="keyword">const</span> [count, setCount] = useState(0);
  
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
                            <span class="tag">&lt;button</span> onClick={() => setCount(count + 1)}<span class="tag">&gt;</span>
                              Increment
                            <span class="tag">&lt;/button&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">Counter</span>;
                    </pre>
                  </div>
                  <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" class="note-link">Learn more about State and Props</a>
                </div>
              `,
            },
          ],
          assignment: [
            {
              id: 1,
              title: "What is Assignment?",
              content: `
                <div>
                  <h2 class="note-title">What is React?</h2>
                  <p class="note-description">
                    React is a <strong>JavaScript library</strong> for building user interfaces. It allows developers to create reusable UI components and manage the state of web applications efficiently.
                  </p>
                  <div class="note-example">
                    <h3>Example:</h3>
                    <pre>
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="tag">&lt;div</span><span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, React!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="keyword">const</span> name = <span class="string">"React"</span>;
                        <span class="tag">&lt;div</span> class="flex"<span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">Counter</span>() {
                        <span class="keyword">const</span> [count, setCount] = useState(0);
  
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
                            <span class="tag">&lt;button</span> onClick={() => setCount(count + 1)}<span class="tag">&gt;</span>
                              Increment
                            <span class="tag">&lt;/button&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">Counter</span>;
                    </pre>
                  </div>
                  <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" class="note-link">Learn more about State and Props</a>
                </div>
              `,
            },
          ],
          
          program: [
            {
              id: 1,
              title: "What is Program?",
              content: `
                <div class="note">
                  <h2 class="note-title">What is React?</h2>
                  <p class="note-description">
                    React is a <strong>JavaScript library</strong> for building user interfaces. It allows developers to create reusable UI components and manage the state of web applications efficiently.
                  </p>
                  <div class="note-example">
                    <h3>Example:</h3>
                    <pre>
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="tag">&lt;div</span><span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, React!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="keyword">const</span> name = <span class="string">"React"</span>;
                        <span class="tag">&lt;div</span> class="flex"<span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">Counter</span>() {
                        <span class="keyword">const</span> [count, setCount] = useState(0);
  
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
                            <span class="tag">&lt;button</span> onClick={() => setCount(count + 1)}<span class="tag">&gt;</span>
                              Increment
                            <span class="tag">&lt;/button&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">Counter</span>;
                    </pre>
                  </div>
                  <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" class="note-link">Learn more about State and Props</a>
                </div>
              `,
            },
          ],
          project: [
            {
              id: 1,
              title: "What is project",
              content: `
                <div>
                  <h2 class="note-title">What is React?</h2>
                  <p class="note-description">
                    React is a <strong>JavaScript library</strong> for building user interfaces. It allows developers to create reusable UI components and manage the state of web applications efficiently.
                  </p>
                  <div class="note-example">
                    <h3>Example:</h3>
                    <pre>
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="tag">&lt;div</span><span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, React!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="keyword">const</span> name = <span class="string">"React"</span>;
                        <span class="tag">&lt;div</span> class="flex"<span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">Counter</span>() {
                        <span class="keyword">const</span> [count, setCount] = useState(0);
  
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
                            <span class="tag">&lt;button</span> onClick={() => setCount(count + 1)}<span class="tag">&gt;</span>
                              Increment
                            <span class="tag">&lt;/button&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">Counter</span>;
                    </pre>
                  </div>
                  <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" class="note-link">Learn more about State and Props</a>
                </div>
              `,
            },
          ],     
        },
      ],
      html: [
        {
          notes: [
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="tag">&lt;div</span><span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, React!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="keyword">const</span> name = <span class="string">"React"</span>;
                        <span class="tag">&lt;div</span> class="flex"<span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">Counter</span>() {
                        <span class="keyword">const</span> [count, setCount] = useState(0);
  
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
                            <span class="tag">&lt;button</span> onClick={() => setCount(count + 1)}<span class="tag">&gt;</span>
                              Increment
                            <span class="tag">&lt;/button&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">Counter</span>;
                    </pre>
                  </div>
                  <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" class="note-link">Learn more about State and Props</a>
                </div>
              `,
            },
          ],
          assignment: [
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="tag">&lt;div</span><span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, React!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="keyword">const</span> name = <span class="string">"React"</span>;
                        <span class="tag">&lt;div</span> class="flex"<span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">Counter</span>() {
                        <span class="keyword">const</span> [count, setCount] = useState(0);
  
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
                            <span class="tag">&lt;button</span> onClick={() => setCount(count + 1)}<span class="tag">&gt;</span>
                              Increment
                            <span class="tag">&lt;/button&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">Counter</span>;
                    </pre>
                  </div>
                  <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" class="note-link">Learn more about State and Props</a>
                </div>
              `,
            },
          ],
          
          program: [
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="tag">&lt;div</span><span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, React!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="keyword">const</span> name = <span class="string">"React"</span>;
                        <span class="tag">&lt;div</span> class="flex"<span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">Counter</span>() {
                        <span class="keyword">const</span> [count, setCount] = useState(0);
  
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
                            <span class="tag">&lt;button</span> onClick={() => setCount(count + 1)}<span class="tag">&gt;</span>
                              Increment
                            <span class="tag">&lt;/button&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">Counter</span>;
                    </pre>
                  </div>
                  <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" class="note-link">Learn more about State and Props</a>
                </div>
              `,
            },
          ],
          project: [
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="tag">&lt;div</span><span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, React!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="keyword">const</span> name = <span class="string">"React"</span>;
                        <span class="tag">&lt;div</span> class="flex"<span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">Counter</span>() {
                        <span class="keyword">const</span> [count, setCount] = useState(0);
  
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
                            <span class="tag">&lt;button</span> onClick={() => setCount(count + 1)}<span class="tag">&gt;</span>
                              Increment
                            <span class="tag">&lt;/button&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">Counter</span>;
                    </pre>
                  </div>
                  <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" class="note-link">Learn more about State and Props</a>
                </div>
              `,
            },
          ],     
        },
      ],
      css: [
        {
          notes: [
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="tag">&lt;div</span><span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, React!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="keyword">const</span> name = <span class="string">"React"</span>;
                        <span class="tag">&lt;div</span> class="flex"<span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">Counter</span>() {
                        <span class="keyword">const</span> [count, setCount] = useState(0);
  
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
                            <span class="tag">&lt;button</span> onClick={() => setCount(count + 1)}<span class="tag">&gt;</span>
                              Increment
                            <span class="tag">&lt;/button&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">Counter</span>;
                    </pre>
                  </div>
                  <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" class="note-link">Learn more about State and Props</a>
                </div>
              `,
            },
          ],
          assignment: [
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="tag">&lt;div</span><span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, React!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="keyword">const</span> name = <span class="string">"React"</span>;
                        <span class="tag">&lt;div</span> class="flex"<span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">Counter</span>() {
                        <span class="keyword">const</span> [count, setCount] = useState(0);
  
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
                            <span class="tag">&lt;button</span> onClick={() => setCount(count + 1)}<span class="tag">&gt;</span>
                              Increment
                            <span class="tag">&lt;/button&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">Counter</span>;
                    </pre>
                  </div>
                  <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" class="note-link">Learn more about State and Props</a>
                </div>
              `,
            },
          ],
          
          program: [
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="tag">&lt;div</span><span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, React!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="keyword">const</span> name = <span class="string">"React"</span>;
                        <span class="tag">&lt;div</span> class="flex"<span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">Counter</span>() {
                        <span class="keyword">const</span> [count, setCount] = useState(0);
  
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
                            <span class="tag">&lt;button</span> onClick={() => setCount(count + 1)}<span class="tag">&gt;</span>
                              Increment
                            <span class="tag">&lt;/button&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">Counter</span>;
                    </pre>
                  </div>
                  <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" class="note-link">Learn more about State and Props</a>
                </div>
              `,
            },
          ],
          project: [
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="tag">&lt;div</span><span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, React!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="keyword">const</span> name = <span class="string">"React"</span>;
                        <span class="tag">&lt;div</span> class="flex"<span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">Counter</span>() {
                        <span class="keyword">const</span> [count, setCount] = useState(0);
  
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
                            <span class="tag">&lt;button</span> onClick={() => setCount(count + 1)}<span class="tag">&gt;</span>
                              Increment
                            <span class="tag">&lt;/button&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">Counter</span>;
                    </pre>
                  </div>
                  <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" class="note-link">Learn more about State and Props</a>
                </div>
              `,
            },
          ],     
        },
      ],
      js: [
        {
          notes: [
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="tag">&lt;div</span><span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, React!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="keyword">const</span> name = <span class="string">"React"</span>;
                        <span class="tag">&lt;div</span> class="flex"<span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">Counter</span>() {
                        <span class="keyword">const</span> [count, setCount] = useState(0);
  
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
                            <span class="tag">&lt;button</span> onClick={() => setCount(count + 1)}<span class="tag">&gt;</span>
                              Increment
                            <span class="tag">&lt;/button&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">Counter</span>;
                    </pre>
                  </div>
                  <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" class="note-link">Learn more about State and Props</a>
                </div>
              `,
            },
          ],
          assignment: [
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="tag">&lt;div</span><span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, React!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="keyword">const</span> name = <span class="string">"React"</span>;
                        <span class="tag">&lt;div</span> class="flex"<span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">Counter</span>() {
                        <span class="keyword">const</span> [count, setCount] = useState(0);
  
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
                            <span class="tag">&lt;button</span> onClick={() => setCount(count + 1)}<span class="tag">&gt;</span>
                              Increment
                            <span class="tag">&lt;/button&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">Counter</span>;
                    </pre>
                  </div>
                  <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" class="note-link">Learn more about State and Props</a>
                </div>
              `,
            },
          ],
          
          program: [
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="tag">&lt;div</span><span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, React!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="keyword">const</span> name = <span class="string">"React"</span>;
                        <span class="tag">&lt;div</span> class="flex"<span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">Counter</span>() {
                        <span class="keyword">const</span> [count, setCount] = useState(0);
  
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
                            <span class="tag">&lt;button</span> onClick={() => setCount(count + 1)}<span class="tag">&gt;</span>
                              Increment
                            <span class="tag">&lt;/button&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">Counter</span>;
                    </pre>
                  </div>
                  <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" class="note-link">Learn more about State and Props</a>
                </div>
              `,
            },
          ],
          project: [
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="tag">&lt;div</span><span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, React!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="keyword">const</span> name = <span class="string">"React"</span>;
                        <span class="tag">&lt;div</span> class="flex"<span class="tag">&gt;</span>
                          <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>;
                        <span class="tag">&lt;/div&gt;</span>
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
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
                      <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
  
                      <span class="keyword">function</span> <span class="function-name">Counter</span>() {
                        <span class="keyword">const</span> [count, setCount] = useState(0);
  
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
                            <span class="tag">&lt;button</span> onClick={() => setCount(count + 1)}<span class="tag">&gt;</span>
                              Increment
                            <span class="tag">&lt;/button&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
  
                      <span class="keyword">export default</span> <span class="function-name">Counter</span>;
                    </pre>
                  </div>
                  <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" class="note-link">Learn more about State and Props</a>
                </div>
              `,
            },
          ],     
        },
      ],
    },
  ];
  