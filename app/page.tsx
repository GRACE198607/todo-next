import { getTodos } from '@/lib/db'
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'

export const dynamic = 'force-dynamic'

export default function Home() {
  const todos = getTodos()
  const total = todos.length
  const done = todos.filter((t) => t.completed).length

  return (
    <main className="max-w-lg mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">Todo</h1>
        {total > 0 && (
          <p className="text-sm text-gray-500">
            {done} / {total} 완료
          </p>
        )}
      </div>

      <TodoForm />
      <TodoList todos={todos} />
    </main>
  )
}
