'use client'

import { useRef } from 'react'
import { addTodoAction } from '@/app/actions'

export default function TodoForm() {
  const ref = useRef<HTMLFormElement>(null)

  async function handleSubmit(formData: FormData) {
    await addTodoAction(formData)
    ref.current?.reset()
  }

  return (
    <form ref={ref} action={handleSubmit} className="flex gap-2 mb-6">
      <input
        name="text"
        type="text"
        placeholder="할 일을 입력하세요..."
        required
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        추가
      </button>
    </form>
  )
}
