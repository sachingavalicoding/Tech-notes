export const WebNotes = [
  {
    react: [
      {
        notes: [
          {
            id: 1,
            title: "Hello World in React",
            content: `
                <div>
                  <h2 class="note-title">Hello World in React</h2>
                  <p class="note-description">
                    In React, the "Hello World" example is usually the first program a developer runs. <br /><br />It demonstrates the basic syntax and structure of a React app.<br /><br />
                  </p>
                  <div class="note-example">
                    <h3>Example:</h3>
                    <pre>
                      <span class="keyword">import</span> React, { <span class="keyword">useState</span> } <span class="keyword">from</span> <span class="string">'react'</span>;
            
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        
            
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;h1&gt;</span>Hello, World !<span class="tag">&lt;/h1&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
            
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
                    </pre>
                  </div>
                  <div class="note-output">
                    <h3>Output:</h3>
                    <pre>
                      Hello, World!
                    </pre>
                  </div>
                </div>
              `,
          },
          {
            id: 2,
            title: "What is React?",
            content: `
                <div>
                  <h2 class="note-title">What is React?</h2>
                  <p class="note-description">
                    React is an <strong>open-source JavaScript library</strong> used for building single-page applications.<br /><br /> It focuses mainly on <strong>creating dynamic user interfaces (UIs)</strong>.<br /><br /> React was developed by <strong>Facebook</strong> in 2011 and is maintained by Meta and a community of developers.<br /><br />
                    React follows a <strong>component-based architecture</strong>, which allows developers to build UIs using reusable components.<br /><br /> It supports both <strong>JavaScript</strong> and <strong>TypeScript</strong>, offering flexibility to developers.<br /><br />
                    React uses a <strong>virtual DOM</strong> to improve performance, making web applications faster by updating only the necessary parts of the UI.<br /><br />
                  </p>
                  <div class="note-example">
                    <h3>Example:</h3>
                    <pre>
                      <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
            
                      <span class="keyword">function</span> <span class="function-name">App</span>() {
                        <span class="keyword">const</span> name = <span class="string">"React"</span>;
            
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
            
                      <span class="keyword">export default</span> <span class="function-name">App</span>;
                    </pre>
                  </div>
                  <div class="note-output">
                    <h3>Output:</h3>
                    <pre>
                      Hello, React!
                    </pre>
                  </div>
                </div>
              `,
          },
          {
            id: 3,
            title: "Why Learn React?",
            content: `
                <div>
                  <h2 class="note-title">Why Learn React?</h2>
                  <p class="note-description">
                    1. React is very <strong>popular</strong> and used by many developers.<br /><br />
                    2. It helps you build <strong>fast</strong> and <strong>dynamic</strong> websites.<br /><br />
                    3. React uses <strong>components</strong> that make code easier to manage and reuse.<br /><br />
                    4. It has a <strong>large community</strong> for support and learning.<br /><br />
                    5. React makes it easy to create <strong>single-page applications</strong> (SPAs).<br /><br />
                    6. It is <strong>maintained by Facebook</strong> and regularly updated.<br /><br />
                    7. Learning React helps you improve your <strong>JavaScript</strong> skills.<br /><br />
                  </p>
                </div>
              `,
          },
          {
            id: 4,
            title: "What is a Framework?",
            content: `
                <div>
                  <h2 class="note-title">What is a Framework?</h2>
                  <p class="note-description">
                    A <strong>framework</strong> is a set of tools that help you build things faster. It gives you basic parts and rules for creating apps or websites, so you don’t have to start from scratch.
                    <br /><br />
                    Frameworks help you organize your code and make it easier to work on. They give you ready-made solutions for common tasks, so you can focus on building your app.
                    <br /><br />
                    Think of a framework like a box of tools that helps you build something step by step.
                  </p>
                </div>
              `,
          },
          {
            id: 5,
            title: "What is a Library?",
            content: `
                <div>
                  <h2 class="note-title">What is a Library?</h2>
                  <p class="note-description">
                    A <strong>library</strong> is a collection of pre-written code that you can use in your own projects. It helps you do common tasks without having to write all the code yourself.
                    <br /><br />
                    Libraries make development faster and easier because you can just use the tools already available instead of creating everything from scratch.
                    <br /><br />
                    Think of a library like a toolkit with ready-to-use parts you can add to your project.
                  </p>
                </div>
              `,
          },
          {
            id: 6,
            title: "What is a Single Page Application?",
            content: `
                <div>
                  <h2 class="note-title">What is a Single Page Application?</h2>
                  <p class="note-description">
                    A <strong>Single Page Application (SPA)</strong> is a web app that works inside a single web page. Instead of loading a new page every time you click something, the page updates dynamically without refreshing.
                    <br /><br />
                    SPAs provide a smooth user experience because the content changes without reloading the entire page. Popular SPAs include Gmail, Facebook, and Twitter.
                    <br /><br />
                    SPAs often use JavaScript frameworks like React or Angular to update the content dynamically.
                  </p>
                </div>
              `,
          },

          {
            id: 7,
            title: "React History",
            content: `
              <div>
                <h2 class="note-title">React History</h2>
                <p class="note-description">
                  React was created by <strong>Jordan Walke</strong> at <strong>Facebook</strong> in 2011.<br /><br />
                  It was first released as an open-source library in <strong>2013</strong>.<br /><br />
                  React became publicly available in <strong>2013</strong> when Facebook released it to the open-source community.<br /><br />
                  Initially, React was used only on Facebook's News Feed but later spread to other parts of Facebook and Instagram.<br /><br />
                  React became very popular because it helped developers build <strong>faster</strong> and more <strong>dynamic</strong> web apps.<br /><br />
                  Over time, React's community grew, and many tools, libraries, and resources were created to support it.<br /><br />
                </p>
              </div>
            `,
          },
          {
            id: 8,
            title: "React Installation",
            content: `
              <div>
                <h2 class="note-title">React Installation</h2>
                <p class="note-description">
                  To get started with React, you need to install Node.js and npm.<br /><br />
                  1. First, download and install <strong>Node.js</strong> from the official website: <a href="https://nodejs.org/" target="_blank">https://nodejs.org/</a>.<br /><br />
                  2. Once Node.js is installed, verify the installation by running the following commands in the terminal:<br /><br />
                  <pre>node -v</pre> - This shows the version of Node.js installed.<br /><br />
                  <pre>npm -v</pre> - This shows the version of npm (Node Package Manager) installed.<br /><br />
                  3. After installing Node.js and npm, you can create a new React app using the <strong>create-react-app</strong> tool.<br /><br />
                  Run the following command to install <strong>create-react-app</strong>:<br /><br />
                  <pre>npm install -g create-react-app</pre><br /><br />
                  4. Now, you can create a new React project by running:<br /><br />
                  <pre>npx create-react-app my-app</pre><br /><br />
                  5. After the project is created, navigate to your project folder:<br /><br />
                  <pre>cd my-app</pre><br /><br />
                  6. Finally, to start the development server, run:<br /><br />
                  <pre>npm start</pre><br /><br />
                  This will open your React app in the browser at <strong>http://localhost:3000</strong>.<br /><br />
                </p>
              </div>
            `,
          },
          {
            id: 9,
            title: "Vite Installation",
            content: `
              <div>
                <h2 class="note-title">Vite Installation</h2>
                <p class="note-description">
                  Vite is a modern build tool that is fast and efficient, ideal for React applications.<br /><br />
                  1. To get started with Vite, first, ensure that you have <strong>Node.js</strong> and <strong>npm</strong> installed.<br /><br />
                  2. You can install Vite using <strong>npm</strong> or <strong>yarn</strong>.<br /><br />
                  3. To create a new Vite project with React, run the following command in your terminal:<br /><br />
                  <pre>npm create vite@latest my-vite-app --template react</pre><br /><br />
                  This will create a new Vite project with React preconfigured.<br /><br />
                  4. After the project is created, navigate to your project folder:<br /><br />
                  <pre>cd my-vite-app</pre><br /><br />
                  5. Now, install the required dependencies by running:<br /><br />
                  <pre>npm install</pre><br /><br />
                  6. Once the dependencies are installed, you can start the development server with the following command:<br /><br />
                  <pre>npm run dev</pre><br /><br />
                  This will start the Vite development server, and you can open your app in the browser at <strong>http://localhost:5173</strong>.<br /><br />
                </p>
              </div>,
            `,
          },
          {
            id: 10,
            title: "Vite React Folder Structure",
            content: `
              <div>
                <h2 class="note-title">Vite React Folder Structure</h2>
                <p class="note-description">
                  Here is a typical folder structure for a React app using Vite:
                </p>
                <pre>
             my-vite-app/                  # Project root directory
                  │
                  ├── public/                    # Static assets (images, icons, etc.)
                  │   └── index.html             # The main HTML file for the app
                  │
                  ├── src/                       # Source files for your application
                  │   ├── assets/                # Folder for images, fonts, etc.
                  │   ├── components/            # Reusable components
                  │   │   └── Header.jsx         # Example component file
                  │   ├── App.jsx                # Main application component
                  │   ├── main.jsx               # Entry point of the React app
                  │   ├── styles/                # Global styles (CSS or SCSS files)
                  │   │   └── index.css          # Global CSS file
                  │   └── utils/                 # Utility functions or hooks
                  │       └── useFetch.js        # Example custom hook
                  │
                  ├── .gitignore                 # Git ignore file
                  ├── package.json               # Project metadata and dependencies
                  ├── vite.config.js             # Vite configuration file
                  └── README.md                  # Project description and instructions
                </pre>
                <p class="note-description">
                  Folder Breakdown:
                  - <strong>public/</strong>: Contains static files like <code>index.html</code>, images, and other assets.</br> </br>
                  - <strong>src/</strong>: The source folder holds the core code of the app.</br> </br>
                    - <strong>assets/</strong>: Store images, fonts, or other static resources.</br> </br>
                    - <strong>components/</strong>: Reusable React components used throughout the app.</br> </br>
                    - <strong>App.jsx</strong>: Main React component that ties everything together.</br> </br>
                    - <strong>main.jsx</strong>: The entry point for the React app where the application is mounted into the DOM.</br> </br>
                    - <strong>styles/</strong>: Contains global CSS or SCSS files.</br> </br>
                    - <strong>utils/</strong>: Folder for custom utility functions, such as custom hooks or API handlers.</br> </br>
                  - <strong>.gitignore</strong>: Specifies which files and folders to ignore in version control.</br> </br>
                  - <strong>package.json</strong>: Contains metadata, dependencies, and scripts for the project.</br> </br>
                  - <strong>vite.config.js</strong>: Configuration file for Vite, used for project setup and optimization.</br> </br>
                </p>
              </div>
            `,
          },
          {
            id: 11,
            title: "What is JSX",
            content: `
              <div>
                <h2 class="note-title">What is JSX?</h2>
                <p class="note-description">
                  JSX stands for <strong>JavaScript XML</strong>. It is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. 
                  JSX makes it easier to create and manage UI components in React, as it combines the structure of HTML with the power of JavaScript.
                </p>
                <p class="note-description">
                  JSX is not mandatory in React, but it is widely used because it simplifies writing code and makes it more readable. When the JSX code is compiled, it is transformed into regular JavaScript using tools like Babel.
                </p>
                <div class="note-example">
                  <h3>Example:</h3>
                  <pre>
                    <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
          
                    <span class="keyword">function</span> <span class="function-name">App</span>() {
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;div&gt;</span>
                          <span class="tag">&lt;h1&gt;</span>Hello, <span class="keyword">world</span>!<span class="tag">&lt;/h1&gt;</span>
                        <span class="tag">&lt;/div&gt;</span>
                      );
                    }
          
                    <span class="keyword">export default</span> <span class="function-name">App</span>;
                  </pre>
                </div>
                <p class="note-description">
                  In the example above, the JSX code is returned by the <code>App</code> function. The syntax looks similar to HTML, but it is actually JavaScript. The JSX will be transformed into <code>React.createElement</code> calls under the hood by Babel, which React understands and renders to the browser.
                </p>
              </div>
            `,
          },
          {
            id: 12,
            title: "JSX Rules",
            content: `
              <div>
                <h2 class="note-title">JSX Rules</h2>
                <p class="note-description">
                  JSX has some important rules that you must follow when writing JSX code. Here are the key rules:
                </p>
                <ul class="note-list">
                  <li><strong>1. JSX Must Have One Parent Element:</strong> All JSX elements must be wrapped in one parent element. This could be a <code>&lt;div&gt;</code>, <code>&lt;section&gt;</code>, or even a <code>&lt;React.Fragment&gt;</code>. <br><br>
                  Example:<br>
                  <pre>
                    <span class="keyword">return</span> (
                      <span class="tag">&lt;div&gt;</span>
                        <span class="tag">&lt;h1&gt;</span>Hello, world!<span class="tag">&lt;/h1&gt;</span>
                      <span class="tag">&lt;/div&gt;</span>
                    );
                  </pre><br><br>
                  </li>
                  <li><strong>2. Use CamelCase for Attributes:</strong> In JSX, you need to use camelCase for attributes. For example, use <code>className</code> instead of <code>class</code> and <code>htmlFor</code> instead of <code>for</code>. <br><br>
                  Example:<br>
                  <pre>
                    <span class="keyword">return</span> (
                      <span class="tag">&lt;div className="container"&gt;</span>
                        <span class="tag">&lt;h1&gt;</span>Hello, world!<span class="tag">&lt;/h1&gt;</span>
                      <span class="tag">&lt;/div&gt;</span>
                    );
                  </pre><br><br>
                  </li>
                  <li><strong>3. Closing Tags:</strong> All JSX elements must be closed. If the element does not have children, you still need to add a closing slash. For example, <code>&lt;img /&gt;</code> instead of <code>&lt;img&gt;</code>. <br><br>
                  Example:<br>
                  <pre>
                    <span class="keyword">return</span> (
                      <span class="tag">&lt;img src="image.jpg" alt="example" /&gt;</span>
                    );
                  </pre><br><br>
                  </li>
                  <li><strong>4. Expressions in JSX:</strong> You can include JavaScript expressions in JSX by wrapping them in curly braces, <code>{}</code>. For example, <code>&lt;h1&gt;Hello, {name}&lt;/h1&gt;</code>. <br><br>
                  Example:<br>
                  <pre>
                    <span class="keyword">const</span> name = <span class="string">"React"</span>;
                    <span class="keyword">return</span> (
                      <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>
                    );
                  </pre><br><br>
                  </li>
                  <li><strong>5. Avoid Using Reserved Words:</strong> Do not use JavaScript reserved words as JSX attribute names. For instance, you cannot use <code>for</code>, <code>class</code>, or <code>function</code> in JSX. <br><br>
                  Example:<br>
                  <pre>
                    <span class="keyword">return</span> (
                      <span class="tag">&lt;div className="container"&gt;</span>
                        <span class="tag">&lt;h1&gt;</span>Hello, world!<span class="tag">&lt;/h1&gt;</span>
                      <span class="tag">&lt;/div&gt;</span>
                    );
                  </pre><br><br>
                  </li>
                </ul>
              </div>
            `,
          },
          {
            id: 13,
            title: "React Fragment",
            content: `
              <div>
                <h2 class="note-title">React Fragment</h2>
                <p class="note-description">
                  A <strong>Fragment</strong> in React is a way to group multiple elements without adding extra nodes to the DOM. This is useful when you need to return multiple elements from a component but don't want to wrap them in a parent element like a <code>div</code>.
                </p>
                <p class="note-description">
                  React provides the <strong>Fragment</strong> component, or you can use an empty tag (<code>&lt;&gt;&lt;/&gt;</code>) as a shorthand to achieve the same effect.
                </p>
                <div class="note-example">
                  <h3>Example:</h3>
                  <pre>
                    <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
          
                    <span class="keyword">function</span> <span class="function-name">App</span>() {
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;&gt;</span>
                          <span class="tag">&lt;h1&gt;</span>Hello, world!<span class="tag">&lt;/h1&gt;</span>
                          <span class="tag">&lt;p&gt;</span>Welcome to React!<span class="tag">&lt;/p&gt;</span>
                        <span class="tag">&lt;/&gt;</span>
                      );
                    }
          
                    <span class="keyword">export default</span> <span class="function-name">App</span>;
                  </pre>
                </div>
                <div class="note-output">
                  <h3>Output:</h3>
                  <pre>
                    Hello, world!
                    Welcome to React!
                  </pre>
                </div>
                <p class="note-description">
                  In the example above, we're using the shorthand <code>&lt;&gt;&lt;/&gt;</code> to return both the <code>h1</code> and <code>p</code> elements without wrapping them in a <code>div</code>. The output shows both elements being rendered without any additional wrapper in the DOM.
                </p>
              </div>
            `,
          },
          {
            id: 14,
            title: "JSX Expression",
            content: `
              <div>
                <h2 class="note-title">JSX Expression</h2>
                <p class="note-description">
                  In JSX, you can embed JavaScript expressions inside curly braces <code>{ }</code>. These expressions can be variables, functions, mathematical operations, or any valid JavaScript expression. JSX will automatically evaluate and display the result of the expression.
                </p>
                <div class="note-example">
                  <h3>Example:</h3>
                  <pre>
                    <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
          
                    <span class="keyword">function</span> <span class="function-name">App</span>() {
                      <span class="keyword">const</span> message = <span class="string">"Hello, world!"</span>;
          
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;div&gt;</span>
                          <span class="tag">&lt;h1&gt;</span>{message}<span class="tag">&lt;/h1&gt;</span>
                        <span class="tag">&lt;/div&gt;</span>
                      );
                    }
          
                    <span class="keyword">export default</span> <span class="function-name">App</span>;
                  </pre>
                </div>
                <div class="note-output">
                  <h3>Output:</h3>
                  <pre>
                    Hello, world!
                  </pre>
                </div>
                <p class="note-description">
                  In the example above, the <code>message</code> variable is embedded inside the JSX expression <code>{message}</code>. JSX evaluates the expression and displays its value.
                </p>
                <p class="note-description">
                  You can also use other JavaScript expressions, such as mathematical operations or functions, inside the curly braces.
                </p>
                <div class="note-example">
                  <h3>Example with JavaScript Expression:</h3>
                  <pre>
                    <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
          
                    <span class="keyword">function</span> <span class="function-name">App</span>() {
                      <span class="keyword">const</span> number = 5;
          
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;div&gt;</span>
                          <span class="tag">&lt;h1&gt;</span>{number * 2}<span class="tag">&lt;/h1&gt;</span>
                        <span class="tag">&lt;/div&gt;</span>
                      );
                    }
          
                    <span class="keyword">export default</span> <span class="function-name">App</span>;
                  </pre>
                </div>
                <div class="note-output">
                  <h3>Output:</h3>
                  <pre>
                    10
                  </pre>
                </div>
                <p class="note-description">
                  In this example, the expression <code>{number * 2}</code> multiplies the value of <code>number</code> by 2, resulting in <code>10</code>, which is displayed in the rendered output.
                </p>
              </div>
            `,
          },
          {
            id: 15,
            title: "Class-based Components",
            content: `
              <div>
                <h2 class="note-title">Class-based Components</h2>
                <p class="note-description">
                  Class-based components are one of the two types of components in React (the other being functional components). In class-based components, you define a class that extends <code>React.Component</code> and includes a <code>render()</code> method to return the JSX that represents the component's UI.
                </p>
                <div class="note-example">
                  <h3>Example:</h3>
                  <pre>
                    <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
          
                    <span class="keyword">class</span> <span class="function-name">App</span> <span class="keyword">extends</span> <span class="keyword">React.Component</span> {
                      <span class="keyword">render</span>() {
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;h1&gt;</span>Hello, world!<span class="tag">&lt;/h1&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
                    }
          
                    <span class="keyword">export default</span> <span class="function-name">App</span>;
                  </pre>
                </div>
                <div class="note-output">
                  <h3>Output:</h3>
                  <pre>
                    Hello, world!
                  </pre>
                </div>
                <p class="note-description">
                  In this example, the component is defined as a class that extends <code>React.Component</code>. The <code>render()</code> method is responsible for returning the JSX to be rendered. 
                </p>
                <p class="note-description">
                  You can also manage the component's state in class-based components using <code>this.state</code> and update it using <code>this.setState()</code>.
                </p>
                <div class="note-example">
                  <h3>Example with State:</h3>
                  <pre>
                    <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
          
                    <span class="keyword">class</span> <span class="function-name">App</span> <span class="keyword">extends</span> <span class="keyword">React.Component</span> {
                      <span class="keyword">constructor</span>(<span class="parameter">props</span>) {
                        <span class="keyword">super</span>(<span class="parameter">props</span>);
                        <span class="keyword">this.state</span> = { message: <span class="string">"Hello, world!"</span> };
                      }
          
                      <span class="keyword">render</span>() {
                        <span class="keyword">return</span> (
                          <span class="tag">&lt;div&gt;</span>
                            <span class="tag">&lt;h1&gt;</span>{this.state.message}<span class="tag">&lt;/h1&gt;</span>
                          <span class="tag">&lt;/div&gt;</span>
                        );
                      }
                    }
          
                    <span class="keyword">export default</span> <span class="function-name">App</span>;
                  </pre>
                </div>
                <div class="note-output">
                  <h3>Output:</h3>
                  <pre>
                    Hello, world!
                  </pre>
                </div>
                <p class="note-description">
                  In this example, we initialize the component's state with a <code>message</code> property. The state is accessed using <code>this.state</code> and displayed inside the JSX.
                </p>
                <p class="note-description">
                  You can update the state using <code>this.setState()</code> when necessary, typically in response to user interactions or other events.
                </p>
              </div>
            `,
          },
          {
            id: 16,
            title: "What are Hooks",
            content: `
              <div>
                <h2 class="note-title">What are Hooks?</h2>
                <p class="note-description">
                  Hooks are a new feature in React 16.8 that allow you to use state and other React features without writing a class-based component. 
                  They let you "hook into" React features from function components.
                </p>
                <p class="note-description">
                  Before hooks, React components were either class-based or functional. Class-based components could manage state and side effects, 
                  while functional components were simple and stateless. With hooks, functional components can now do everything that class-based components can.
                </p>
                <div class="note-example">
                  <h3>Example with useState Hook:</h3>
                  <pre>
                    <span class="keyword">import</span> React, { <span class="keyword">useState</span> } <span class="keyword">from</span> <span class="string">'react'</span>;
          
                    <span class="keyword">function</span> <span class="function-name">App</span>() {
                      <span class="keyword">const</span> [<span class="parameter">count</span>, <span class="parameter">setCount</span>] = <span class="keyword">useState</span>(<span class="number">0</span>);
          
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;div&gt;</span>
                          <span class="tag">&lt;h1&gt;</span>Count: {count}<span class="tag">&lt;/h1&gt;</span>
                          <span class="tag">&lt;button onClick={</span><span class="keyword">() => setCount(count + 1)}</span><span class="tag">&gt;</span>Increment<span class="tag">&lt;/button&gt;</span>
                        <span class="tag">&lt;/div&gt;</span>
                      );
                    }
          
                    <span class="keyword">export default</span> <span class="function-name">App</span>;
                  </pre>
                </div>
                <div class="note-output">
                  <h3>Output:</h3>
                  <pre>
                    Count: 0
                    [Clicking the button will increment the count]
                  </pre>
                </div>
                <p class="note-description">
                  In this example, the <code>useState</code> hook is used to manage the state in a functional component. 
                  The <code>useState</code> hook returns an array with two elements: the current state value and a function to update that value.
                </p>
                <p class="note-description">
                  Hooks allow you to manage local state, perform side effects, and share logic between components, all within functional components. 
                  The <code>useState</code> hook is just one of the several built-in hooks in React.
                </p>
              </div>
            `,
          },
          {
            id: 17,
            title: "What is State",
            content: `
              <div>
                <h2 class="note-title">What is State?</h2>
                <p class="note-description">
                  State is an object that represents the dynamic data or information about a component in React. It is used to store values that change over time 
                  and are reflected in the UI. Each component can have its own state, and when the state changes, the component re-renders to reflect the updated data.
                </p>
                <p class="note-description">
                  In class-based components, state is typically managed using <code>this.state</code> and updated with <code>this.setState()</code>. 
                  In functional components, state is managed using the <code>useState</code> hook.
                </p>
                <div class="note-example">
                  <h3>Example with useState Hook:</h3>
                  <pre>
                    <span class="keyword">import</span> React, { <span class="keyword">useState</span> } <span class="keyword">from</span> <span class="string">'react'</span>;
          
                    <span class="keyword">function</span> <span class="function-name">App</span>() {
                      <span class="keyword">const</span> [<span class="parameter">count</span>, <span class="parameter">setCount</span>] = <span class="keyword">useState</span>(<span class="number">0</span>);
          
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;div&gt;</span>
                          <span class="tag">&lt;h1&gt;</span>Count: {count}<span class="tag">&lt;/h1&gt;</span>
                          <span class="tag">&lt;button onClick={</span><span class="keyword">() => setCount(count + 1)}</span><span class="tag">&gt;</span>Increment<span class="tag">&lt;/button&gt;</span>
                        <span class="tag">&lt;/div&gt;</span>
                      );
                    }
          
                    <span class="keyword">export default</span> <span class="function-name">App</span>;
                  </pre>
                </div>
                <div class="note-output">
                  <h3>Output:</h3>
                  <pre>
                    Count: 0
                    [Clicking the button will increment the count]
                  </pre>
                </div>
                <p class="note-description">
                  In this example, the component has a state variable <code>count</code>, which is initially set to <code>0</code>. When the button is clicked, 
                  the state is updated using the <code>setCount</code> function, causing the component to re-render with the new state value.
                </p>
                <p class="note-description">
                  State in React allows components to create and manage their own data, which can be used to control the behavior and appearance of the UI.
                  When the state changes, React ensures that the component reflects those changes by re-rendering the UI.
                </p>
              </div>
            `,
          },
          {
            id: 18,
            title: "What is useState?",
            content: `
              <div>
                <h2 class="note-title">What is useState?</h2>
                <p class="note-description">
                  <code>useState</code> is a Hook in React that allows functional components to have state variables. It is one of the most commonly used hooks in React because it enables you to manage component state in a functional way, without needing to use class-based components.
                </p>
                <p class="note-description">
                  Before React 16.8, only class-based components had state. However, with the introduction of hooks, you can now use state inside functional components with the <code>useState</code> hook. It returns an array containing the current state and a function to update that state.
                </p>
                
                <h3>Syntax:</h3>
                <pre>
                  const [state, setState] = useState(initialState);
                </pre>
                <p>
                  - <code>state</code>: The current value of the state variable.<br />
                  - <code>setState</code>: The function that you call to update the state.<br />
                  - <code>initialState</code>: The initial value of the state.
                </p>
          
                <div class="note-example">
                  <h3>Example 1: Basic useState Example</h3>
                  <pre>
                    <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
          
                    <span class="keyword">function</span> <span class="function-name">Counter</span>() {
                      <span class="keyword">const</span> [count, setCount] = useState(0);
          
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;div&gt;</span>
                          <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
                          <span class="tag">&lt;button onClick={() =&gt; setCount(count + 1)}&gt;</span>Increment<span class="tag">&lt;/button&gt;</span>
                        <span class="tag">&lt;/div&gt;</span>
                      );
                    }
          
                    <span class="keyword">export default</span> <span class="function-name">Counter</span>;
                  </pre>
                  <p>In this example, we declare a state variable <code>count</code> with an initial value of 0, and a function <code>setCount</code> to update the count value when the button is clicked.</p>
                </div>
          
                <div class="note-output">
                  <h3>Output:</h3>
                  <pre>
                    Count: 0
                    [Increment Button]
                  </pre>
                  <p>Clicking the Increment button will increase the count value by 1 each time.</p>
                </div>
          
                <h3>useState with Objects</h3>
                <div class="note-example">
                  <pre>
                    <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
          
                    <span class="keyword">function</span> <span class="function-name">UserProfile</span>() {
                      <span class="keyword">const</span> [user, setUser] = useState({ name: 'Alice', age: 25 });
          
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;div&gt;</span>
                          <span class="tag">&lt;p&gt;</span>Name: {user.name}, Age: {user.age}<span class="tag">&lt;/p&gt;</span>
                          <span class="tag">&lt;button onClick={() =&gt; setUser({ ...user, age: user.age + 1 })}&gt;</span>Increment Age<span class="tag">&lt;/button&gt;</span>
                        <span class="tag">&lt;/div&gt;</span>
                      );
                    }
          
                    <span class="keyword">export default</span> <span class="function-name">UserProfile</span>;
                  </pre>
                  <p>Here, we are using <code>useState</code> with an object. When the button is clicked, the user's age is incremented.</p>
                </div>
          
                <div class="note-output">
                  <h3>Output:</h3>
                  <pre>
                    Name: Alice, Age: 25
                    [Increment Age Button]
                  </pre>
                  <p>Clicking the Increment Age button will increase the age of the user by 1 each time.</p>
                </div>
          
                <h3>useState with Arrays</h3>
                <div class="note-example">
                  <pre>
                    <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
          
                    <span class="keyword">function</span> <span class="function-name">TodoList</span>() {
                      <span class="keyword">const</span> [todos, setTodos] = useState(['Buy groceries', 'Do laundry']);
          
                      <span class="keyword">const</span> addTodo = () =&gt; {
                        <span class="keyword">setTodos</span>([...todos, 'New task']);
                      };
          
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;div&gt;</span>
                          <span class="tag">&lt;ul&gt;</span>
                            {todos.map((todo, index) =&gt; (
                              <span class="tag">&lt;li key={index}&gt;</span>{todo}<span class="tag">&lt;/li&gt;</span>
                            ))}
                          <span class="tag">&lt;/ul&gt;</span>
                          <span class="tag">&lt;button onClick={addTodo}&gt;</span>Add Todo<span class="tag">&lt;/button&gt;</span>
                        <span class="tag">&lt;/div&gt;</span>
                      );
                    }
          
                    <span class="keyword">export default</span> <span class="function-name">TodoList</span>;
                  </pre>
                  <p>This example shows <code>useState</code> used with an array. Clicking the Add Todo button will append a new item to the list.</p>
                </div>
          
                <div class="note-output">
                  <h3>Output:</h3>
                  <pre>
                    - Buy groceries
                    - Do laundry
                    - New task
                    [Add Todo Button]
                  </pre>
                  <p>Each time the Add Todo button is clicked, a new "New task" item is added to the list.</p>
                </div>
          
              </div>
            `,
          },
          {
            id: 19,
            title: "What is Prop in React?",
            content: `
              <div>
                <h2 class="note-title">What is Prop in React?</h2>
                <p class="note-description">
                  Props (short for "properties") in React are a mechanism for passing data and event handlers from a parent component to a child component. They allow components to be dynamic and reusable by providing external data or behaviors.
                </p>
                <p class="note-description">
                  Props are  read-only , meaning that a child component cannot modify the props it receives. It can only use them to render UI or perform other logic. When the parent component's state or props change, React re-renders the child components to reflect the updated values.
                </p>
                <p class="note-description">
                  Props provide a simple and consistent way to share data between components in a React application.
                </p>
                
                <div class="note-example">
                  <h3>Example 1: Passing Props from Parent to Child</h3>
                  <pre>
                    <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
          
                    <span class="keyword">function</span> <span class="function-name">Greeting</span>({ name }) {
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>
                      );
                    }
          
                    <span class="keyword">function</span> <span class="function-name">App</span>() {
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;div&gt;</span>
                          <span class="tag">&lt;Greeting name="Alice" /&gt;</span>
                          <span class="tag">&lt;Greeting name="Bob" /&gt;</span>
                        <span class="tag">&lt;/div&gt;</span>
                      );
                    }
          
                    <span class="keyword">export default</span> <span class="function-name">App</span>;
                  </pre>
                  <p>In this example, we pass the prop <code>name</code> from the <code>App</code> component to the <code>Greeting</code> component. The child component uses the <code>name</code> prop to display a greeting message.</p>
                </div>
          
                <div class="note-output">
                  <h3>Output:</h3>
                  <pre>
                    Hello, Alice!
                    Hello, Bob!
                  </pre>
                </div>
          
                <h3>Types of Props in React:</h3>
                <p class="note-description">
                  Props can be of various types, including strings, numbers, objects, arrays, functions, and even other components. Below are some common examples:
                </p>
          
                <h4>1. String Props</h4>
                <div class="note-example">
                  <pre>
                    <span class="keyword">function</span> <span class="function-name">Greeting</span>({ name }) {
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>
                      );
                    }
                  </pre>
                  <p>This example shows a string prop being passed to the <code>Greeting</code> component.</p>
                </div>
          
                <h4>2. Number Props</h4>
                <div class="note-example">
                  <pre>
                    <span class="keyword">function</span> <span class="function-name">Counter</span>({ count }) {
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
                      );
                    }
                  </pre>
                  <p>This example shows a number prop being passed to the <code>Counter</code> component to display a count.</p>
                </div>
          
                <h4>3. Object Props</h4>
                <div class="note-example">
                  <pre>
                    <span class="keyword">function</span> <span class="function-name">User</span>({ user }) {
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;p&gt;</span>Name: {user.name}, Age: {user.age}<span class="tag">&lt;/p&gt;</span>
                      );
                    }
          
                    <span class="keyword">const</span> user = { name: "Alice", age: 25 };
                    <span class="keyword">function</span> <span class="function-name">App</span>() {
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;User user={user} /&gt;</span>
                      );
                    }
                  </pre>
                  <p>Here, we are passing an object as a prop to the <code>User</code> component to display the name and age of the user.</p>
                </div>
          
                <h4>4. Function Props</h4>
                <div class="note-example">
                  <pre>
                    <span class="keyword">function</span> <span class="function-name">Button</span>({ onClick }) {
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;button onClick={onClick}&gt;</span>Click Me<span class="tag">&lt;/button&gt;</span>
                      );
                    }
          
                    <span class="keyword">function</span> <span class="function-name">App</span>() {
                      <span class="keyword">const</span> handleClick = () => {
                        <span class="keyword">alert</span>("Button clicked!");
                      };
          
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;Button onClick={handleClick} /&gt;</span>
                      );
                    }
                  </pre>
                  <p>This example demonstrates passing a function as a prop to handle button clicks.</p>
                </div>
          
                <h4>5. Component as Props</h4>
                <div class="note-example">
                  <pre>
                    <span class="keyword">function</span> <span class="function-name">Layout</span>({ Header, Content }) {
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;div&gt;</span>
                          <Header />
                          <Content />
                        <span class="tag">&lt;/div&gt;</span>
                      );
                    }
          
                    <span class="keyword">function</span> <span class="function-name">App</span>() {
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;Layout Header={Header} Content={Content} /&gt;</span>
                      );
                    }
          
                    <span class="keyword">function</span> <span class="function-name">Header</span>() {
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;h1&gt;</span>Welcome to React!<span class="tag">&lt;/h1&gt;</span>
                      );
                    }
          
                    <span class="keyword">function</span> <span class="function-name">Content</span>() {
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;p&gt;</span>This is the content section.<span class="tag">&lt;/p&gt;</span>
                      );
                    }
                  </pre>
                  <p>In this example, we are passing components themselves as props to be rendered by the parent component.</p>
                </div>
          
              </div>
            `,
          },
          {
            id: 20,
            title: "What is Props Drilling?",
            content: `
              <div>
                <h2 class="note-title">What is Props Drilling?</h2>
                <p class="note-description">
                   Props drilling  is the process of passing data from a parent component to a deeply nested child component in React by passing props through intermediate components.
                  While this is a straightforward and simple approach in React, it can become cumbersome when the component tree grows deep and you need to pass props through many layers of components.
                </p>
                <h3>How Props Drilling Works:</h3>
                <p>
                  When you pass props to a child component, it can be passed down to another child component, and so on. This continues until the props reach the deepest level of the component tree where they are used.
                </p>
                <p>
                  While this approach works, it can result in prop drilling when intermediate components don’t need to use the props but still must pass them along.
                </p>
          
                <div class="note-example">
                  <h3>Example of Props Drilling</h3>
                  <pre>
                    <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
          
                    <span class="keyword">function</span> <span class="function-name">GrandParent</span>() {
                      <span class="keyword">const</span> [message, setMessage] = <span class="keyword">useState</span>('Hello from Grandparent');
          
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;div&gt;</span>
                          <span class="tag">&lt;h1&gt;</span>{message}<span class="tag">&lt;/h1&gt;</span>
                          <span class="tag">&lt;Parent message={message} /&gt;</span>
                        <span class="tag">&lt;/div&gt;</span>
                      );
                    }
          
                    <span class="keyword">function</span> <span class="function-name">Parent</span>({ message }) {
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;div&gt;</span>
                          <span class="tag">&lt;h2&gt;</span>From Parent: {message}<span class="tag">&lt;/h2&gt;</span>
                          <span class="tag">&lt;Child message={message} /&gt;</span>
                        <span class="tag">&lt;/div&gt;</span>
                      );
                    }
          
                    <span class="keyword">function</span> <span class="function-name">Child</span>({ message }) {
                      <span class="keyword">return</span> (
                        <span class="tag">&lt;div&gt;</span>
                          <span class="tag">&lt;p&gt;</span>From Child: {message}<span class="tag">&lt;/p&gt;</span>
                        <span class="tag">&lt;/div&gt;</span>
                      );
                    }
          
                    <span class="keyword">export default</span> <span class="function-name">GrandParent</span>;
                  </pre>
                  <p>In this example, the <code>message</code> state is passed from the <code>GrandParent</code> component to the <code>Child</code> component through the intermediate <code>Parent</code> component. The intermediate component doesn't use the prop, but still passes it along.</p>
                </div>
          
                <div class="note-output">
                  <h3>Output:</h3>
                  <pre>
                    Hello from Grandparent
                    From Parent: Hello from Grandparent
                    From Child: Hello from Grandparent
                  </pre>
                  <p>Notice that even though the <code>Parent</code> component doesn't need the <code>message</code>, it still has to pass it to the <code>Child</code>.</p>
                </div>
          
                <h3>Why Props Drilling Can Be Problematic:</h3>
                <p>
                  -  Unnecessary complexity : Passing props through multiple layers of components increases the complexity of your component structure.</br > </br>
                  -  Harder maintenance : As your application grows, the need to pass props through multiple layers can lead to difficult-to-maintain code.</br > </br>
                  -  Limited scalability : If you need to add more data or components that require props, it becomes cumbersome to manage all the layers of props passing.</br > </br>
                </p>
                
                <h3>Solutions to Avoid Props Drilling:</h3>
                <p>
                  -  React Context API : Use React's Context API to pass data directly to components without the need for drilling props through every intermediary.</br > </br>
                  -  State Management Libraries : Use libraries like Redux or Zustand that manage global state and allow components to access it directly without passing props down the tree.</br > </br>
                </p>
              </div>
            `,
          },
        ],
        assignment: [
          {
            id: 1,
            title: "Create a Simple React Counter",
            content: `
                <div>
                  <h2 class="note-title">Create a Simple React Counter</h2>
                  <p class="note-description">
                    In this assignment, you'll create a simple counter app using React. The app should allow users to increment and decrement a counter value.
                    Use the <code>useState</code> hook to manage the counter state.
                  </p>
                  <div class="note-example">
                    <h3>Code Example:</h3>
                    <pre>
        <span class="keyword">import</span> React, <span class="keyword"> { useState } </span> <span class="keyword">from</span> <span class="string">'react'</span>;
        
        <span class="keyword">function</span> <span class="function-name">Counter</span>() {
          <span class="keyword">const</span> [<span class="variable-name">count</span>, <span class="variable-name">setCount</span>] = <span class="function-name">useState</span>(0);
        
          <span class="keyword">return</span> (
            <span class="tag">&lt;div&gt;</span>
              <span class="tag">&lt;h1&gt;</span>Counter: {<span class="variable-name">count</span>}<span class="tag">&lt;/h1&gt;</span>
              <span class="tag">&lt;button onClick={() =&gt; setCount(count + 1)}&gt;</span>Increment<span class="tag">&lt;/button&gt;</span>
              <span class="tag">&lt;button onClick={() =&gt; setCount(count - 1)}&gt;</span>Decrement<span class="tag">&lt;/button&gt;</span>
            <span class="tag">&lt;/div&gt;</span>
          );
        }
        
        <span class="keyword">export default</span> <span class="function-name">Counter</span>;
                    </pre>
                  </div>
                  <p class="note-description">In this app, clicking the buttons will change the counter value.</p>
                </div>
              `,
          },
          {
            id: 2,
            title: "Display List of Items Using Props",
            content: `
                <div>
                  <h2 class="note-title">Display List of Items Using Props</h2>
                  <p class="note-description">
                    Pass an array of items from the parent component to the child component as props and render the list in the child component.
                  </p>
                  <div class="note-example">
                    <h3>Code Example:</h3>
                    <pre>
        <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
        
        <span class="keyword">function</span> <span class="function-name">ItemList</span>({ <span class="variable-name">items</span> }) {
          <span class="keyword">return</span> (
            <span class="tag">&lt;ul&gt;</span>
              {<span class="variable-name">items</span>.map((<span class="variable-name">item</span>, <span class="variable-name">index</span>) =&gt; (
                <span class="tag">&lt;li key={index}&gt;</span>{<span class="variable-name">item</span>}<span class="tag">&lt;/li&gt;</span>
              ))}
            <span class="tag">&lt;/ul&gt;</span>
          );
        }
        
        <span class="keyword">function</span> <span class="function-name">App</span>() {
          <span class="keyword">const</span> <span class="variable-name">items</span> = [<span class="string">'Apple'</span>, <span class="string">'Banana'</span>, <span class="string">'Orange'</span>];
          <span class="keyword">return</span> <span class="function-name">ItemList</span>({ <span class="variable-name">items</span> });
        }
        
        <span class="keyword">export default</span> <span class="function-name">App</span>;
                    </pre>
                  </div>
                  <p class="note-description">This app will render a list of fruits passed as props to the ItemList component.</p>
                </div>
              `,
          },
          {
            id: 3,
            title: "Toggle Visibility Using State",
            content: `
                <div>
                  <h2 class="note-title">Toggle Visibility Using State</h2>
                  <p class="note-description">
                    Use the <code>useState</code> hook to toggle the visibility of a text message.
                    Add a button to toggle between showing and hiding the message.
                  </p>
                  <div class="note-example">
                    <h3>Code Example:</h3>
                    <pre>
        <span class="keyword">import</span> React, <span class="keyword"> { useState } </span> <span class="keyword">from</span> <span class="string">'react'</span>;
        
        <span class="keyword">function</span> <span class="function-name">ToggleMessage</span>() {
          <span class="keyword">const</span> [<span class="variable-name">visible</span>, <span class="variable-name">setVisible</span>] = <span class="function-name">useState</span>(<span class="boolean">false</span>);
        
          <span class="keyword">return</span> (
            <span class="tag">&lt;div&gt;</span>
              <span class="tag">&lt;button onClick={() =&gt; setVisible(!visible)}&gt;</span>Toggle Message<span class="tag">&lt;/button&gt;</span>
              {<span class="variable-name">visible</span> && <span class="tag">&lt;p&gt;</span>This is a toggleable message!<span class="tag">&lt;/p&gt;</span>}
            <span class="tag">&lt;/div&gt;</span>
          );
        }
        
        <span class="keyword">export default</span> <span class="function-name">ToggleMessage</span>;
                    </pre>
                  </div>
                  <p class="note-description">The app will toggle the visibility of the message when the button is clicked.</p>
                </div>
              `,
          },
        ],
        program: [
          {
            id: 1,
            title: "Basic React Component",
            content: `
                  <div class="note">
                    <h2 class="note-title">Basic React Component</h2>
                    <p class="note-description">
                      This is a basic React component that renders a message to the screen.
                    </p>
                    <div class="note-example">
                      <h3>Example:</h3>
                      <pre>
                        <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
          
                        <span class="keyword">function</span> <span class="function-name">App</span>() {
                          <span class="keyword">return</span> (
                            <span class="tag">&lt;div&gt;</span>
                              <span class="tag">&lt;h1&gt;</span>Hello, World!<span class="tag">&lt;/h1&gt;</span>
                            <span class="tag">&lt;/div&gt;</span>
                          );
                        }
          
                        <span class="keyword">export default</span> <span class="function-name">App</span>;
                      </pre>
                    </div>
                  </div>
                `,
          },
          {
            id: 2,
            title: "Handling Events",
            content: `
                  <div class="note">
                    <h2 class="note-title">Handling Events</h2>
                    <p class="note-description">
                      This program demonstrates handling a click event in React.
                    </p>
                    <div class="note-example">
                      <h3>Example:</h3>
                      <pre>
                        <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
          
                        <span class="keyword">function</span> <span class="function-name">App</span>() {
                          <span class="keyword">const</span> [count, setCount] = useState(0);
          
                          <span class="keyword">function</span> <span class="function-name">increment</span>() {
                            setCount(count + 1);
                          }
          
                          <span class="keyword">return</span> (
                            <span class="tag">&lt;div&gt;</span>
                              <span class="tag">&lt;h1&gt;</span>Count: {count}<span class="tag">&lt;/h1&gt;</span>
                              <span class="tag">&lt;button onClick={increment}&gt;</span>Increment<span class="tag">&lt;/button&gt;</span>
                            <span class="tag">&lt;/div&gt;</span>
                          );
                        }
          
                        <span class="keyword">export default</span> <span class="function-name">App</span>;
                      </pre>
                    </div>
                  </div>
                `,
          },
          {
            id: 3,
            title: "Conditional Rendering",
            content: `
                  <div class="note">
                    <h2 class="note-title">Conditional Rendering</h2>
                    <p class="note-description">
                      This program demonstrates how to conditionally render elements in React based on state.
                    </p>
                    <div class="note-example">
                      <h3>Example:</h3>
                      <pre>
                        <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
          
                        <span class="keyword">function</span> <span class="function-name">App</span>() {
                          <span class="keyword">const</span> [isLoggedIn, setIsLoggedIn] = useState(false);
          
                          <span class="keyword">return</span> (
                            <span class="tag">&lt;div&gt;</span>
                              <span class="keyword">{isLoggedIn ? 'Welcome, User!' : 'Please log in'}</span>
                              <span class="tag">&lt;/div&gt;</span>
                          );
                        }
          
                        <span class="keyword">export default</span> <span class="function-name">App</span>;
                      </pre>
                    </div>
                  </div>
                `,
          },
          {
            id: 4,
            title: "Handling Forms",
            content: `
                  <div class="note">
                    <h2 class="note-title">Handling Forms</h2>
                    <p class="note-description">
                      This program demonstrates how to handle form submission in React.
                    </p>
                    <div class="note-example">
                      <h3>Example:</h3>
                      <pre>
                        <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
          
                        <span class="keyword">function</span> <span class="function-name">App</span>() {
                          <span class="keyword">const</span> [name, setName] = useState('');
          
                          <span class="keyword">function</span> <span class="function-name">handleSubmit</span>(event) {
                            event.preventDefault();
                            alert('Form submitted: ' + name);
                          }
          
                          <span class="keyword">return</span> (
                            <span class="tag">&lt;div&gt;</span>
                              <span class="tag">&lt;form onSubmit={handleSubmit}&gt;</span>
                                <span class="tag">&lt;input value={name} onChange={e => setName(e.target.value)} /&gt;</span>
                                <span class="tag">&lt;button&gt;</span>Submit<span class="tag">&lt;/button&gt;</span>
                              <span class="tag">&lt;/form&gt;</span>
                            <span class="tag">&lt;/div&gt;</span>
                          );
                        }
          
                        <span class="keyword">export default</span> <span class="function-name">App</span>;
                      </pre>
                    </div>
                  </div>
                `,
          },
          {
            id: 5,
            title: "Handling List Rendering",
            content: `
                  <div class="note">
                    <h2 class="note-title">Handling List Rendering</h2>
                    <p class="note-description">
                      This program demonstrates rendering a list of items dynamically in React.
                    </p>
                    <div class="note-example">
                      <h3>Example:</h3>
                      <pre>
                        <span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
          
                        <span class="keyword">function</span> <span class="function-name">App</span>() {
                          <span class="keyword">const</span> items = ['Apple', 'Banana', 'Orange'];
          
                          <span class="keyword">return</span> (
                            <span class="tag">&lt;div&gt;</span>
                              <span class="tag">&lt;ul&gt;</span>
                                {items.map(item =&gt; (
                                  <span class="tag">&lt;li&gt;</span>{item}<span class="tag">&lt;/li&gt;</span>
                                ))}
                              <span class="tag">&lt;/ul&gt;</span>
                            <span class="tag">&lt;/div&gt;</span>
                          );
                        }
          
                        <span class="keyword">export default</span> <span class="function-name">App</span>;
                      </pre>
                    </div>
                  </div>
                `,
          },
          {
            id: 6,
            title: "React Hooks: useEffect",
            content: `
                  <div class="note">
                    <h2 class="note-title">React Hooks: useEffect</h2>
                    <p class="note-description">
                      This program demonstrates the use of the useEffect hook to fetch data when a component mounts.
                    </p>
                    <div class="note-example">
                      <h3>Example:</h3>
                      <pre>
                        <span class="keyword">import</span> React, { useState, useEffect } <span class="keyword">from</span> <span class="string">'react'</span>;
          
                        <span class="keyword">function</span> <span class="function-name">App</span>() {
                          <span class="keyword">const</span> [data, setData] = useState([]);
          
                          <span class="keyword">useEffect</span>(() =&gt; {
                            <span class="keyword">fetch</span>('https://api.example.com/data')
                              .<span class="keyword">then</span>(response =&gt; response.json())
                              .<span class="keyword">then</span>(data =&gt; setData(data));
                          }, []);
          
                          <span class="keyword">return</span> (
                            <span class="tag">&lt;div&gt;</span>
                              <span class="tag">&lt;ul&gt;</span>
                                {data.map(item =&gt; (
                                  <span class="tag">&lt;li&gt;</span>{item.name}<span class="tag">&lt;/li&gt;</span>
                                ))}
                              <span class="tag">&lt;/ul&gt;</span>
                            <span class="tag">&lt;/div&gt;</span>
                          );
                        }
          
                        <span class="keyword">export default</span> <span class="function-name">App</span>;
                      </pre>
                    </div>
                  </div>
                `,
          },
          {
            id: 7,
            title: "React Context API",
            content: `
                  <div class="note">
                    <h2 class="note-title">React Context API</h2>
                    <p class="note-description">
                      This program demonstrates how to use the Context API to manage global state in React.
                    </p>
                    <div class="note-example">
                      <h3>Example:</h3>
                      <pre>
                        <span class="keyword">import</span> React, { useState, createContext, useContext } <span class="keyword">from</span> <span class="string">'react'</span>;
          
                        <span class="keyword">const</span> AppContext = createContext();
          
                        <span class="keyword">function</span> <span class="function-name">App</span>() {
                          <span class="keyword">const</span> [count, setCount] = useState(0);
          
                          <span class="keyword">return</span> (
                            <span class="tag">&lt;AppContext.Provider value={{ count, setCount }}&gt;</span>
                              <span class="tag">&lt;Counter /&gt;</span>
                            <span class="tag">&lt;/AppContext.Provider&gt;</span>
                          );
                        }
          
                        <span class="keyword">function</span> <span class="function-name">Counter</span>() {
                          <span class="keyword">const</span> { count, setCount } = useContext(AppContext);
          
                          <span class="keyword">return</span> (
                            <span class="tag">&lt;div&gt;</span>
                              <span class="tag">&lt;h1&gt;</span>Count: {count}<span class="tag">&lt;/h1&gt;</span>
                              <span class="tag">&lt;button onClick={() => setCount(count + 1)}&gt;</span>Increment<span class="tag">&lt;/button&gt;</span>
                            <span class="tag">&lt;/div&gt;</span>
                          );
                        }
          
                        <span class="keyword">export default</span> <span class="function-name">App</span>;
                      </pre>
                    </div>
                  </div>
                `,
          },
          {
            id: 8,
            title: "React Router Example",
            content: `
                  <div class="note">
                    <h2 class="note-title">React Router Example</h2>
                    <p class="note-description">
                      This program demonstrates how to use React Router for routing between pages in a React application.
                    </p>
                    <div class="note-example">
                      <h3>Example:</h3>
                      <pre>
                        <span class="keyword">import</span> React from <span class="string">'react'</span>;
                        <span class="keyword">import</span> { BrowserRouter as Router, Route, Link } <span class="keyword">from</span> <span class="string">'react-router-dom'</span>;
          
                        <span class="keyword">function</span> <span class="function-name">App</span>() {
                          <span class="keyword">return</span> (
                            <span class="tag">&lt;Router&gt;</span>
                              <span class="tag">&lt;nav&gt;</span>
                                <span class="tag">&lt;Link to=&quot;/home&quot;&gt;</span>Home<span class="tag">&lt;/Link&gt;</span>
                                <span class="tag">&lt;Link to=&quot;/about&quot;&gt;</span>About<span class="tag">&lt;/Link&gt;</span>
                              <span class="tag">&lt;/nav&gt;</span>
          
                              <span class="tag">&lt;Route path=&quot;/home&quot; component={Home} /&gt;</span>
                              <span class="tag">&lt;Route path=&quot;/about&quot; component={About} /&gt;</span>
                            <span class="tag">&lt;/Router&gt;</span>
                          );
                        }
          
                        <span class="keyword">export default</span> <span class="function-name">App</span>;
                      </pre>
                    </div>
                  </div>
                `,
          },
          {
            id: 9,
            title: "React Custom Hooks",
            content: `
                  <div class="note">
                    <h2 class="note-title">React Custom Hooks</h2>
                    <p class="note-description">
                      This program demonstrates how to create and use custom hooks in React.
                    </p>
                    <div class="note-example">
                      <h3>Example:</h3>
                      <pre>
                        <span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;
          
                        <span class="keyword">function</span> <span class="function-name">useCounter</span>(initialValue) {
                          <span class="keyword">const</span> [count, setCount] = useState(initialValue);
          
                          <span class="keyword">const</span> increment = () => setCount(count + 1);
                          <span class="keyword">const</span> decrement = () => setCount(count - 1);
          
                          <span class="keyword">return</span> { count, increment, decrement };
                        }
          
                        <span class="keyword">function</span> <span class="function-name">App</span>() {
                          <span class="keyword">const</span> { count, increment, decrement } = useCounter(0);
          
                          <span class="keyword">return</span> (
                            <span class="tag">&lt;div&gt;</span>
                              <span class="tag">&lt;h1&gt;</span>Count: {count}<span class="tag">&lt;/h1&gt;</span>
                              <span class="tag">&lt;button onClick={increment}&gt;</span>Increment<span class="tag">&lt;/button&gt;</span>
                              <span class="tag">&lt;button onClick={decrement}&gt;</span>Decrement<span class="tag">&lt;/button&gt;</span>
                            <span class="tag">&lt;/div&gt;</span>
                          );
                        }
          
                        <span class="keyword">export default</span> <span class="function-name">App</span>;
                      </pre>
                    </div>
                  </div>
                `,
          },
        ],
        project: [],
      },
    ],
    html: [
      {
        notes: [
          {
            id: 1,
            title: "Introduction to HTML",
            content: ` (
              <div>
                <h2 className="note-title">Introduction to HTML</h2>
                <ul className="note-description">
                  <li>HTML was developed by <strong>Tim Berners-Lee</strong> in 1991.<br /><br /></li>
                  <li>It is a product of <strong>SGML (Standard Generalized Markup Language)</strong>.<br /><br /></li>
                  <li><strong>HTML</strong> is short for <strong>Hyper Text Markup Language</strong>.<br /><br /></li>
                  <li>HTML is a markup language that tells web browsers how to structure the web pages you visit.<br /><br /></li>
                  <li>Without HTML, a browser would not know how to display things; it provides a basic structure of the page.<br /><br /></li>
                  <li>HTML documents should be saved with the <strong>.html</strong> extension.<br /><br /></li>
                  <li>The current version of HTML is <strong>HTML5 (2014)</strong>.<br /><br /></li>
                </ul>
              </div>
            ),
            `,
          },
          {
            id: 2,
            title: "Doctype",
            content: `
              <div>
                <h2 class="note-title">Doctype</h2>
                <ul class="note-description">
                  <li>It is a document type declaration.<br /><br /></li>
                  <li><strong>&lt;!DOCTYPE&gt;</strong> is a declaration in HTML that specifies the version of HTML used in a web page.<br /><br /></li>
                  <li>It is not an HTML tag.<br /><br /></li>
                  <li>The <strong>&lt;!DOCTYPE&gt;</strong> declaration must be the very first line of an HTML document, before the <strong>&lt;html&gt;</strong> tag.<br /><br /></li>
                  <li>It is important to include the correct <strong>&lt;!DOCTYPE&gt;</strong> declaration in an HTML document, as it can affect how the document is rendered in different web browsers.<br /><br /></li>
                  <li>The HTML5 doctype declaration is: <strong>&lt;!DOCTYPE html&gt;</strong><br /><br /></li>
                  <li>In the case of HTML5, the doctype declaration is very simple and concise, and it replaces the longer, more complex doctype declarations that were used in previous versions of HTML.<br /><br /></li>
                </ul>
                <div class="note-example">
                  <h3>Example:</h3>
                  <pre>
                    <span class="keyword">&lt;!DOCTYPE</span> <span class="string">html</span><span class="keyword">&gt;</span>
                  </pre>
                </div>
              </div>
            `,
          },
          {
            id: 3,
            title: "Tag",
            content: `
              <div>
                <h2 class="note-title">Tag</h2>
                <ul class="note-description">
                  <li>An HTML tag is a keyword surrounded by angle brackets, < and >.<br /><br /></li>
                  <li>They are used to mark up the content of a web page, and to specify how the content should be displayed in a web browser.<br /><br /></li>
                  <li>Every tag in HTML performs specific tasks.<br /><br /></li>
                  <li>Example: <br />
                    <code>&lt;html&gt;</code> : it means it is starting of Html tag.<br />
                    <code>&lt;/html&gt;</code> : Here, '/' means it is the ending of the Html tag.<br /><br />
                  </li>
                  <li>The <code>&lt;html&gt;</code> tag represents the root of an HTML document.<br /><br /></li>
                </ul>
                <div class="note-example">
                  <h3>Example:</h3>
                  <pre>
                    <span class="keyword">&lt;html&gt;</span>
                      <span class="comment">This is the root of the HTML document</span>
                    <span class="keyword">&lt;/html&gt;</span>
                  </pre>
                </div>
              </div>
            `,
          },
          {
            id: 4,
            title: "We Have Two Types Of Tags",
            content: `
              <div>
                <h2 class="note-title">We Have Two Types Of Tags</h2>
                <h3>1. Container Tag (Paired tag)</h3>
                <ul class="note-description">
                  <li>Those tags we have to close, we call them Container tags.<br /><br /></li>
                  <li>Example: <code>&lt;html&gt; &lt;/html&gt;</code>, <code>&lt;head&gt;&lt;/head&gt;</code>, <code>&lt;body&gt;&lt;/body&gt;</code>, etc.<br /><br /></li>
                </ul>
          
                <h3>2. Non Container Tag</h3>
                <ul class="note-description">
                  <li>Non Container tags are known as void tags, empty tags, and singleton tags because they don't have closing tags, so we cannot put content in between them.<br /><br /></li>
                  <li>Those tags we need not to close, we call them Non Container tags.<br /><br /></li>
                  <li>Example: <code>&lt;br&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code>, etc.<br /><br /></li>
                </ul>
          
                <div class="note-example">
                  <h3>Example:</h3>
                  <pre>
                    <span class="keyword">&lt;html&gt;</span> 
                      <span class="comment">This is a container tag</span>
                    <span class="keyword">&lt;/html&gt;</span>
                  </pre>
                  <pre>
                    <span class="keyword">&lt;br&gt;</span>
                      <span class="comment">This is a non-container tag (self-closing)</span>
                  </pre>
                </div>
              </div>
            `,
          },
          {
            id: 5,
            title: "Types Of Elements",
            content: `
              <div>
                <h2 class="note-title">Types Of Elements</h2>
                
                <h3>1. Block Level Element</h3>
                <ul class="note-description">
                  <li>These elements will take complete width of the container.<br /><br /></li>
                  <li>These elements will always start from a new line.<br /><br /></li>
                  <li>We can set Height and Width for the block-level elements.<br /><br /></li>
                  <li>Example: <code>&lt;p&gt;</code> tag, heading tags, <code>&lt;div&gt;</code> tag, etc.<br /><br /></li>
                </ul>
          
                <h3>2. Inline Level Element</h3>
                <ul class="note-description">
                  <li>These elements will take space required by the content.<br /><br /></li>
                  <li>These elements will not start from a new line.<br /><br /></li>
                  <li>We cannot set Height and Width for the inline-level elements.<br /><br /></li>
                  <li>Example: <code>&lt;img&gt;</code> tag, <code>&lt;b&gt;</code> tag, <code>&lt;span&gt;</code> tag, etc.<br /><br /></li>
                </ul>
          
                <div class="note-example">
                  <h3>Example:</h3>
                  <pre>
                    <span class="keyword">&lt;div&gt;</span> 
                      <span class="comment">This is a block level element</span>
                    <span class="keyword">&lt;/div&gt;</span>
                  </pre>
                  <pre>
                    <span class="keyword">&lt;span&gt;</span> 
                      <span class="comment">This is an inline level element</span>
                    <span class="keyword">&lt;/span&gt;</span>
                  </pre>
                </div>
              </div>
            `,
          },
          {
            id: 6,
            title: "Attributes",
            content: `
                <div>
                  <h2 class="note-title">Attributes</h2>
                  <ul class="note-description">
                    <li>Attributes are HTML tag properties.<br /><br /></li>
                    <li>They are used to provide additional information about a tag, so that the tag can behave in the desired manner.<br /><br /></li>
                    <li>HTML attributes consist of a name and a value, separated by an equals sign (=). The value is usually enclosed in quotes ("), although some attributes may use single quotes (') or no quotes at all.<br /><br /></li>
                    <li>Attributes should be applied in the opening tag only.<br /><br /></li>
                  </ul>
                  <div class="note-example">
                    <h3>Example:</h3>
                    <pre>
                      <span class="keyword">&lt;p title="i am paragraph tag"&gt;</span> 
                        Welcome to Saket's Blog 
                      <span class="keyword">&lt;/p&gt;</span>
                    </pre>
                    <p>In this example, <code>title</code> is the attribute of the <code>&lt;p&gt;</code> tag.</p>
                  </div>
                </div>
              `,
          },
          {
            id: 7,
            title: "Comments",
            content: `
                <div>
                  <h2 class="note-title">Comments</h2>
                  <ul class="note-description">
                    <li>Comments are used to document the source code.<br /><br /></li>
                    <li>Comments are not displayed on the browser.<br /><br /></li>
                    <li>They are useful for providing explanations for yourself or other developers who may work on the code in the future.<br /><br /></li>
                    <li>Comments are not for the user.<br /><br /></li>
                    <li>HTML comments are written within the <code>&lt;!--</code> and <code>--&gt;</code> tags.<br /><br /></li>
                    <li>Anything between <code>&lt;!-- Comment --&gt;</code> tags will be ignored by the browser and will not be displayed on the web page.<br /><br /></li>
                  </ul>
                  <div class="note-example">
                    <h3>Example:</h3>
                    <pre>
                      <span class="keyword">&lt;!-- This is a comment --&gt;</span>
                    </pre>
                    <p>In this example, the comment will not be visible on the web page, and it will only serve as documentation in the source code.</p>
                  </div>
                </div>
              `,
          },
          {
            id: 8,
            title: "Text Formatting Tags",
            content: `
                <div>
                  <h2 class="note-title">Text Formatting Tags</h2>
                  <h3>1. Italics tag (<i>)</h3>
                  <ul>
                    <li>It is an inline level element.</li>
                    <li>It is a container tag.</li>
                    <li>It is used to display content in italics style.</li>
                    <li>The text between <code>&lt;i&gt; ..text.. &lt;/i&gt;</code> tag will be in italics style.</li>
                    <li>Example: <i>This is italics text.</i></li>
                  </ul><br> <br>
                 
      <h3>2. Bold tag </h3>
      <ul>
        <li>It is an inline level element.</li>
        <li>It is a container tag.</li>
        <li>It is used to display content in bold style.</li>
        <li>The text between <code>&lt;b&gt; ..text.. &lt;/b&gt;</code> tag will be in bold style.</li>
        <li>Example: <b>This is bold text.</b></li>
      </ul>
       <h3>3. Underline tag ()</h3>
      <ul>
        <li>It is an inline level element.</li>
        <li>It is a container tag.</li>
        <li>It is used to underline the text.</li>
        <li>The text between <code>&lt;u&gt; ..text.. &lt;/u&gt;</code> tag will be underlined.</li>
      </ul><br> <br>
      <h3>7. Superscript tag ()</h3>
        <ul>
          <li>It is an inline level element.</li>
          <li>It is a container tag.</li>
          <li>It is used to display text as superscript.</li>
          <li>The text between <code>&lt;sup&gt; ..text.. &lt;/sup&gt;</code> tag displays text as superscript.</li>
          <li>Example: 10<sup>8</sup> (Here, 8 is written at the top of 10 and 8 is superscript here.)</li>
        </ul><br> <br>
        <h3>8. Subscript tag ()</h3>
        <ul>
          <li>It is an inline level element.</li>
          <li>It is a container tag.</li>
          <li>It is used to display text as subscript.</li>
          <li>The text between <code>&lt;sub&gt; ..text.. &lt;/sub&gt;</code> tag displays text as subscript.</li>
          <li>Example: CO<sub>2</sub> (Here, 2 is written at the bottom of O and 2 is subscript here.)</li>
        </ul>
                </div>
              `,
          },
          {
            id: 9,
            title: "Heading Tags in HTML",
            content: `
              <div>
                <h2 class="note-title">Heading Tags in HTML</h2>
                <p class="note-description">
                  Heading tags are used to create headings in HTML. There are six different heading tags that can be used to structure content in various levels of importance.
                </p>
                <ul class="note-description">
                  <li>In HTML, we have 6 types of heading tags:</li>
                  <li><strong>&lt;h1&gt;</strong> for the most important heading (biggest).</li>
                  <li><strong>&lt;h2&gt;</strong> for the second most important heading.</li>
                  <li><strong>&lt;h3&gt;</strong> for the third most important heading.</li>
                  <li><strong>&lt;h4&gt;</strong> for less important headings.</li>
                  <li><strong>&lt;h5&gt;</strong> for even less important headings.</li>
                  <li><strong>&lt;h6&gt;</strong> for the least important (smallest) heading.</li>
                  <li>The <strong>&lt;h1&gt;</strong> tag should be used only once per page for SEO purposes.</li>
                </ul>
                <h3>Example:</h3>
                <pre>
                  <span class="keyword">&lt;h1&gt;</span> Heading-1 <span class="keyword">&lt;/h1&gt;</span> <!-- Biggest heading -->
                  <span class="keyword">&lt;h2&gt;</span> Heading-2 <span class="keyword">&lt;/h2&gt;</span>
                  <span class="keyword">&lt;h3&gt;</span> Heading-3 <span class="keyword">&lt;/h3&gt;</span>
                  <span class="keyword">&lt;h4&gt;</span> Heading-4 <span class="keyword">&lt;/h4&gt;</span>
                  <span class="keyword">&lt;h5&gt;</span> Heading-5 <span class="keyword">&lt;/h5&gt;</span>
                  <span class="keyword">&lt;h6&gt;</span> Heading-6 <span class="keyword">&lt;/h6&gt;</span> <!-- Smallest heading -->
                </pre>
              </div>
            `
          },          
          {
            id: 10,
            title: "Image Tag and Attributes",
            content: `
              <div>
                <h2 class="note-title">Image Tag and Attributes</h2>
                <p class="note-description">
                  The <strong>&lt;img&gt;</strong> tag in HTML is used to embed images on a webpage. It is a self-closing tag and requires a source attribute to specify the location of the image.
                </p>
                <ul class="note-description">
                  <li>The <strong>&lt;img&gt;</strong> tag does not have a closing tag.</li>
                  <li>It uses the <strong>src</strong> attribute to define the image source (URL or file path).</li>
                  <li>The <strong>alt</strong> attribute provides alternative text for the image if it cannot be displayed.</li>
                  <li>The <strong>width</strong> and <strong>height</strong> attributes control the dimensions of the image.</li>
                  <li>Additional attributes like <strong>title</strong>, <strong>loading</strong>, and <strong>style</strong> can be used to enhance the image tag.</li>
                </ul>
                <h3>Example:</h3>
                <pre>
                  <span class="keyword">&lt;img</span> 
                    <span class="attribute">src=</span><span class="string">"image.jpg"</span>
                    <span class="attribute">alt=</span><span class="string">"A beautiful landscape"</span>
                    <span class="attribute">width=</span><span class="number">500</span>
                    <span class="attribute">height=</span><span class="number">300</span>
                    <span class="attribute">title=</span><span class="string">"Landscape Image"</span>
                  <span class="keyword">/&gt;</span>
                </pre>
              </div>
            `
          },
          {
            id: 11,
            title: "Anchor Link and Its Uses",
            content: `
              <div>
                <h2 class="note-title">Anchor Link and Its Uses</h2>
                <p class="note-description">
                  The <strong>&lt;a&gt;</strong> (anchor) tag is used to create hyperlinks in HTML. It allows you to link to another webpage, resource, or an anchor within the same page.
                </p>
                <ul class="note-description">
                  <li>The <strong>&lt;a&gt;</strong> tag requires the <strong>href</strong> attribute, which defines the destination of the link.</li>
                  <li>The <strong>target</strong> attribute specifies where to open the linked document (e.g., in a new tab or the same window).</li>
                  <li>The <strong>title</strong> attribute provides additional information about the link when hovered over.</li>
                  <li>Anchor links can also be used to link to specific parts of a webpage by using <strong>id</strong> attributes.</li>
                </ul>
                
                <h3>Example 1: Regular Webpage Link (Opens in a New Tab)</h3>
                <pre>
                  <span class="keyword">&lt;a</span> 
                    <span class="attribute">href=</span><span class="string">"https://www.example.com"</span>
                    <span class="attribute">target=</span><span class="string">"_blank"</span>
                    <span class="attribute">title=</span><span class="string">"Go to Example.com"</span>
                  <span class="keyword">&gt;Visit Example.com&lt;/a&gt;</span>
                </pre>
                <br><br>
                
                <h3>Example 2: Anchor Link to a Section on the Same Page</h3>
                <pre>
                  <span class="keyword">&lt;a</span> 
                    <span class="attribute">href=</span><span class="string">"#section1"</span>
                  <span class="keyword">&gt;Go to Section 1&lt;/a&gt;
                </pre>
                <br><br>
                
                <h3>Example 3: Anchor Link to an Email Address</h3>
                <pre>
                  <span class="keyword">&lt;a</span> 
                    <span class="attribute">href=</span><span class="string">"mailto:example@example.com"</span>
                  <span class="keyword">&gt;Send Email&lt;/a&gt;
                </pre>
                <br><br>
                
                <h3>Example 4: Anchor Link to a WhatsApp Number</h3>
                <pre>
                  <span class="keyword">&lt;a</span> 
                    <span class="attribute">href=</span><span class="string">"https://wa.me/1234567890"</span>
                    <span class="attribute">title=</span><span class="string">"Chat on WhatsApp"</span>
                  <span class="keyword">&gt;Chat on WhatsApp&lt;/a&gt;
                </pre>
                <br><br>
                
                <h3>Example 5: Anchor Link to a Phone Number</h3>
                <pre>
                  <span class="keyword">&lt;a</span> 
                    <span class="attribute">href=</span><span class="string">"tel:+1234567890"</span>
                    <span class="attribute">title=</span><span class="string">"Call Now"</span>
                  <span class="keyword">&gt;Call Now&lt;/a&gt;
                </pre>
                <br><br>
                
                <h3>Example 6: Anchor Link to an External File (PDF)</h3>
                <pre>
                  <span class="keyword">&lt;a</span> 
                    <span class="attribute">href=</span><span class="string">"example.pdf"</span>
                    <span class="attribute">download=</span><span class="string">"example.pdf"</span>
                  <span class="keyword">&gt;Download PDF&lt;/a&gt;
                </pre>
                <br><br>
                
                <h3>Example 7: Anchor Link with Fragment Identifier (Jump to a Specific Section)</h3>
                <pre>
                  <span class="keyword">&lt;a</span> 
                    <span class="attribute">href=</span><span class="string">"#section2"</span>
                  <span class="keyword">&gt;Jump to Section 2&lt;/a&gt;
                </pre>
                <br><br>
                
                <h3>Example 8: Anchor Link with Tooltip (Hover Text)</h3>
                <pre>
                  <span class="keyword">&lt;a</span> 
                    <span class="attribute">href=</span><span class="string">"https://www.example.com"</span>
                    <span class="attribute">title=</span><span class="string">"Click to Visit Example"</span>
                  <span class="keyword">&gt;Visit Example&lt;/a&gt;
                </pre>
                <br><br>
              </div>
            `
          },          
                  
          {
            id: 12,
            title: "Types of Lists in HTML",
            content: `
              <div>
                <h2 class="note-title">Types of Lists in HTML</h2>
                <p class="note-description">
                  Lists in HTML are used to display items in an organized manner. There are three main types of lists:
                </p>
                <ul class="note-description">
                  <li><strong>Unordered List</strong>: A list with bullet points.</li>
                  <li><strong>Ordered List</strong>: A list with numbered items.</li>
                  <li><strong>Description List</strong>: A list that defines terms and their descriptions.</li>
                </ul>
                
                <h3>1. Unordered List (<strong>&lt;ul&gt;</strong>)</h3>
                <pre>
                  <span class="keyword">&lt;ul&gt;</span>
                    <span class="keyword">&lt;li&gt;</span>Item 1<span class="keyword">&lt;/li&gt;</span>
                    <span class="keyword">&lt;li&gt;</span>Item 2<span class="keyword">&lt;/li&gt;</span>
                    <span class="keyword">&lt;li&gt;</span>Item 3<span class="keyword">&lt;/li&gt;</span>
                  <span class="keyword">&lt;/ul&gt;</span>
                </pre>
                <br><br>
                
                <h3>2. Ordered List (<strong>&lt;ol&gt;</strong>)</h3>
                <pre>
                  <span class="keyword">&lt;ol&gt;</span>
                    <span class="keyword">&lt;li&gt;</span>First Item<span class="keyword">&lt;/li&gt;</span>
                    <span class="keyword">&lt;li&gt;</span>Second Item<span class="keyword">&lt;/li&gt;</span>
                    <span class="keyword">&lt;li&gt;</span>Third Item<span class="keyword">&lt;/li&gt;</span>
                  <span class="keyword">&lt;/ol&gt;</span>
                </pre>
                <br><br>
                
                <h3>3. Description List (<strong>&lt;dl&gt;</strong>)</h3>
                <pre>
                  <span class="keyword">&lt;dl&gt;</span>
                    <span class="keyword">&lt;dt&gt;</span>Term 1<span class="keyword">&lt;/dt&gt;</span>
                    <span class="keyword">&lt;dd&gt;</span>Definition of Term 1<span class="keyword">&lt;/dd&gt;</span>
                    
                    <span class="keyword">&lt;dt&gt;</span>Term 2<span class="keyword">&lt;/dt&gt;</span>
                    <span class="keyword">&lt;dd&gt;</span>Definition of Term 2<span class="keyword">&lt;/dd&gt;</span>
                    
                    <span class="keyword">&lt;dt&gt;</span>Term 3<span class="keyword">&lt;/dt&gt;</span>
                    <span class="keyword">&lt;dd&gt;</span>Definition of Term 3<span class="keyword">&lt;/dd&gt;</span>
                  <span class="keyword">&lt;/dl&gt;</span>
                </pre>
                <br><br>
                
                <h3>4. Nested List</h3>
                <p class="note-description">
                  A nested list is a list inside another list. It can be used with both <strong>&lt;ul&gt;</strong> and <strong>&lt;ol&gt;</strong> lists.
                </p>
                <pre>
                  <span class="keyword">&lt;ul&gt;</span>
                    <span class="keyword">&lt;li&gt;</span>Item 1
                      <span class="keyword">&lt;ul&gt;</span>
                        <span class="keyword">&lt;li&gt;</span>Sub-item 1<span class="keyword">&lt;/li&gt;</span>
                        <span class="keyword">&lt;li&gt;</span>Sub-item 2<span class="keyword">&lt;/li&gt;</span>
                      <span class="keyword">&lt;/ul&gt;</span>
                    <span class="keyword">&lt;/li&gt;</span>
                    <span class="keyword">&lt;li&gt;</span>Item 2<span class="keyword">&lt;/li&gt;</span>
                  <span class="keyword">&lt;/ul&gt;</span>
                </pre>
                <br><br>
              </div>
            `
          },
          {
            id: 12,
            title: "Types of Lists in HTML",
            content: `
              <div>
                <h2 class="note-title">Types of Lists in HTML</h2>
                <p class="note-description">
                  Lists in HTML are used to display items in an organized manner. There are three main types of lists:
                </p>
                <ul class="note-description">
                  <li><strong>Unordered List</strong>: A list with bullet points.</li>
                  <li><strong>Ordered List</strong>: A list with numbered items.</li>
                  <li><strong>Description List</strong>: A list that defines terms and their descriptions.</li>
                </ul>
                
                <h3>1. Unordered List (<strong>&lt;ul&gt;</strong>)</h3>
                <pre>
                  <span class="keyword">&lt;ul&gt;</span>
                    <span class="keyword">&lt;li&gt;</span>Item 1<span class="keyword">&lt;/li&gt;</span>
                    <span class="keyword">&lt;li&gt;</span>Item 2<span class="keyword">&lt;/li&gt;</span>
                    <span class="keyword">&lt;li&gt;</span>Item 3<span class="keyword">&lt;/li&gt;</span>
                  <span class="keyword">&lt;/ul&gt;</span>
                </pre>
                <br><br>
                
                <h3>2. Ordered List (<strong>&lt;ol&gt;</strong>)</h3>
                <pre>
                  <span class="keyword">&lt;ol&gt;</span>
                    <span class="keyword">&lt;li&gt;</span>First Item<span class="keyword">&lt;/li&gt;</span>
                    <span class="keyword">&lt;li&gt;</span>Second Item<span class="keyword">&lt;/li&gt;</span>
                    <span class="keyword">&lt;li&gt;</span>Third Item<span class="keyword">&lt;/li&gt;</span>
                  <span class="keyword">&lt;/ol&gt;</span>
                </pre>
                <br><br>
                
                <h3>3. Description List (<strong>&lt;dl&gt;</strong>)</h3>
                <pre>
                  <span class="keyword">&lt;dl&gt;</span>
                    <span class="keyword">&lt;dt&gt;</span>Term 1<span class="keyword">&lt;/dt&gt;</span>
                    <span class="keyword">&lt;dd&gt;</span>Definition of Term 1<span class="keyword">&lt;/dd&gt;</span>
                    
                    <span class="keyword">&lt;dt&gt;</span>Term 2<span class="keyword">&lt;/dt&gt;</span>
                    <span class="keyword">&lt;dd&gt;</span>Definition of Term 2<span class="keyword">&lt;/dd&gt;</span>
                    
                    <span class="keyword">&lt;dt&gt;</span>Term 3<span class="keyword">&lt;/dt&gt;</span>
                    <span class="keyword">&lt;dd&gt;</span>Definition of Term 3<span class="keyword">&lt;/dd&gt;</span>
                  <span class="keyword">&lt;/dl&gt;</span>
                </pre>
                <br><br>
                
                <h3>4. Nested List</h3>
                <p class="note-description">
                  A nested list is a list inside another list. It can be used with both <strong>&lt;ul&gt;</strong> and <strong>&lt;ol&gt;</strong> lists.
                </p>
                <pre>
                  <span class="keyword">&lt;ul&gt;</span>
                    <span class="keyword">&lt;li&gt;</span>Item 1
                      <span class="keyword">&lt;ul&gt;</span>
                        <span class="keyword">&lt;li&gt;</span>Sub-item 1<span class="keyword">&lt;/li&gt;</span>
                        <span class="keyword">&lt;li&gt;</span>Sub-item 2<span class="keyword">&lt;/li&gt;</span>
                      <span class="keyword">&lt;/ul&gt;</span>
                    <span class="keyword">&lt;/li&gt;</span>
                    <span class="keyword">&lt;li&gt;</span>Item 2<span class="keyword">&lt;/li&gt;</span>
                  <span class="keyword">&lt;/ul&gt;</span>
                </pre>
                <br><br>
              </div>
            `
          },
          {
            id: 14,
            title: "Table with All Attributes in HTML",
            content: `
              <div>
                <h2 class="note-title">Table with All Attributes in HTML</h2>
                <p class="note-description">
                  Tables in HTML allow you to display data in rows and columns. Various attributes can be applied to enhance their appearance and functionality.
                </p>
          
                <h3>1. <strong>Table Attributes</strong></h3>
                <p class="note-description">
                  The <strong>&lt;table&gt;</strong> element is the container for the table, and it can have several attributes.
                </p>
                <pre>
                  <span class="keyword">&lt;table border="1" cellpadding="10" cellspacing="5" width="80%" align="center"&gt;</span>
                    <span class="keyword">&lt;tr&gt;</span>
                      <span class="keyword">&lt;th&gt;</span>Header 1<span class="keyword">&lt;/th&gt;</span>
                      <span class="keyword">&lt;th&gt;</span>Header 2<span class="keyword">&lt;/th&gt;</span>
                    <span class="keyword">&lt;/tr&gt;</span>
                    <span class="keyword">&lt;tr&gt;</span>
                      <span class="keyword">&lt;td&gt;</span>Row 1, Column 1<span class="keyword">&lt;/td&gt;</span>
                      <span class="keyword">&lt;td&gt;</span>Row 1, Column 2<span class="keyword">&lt;/td&gt;</span>
                    <span class="keyword">&lt;/tr&gt;</span>
                  <span class="keyword">&lt;/table&gt;</span>
                </pre>
                <br><br>
          
                <h3>2. <strong>Border</strong> Attribute (for <strong>&lt;table&gt;</strong>)</h3>
                <p class="note-description">
                  The <strong>border</strong> attribute is used to set the width of the border around the table.
                </p>
                <pre>
                  <span class="keyword">&lt;table border="1"&gt;</span>  <!-- Table with border -->
                    <span class="keyword">&lt;tr&gt;</span>
                      <span class="keyword">&lt;th&gt;</span>Header 1<span class="keyword">&lt;/th&gt;</span>
                      <span class="keyword">&lt;th&gt;</span>Header 2<span class="keyword">&lt;/th&gt;</span>
                    <span class="keyword">&lt;/tr&gt;</span>
                  <span class="keyword">&lt;/table&gt;</span>
                </pre>
                <br><br>
          
                <h3>3. <strong>Cellpadding</strong> Attribute (for <strong>&lt;table&gt;</strong>)</h3>
                <p class="note-description">
                  The <strong>cellpadding</strong> attribute sets the space between the content of a cell and its borders.
                </p>
                <pre>
                  <span class="keyword">&lt;table cellpadding="10"&gt;</span>  <!-- Space inside cells -->
                    <span class="keyword">&lt;tr&gt;</span>
                      <span class="keyword">&lt;td&gt;</span>Row 1, Column 1<span class="keyword">&lt;/td&gt;</span>
                      <span class="keyword">&lt;td&gt;</span>Row 1, Column 2<span class="keyword">&lt;/td&gt;</span>
                    <span class="keyword">&lt;/tr&gt;</span>
                  <span class="keyword">&lt;/table&gt;</span>
                </pre>
                <br><br>
          
                <h3>4. <strong>Cellspacing</strong> Attribute (for <strong>&lt;table&gt;</strong>)</h3>
                <p class="note-description">
                  The <strong>cellspacing</strong> attribute sets the space between cells in the table.
                </p>
                <pre>
                  <span class="keyword">&lt;table cellspacing="5"&gt;</span>  <!-- Space between cells -->
                    <span class="keyword">&lt;tr&gt;</span>
                      <span class="keyword">&lt;td&gt;</span>Row 1, Column 1<span class="keyword">&lt;/td&gt;</span>
                      <span class="keyword">&lt;td&gt;</span>Row 1, Column 2<span class="keyword">&lt;/td&gt;</span>
                    <span class="keyword">&lt;/tr&gt;</span>
                  <span class="keyword">&lt;/table&gt;</span>
                </pre>
                <br><br>
          
                <h3>5. <strong>Width</strong> Attribute (for <strong>&lt;table&gt;</strong>)</h3>
                <p class="note-description">
                  The <strong>width</strong> attribute specifies the width of the table.
                </p>
                <pre>
                  <span class="keyword">&lt;table width="50%"&gt;</span>  <!-- Table width set to 50% -->
                    <span class="keyword">&lt;tr&gt;</span>
                      <span class="keyword">&lt;td&gt;</span>Row 1, Column 1<span class="keyword">&lt;/td&gt;</span>
                      <span class="keyword">&lt;td&gt;</span>Row 1, Column 2<span class="keyword">&lt;/td&gt;</span>
                    <span class="keyword">&lt;/tr&gt;</span>
                  <span class="keyword">&lt;/table&gt;</span>
                </pre>
                <br><br>
          
                <h3>6. <strong>Align</strong> Attribute (for <strong>&lt;table&gt;</strong>)</h3>
                <p class="note-description">
                  The <strong>align</strong> attribute specifies the horizontal alignment of the table.
                </p>
                <pre>
                  <span class="keyword">&lt;table align="center"&gt;</span>  <!-- Table aligned to the center -->
                    <span class="keyword">&lt;tr&gt;</span>
                      <span class="keyword">&lt;td&gt;</span>Row 1, Column 1<span class="keyword">&lt;/td&gt;</span>
                      <span class="keyword">&lt;td&gt;</span>Row 1, Column 2<span class="keyword">&lt;/td&gt;</span>
                    <span class="keyword">&lt;/tr&gt;</span>
                  <span class="keyword">&lt;/table&gt;</span>
                </pre>
                <br><br>
          
                <h3>7. <strong>Colspan</strong> Attribute (for <strong>&lt;td&gt;</strong>)</h3>
                <p class="note-description">
                  The <strong>colspan</strong> attribute specifies the number of columns a cell should span.
                </p>
                <pre>
                  <span class="keyword">&lt;table&gt;</span>
                    <span class="keyword">&lt;tr&gt;</span>
                      <span class="keyword">&lt;td colspan="2"&gt;</span>Spanned Column 1 and Column 2<span class="keyword">&lt;/td&gt;</span>
                    <span class="keyword">&lt;/tr&gt;</span>
                    <span class="keyword">&lt;tr&gt;</span>
                      <span class="keyword">&lt;td&gt;</span>Row 2, Column 1<span class="keyword">&lt;/td&gt;</span>
                      <span class="keyword">&lt;td&gt;</span>Row 2, Column 2<span class="keyword">&lt;/td&gt;</span>
                    <span class="keyword">&lt;/tr&gt;</span>
                  <span class="keyword">&lt;/table&gt;</span>
                </pre>
                <br><br>
          
                <h3>8. <strong>Rowspan</strong> Attribute (for <strong>&lt;td&gt;</strong>)</h3>
                <p class="note-description">
                  The <strong>rowspan</strong> attribute specifies the number of rows a cell should span.
                </p>
                <pre>
                  <span class="keyword">&lt;table&gt;</span>
                    <span class="keyword">&lt;tr&gt;</span>
                      <span class="keyword">&lt;td rowspan="2"&gt;</span>Spanned Row 1 and Row 2<span class="keyword">&lt;/td&gt;</span>
                      <span class="keyword">&lt;td&gt;</span>Row 1, Column 2<span class="keyword">&lt;/td&gt;</span>
                    <span class="keyword">&lt;/tr&gt;</span>
                    <span class="keyword">&lt;tr&gt;</span>
                      <span class="keyword">&lt;td&gt;</span>Row 2, Column 2<span class="keyword">&lt;/td&gt;</span>
                    <span class="keyword">&lt;/tr&gt;</span>
                  <span class="keyword">&lt;/table&gt;</span>
                </pre>
                <br><br>
              </div>
            `
          },
          {
            id: 15,
            title: "Form and All Form Tags in HTML",
            content: `
              <div>
                <h2 class="note-title">Form and All Form Tags in HTML</h2>
                <p class="note-description">
                  The <strong>&lt;form&gt;</strong> element is used to create an HTML form for user input. Forms can contain various input fields, such as text fields, checkboxes, radio buttons, and more.
                </p>
          
                <h3>1. <strong>&lt;form&gt;</strong> Element</h3>
                <p class="note-description">
                  The <strong>&lt;form&gt;</strong> tag is the container for various input elements like text, radio, checkbox, submit, etc. It is used to collect user data.
                </p>
                <pre>
                  <span class="keyword">&lt;form action="/submit" method="post"&gt;</span>
                    <span class="keyword">&lt;label for="name"&gt;</span>Name:
                    <span class="keyword">&lt;input type="text" id="name" name="name"&gt;</span><br><br>
          
                    <span class="keyword">&lt;input type="submit" value="Submit"&gt;</span>
                  <span class="keyword">&lt;/form&gt;</span>
                </pre>
                <br><br>
          
                <h3>2. <strong>&lt;input&gt;</strong> Element</h3>
                <p class="note-description">
                  The <strong>&lt;input&gt;</strong> tag defines an input control, and its <strong>type</strong> attribute determines the kind of input it will accept.
                </p>
                <pre>
                  <span class="keyword">&lt;input type="text" id="username" name="username"&gt;</span>  <!-- Text input field -->
                  <span class="keyword">&lt;input type="password" id="password" name="password"&gt;</span>  <!-- Password input field -->
                  <span class="keyword">&lt;input type="checkbox" id="remember" name="remember"&gt;</span>  <!-- Checkbox input -->
                  <span class="keyword">&lt;input type="radio" id="male" name="gender"&gt;</span>  <!-- Radio button -->
                </pre>
                <br><br>
          
                <h3>3. <strong>&lt;label&gt;</strong> Element</h3>
                <p class="note-description">
                  The <strong>&lt;label&gt;</strong> element is used to define labels for <strong>&lt;input&gt;</strong> elements. It is useful for accessibility.
                </p>
                <pre>
                  <span class="keyword">&lt;label for="email"&gt;</span>Email:
                  <span class="keyword">&lt;input type="email" id="email" name="email"&gt;</span><br><br>
          
                  <span class="keyword">&lt;label for="subscribe"&gt;</span>Subscribe to Newsletter:
                  <span class="keyword">&lt;input type="checkbox" id="subscribe" name="subscribe"&gt;</span><br><br>
                </pre>
                <br><br>
          
                <h3>4. <strong>&lt;textarea&gt;</strong> Element</h3>
                <p class="note-description">
                  The <strong>&lt;textarea&gt;</strong> element defines a multi-line text input field for users to enter larger amounts of text.
                </p>
                <pre>
                  <span class="keyword">&lt;textarea rows="4" cols="50" id="comments" name="comments"&gt;</span>
                  Enter your comments here...
                  <span class="keyword">&lt;/textarea&gt;</span>
                </pre>
                <br><br>
          
                <h3>5. <strong>&lt;select&gt;</strong> Element</h3>
                <p class="note-description">
                  The <strong>&lt;select&gt;</strong> element is used to create a drop-down list. It contains nested <strong>&lt;option&gt;</strong> elements.
                </p>
                <pre>
                  <span class="keyword">&lt;select id="country" name="country"&gt;</span>
                    <span class="keyword">&lt;option value="us"&gt;</span>United States<span class="keyword">&lt;/option&gt;</span>
                    <span class="keyword">&lt;option value="uk"&gt;</span>United Kingdom<span class="keyword">&lt;/option&gt;</span>
                    <span class="keyword">&lt;option value="ca"&gt;</span>Canada<span class="keyword">&lt;/option&gt;</span>
                  <span class="keyword">&lt;/select&gt;</span>
                </pre>
                <br><br>
          
                <h3>6. <strong>&lt;button&gt;</strong> Element</h3>
                <p class="note-description">
                  The <strong>&lt;button&gt;</strong> element creates a clickable button. It can be used to submit forms or trigger JavaScript actions.
                </p>
                <pre>
                  <span class="keyword">&lt;button type="submit"&gt;</span>Submit<span class="keyword">&lt;/button&gt;</span>
                  <span class="keyword">&lt;button type="reset"&gt;</span>Reset Form<span class="keyword">&lt;/button&gt;</span>
                </pre>
                <br><br>
          
                <h3>7. <strong>&lt;fieldset&gt;</strong> Element</h3>
                <p class="note-description">
                  The <strong>&lt;fieldset&gt;</strong> element is used to group related elements in a form. It is typically used with the <strong>&lt;legend&gt;</strong> element.
                </p>
                <pre>
                  <span class="keyword">&lt;fieldset&gt;</span>
                    <span class="keyword">&lt;legend&gt;</span>Personal Information<span class="keyword">&lt;/legend&gt;</span>
                    <span class="keyword">&lt;label for="name"&gt;</span>Name:
                    <span class="keyword">&lt;input type="text" id="name" name="name"&gt;</span><br><br>
                  <span class="keyword">&lt;/fieldset&gt;</span>
                </pre>
                <br><br>
          
                <h3>8. <strong>&lt;legend&gt;</strong> Element</h3>
                <p class="note-description">
                  The <strong>&lt;legend&gt;</strong> element provides a caption for the <strong>&lt;fieldset&gt;</strong> element.
                </p>
                <pre>
                  <span class="keyword">&lt;fieldset&gt;</span>
                    <span class="keyword">&lt;legend&gt;</span>Account Information<span class="keyword">&lt;/legend&gt;</span>
                    <span class="keyword">&lt;label for="username"&gt;</span>Username:
                    <span class="keyword">&lt;input type="text" id="username" name="username"&gt;</span><br><br>
                  <span class="keyword">&lt;/fieldset&gt;</span>
                </pre>
                <br><br>
          
                <h3>9. <strong>&lt;input type="submit"&gt;</strong> Button</h3>
                <p class="note-description">
                  The <strong>&lt;input type="submit"&gt;</strong> element creates a button that submits the form data.
                </p>
                <pre>
                  <span class="keyword">&lt;form action="/submit" method="post"&gt;</span>
                    <span class="keyword">&lt;input type="submit" value="Submit Form"&gt;</span>
                  <span class="keyword">&lt;/form&gt;</span>
                </pre>
                <br><br>
          
                <h3>10. <strong>&lt;input type="reset"&gt;</strong> Button</h3>
                <p class="note-description">
                  The <strong>&lt;input type="reset"&gt;</strong> element resets all form fields to their default values.
                </p>
                <pre>
                  <span class="keyword">&lt;form&gt;</span>
                    <span class="keyword">&lt;input type="reset" value="Reset Form"&gt;</span>
                  <span class="keyword">&lt;/form&gt;</span>
                </pre>
                <br><br>
              </div>
            `
          },
          {
            id: 16,
            title: "Audio and Video Tags in HTML with Attributes",
            content: `
              <div>
                <h2 class="note-title">Audio and Video Tags in HTML with Attributes</h2>
                <p class="note-description">
                  The <strong>&lt;audio&gt;</strong> and <strong>&lt;video&gt;</strong> elements allow you to embed media files like sound and video on your web page. Both elements support several attributes for control over playback.
                </p>
                
                <h3>1. <strong>&lt;audio&gt;</strong> Element</h3>
                <p class="note-description">
                  The <strong>&lt;audio&gt;</strong> element is used to embed audio content in a web page. It supports various audio formats like MP3, Ogg, and WAV.
                </p>
                <pre>
                  <span class="keyword">&lt;audio controls&gt;</span>
                    <span class="keyword">&lt;source src="audio.mp3" type="audio/mp3"&gt;</span>
                    <span class="keyword">&lt;source src="audio.ogg" type="audio/ogg"&gt;</span>
                    Your browser does not support the audio element.
                  <span class="keyword">&lt;/audio&gt;</span>
                </pre>
                <br><br>
          
                <h4>Attributes of <strong>&lt;audio&gt;</strong> Element</h4>
                <ul class="note-description">
                  <li><strong>controls</strong>: Adds audio controls like play, pause, and volume.</li>
                  <li><strong>autoplay</strong>: Automatically starts playing the audio when the page loads.</li>
                  <li><strong>loop</strong>: Loops the audio after it finishes playing.</li>
                  <li><strong>muted</strong>: Mutes the audio.</li>
                  <li><strong>preload</strong>: Specifies whether the audio file should be preloaded. Options: "auto", "metadata", "none".</li>
                </ul>
                <pre>
                  <span class="keyword">&lt;audio controls autoplay loop muted preload="auto"&gt;</span>
                    <span class="keyword">&lt;source src="song.mp3" type="audio/mp3"&gt;</span>
                  <span class="keyword">&lt;/audio&gt;</span>
                </pre>
                <br><br>
          
                <h3>2. <strong>&lt;video&gt;</strong> Element</h3>
                <p class="note-description">
                  The <strong>&lt;video&gt;</strong> element is used to embed video content in a web page. It supports formats like MP4, WebM, and Ogg.
                </p>
                <pre>
                  <span class="keyword">&lt;video controls&gt;</span>
                    <span class="keyword">&lt;source src="movie.mp4" type="video/mp4"&gt;</span>
                    <span class="keyword">&lt;source src="movie.ogg" type="video/ogg"&gt;</span>
                    Your browser does not support the video element.
                  <span class="keyword">&lt;/video&gt;</span>
                </pre>
                <br><br>
          
                <h4>Attributes of <strong>&lt;video&gt;</strong> Element</h4>
                <ul class="note-description">
                  <li><strong>controls</strong>: Adds video controls like play, pause, and volume.</li>
                  <li><strong>autoplay</strong>: Automatically starts playing the video when the page loads.</li>
                  <li><strong>loop</strong>: Loops the video after it finishes playing.</li>
                  <li><strong>muted</strong>: Mutes the video.</li>
                  <li><strong>poster</strong>: Specifies an image to display as a placeholder before the video is played.</li>
                  <li><strong>preload</strong>: Specifies whether the video file should be preloaded. Options: "auto", "metadata", "none".</li>
                </ul>
                <pre>
                  <span class="keyword">&lt;video controls autoplay loop muted preload="auto" poster="thumbnail.jpg"&gt;</span>
                    <span class="keyword">&lt;source src="video.mp4" type="video/mp4"&gt;</span>
                  <span class="keyword">&lt;/video&gt;</span>
                </pre>
                <br><br>
          
                <h3>3. Differences between <strong>&lt;audio&gt;</strong> and <strong>&lt;video&gt;</strong></h3>
                <p class="note-description">
                  While both the <strong>&lt;audio&gt;</strong> and <strong>&lt;video&gt;</strong> elements are used for media, the <strong>&lt;audio&gt;</strong> element is designed to handle only sound, and the <strong>&lt;video&gt;</strong> element is designed for displaying video along with sound.
                </p>
                <br><br>
              </div>
            `
          },
          {
            id: 17,
            title: "Semantic Tags in HTML",
            content: `
              <div>
                <h2 class="note-title">Semantic Tags in HTML</h2>
                <p class="note-description">
                  Semantic HTML tags are HTML tags that clearly describe their meaning in a human- and machine-readable way. These tags help improve accessibility and SEO.
                </p>
          
                <h3>1. <strong>&lt;header&gt;</strong> Element</h3>
                <p class="note-description">
                  The <strong>&lt;header&gt;</strong> element represents introductory content or navigation links.
                </p>
                <pre>
                  <span class="keyword">&lt;header&gt;</span>
                    <span class="tag">&lt;h1&gt;</span>Welcome to My Website<span class="tag">&lt;/h1&gt;</span>
                    <span class="tag">&lt;nav&gt;</span>
                      <span class="tag">&lt;a href="#home"&gt;</span>Home<span class="tag">&lt;/a&gt;</span>
                      <span class="tag">&lt;a href="#about"&gt;</span>About Us<span class="tag">&lt;/a&gt;</span>
                    <span class="tag">&lt;/nav&gt;</span>
                  <span class="keyword">&lt;/header&gt;</span>
                </pre>
                <br><br>
          
                <h3>2. <strong>&lt;article&gt;</strong> Element</h3>
                <p class="note-description">
                  The <strong>&lt;article&gt;</strong> element specifies independent content that can stand alone.
                </p>
                <pre>
                  <span class="keyword">&lt;article&gt;</span>
                    <span class="tag">&lt;h2&gt;</span>How to Learn Web Development<span class="tag">&lt;/h2&gt;</span>
                    <p>This article explains how to get started with web development...</p>
                  <span class="keyword">&lt;/article&gt;</span>
                </pre>
                <br><br>
          
                <h3>3. <strong>&lt;section&gt;</strong> Element</h3>
                <p class="note-description">
                  The <strong>&lt;section&gt;</strong> element represents a section of content that forms an independent part of a document.
                </p>
                <pre>
                  <span class="keyword">&lt;section&gt;</span>
                    <span class="tag">&lt;h2&gt;</span>Introduction to HTML<span class="tag">&lt;/h2&gt;</span>
                    <p>This section covers the basics of HTML...</p>
                  <span class="keyword">&lt;/section&gt;</span>
                </pre>
                <br><br>
          
                <h3>4. <strong>&lt;footer&gt;</strong> Element</h3>
                <p class="note-description">
                  The <strong>&lt;footer&gt;</strong> element defines the footer for a document or section, typically containing information about the author, copyright, etc.
                </p>
                <pre>
                  <span class="keyword">&lt;footer&gt;</span>
                    <p>Copyright &copy; 2024 My Website</p>
                  <span class="keyword">&lt;/footer&gt;</span>
                </pre>
                <br><br>
          
                <h3>5. <strong>&lt;nav&gt;</strong> Element</h3>
                <p class="note-description">
                  The <strong>&lt;nav&gt;</strong> element defines a set of navigation links.
                </p>
                <pre>
                  <span class="keyword">&lt;nav&gt;</span>
                    <span class="tag">&lt;a href="#home"&gt;</span>Home<span class="tag">&lt;/a&gt;</span>
                    <span class="tag">&lt;a href="#services"&gt;</span>Services<span class="tag">&lt;/a&gt;</span>
                    <span class="tag">&lt;a href="#contact"&gt;</span>Contact<span class="tag">&lt;/a&gt;</span>
                  <span class="keyword">&lt;/nav&gt;</span>
                </pre>
                <br><br>
          
                <h3>6. <strong>&lt;main&gt;</strong> Element</h3>
                <p class="note-description">
                  The <strong>&lt;main&gt;</strong> element represents the main content of a document, excluding header, footer, and navigation content.
                </p>
                <pre>
                  <span class="keyword">&lt;main&gt;</span>
                    <p>This is the main content of the webpage.</p>
                  <span class="keyword">&lt;/main&gt;</span>
                </pre>
                <br><br>
          
                <h3>7. <strong>&lt;aside&gt;</strong> Element</h3>
                <p class="note-description">
                  The <strong>&lt;aside&gt;</strong> element represents content that is tangentially related to the content around it.
                </p>
                <pre>
                  <span class="keyword">&lt;aside&gt;</span>
                    <p>This is some related content, like a sidebar.</p>
                  <span class="keyword">&lt;/aside&gt;</span>
                </pre>
                <br><br>
          
                <h3>Why Use Semantic Tags?</h3>
                <p class="note-description">
                  Using semantic tags helps in improving:
                </p>
                <ul class="note-description">
                  <li><strong>Accessibility</strong>: Semantic tags help screen readers to better interpret the content.</li>
                  <li><strong>SEO</strong>: Search engines can easily understand the structure of a webpage.</li>
                  <li><strong>Maintainability</strong>: They make your HTML code easier to read and maintain.</li>
                </ul>
                <br><br>
              </div>
            `
          },                                                            
          
        ],
       assignment : [
          {
            id: 1,
            title: "What is HTML and why do we use HTML?",
            content: `
              <div class="note">
                <h2 class="note-title">What is HTML and why do we use HTML?</h2>
                <p class="note-description">
                  <strong>HTML (HyperText Markup Language)</strong> is the standard language used to create and design webpages. It provides the basic structure of web documents using a system of tags and attributes.
                </p>
                <p class="note-description">
                  We use HTML to structure content on the web, making it accessible and easy to understand for both browsers and humans.
                </p>
              </div>
            `,
          },
          {
            id: 2,
            title: "Are HTML tags and elements the same thing?",
            content: `
              <div class="note">
                <h2 class="note-title">Are HTML tags and elements the same thing?</h2>
                <p class="note-description">
                  HTML tags and elements are closely related but not exactly the same. A <strong>tag</strong> is a part of the syntax used to define HTML elements. An <strong>element</strong> refers to the complete structure, which includes the opening tag, the content, and the closing tag.
                </p>
                <pre class="note-code">
                  &lt;div&gt;This is an element&lt;/div&gt;
                </pre>
                <p class="note-output">
                  The <code>&lt;div&gt;This is an element&lt;/div&gt;</code> is an example of an HTML element.
                </p>
              </div>
            `,
          },
          {
            id: 3,
            title: "What are tags and attributes in HTML?",
            content: `
              <div class="note">
                <h2 class="note-title">What are tags and attributes in HTML?</h2>
                <p class="note-description">
                  A <strong>tag</strong> in HTML is used to define an element, while an <strong>attribute</strong> provides additional information about the element.
                </p>
                <pre class="note-code">
                  &lt;a href="https://example.com"&gt;Link&lt;/a&gt;
                </pre>
                <p class="note-output">
                  In the example above, <code>href</code> is an attribute specifying the destination URL of the <code>&lt;a&gt;</code> tag.
                </p>
              </div>
            `,
          },
          {
            id: 4,
            title: "What are void elements in HTML?",
            content: `
              <div class="note">
                <h2 class="note-title">What are void elements in HTML?</h2>
                <p class="note-description">
                  Void elements in HTML are elements that do not have a closing tag. They are self-closing, meaning the start tag is sufficient to represent the element.
                </p>
                <pre class="note-code">
                  &lt;br /&gt;
                  &lt;img src="image.jpg" alt="image" /&gt;
                </pre>
                <p class="note-output">
                  The <code>&lt;br /&gt;</code> tag creates a line break, and the <code>&lt;img&gt;</code> tag displays an image without needing a closing tag.
                </p>
              </div>
            `,
          },
          {
            id: 5,
            title: "Why do we use forms in HTML? How to create a form in HTML?",
            content: `
              <div class="note">
                <h2 class="note-title">Why do we use forms in HTML? How to create a form in HTML?</h2>
                <p class="note-description">
                  Forms in HTML are used to collect user input. They contain various elements like text fields, checkboxes, and buttons, which allow users to submit data.
                </p>
                <pre class="note-code">
                  &lt;form action="/submit" method="POST"&gt;
                    &lt;input type="text" name="username" placeholder="Enter your name"&gt;
                    &lt;input type="submit" value="Submit"&gt;
                  &lt;/form&gt;
                </pre>
                <p class="note-output">
                  The form above collects a username and allows the user to submit it via a POST request.
                </p>
              </div>
            `,
          },
        ],        
        

        program: [
       
        ],
        project: [
        
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
