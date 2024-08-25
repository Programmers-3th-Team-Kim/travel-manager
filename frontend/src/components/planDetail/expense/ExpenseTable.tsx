import React from 'react'

import useCalculateExpenses from './useCalculateExpenses'

type ExpenseTableProps = {
  planId: string
  dayId: string
}

const ExpenseTable: React.FC<ExpenseTableProps> = ({ planId, dayId }) => {
  const {
    expensesTable: expenses,
    loading,
    error,
  } = useCalculateExpenses(planId, dayId)

  if (loading) return <div>Loading expenses...</div>
  if (error) return <div>Error loading expenses: {error}</div>

  return (
    <table className="mr-5">
      <thead>
        <tr className="text-right">
          <th className="pb-2"> </th>
          <th className="pb-2">₩</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.category}>
            <td className="py-1.5 text-left text-sm font-semibold">
              {expense.category}
            </td>
            <td className="py-1.5 text-right text-sm">
              {expense.totalCost.toLocaleString('ko-KR')}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ExpenseTable
