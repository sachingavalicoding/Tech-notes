/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    {
      react: [
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
          <span class="tag">&lt;div</span> class="flex"<span class="tag">&gt;</span>
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
      html: [
        {
          id: 1,
          title: "What is HTML?",
          content: `
              <div>
                <h2 class="note-title">What is HTML?</h2>
                <p class="note-description">
                  HTML stands for <strong>HyperText Markup Language</strong>. It is the standard markup language for creating web pages and web applications.
                </p>
                <div class="note-example">
                  <h3>Example:</h3>
                  <pre>
                    <span class="tag">&lt;!DOCTYPE html&gt;</span>
                    <span class="tag">&lt;html&gt;</span>
                      <span class="tag">&lt;head&gt;</span>
                        <span class="tag">&lt;title&gt;</span>My Page<span class="tag">&lt;/title&gt;</span>
                      <span class="tag">&lt;/head&gt;</span>
                      <span class="tag">&lt;body&gt;</span>
                        <span class="tag">&lt;h1&gt;</span>Welcome to HTML<span class="tag">&lt;/h1&gt;</span>
                      <span class="tag">&lt;/body&gt;</span>
                    <span class="tag">&lt;/html&gt;</span>
                  </pre>
                </div>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" class="note-link">Learn more about HTML</a>
              </div>
            `,
        },
        {
          id: 2,
          title: "HTML Tags and Attributes",
          content: `
              <div>
                <h2 class="note-title">HTML Tags and Attributes</h2>
                <p class="note-description">
                  HTML uses <strong>tags</strong> to define elements and <strong>attributes</strong> to provide additional information about elements.
                </p>
                <div class="note-example">
                  <h3>Example:</h3>
                  <pre>
                    <span class="tag">&lt;img</span> src="image.jpg" alt="Example Image" width="300"<span class="tag">&gt;</span>
                  </pre>
                </div>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank" class="note-link">Learn more about HTML Elements</a>
              </div>
            `,
        },
        {
          id: 3,
          title: "HTML Forms",
          content: `
              <div>
                <h2 class="note-title">HTML Forms</h2>
                <p class="note-description">
                  Forms in HTML are used to collect user input. The <strong>&lt;form&gt;</strong> element is the container for form controls such as input fields, checkboxes, and submit buttons.
                </p>
                <div class="note-example">
                  <h3>Example:</h3>
                  <pre>
                    <span class="tag">&lt;form</span> action="/submit" method="post"<span class="tag">&gt;</span>
                      <span class="tag">&lt;input</span> type="text" name="username" placeholder="Enter your name" required<span class="tag">&gt;</span>
                      <span class="tag">&lt;button</span> type="submit"<span class="tag">&gt;</span>Submit<span class="tag">&lt;/button&gt;</span>
                    <span class="tag">&lt;/form&gt;</span>
                  </pre>
                </div>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" target="_blank" class="note-link">Learn more about HTML Forms</a>
              </div>
            `,
        },
      ],
      css: [
        {
          id: 1,
          title: "What is CSS?",
          content: `
                  <div>
                    <h2 class="note-title">What is CSS?</h2>
                    <p class="note-description">
                      CSS stands for <strong>Cascading Style Sheets</strong>. It is used to style and layout web pages, including adjusting fonts, colors, spacing, and positioning.
                    </p>
                    <div class="note-example">
                      <h3>Example:</h3>
                      <pre>
                        <span class="selector">body</span> {
                          <span class="property">background-color:</span> <span class="value">#f0f0f0</span>;
                          <span class="property">color:</span> <span class="value">#333</span>;
                          <span class="property">font-family:</span> <span class="value">Arial, sans-serif</span>;
                        }
                      </pre>
                    </div>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" class="note-link">Learn more about CSS</a>
                  </div>
                `,
        },
        {
          id: 2,
          title: "CSS Selectors",
          content: `
                  <div>
                    <h2 class="note-title">CSS Selectors</h2>
                    <p class="note-description">
                      CSS Selectors are patterns used to select the elements you want to style.
                    </p>
                    <div class="note-example">
                      <h3>Example:</h3>
                      <pre>
                        <span class="selector">.class-name</span> {
                          <span class="property">color:</span> <span class="value">blue</span>;
                        }
                      </pre>
                    </div>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" target="_blank" class="note-link">Learn more about CSS Selectors</a>
                  </div>
                `,
        },
        {
          id: 3,
          title: "CSS Flexbox",
          content: `
                  <div>
                    <h2 class="note-title">CSS Flexbox</h2>
                    <p class="note-description">
                      Flexbox is a layout model that provides an easy way to align and distribute space among items in a container.
                    </p>
                    <div class="note-example">
                      <h3>Example:</h3>
                      <pre>
                        <span class="selector">.container</span> {
                          <span class="property">display:</span> <span class="value">flex</span>;
                          <span class="property">justify-content:</span> <span class="value">center</span>;
                          <span class="property">align-items:</span> <span class="value">center</span>;
                        }
                      </pre>
                    </div>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" target="_blank" class="note-link">Learn more about Flexbox</a>
                  </div>
                `,
        },
      ],
    },
  ]);

  const [filter, setFilter] = useState([]);
  return (
    <NotesContext.Provider value={{ notes, setNotes, filter, setFilter }}>
      {children}
    </NotesContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNotes = () => useContext(NotesContext);
