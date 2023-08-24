export const GET: RequestHandler = async ({ params: { vin } }) => {
  const response = await fetch(`http://84.54.47.216/v1/carlist/search/${vin}`, {
    headers: {
      protection: 'YjWVsPQ6EM!WUaeSsydsPiWHDdp/vbg9JCNefGHltBdddPbb8md0mr=n86hzAyiv'
    }
  })

  const data = await response.json()

  console.log(data)

  return new Response(JSON.stringify(data))
}
