import React, { useContext } from 'react'

import { MainContext } from '~/src/frontend/js/context/MainContext'

const Footer = () => {
  const { state, setState } = useContext(MainContext)
  const { selectedPage } = state

  const changePage = selectedPage => {
    setState({ selectedPage })
  }

  return (
    <footer>
      <div
        onClick={() => changePage('transactions')}
        className={'button' + (selectedPage === 'transactions' ? ' active' : '')}
      >
        <i className='icon icon-format_list_bulleted' />
      </div>
      <div
        onClick={() => changePage('create')}
        className={'button' + (selectedPage === 'create' ? ' active' : '')}
      >
        <i className='icon icon-add_circle' />
      </div>
      <div
        onClick={() => changePage('statistics')}
        className={'button' + (selectedPage === 'statistics' ? ' active' : '')}
      >
        <i className='icon icon-bar_chart' />
      </div>
    </footer>
  )
}

export default Footer
