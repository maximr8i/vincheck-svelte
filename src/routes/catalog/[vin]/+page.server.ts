import type { PageServerLoad } from './$types'

type Car = {
  count: number,
  next: string | null,
  previous: string | null,
  results: {
    vin: string,
    photo: string[],
    brand: string,
    model: string,
    auction_date: string,
    damage: string,
    drive: string,
    drive_train: string,
    engine: string,
    gearbox: string,
    odometer: string,
    sale_type: string,
    year: string
  }[]
}

export const prerender = false

export const load = (async ({ fetch, params: { vin } }) => {
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
