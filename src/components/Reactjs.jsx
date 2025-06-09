import React from 'react';

function Reactjs() {
  const codeStyle = {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    borderRadius: '8px',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>📘 ReactJS Complete Notes</h1>

      <section>
        <h2>🔷 What is ReactJS?</h2>
        <p>
          <strong>ReactJS</strong> is a JavaScript library developed by Facebook used to build <strong>Single Page Applications (SPA)</strong> with reusable UI components.
        </p>
      </section>

      <section>
        <h2>🧠 What is a Single Page Application (SPA)?</h2>
        <p>
          In a SPA, the entire application runs on a single HTML page and updates dynamically without reloading the page. React splits the UI into small components, each representing a part of the interface.
        </p>
      </section>

      <section>
        <h2>⚙️ Key Features of React</h2>
        <ul>
          <li><strong>Component-Based</strong> architecture</li>
          <li><strong>Virtual DOM</strong> for better performance</li>
          <li><strong>JSX</strong> – JavaScript + XML syntax</li>
          <li><strong>Unidirectional Data Flow</strong></li>
          <li><strong>Hooks</strong> for managing state and side effects</li>
        </ul>
      </section>

      <section>
        <h2>📄 JSX Syntax</h2>
        <p>JSX allows us to write HTML in JavaScript:</p>
        <pre style={codeStyle}>
{`const element = <h1>Hello, React!</h1>;`}
        </pre>
      </section>

      <section>
        <h2>📦 Components</h2>
        <p>React apps are built using <strong>components</strong>. There are two types:</p>
        <ul>
          <li><strong>Functional Components</strong> – Based on functions.</li>
          <li><strong>Class Components</strong> – Use ES6 classes (less common in modern React).</li>
        </ul>

        <pre style={codeStyle}>
{`function Welcome() {
  return <h1>Hello, Welcome!</h1>;
}`}
        </pre>
      </section>

      <section>
        <h2>⚙️ Props</h2>
        <p><strong>Props</strong> (short for properties) are used to pass data from parent to child components.</p>
        <pre style={codeStyle}>
{`function Greet(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
        </pre>
      </section>

      <section>
        <h2>🔁 State</h2>
        <p><strong>State</strong> is used to manage dynamic data in components.</p>
        <pre style={codeStyle}>
{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}`}
        </pre>
      </section>

      <section>
        <h2>🚀 Virtual DOM</h2>
        <p>
          Instead of updating the real DOM every time, React uses a <span style={{ color: 'red' }}><strong>Virtual DOM</strong></span> to detect changes and update only the part of the DOM that changed. This improves performance.
        </p>
      </section>

      <section>
        <h2>🧲 React Hooks</h2>
        <p>Hooks let you use state and lifecycle features in functional components.</p>
        <ul>
          <li><code>useState</code> – for state management</li>
          <li><code>useEffect</code> – for side effects like API calls</li>
          <li><code>useContext</code> – for accessing context values</li>
        </ul>
      </section>

      <section>
        <h2>📁 Folder Structure</h2>
        <pre style={codeStyle}>
{`src/
├── components/
│   └── Header.jsx
├── App.jsx
├── index.js`}
        </pre>
      </section>

      <section>
        <h2>🛠 Common React Commands</h2>
        <ul>
          <li><code>npx create-react-app myapp</code> – Create a new app</li>
          <li><code>npm start</code> – Run the app</li>
          <li><code>npm run build</code> – Build for production</li>
        </ul>
      </section>

      <section>
        <h2>✅ Best Practices</h2>
        <ul>
          <li>Keep components small and reusable.</li>
          <li>Use props and state correctly.</li>
          <li>Use proper folder structure.</li>
          <li>Write clean and readable code.</li>
        </ul>
      </section>
    </div>
  );
}

export default Reactjs;
