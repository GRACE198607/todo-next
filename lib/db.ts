import fs from 'fs'
import path from 'path'

export type Todo = {
  id: string
  text: string
  completed: boolean
  createdAt: string
}

const DB_PATH = path.join(process.cwd(), 'data', 'todos.json')

function readDb(): Todo[] {
  try {
    const raw = fs.readFileSync(DB_PATH, 'utf-8')
    return JSON.parse(raw) as Todo[]
  } catch {
    return []
  }
}

function writeDb(todos: Todo[]): void {
  fs.writeFileSync(DB_PATH, JSON.stringify(todos, null, 2), 'utf-8')
}

export function getTodos(): Todo[] {
  return readDb()
}

export function addTodo(text: string): Todo {
  const todos = readDb()
  const newTodo: Todo = {
    id: crypto.randomUUID(),
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  }
  todos.unshift(newTodo)
  writeDb(todos)
  return newTodo
}

export function toggleTodo(id: string): void {
  const todos = readDb()
  const todo = todos.find((t) => t.id === id)
  if (todo) {
    todo.completed = !todo.completed
    writeDb(todos)
  }
}

export function deleteTodo(id: string): void {
  const todos = readDb().filter((t) => t.id !== id)
  writeDb(todos)
}
