<script lang="ts">
  import { goto } from '$app/navigation'
  import { DarkPaginationNav } from 'svelte-paginate'
  import localization from '$lib/data/localization'
  import { language } from '$lib/stores/language'
  import type { PageData } from './$types'

  export let data: PageData

  let currentPage = data.page

  $: title = localization[$language].catalogPage.title
  $: subtitle = localization[$language].catalogPage.subtitle
</script>

<svelte:head>
  <link rel="icon" href="./favicon.ico" type="image/x-icon" />
  <title>
    Бесплатная история торгов на аукционах Copart и Insurance Auto Auctions IAAI.
  </title>
  <meta name="description" content="Бесплатная история торгов на аукционах Copart и Insurance Auto Auctions IAAI." />
  <meta content="Бесплатная история торгов на аукционах Copart и Insurance Auto Auctions IAAI." data-page-subject="true" name="twitter:title" />
  <meta content="Бесплатная история торгов на аукционах Copart и Insurance Auto Auctions IAAI." data-page-subject="true" name="twitter:description" />
  <meta content="@vincheck" data-page-subject="true" name="twitter:site" />
  <meta content="vincheck" data-page-subject="true" name="twitter:via" />
  <meta content="https://vincheck.by/catalog" data-page-subject="true" name="twitter:url" />
  <meta content="@vincheck" data-page-subject="true" name="twitter:creator" />
  <meta content="photo" data-page-subject="true" name="twitter:card" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Бесплатная история торгов на аукционах Copart и Insurance Auto Auctions IAAI" />
  <meta property="og:description" content="Бесплатная история торгов на аукционах Copart и Insurance Auto Auctions IAAI." />
  <link rel="canonical" href="https://vincheck.by/catalog?page=1" />
  <meta content="https://vincheck.by/favicon.ico" data-page-subject="true" name="twitter:image" />
  <meta property="og:image" content="https://vincheck.by/favicon.ico" />
  <link rel="shortcut icon" href="./favicon.ico" />
</svelte:head>

<section class="catalogue">
  <div class="container">
    <h1 class="title">{title}<span>{subtitle}</span></h1>
    <ul class="list">
      {#each data.cars.results as {vin, photo, brand, model}}
      <li class="item">
          <a href={`catalog/${vin}`}>
            <div class="image">
              <img src={photo[0]} alt={vin} />
            </div>
            <div class="description">
              <h2>{vin}</h2>
              <h3>{brand}</h3>
              <h3>{model}</h3>
            </div>
          </a>
      </li>
      {/each}
    </ul>
    <div class="link">
      <DarkPaginationNav
        totalItems={data.cars.count}
        pageSize={10}
        currentPage={Number(data.page)}
        limit={1}
        showStepOptions
        on:setPage={(e) => {
          currentPage = e.detail.page

          return goto(`/catalog?page=${currentPage}`)
        }}
/>
    </div>
  </div>
</section>

<style lang="scss">
  .catalogue {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;

  .title {
    margin-bottom: 40px;
    font-size: 42px;
    font-weight: 600;
    letter-spacing: 0.0125em;
    line-height: 120%;

    span {
      position: relative;
      color: #00c8ff;
      font-weight: 500;

      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 4px;
        transform: skew(4deg, -3deg);
        border-radius: 15px 100px;
        background: #00c8ff;
      }
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 40px;
    color: #1d1e21;
    gap: 30px;

    .item {
      display: flex;
      flex-basis: 48%;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      border-radius: 10px;
      background: #fff;

      a {
        width: 100%;
      }

      .image {
        flex-basis: 60%;
        height: 300px;
        margin-bottom: 15px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          object-fit: cover;
        }
      }

      .description {
        flex-basis: 30%;
        text-align: center;

        h2 {
          margin-bottom: 10px;
          font-size: 18px;
          font-weight: 600;
        }

        h3 {
          margin-bottom: 10px;
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }

  .link {
    width: 100%;
    margin: 0 auto;
  }
}

@media (width <= 992px) {
  .catalogue {
    padding: 25px;

    .title {
      font-size: 32px;
    }

    .list {
      gap: 20px;
    }
  }
}

@media (width <= 768px) {
  .catalogue {
    .title {
      font-size: 24px;
    }

    .list {
      margin-bottom: 30px;

      .item {
        flex-basis: 100%;
        flex-wrap: wrap;
        gap: 20px;

        .image {
          flex-basis: 100%;
        }

        .description {
          flex-basis: 100%;
        }
      }
    }

    .link {
      width: 100%;
    }
  }
}

</style>
