import React from 'react';

function Python() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🐍 Python Complete Notes</h1>

      <section>
        <h2>📌 What is Python?</h2>
        <p>
          <strong>Python</strong> is a <span style={{ color: 'red' }}>general-purpose</span>,
          <span style={{ color: 'red' }}> high-level</span>,
          <span style={{ color: 'red' }}> interpreted</span>,
          <span style={{ color: 'red' }}> dynamically typed</span> programming language.
        </p>
      </section>

      <section>
        <h3>🔍 Meaning of Each Term</h3>
        <ul>
          <li><strong style={{ color: 'red' }}>High-level</strong>: Easy to read and write. Closer to human language.</li>
          <li><strong style={{ color: 'red' }}>Interpreted</strong>: Code is executed line-by-line by the Python interpreter (no compilation step).</li>
          <li><strong style={{ color: 'red' }}>Dynamically typed</strong>: No need to declare variable data types explicitly.</li>
          <li><strong style={{ color: 'red' }}>Portable</strong>: Runs on multiple operating systems without modification (Windows, Mac, Linux).</li>
        </ul>
      </section>

      <section>
        <h2>⭐ Features of Python</h2>
        <ul>
          <li>High-level Language</li>
          <li>Dynamically Typed</li>
          <li>Interpreted Language</li>
          <li>Free and Open Source</li>
          <li>Easy to Learn and Understand</li>
          <li>Portable (cross-platform support)</li>
          <li>Extensive Libraries and Community Support</li>
        </ul>
      </section>

      <section>
        <h2>🔤 Python Syntax Example</h2>
        <pre style={{
          backgroundColor: '#f4f4f4',
          padding: '10px',
          borderRadius: '8px',
          fontFamily: 'monospace',
          whiteSpace: 'pre-wrap'
        }}>
{`# This is a simple Python program
name = "Ganesh"
age = 20
print(f"My name is {name} and I am {age} years old.")`}
        </pre>
      </section>

      <section>
        <h2>🔎 Why Use Python?</h2>
        <ul>
          <li>Used in Web Development (e.g., Django, Flask)</li>
          <li>Popular in Data Science & Machine Learning</li>
          <li>Used for Automation and Scripting</li>
          <li>Supports GUI development (Tkinter, PyQT)</li>
          <li>Widely used in Backend Development, APIs</li>
        </ul>
      </section>

      <section>
        <h2>🛠 Python Use Cases</h2>
        <ul>
          <li>Data Analysis</li>
          <li>Machine Learning</li>
          <li>Web Development</li>
          <li>Game Development</li>
          <li>Cybersecurity</li>
          <li>Automation Scripts</li>
        </ul>
      </section>
    </div>
  );
}

export default Python;
