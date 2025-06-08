import React from 'react'

function Html() {
  return (
    <div>
        <h1>Html Complete Notes</h1>
        {/* <h1>What is Html</h1>
        <p>Html is <span style={{
            color:'blue'
        }}>"Stands for Hyper Text Markup Language"</span></p>
        <p>Which is used to create websites and webpages</p>
        <p>It  is the backbone of websites</p> */}
        <div>
          <nav style={{
            display:'flex',
            flexDirection:'column',
            textDecoration:'none'
          }}>
            <a href='#'>Introduction</a>
            <a href=''>Commnets</a>
            <a href=''>Elements</a>
            <a href=''>Tags</a>
          </nav>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Html