import React from 'react';

function HelloWorld() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React component.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <button onClick={() => alert('Clicked!')}>Click me</button>
    </div>
  );
}

export default HelloWorld;