import { RequestHandler } from '@vercel/node';

export const GET: RequestHandler = async ({ params: { vin }, req }) => {
  const xForwardedFor = req.headers['x-real-ip']
  
  const response = await fetch(`http://84.54.47.216/v1/carlist/search/${vin}`, {
    headers: {
      protection: 'YjWVsPQ6EM!WUaeSsydsPiWHDdp/vbg9JCNefGHltBdddPbb8md0mr=n86hzAyiv',
      'X-Forwarded-For': xForwardedFor
    }
  })

  const data = await response.json()

  return new Response(JSON.stringify(data))
}
