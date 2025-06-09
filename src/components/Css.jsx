import React from 'react';

function Css() {
  const codeBlockStyle = {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    borderRadius: '8px',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>CSS Complete Notes</h1>

      <section>
        <h2>🎨 What is CSS?</h2>
        <p><strong>CSS</strong> stands for <span style={{ color: 'blue' }}>Cascading Style Sheets</span>.</p>
        <p>It is used to style and layout HTML elements, including colors, fonts, spacing, positioning, and animations.</p>
      </section>

      <section>
        <h2>📚 Types of CSS</h2>
        <ul>
          <li><strong>Inline CSS</strong> – Added directly inside an element using the <code>style</code> attribute.</li>
          <li><strong>Internal CSS</strong> – Written inside a <code>&lt;style&gt;</code> tag within the HTML document's <code>&lt;head&gt;</code>.</li>
          <li><strong>External CSS</strong> – Written in a separate <code>.css</code> file and linked to the HTML using <code>&lt;link&gt;</code>.</li>
        </ul>
      </section>

      <section>
        <h2>🧾 CSS Syntax</h2>
        <pre style={codeBlockStyle}>
{`selector {
  property: value;
}`}
        </pre>
        <p>Example:</p>
        <pre style={codeBlockStyle}>
{`p {
  color: blue;
  font-size: 16px;
}`}
        </pre>
      </section>

      <section>
        <h2>🎯 CSS Selectors</h2>
        <ul>
          <li><strong>Universal Selector</strong>: <code>*</code> — Selects all elements.</li>
          <li><strong>Element Selector</strong>: <code>p</code>, <code>h1</code> — Selects all elements of a type.</li>
          <li><strong>Class Selector</strong>: <code>.classname</code> — Selects all elements with a specific class.</li>
          <li><strong>ID Selector</strong>: <code>#idname</code> — Selects a single element with a specific ID.</li>
          <li><strong>Group Selector</strong>: <code>h1, p</code> — Selects multiple types of elements.</li>
        </ul>
      </section>

      <section>
        <h2>⚙️ Box Model</h2>
        <p>Every element in HTML is considered a box made up of:</p>
        <ul>
          <li><strong>Content</strong> – The actual content (text, image)</li>
          <li><strong>Padding</strong> – Space around the content</li>
          <li><strong>Border</strong> – Surrounds the padding</li>
          <li><strong>Margin</strong> – Space outside the border</li>
        </ul>
        <pre style={codeBlockStyle}>
{`margin: 10px;
padding: 20px;
border: 1px solid black;`}
        </pre>
      </section>

      <section>
        <h2>📏 Positioning in CSS</h2>
        <p>CSS provides different ways to position elements:</p>
        <ul>
          <li><strong>static</strong> (default)</li>
          <li><strong>relative</strong></li>
          <li><strong>absolute</strong></li>
          <li><strong>fixed</strong></li>
          <li><strong>sticky</strong></li>
        </ul>
      </section>

      <section>
        <h2>🌐 Responsive Design</h2>
        <ul>
          <li>Use <code>@media</code> queries to make websites responsive.</li>
          <li>Use relative units like <code>%</code>, <code>em</code>, <code>rem</code>.</li>
          <li>Use <code>flexbox</code> and <code>grid</code> for layout design.</li>
        </ul>
        <pre style={codeBlockStyle}>
{`@media (max-width: 600px) {
  body {
    background-color: lightgray;
  }
}`}
        </pre>
      </section>

      <section>
        <h2>✅ Best Practices</h2>
        <ul>
          <li>Use external CSS for better separation of structure and style.</li>
          <li>Use semantic class names.</li>
          <li>Keep your styles modular and reusable.</li>
        </ul>
      </section>
    </div>
  );
}

export default Css;
