import React from 'react';

function Javascript() {
  const codeBlockStyle = {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    borderRadius: '8px',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>JavaScript Complete Notes</h1>

      <section>
        <h2>📌 What is JavaScript?</h2>
        <p>
          <strong>JavaScript</strong> is a scripting language used to make web pages interactive and dynamic.
          It runs in the browser and can update content, handle events, validate forms, and more.
        </p>
      </section>

      <section>
        <h2>🧠 HTML vs CSS vs JavaScript</h2>
        <ul>
          <li><strong>HTML</strong> creates the structure of the webpage.</li>
          <li><strong>CSS</strong> adds style and layout to the structure.</li>
          <li><strong>JavaScript</strong> makes the page dynamic and interactive.</li>
        </ul>
      </section>

      <section>
        <h3 style={{ color: 'red' }}>💡 Example</h3>
        <p>
          Suppose you're buying something on Amazon:
        </p>
        <ul>
          <li>The product card is created using <strong>HTML</strong>.</li>
          <li>Styles like color, layout, fonts are added using <strong>CSS</strong>.</li>
          <li>If you click <strong>(+)</strong> to increase quantity, JavaScript dynamically updates the count.</li>
        </ul>
      </section>

      <section>
        <h2>🧾 Basic Syntax</h2>
        <pre style={codeBlockStyle}>
{`let x = 10;
const name = "Ganesh";
function greet() {
  console.log("Hello, World!");
}
greet();`}
        </pre>
      </section>

      <section>
        <h2>📋 Data Types</h2>
        <ul>
          <li>Number</li>
          <li>String</li>
          <li>Boolean</li>
          <li>Object</li>
          <li>Array</li>
          <li>Null</li>
          <li>Undefined</li>
        </ul>
      </section>

      <section>
        <h2>🌀 Variables</h2>
        <ul>
          <li><code>var</code> — Function scoped (older)</li>
          <li><code>let</code> — Block scoped (preferred)</li>
          <li><code>const</code> — Block scoped & can't be reassigned</li>
        </ul>
      </section>

      <section>
        <h2>🔁 Conditional Statements</h2>
        <pre style={codeBlockStyle}>
{`if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is 5 or less");
}`}
        </pre>
      </section>

      <section>
        <h2>🔂 Loops</h2>
        <pre style={codeBlockStyle}>
{`for (let i = 0; i < 5; i++) {
  console.log(i);
}`}
        </pre>
      </section>

      <section>
        <h2>🛠 DOM Manipulation</h2>
        <pre style={codeBlockStyle}>
{`document.getElementById("btn").addEventListener("click", function() {
  alert("Button clicked!");
});`}
        </pre>
        <p>Use JavaScript to access and manipulate HTML elements using the DOM (Document Object Model).</p>
      </section>

      <section>
        <h2>✅ Best Practices</h2>
        <ul>
          <li>Use <code>let</code> and <code>const</code> instead of <code>var</code>.</li>
          <li>Keep code modular using functions.</li>
          <li>Use meaningful variable names.</li>
          <li>Write comments to improve readability.</li>
        </ul>
      </section>
    </div>
  );
}

export default Javascript;
