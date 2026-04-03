'use client'

import { toggleTodoAction, deleteTodoAction } from '@/app/actions'
import type { Todo } from '@/lib/db'

export default function TodoList({ todos }: { todos: Todo[] }) {
  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-400 py-10">
        할 일이 없습니다. 새 항목을 추가해보세요!
      </p>
    )
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg shadow-sm"
        >
          <button
            onClick={() => toggleTodoAction(todo.id)}
            className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
              todo.completed
                ? 'bg-green-500 border-green-500 text-white'
                : 'border-gray-300 hover:border-green-400'
            }`}
            aria-label={todo.completed ? '완료 취소' : '완료'}
          >
            {todo.completed && (
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>

          <span
            className={`flex-1 text-sm ${
              todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
            }`}
          >
            {todo.text}
          </span>

          <button
            onClick={() => deleteTodoAction(todo.id)}
            className="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0"
            aria-label="삭제"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  )
}
