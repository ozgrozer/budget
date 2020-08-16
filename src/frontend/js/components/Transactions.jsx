import React from 'react'

/* const types = {
  1: 'Income',
  2: 'Expense'
} */

const categories = {
  1: 'Income',
  2: 'Rent',
  3: 'Electricity Bill',
  4: 'Water Bill',
  5: 'Phone Bill',
  6: 'Internet Bill',
  7: 'Garanti Loan',
  8: 'Fibabanka Loan',
  9: 'Restaurant',
  10: 'Cafe',
  11: 'Groceries'
}

const allTransactions = {
  '08-16-2020': [
    { type: 1, category: 1, price: 100, date: '1597589648' },
    { type: 2, category: 2, price: 15.42, date: '1597589648' },
    { type: 2, category: 3, price: 25.42, date: '1597589648' }
  ],
  '08-15-2020': [
    { type: 2, category: 4, price: 32.54, date: '1597589648' },
    { type: 2, category: 5, price: 85.23, date: '1597589648' },
    { type: 2, category: 6, price: 20.00, date: '1597589648' }
  ],
  '08-14-2020': [
    { type: 2, category: 2, price: 20.00, date: '1597589648' },
    { type: 2, category: 3, price: 30.00, date: '1597589648' },
    { type: 2, category: 4, price: 40.00, date: '1597589648' },
    { type: 2, category: 5, price: 50.00, date: '1597589648' },
    { type: 2, category: 6, price: 60.00, date: '1597589648' },
    { type: 2, category: 7, price: 70.00, date: '1597589648' },
    { type: 2, category: 8, price: 80.00, date: '1597589648' },
    { type: 2, category: 9, price: 90.00, date: '1597589648' },
    { type: 2, category: 10, price: 100.00, date: '1597589648' },
    { type: 2, category: 11, price: 110.00, date: '1597589648' }
  ]
}

const Transactions = () => {
  const editTransaction = () => {
    console.log('editTransaction')
  }

  return (
    <main id='transactions'>
      {Object.keys(allTransactions).map((day, key1) => {
        const transactions = allTransactions[day]
        const balance = '227.23'

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
