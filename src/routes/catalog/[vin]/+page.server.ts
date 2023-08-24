import type { PageServerLoad } from './$types'

type Car = {
  count: number,
  next: string | null,
  previous: string | null,
  results: Record<string, unknown>[]
}

export const load = (async ({ fetch, params }) => {
  const { vin } = params

  const request = await fetch(`http://84.54.47.216/v1/carlist/search/${vin}`, {
    headers: {
      protection: 'YjWVsPQ6EM!WUaeSsydsPiWHDdp/vbg9JCNefGHltBdddPbb8md0mr=n86hzAyiv'
    }
  })
  const { results }: Car = await request.json()

  return {
    results
  }
}) satisfies PageServerLoad
