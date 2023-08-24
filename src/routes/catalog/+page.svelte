<script lang="ts">
  import { goto } from '$app/navigation'
  import { DarkPaginationNav, paginate } from 'svelte-paginate'
  import type { PageData } from './$types'
  import { langText, language } from '../stores'

  export const prerender = true
  export let data: PageData

  let currentPage = data.page
  $: title = $langText[$language].catalogPage.title
  $: subtitle = $langText[$language].catalogPage.subtitle

</script>

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
