import React from 'react'

function Reactjs() {
  return (
    <div>
        <h1>Reactjs Complete Notes</h1>
        <p>React is a Javascript Library</p>
        <ul>
          <li>Which is used to create Single page application</li>
            <ul>
              <li>I know you will get doubt that what is Single page Application(SPA)</li>
              <li>SPA means the html page is divided into components so every component is single page application </li>
            </ul>
         <li>It uses the <span style={{
          color:'red'
         }}>VIRTUAL DOM</span></li>
         <ul>
          <li>It means instead of manipulating the dom like in javascript it will just update what we change in the component without rendering the entire component</li>
         </ul>
        </ul>
      
    </div>
  )
}

export default Reactjs