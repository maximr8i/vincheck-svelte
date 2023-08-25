<script lang="ts">
  import localization from '$lib/data/localization'
  import { language } from '$lib/stores/language'
  import Calendar from '../icons/Calendar/Calendar.svelte'
  import Car from '../icons/Car/Car.svelte'
  import Locatiton from '../icons/Locatiton/Locatiton.svelte'

  $: title = localization[$language].mainPage.services.title
  $: subtitle = localization[$language].mainPage.services.subtitle
  $: items = localization[$language].mainPage.services.items

</script>

<section class="services__wrap">
  <div class="container">
    <div class="services">
      <h3 class="subtitle">
        {subtitle}
      </h3>
      <a>
        <h2 class="title">
          {title}
        </h2>
      </a>
      <div class="services__items">
        <div class="item">
          <div class="image">
            <Locatiton />
          </div>
          <h3>
            {items[0].title}
          </h3>
          <p>
            {items[0].text}
          </p>
        </div>
        <div class="item">
          <div class="image calendar">
            <Calendar />
          </div>
          <h3>
            {items[1].title}
          </h3>
          <p>
            {items[1].text}
          </p>
        </div>
        <div class="item">
          <div class="image">
            <Car />
          </div>
          <h3>
            {items[2].title}
          </h3>
          <p>
            {items[2].text}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .services__wrap {
  padding: 100px 0;
  background: #fff;
}

.services {
  .subtitle {
    color: #acaeb4;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.1225em;
    line-height: 110%;
    text-align: center;
    text-transform: uppercase;
  }

  .title {
    margin-bottom: 50px;
    color: #1d1e21;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.0125em;
    line-height: 124%;
    text-align: center;
  }
}

.services__items {
  display: flex;
  justify-content: space-between;
  gap: 30px;

  .item {
    display: flex;
    flex-basis: 30%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .image {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 129px;
      height: 129px;
      margin-bottom: 40px;
      border-radius: 24px;
      background: #fff;
      box-shadow: 0 12px 32px rgb(169 169 173 / 16%);

      &:hover {
        transform: scale(1.1);
        transition: 0.3s;
      }
    }

    .calendar {
      border-radius: 24px;
      background: radial-gradient(115.89% 115.89% at 49.61% 115.89%, #20bfb6 0%, #09fff1 100%);
      box-shadow: 0 16px 32px rgb(32 191 182 / 30%);
    }

    h3 {
      margin-bottom: 16px;
      color: #1d1e21;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.0125em;
      line-height: 20px;
      text-align: center;
    }

    p {
      color: #929395;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.01em;
      line-height: 144%;
      text-align: center;
    }
  }
}

@media (width <= 992px) {
  .services__wrap {
    padding: 50px 0;
  }

  .services {
    .subtitle {
      font-size: 16px;
      text-transform: lowercase;
    }

    .title {
      margin-bottom: 20px;
      font-size: 20px;
    }
  }

  .services__items {
    flex-wrap: wrap;
    gap: 30px;

    .item {
      flex-basis: 100%;

      .image {
        width: 80px;
        height: 80px;
        margin-bottom: 20px;
      }

      h3 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
      }
    }
  }
}
</style>
