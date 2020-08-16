import React, { useContext, useState } from 'react'
import { Form, Input, Select } from 'rfv'

import categories from '~/src/frontend/js/components/categories'
import { MainContext } from '~/src/frontend/js/context/MainContext'

const Create = () => {
  const { state, setState } = useContext(MainContext)
  const { selectedType, transactions } = state

  const changeType = selectedType => {
    setState({ selectedType })
  }

  const [formIsSubmitting, setFormIsSubmitting] = useState(false)
  const onSubmit = res => {
    if (res.isFormValid) {
      setFormIsSubmitting(true)

      setTimeout(() => {
        const { price, category } = res.items
        const type = res.items.type === 'expense'
          ? 2
          : 1
        transactions['16 August'].unshift({
          type,
          price,
          category,
          date: '1597589648'
        })
        setState({ transactions })
        setFormIsSubmitting(false)
      }, 1000)
    }
  }

  const expenseClassName = selectedType === 'expense'
    ? 'button gray6'
    : 'button gray5'
  const incomeClassName = selectedType === 'income'
    ? 'button gray6'
    : 'button gray5'

  return (
    <main id='create'>
      <Form onSubmit={onSubmit}>
        <fieldset disabled={formIsSubmitting}>
          <div className='formGroup'>
            <div className='buttonGroup'>
              <button
                type='button'
                className={expenseClassName}
                onClick={() => changeType('expense')}
                onTouchStart={() => changeType('expense')}
              >
                Expense
              </button>

              <button
                type='button'
                className={incomeClassName}
                onClick={() => changeType('income')}
                onTouchStart={() => changeType('income')}
              >
                Income
              </button>
            </div>

            <Input
              name='type'
              type='hidden'
              value={selectedType}
            />
          </div>

          <div className='formGroup'>
            <Input
              name='price'
              type='number'
              className='input'
              placeholder='Price'
            />
          </div>

          <div className='formGroup'>
            <Select className='select' name='category'>
              <option value=''>Category</option>
              {Object.keys(categories).map((categoryKey, key) => {
                const category = categories[categoryKey]

                return (
                  <option
                    key={key}
                    value={categoryKey}
                  >
                    {category}
                  </option>
                )
              })}
              <option value='2'>Restaurant</option>
            </Select>
          </div>

          <div className='formGroup'>
            <button className='button blue block createButton'>
              Create
            </button>
          </div>
        </fieldset>
      </Form>
    </main>
  )
}

export default Create
