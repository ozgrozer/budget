import React, { useContext } from 'react'

import { MainContext } from '~/src/frontend/js/context/MainContext'

const Footer = () => {
  const { state, setState } = useContext(MainContext)
  const { selectedPage } = state

  console.log('glitch test 1')

  const changePage = selectedPage => {
    setState({ selectedPage })
  }

  return (
    <footer>
      <div
        onClick={() => changePage('transactions')}
        className={'footerButton' + (selectedPage === 'transactions' ? ' active' : '')}
      >
        <i className='icon icon-format_list_bulleted' />
      </div>
      <div
        onClick={() => changePage('create')}
        className={'footerButton' + (selectedPage === 'create' ? ' active' : '')}
      >
        <i className='icon icon-add_circle' />
      </div>
      <div
        onClick={() => changePage('statistics')}
        className={'footerButton' + (selectedPage === 'statistics' ? ' active' : '')}
      >
        <i className='icon icon-bar_chart' />
      </div>
    </footer>
  )
}

export default Footer
