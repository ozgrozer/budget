import React, { useContext } from 'react'

import categories from '~/src/frontend/js/components/categories'
import { MainContext } from '~/src/frontend/js/context/MainContext'

/* const types = {
  1: 'Income',
  2: 'Expense'
} */

const dailyTransactions_ = transactions => {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const dailyTransactions = {}
  for (const key in transactions) {
    const item = transactions[key]

    const getFullDate = new Date(item.createdAt * 1000)
    const getDate = getFullDate.getDate()
    const getMonth = monthNames[getFullDate.getMonth()]
    const getDay = dayNames[getFullDate.getDay()]
    const readableDate = `${getDay}, ${getMonth} ${getDate}`
    if (!Object.prototype.hasOwnProperty.call(dailyTransactions, readableDate)) {
      dailyTransactions[readableDate] = []
    }
    dailyTransactions[readableDate].push(item)
  }

  return dailyTransactions
}

const Transactions = () => {
  const { state, setState } = useContext(MainContext)
  const dailyTransactions = dailyTransactions_(state.transactions)

  const editTransaction = () => {
    setState({ selectedPage: 'create' })
  }

  return (
    <main id='transactions'>
      {Object.keys(dailyTransactions).map((day, key1) => {
        const transactions = dailyTransactions[day]
        const balance = '?'

        return (
          <div
            key={key1}
            className='dayWrapper'
          >
            <div className='daySection'>
              <div className='day'>
                {day}
              </div>
              <div className='balance'>
                {balance} TL
              </div>
            </div>

            <div className='transactions'>
              {transactions.map((transaction, key2) => {
                const transactionPriceClassName1 = 'transactionPrice'
                const transactionPriceClassName2 = transaction.type === 1
                  ? 'income'
                  : 'expense'
                const transactionPriceClassName = `${transactionPriceClassName1} ${transactionPriceClassName2}`
                const transactionCategory = categories[transaction.category]
                const transactionPrice1 = transaction.type === 2 ? '-' : ''
                const transactionPrice = `${transactionPrice1}${transaction.price}`

                return (
                  <div
                    key={key2}
                    className='transaction'
                    onClick={() => editTransaction()}
                  >
                    <div className='transactionCategory'>
                      {transactionCategory}
                    </div>

                    <div className={transactionPriceClassName}>
                      {transactionPrice} TL
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </main>
  )
}

export default Transactions
