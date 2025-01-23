'use server'
import { cookies } from 'next/headers'

export async function setLanguageCookie (lang: string) {
  const cookieStore = cookies()
  cookieStore.set('language', lang)
}

export async function getLanguageCookie () {
  const cookieStore = cookies()
  const language = cookieStore.get('language')
  return language?.value ?? null
}
