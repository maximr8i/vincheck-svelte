<script lang="ts">
  import type { PageData } from './$types'
  import Popup from '../../../Popup/Popup.svelte'
  import Card from '../../../components/Card/Card.svelte'

  let modal = false

  function handleImage() {
    modal = !modal
  }

  export const prerender = true
  export let data: PageData

  const {
    auction_date, brand, damage, drive, drive_train, engine, gearbox,
    model, odometer, photo, sale_type, vin, year
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
      drive_train={drive_train}
      auction_date={auction_date}
      sale_type={sale_type}
      damage={damage}
      handleImage={handleImage}
    />
  </div>
</section>
