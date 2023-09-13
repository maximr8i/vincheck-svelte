import { json } from '@sveltejs/kit'

export async function POST({ request }) {
  const { vin } = await request.json()

  const req = await fetch(`http://84.54.47.216/v1/carlist/add_view/${vin}`, {
    method: 'POST',
    body: JSON.stringify({ vin }),
    headers: {
      'Content-Type': 'application/json',
      protection: 'YjWVsPQ6EM!WUaeSsydsPiWHDdp/vbg9JCNefGHltBdddPbb8md0mr=n86hzAyiv'
    }
  })

  return json(req)
}
