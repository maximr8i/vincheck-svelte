import type { PageLoad } from './$types'

type CarList = {
  count: number,
  next: string | null,
  previous: string | null,
  results: Record<string, unknown>[]
}

export const load = (async ({ fetch, url }) => {
  const page = url.searchParams.get('page') || 1

  const request = await fetch(`https://vincheck.onrender.com/api/v2/carlist/?page=${page}`, {
    headers: {
      Authorization: 'Token 2cc226cd4ef9fbc869454f4a9b7f6cd84717f674'
    }
  })

  const cars: CarList = await request.json()

  return {
    page,
    cars
  }
}) satisfies PageLoad
