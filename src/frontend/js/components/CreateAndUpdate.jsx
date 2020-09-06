import React, { useContext, useState, useEffect } from 'react'
import { Form, Input, Select } from 'rfv'

import findInObject from '~/src/common/findInObject'
import categories from '~/src/frontend/js/components/categories'
import { MainContext } from '~/src/frontend/js/context/MainContext'

const CreateAndUpdate = () => {
  const { state, setState } = useContext(MainContext)
  const { selectedPage, selectedTransactionId, selectedType, transactions } = state

  const changeType = selectedType => {
    setState({ selectedType })
  }

  const [formIsSubmitting, setFormIsSubmitting] = useState(false)
  const onSubmit = res => {
    if (res.isFormValid) {
      setFormIsSubmitting(true)
    }
  }
  const postSubmit = res => {
    const countTransactions = Object.keys(transactions).length
    transactions[countTransactions] = res.data.data
    setState({ transactions })
    setFormIsSubmitting(false)
  }

  let transaction = {}
  if (selectedPage === 'update') {
    const selectedTransactionIndex = findInObject({
      object: transactions,
      search: { id: selectedTransactionId }
    })
    transaction = transactions[selectedTransactionIndex]
  }

  useEffect(() => {
    if (selectedPage === 'update') {
      setState({ selectedType: transaction.type })
    }
  }, [])

  const expenseClassName = selectedType === 'expense'
    ? 'button gray6'
    : 'button gray5'
  const incomeClassName = selectedType === 'income'
    ? 'button gray6'
    : 'button gray5'
  const submitButtonClassName = selectedPage === 'create'
    ? 'button blue block'
    : 'button green block'

  const postUrl = selectedPage === 'create'
    ? '/create-transaction'
    : '/update-transaction'

  return (
    <main id='createAndUpdate'>
      <Form
        onSubmit={onSubmit}
        postSubmit={postSubmit}
        postOptions={{ method: 'post', url: postUrl }}
      >
        <fieldset disabled={formIsSubmitting}>
          <div className='formGroup'>
            <div className='buttonGroup'>
              <button
                type='button'
                className={expenseClassName}
                onClick={() => changeType('expense')}
              >
                Expense
              </button>

              <button
                type='button'
                className={incomeClassName}
                onClick={() => changeType('income')}
              >
                Income
              </button>
            </div>

            <Input
              name='type'
              type='hiddens'
              value={selectedType}
            />
          </div>

          <div className='formGroup'>
            <Input
              name='price'
              type='number'
              className='input'
              placeholder='Price'
              value={transaction.price}
            />
          </div>

          <div className='formGroup'>
            <Select
              name='category'
              className='select'
              value={transaction.category}
            >
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
            </Select>
          </div>

          <div className='formGroup'>
            <button className={submitButtonClassName}>
              {selectedPage === 'create' ? 'Create' : 'Update'}
            </button>
          </div>
        </fieldset>

        <Input
          type='hidden'
          name='transactionId'
          value={transaction.id}
        />
      </Form>
    </main>
  )
}

export default CreateAndUpdate
