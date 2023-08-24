<script lang="ts">
  import type { PageData } from './$types'
  import { langText, language } from '../../stores'

  export const prerender = true
  export let data: PageData

  const {
    auction_date, brand, damage, drive, drive_train, engine, gearbox,
    model, odometer, photo, sale_type, vin, year
  } = data.results[0]

  $: carDetail = $langText[$language].cardPage.carDetail
  $: sellDetail = $langText[$language].cardPage.sellDetail

</script>

<section class="card">
  <h1 class="title">
    {vin}
    <span class="subtitle">{`${brand} ${model}`}</span>
  </h1>
  <div class="images">
  {#if photo.length}
    {#each photo as img}
    <button type="button">
      <img src={img} alt={vin} title={`${vin} ${brand} ${model} ${year} ${gearbox}`} />
      <span itemScope="" itemType="http://schema.org/ImageObject">
        <meta itemProp="name" content={`Automobile ${brand} ${model} vin: ${vin} with damage ${damage}. At the time of sale, the mileage was ${odometer} (Actual)`} />
        <meta itemProp="description" content={`Automobile ${brand} ${model} vin: ${vin} with damage ${damage}. At the time of sale, the mileage was ${odometer} (Actual)`} />
        <link itemProp="contentUrl" href={photo} />
        <meta itemProp="author" content="Free bid history on auction Copart and Insurance Auto Auctions IAAI." />
      </span>
    </button>
    {/each}
  {/if}
</div>
  <div class="descriptions">
    <ul>
      <li class="title">
        {carDetail.title}
      </li>
      <li>
        <span class="check">
          VIN
        </span>
        <span>
          {vin}
        </span>
      </li>
      <li>
        <span class="year">
          {carDetail.year}
        </span>
        <span>
          {year}
        </span>
      </li>
      <li>
        <span class="odometer">
          {carDetail.odometer}
        </span>
        <span>
          {odometer}
        </span>
      </li>
      <li>
        <span class="engine">
          {carDetail.engine}
        </span>
        <span>
          {engine}
        </span>
      </li>
      <li>
        <span class="gearbox">
          {carDetail.gearbox}
        </span>
        <span>
          {gearbox}
        </span>
      </li>
      <li>
        <span class="drive">
          {carDetail.drive}
        </span>
        <span>
          {drive_train}
        </span>
      </li>
    </ul>
    <ul>
      <li class="title">
        {sellDetail.title}
      </li>
      <li>
        <span class="auction">
          {sellDetail.auction}
        </span>
        <span>
          {auction_date}
        </span>
      </li>
      <li>
        <span class="sale">
          {sellDetail.sale}
        </span>
        <span>
          {sale_type}
        </span>
      </li>
      <li>
        <span class="damage">
          {sellDetail.damage}
        </span>
        <span>
          {damage}
        </span>
      </li>
    </ul>
  </div>
</section>

<style lang="scss">
  .card {
  padding: 50px 0;
  background: #000;
  color: #fdfdfd;

  .title {
    display: flex;
    position: relative;
    flex-direction: column;
    margin-bottom: 15px;
    font-size: 32px;
    font-weight: 600;
    line-height: 34px;
    text-align: center;
  }

  .subtitle {
    position: relative;
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: 500;
    text-align: center;
  }

  .images {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 50px;

    button {
      flex-basis: 48%;
      cursor: pointer;

      img {
        width: 100%;
        object-fit: cover;
        height: 350px;
        border-radius: 8px;
      }
    }
  }

  .descriptions {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    border-radius: 8px;
    box-shadow: 0 0 100px 1px rgb(255 255 255 / 50%);

    ul {
      flex-basis: 48%;
      padding: 20px;
      border-radius: 8px;

      .title {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
        font-size: 24px;
        font-weight: 600;
      }

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;

        &:not(:first-child) {
          margin-bottom: 20px;
          font-size: 16px;
        }

        span:first-child {
          display: flex;
          align-items: center;
          height: 40px;
          padding-left: 50px;
          background-repeat: no-repeat;
          background-position: left;
          background-size: 30px 100%;
          font-weight: 400;
          text-align: left;
          text-transform: uppercase;
        }

        span:last-child {
          font-size: 18px;
          font-weight: 500;
          line-height: 30px;
          text-align: right;
        }

        .check {
          background: url("/icons/check.svg");
        }

        .year {
          background: url("/icons/calendar.svg");
        }

        .odometer {
          background: url("/icons/odometer.svg");
        }

        .engine {
          background: url("/icons/engine.svg");
        }

        .gearbox {
          background: url("/icons/gearbox.svg");
        }

        .drive {
          background: url("/icons/car.svg");
        }

        .auction {
          background: url("/icons/date.svg");
        }

        .sale {
          background: url("/icons/auction.svg");
        }

        .damage {
          background: url("/icons/damage.svg");
        }
      }
    }
  }
}

@media (width <= 992px) {
  .card {
    padding: 25px 0;

    .title {
      margin-bottom: 15px;
      font-size: 24px;
    }

    .subtitle {
      margin-bottom: 30px;
      font-size: 20px;
    }

    .images {
      gap: 5px;

      button {
        flex-basis: 49%;

        img {
          height: 250px;
        }
      }
    }

    .descriptions {
      gap: 30px;

      ul {
        flex-basis: 100%;
        padding: 15px 20px;

        .title {
          margin-bottom: 20px;
          font-size: 20px;
        }

        li {
          gap: 20px;

          &:not(:first-child) {
            font-size: 14px;
          }

          span:first-child {
            height: 30px;
            padding-left: 40px;
            background-size: 20px 100%;
          }

          span:last-child {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
