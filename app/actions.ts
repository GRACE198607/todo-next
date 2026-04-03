'use server'

import { revalidatePath } from 'next/cache'
import { addTodo, toggleTodo, deleteTodo } from '@/lib/db'

export async function addTodoAction(formData: FormData) {
  const text = formData.get('text') as string
  if (!text?.trim()) return
  addTodo(text)
  revalidatePath('/')
}

export async function toggleTodoAction(id: string) {
  toggleTodo(id)
  revalidatePath('/')
}

export async function deleteTodoAction(id: string) {
  deleteTodo(id)
  revalidatePath('/')
}
