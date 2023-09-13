<script lang="ts">
  import { onMount } from 'svelte'
  import type { PageData } from './$types'
  import Card from '../../../components/Card/Card.svelte'
  import Popup from '../../../components/Popup/Popup.svelte'

  let modal: boolean = false

  function handleImage() {
    modal = !modal
  }

  export let data: PageData

  const {
    auction_date: auctionDate, brand, damage, drive_train: driveTrain, engine, gearbox,
    model, odometer, photo, sale_type: saleType, vin, year
  } = data.results[0]

  onMount(
    async () => {
      const req = await fetch(`http://84.54.47.216/v1/carlist/add_recent/${vin}`, {
        method: 'POST',
        body: JSON.stringify({ vin }),
        headers: {
          'Content-Type': 'application/json',
          protection: 'YjWVsPQ6EM!WUaeSsydsPiWHDdp/vbg9JCNefGHltBdddPbb8md0mr=n86hzAyiv'
        }
      })
    }
  )

</script>

<svelte:head>
  <meta name="robots" content="index" />
  <link rel="icon" href="./favicon.ico" type="image/x-icon" />
  <title>{`${vin} ${brand} ${model} бесплатная история автомобиля`}</title>
  <meta
    name="description"
    content={`${vin} vin ${brand} ${model} с повреждениями ${damage}. На момент продажи пробег был ${odometer} (Actual)`}
  />
  <meta
    name="keywords"
    content={` ${brand}, automobile, insurance, auction, copart, free, info, vin, ${vin}, usa, america, damage, photo`}
  />
  <meta content={`${vin} vin ${brand} ${model}`} data-page-subject="true" name="twitter:title" />
  <meta
    content={`${vin} vin ${brand} ${model} с повреждениями ${damage}. На момент продажи пробег был ${odometer} (Actual)`}
    data-page-subject="true"
    name="twitter:description"
  />
  <meta content="@vincheck" data-page-subject="true" name="twitter:site" />
  <meta content="vincheck" data-page-subject="true" name="twitter:via" />
  <meta content={`https://vincheck.by/catalog/${vin}`} data-page-subject="true" name="twitter:url" />
  <meta content="@vincheck" data-page-subject="true" name="twitter:creator" />
  <meta content="photo" data-page-subject="true" name="twitter:" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={`${vin} ${brand} ${model} бесплатная история автомобиля`} />
  <meta
    property="og:description"
    content={`${vin} vin ${brand} ${model} с повреждениями ${damage}. На момент продажи пробег был ${odometer} (Actual)`}
  />
  <link rel="canonical" href={`https://vincheck.by/catalog/${vin}`} />
  <meta content={photo[0]} data-page-subject="true" name="twitter:image" />
  <meta property="og:image" content={photo[0]} />
  <link rel="shortcut icon" href="./favicon.ico" />
</svelte:head>

<section>
  <div class="container">
    {#if modal}
    <Popup
    photos={photo}
    vin={vin}
    handleImage={handleImage}
      />
    {/if}
    <Card
      photos={photo}
      brand={brand}
      year={year}
      model={model}
      vin={vin}
      odometer={odometer}
      engine={engine}
      gearbox={gearbox}
      driveTrain={driveTrain}
      auctionDate={auctionDate}
      saleType={saleType}
      damage={damage}
      handleImage={handleImage}
    />
  </div>
</section>
