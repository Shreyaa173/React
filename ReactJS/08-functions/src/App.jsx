import React from 'react'

const App = () => {
  function btnClicked() {
    console.log('hello');
  }

  function inputTyping(elem) {
    console.log(elem);
  }

  function userScroll(){
    console.log("user is scrolling")
  }

  return (
    // <div className = 'input-text'>
    //   <input onChange = {(elem) => {
    //       inputTyping(elem.target.value)
    //   }} type='text'/>
    <div onWheelCapture={userScroll}>
      <div className="parent">
        <div className="page-1"></div>
        <div className="page-2"></div>
        <div className="page-3"></div>
      </div>
    </div>
  )
}

export default App