import React, { useContext } from 'react'

import { MainContext } from '~/src/frontend/js/context/MainContext'

const Footer = () => {
  const { setState } = useContext(MainContext)

  const changePage = selectedPage => {
    setState({ selectedPage })
  }

  return (
    <footer>
      <button onClick={() => changePage('transactions')}>
        transactions
      </button>
      <button onClick={() => changePage('create')}>
        create
      </button>
      <button onClick={() => changePage('statistics')}>
        statistics
      </button>
    </footer>
  )
}

export default Footer
