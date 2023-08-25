<script lang="ts">
  import type { PageData } from './$types'
  import Popup from '../../../Popup/Popup.svelte'
  import Card from '../../../components/Card/Card.svelte'

  let modal = false

  function handleImage() {
    modal = !modal
  }

  export let data: PageData

  const {
    auction_date: auctionDate, brand, damage, drive_train: driveTrain, engine, gearbox,
    model, odometer, photo, sale_type: saleType, vin, year
  } = data.results[0]
</script>

<section>
  <div class="container">
    {#if modal}
    <Popup
    photos={photo}
    vin={vin}
    modal={modal}
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
