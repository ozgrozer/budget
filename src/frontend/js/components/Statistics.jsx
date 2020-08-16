import React from 'react'

const Statistics = () => {
  return (
    <main id='statistics'>
      <div className='statistic'>
        <div className='statisticTitle'>
          Balance
        </div>
        <div className='statisticPrice'>
          350,00 TL
        </div>
      </div>

      <div className='statistic'>
        <div className='statisticTitle'>
          Income
        </div>
        <div className='statisticPrice'>
          550,00 TL
        </div>
      </div>

      <div className='statistic'>
        <div className='statisticTitle'>
          Spending
        </div>
        <div className='statisticPrice'>
          200,00 TL
        </div>
      </div>
    </main>
  )
}

export default Statistics
