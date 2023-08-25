<script lang='ts'>
  import { goto } from '$app/navigation'
  import localization from '$lib/data/localization'
  import mainBack from '$lib/image/main-back.png'
  import { language } from '$lib/stores/language'

  let vin = ''
  let car
  $: error = ''
  const { errorText: { first, second } } = localization[$language]

  $: button = localization[$language].mainPage.search.button
  $: placeholder = localization[$language].mainPage.search.placeholder
  $: subtitle = localization[$language].mainPage.search.subtitle
  $: title = localization[$language].mainPage.search.title

  async function searchCar() {
    if (vin.length === 17) {
      const res = await fetch(`/api/search/${vin}`)

      car = await res.json()

      if (!car.results.length) {
        error = first
      } else {
        error = ''

        goto(`catalog/${car.results[0].vin}`)
      }
    }
    if (vin.length < 17 || vin.length > 17) {
      error = second
    }
  }
</script>

<section class="main">
  <div class="container">
    <div class="search__wrap">
      <div class="image">
        <img src={mainBack} alt="background" />
      </div>
      <div class="search">
        <h1>{title[0]}<span>VIN</span>{title[1]}</h1>
        <h2>{subtitle}</h2>
        <form class="handling">
          <div class="input__wrapper">
            <input type="text" placeholder={placeholder} bind:value={vin}/>
            {#if error}
              <p class="error">{error}</p>
            {/if}
          </div>
          <button type="submit" on:click={searchCar}>
            {button}
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .main {
  background: #000;
}

.search__wrap {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  min-height: 550px;
  padding: 100px 0;
}

.image {
  position: absolute;
  z-index: 1;
  right: -15%;
  bottom: 50%;
  width: 60%;
  transform: translateY(50%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.search {
  position: relative;
  z-index: 2;
  flex-basis: 60%;
  flex-shrink: 0;

  h1 {
    margin-bottom: 20px;
    color: #fdfdfd;
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
        bottom: 2px;
        left: 0;
        width: 100%;
        height: 4px;
        transform: skew(0deg, -5deg);
        border-radius: 15px 100px;
        background: #00c8ff;
      }
    }
  }

  h2 {
    margin-bottom: 40px;
    color: #e5e5e5;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 144%;
  }

  .handling {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;

    .input__wrapper{
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 16px;

      input {
          width: 95%;
          padding: 15px;
          border-radius: 8px;
          background: #fdfdfd;
          color: #000;
          font-size: 18px;
          text-transform: uppercase;

          &::placeholder {
            color: #000;
            text-transform: lowercase;
          }
        }

        p{
          color: red;
          font-size: 18px;
          font-weight: 500;
        }
    }



    button {
      width: 30%;
      padding: 17px;
      border-radius: 14px;
      background: #00c8ff;
      color: #fff;
      font-size: 18px;
      font-weight: 500;

      &:hover {
        transition: 0.3s;
        background: #00b1e2;
      }
    }
  }
}

.cardLink {
  position: relative;
  z-index: 2;
  align-self: flex-start;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 8px;
  background: #fff;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
}

.card {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  background: #fff;

  img {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .description {
    position: relative;
    z-index: 2;
    align-self: flex-end;
    width: 100%;
    padding: 30px 20px;
    background: rgb(29 30 33 / 80%);
    color: #fff;
    font-size: 16px;
    font-weight: 500;

    li {
      margin-bottom: 15px;
    }

    li:last-child {
      margin-bottom: 0;
      font-size: 20px;
      font-weight: 600;
    }
  }
}

.fade {
  display: none;
}

@media (width <= 992px) {
  .search__wrap {
    flex-direction: column-reverse;
    min-height: initial;
    padding: 50px 0;
    gap: 30px;

    .search {
      flex-basis: 100%;
    }
  }

  .image {
    position: relative;
    right: inherit;
    bottom: 0;
    width: 100%;
    height: 300px;
    transform: initial;

    img {
      object-fit: contain;
    }
  }

  .cardLink {
    width: 100%;
    max-width: 300px;
    height: 300px;
    padding: 10px;
  }

  .card {
    .description {
      padding: 20px;
      font-size: 14px;
      font-weight: 500;

      li {
        margin-bottom: 10px;
      }

      li:last-child {
        font-size: 18px;
      }
    }
  }

  .search {
    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 16px;
    }
  }
}

@media (width <= 768px) {
  .cardLink {
    max-width: 400px;
    height: 250px;
  }

  .search__wrap {
    align-items: center;
    justify-content: initial;
    padding: 25px 0;
  }

  .search {
    align-self: flex-start;
    width: 100%;
    transform: none;

    h1 {
      font-size: 24px;
    }

    h2 {
      margin-bottom: 15px;
      font-size: 14px;
    }

    .handling {
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;

      .input__wrapper{
        input {
          width: 100%;
          padding: 12px;
          font-size: 14px;
        }
      }

      button {
        width: 100%;
        padding: 10px;
        font-size: 14px;
      }
    }
  }
}

</style>
