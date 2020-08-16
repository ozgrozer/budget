import React from 'react'
import ReactDOM from 'react-dom'

import './../css/app.scss'

const App = () => {
  return (
    <div id='app'>
      <header>header</header>
      <main>main</main>
      <footer>footer</footer>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
