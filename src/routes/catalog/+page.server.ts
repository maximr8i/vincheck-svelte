import type { PageServerLoad } from './$types'

type CarList = {
  count: number,
  next: string | null,
  previous: string | null,
  results: Record<string, unknown>[]
}

export const prerender = false

export const load = (async ({ fetch, url }) => {
  const page = url.searchParams.get('page') || 1

  const request = await fetch(`http://84.54.47.216/v1/carlist/?page=${page}`, {
    headers: {
      protection: 'YjWVsPQ6EM!WUaeSsydsPiWHDdp/vbg9JCNefGHltBdddPbb8md0mr=n86hzAyiv'
    }
  })
  const cars: CarList = await request.json()

  return {
    page,
    cars
  }
}) satisfies PageServerLoad
