import React from 'react';

function Html() {
  const codeBlockStyle = {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    borderRadius: '8px',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>HTML Complete Notes</h1>

      <section>
        <h2>📌 What is HTML?</h2>
        <p>
          <strong>HTML</strong> stands for <span style={{ color: 'blue' }}>HyperText Markup Language</span>. It is the
          standard markup language used to create web pages. It structures the content and layout of a webpage using
          various tags and elements.
        </p>
        <p>HTML is not a programming language; it is a markup language that defines the structure of your content.</p>
      </section>

      <section>
        <h2>🧱 Basic Structure of an HTML Document</h2>
        <pre style={codeBlockStyle}>
          {`<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`}
        </pre>
      </section>

      <section>
        <h2>🔖 Common HTML Tags</h2>
        <ul>
          <li>&lt;h1&gt; to &lt;h6&gt; — Headings</li>
          <li>&lt;p&gt; — Paragraph</li>
          <li>&lt;a&gt; — Anchor (Link)</li>
          <li>&lt;img&gt; — Image</li>
          <li>&lt;div&gt; — Container for other elements</li>
          <li>&lt;span&gt; — Inline container</li>
          <li>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt; — Lists</li>
          <li>&lt;table&gt; — Tables</li>
          <li>&lt;form&gt;, &lt;input&gt;, &lt;button&gt; — Forms</li>
        </ul>
      </section>

      <section>
        <h2>⚙️ HTML Attributes</h2>
        <p>Attributes give more information about elements. Examples include:</p>
        <ul>
          <li><strong>id</strong> — Unique identifier</li>
          <li><strong>class</strong> — Class name for styling</li>
          <li><strong>src</strong> — Source for media (image, video)</li>
          <li><strong>href</strong> — Hyperlink reference</li>
          <li><strong>alt</strong> — Alt text for images</li>
          <li><strong>style</strong> — Inline styles</li>
        </ul>
      </section>

      <section>
        <h2>💬 Comments in HTML</h2>
        <p>You can write comments that are not shown in the browser using:</p>
        <pre style={codeBlockStyle}>{`<!-- This is a comment -->`}</pre>
      </section>

      <section>
        <h2>🧩 Semantic Elements</h2>
        <p>Semantic elements give meaning to your HTML structure:</p>
        <ul>
          <li>&lt;header&gt;</li>
          <li>&lt;nav&gt;</li>
          <li>&lt;main&gt;</li>
          <li>&lt;section&gt;</li>
          <li>&lt;article&gt;</li>
          <li>&lt;footer&gt;</li>
        </ul>
      </section>

      <section>
        <h2>✅ Best Practices</h2>
        <ul>
          <li>Use semantic tags for better SEO and accessibility</li>
          <li>Always close HTML tags</li>
          <li>Organize code with proper indentation</li>
        </ul>
      </section>
    </div>
  );
}

export default Html;
