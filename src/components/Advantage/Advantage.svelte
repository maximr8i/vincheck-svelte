<script lang="ts">
  import { useLazyImage as lazyImage } from 'svelte-lazy-image'
  import localization from '$lib/data/localization'
  import bmw from '$lib/image/bmw.webp'
  import { language } from '$lib/stores/language'
  import Message from '../icons/Message/Message.svelte'
  import Profile from '../icons/Profile/Profile.svelte'
  import Time from '../icons/Time/Time.svelte'
  import Wallet from '../icons/Wallet/Wallet.svelte'

  $: title = localization[$language].mainPage.advantage.title
  $: subtitle = localization[$language].mainPage.advantage.subtitle
  $: items = localization[$language].mainPage.advantage.items

</script>

<section class="advantage__wrapper">
  <div class="container">
    <div class="advantage">
      <div class="image">
        <img data-src={bmw} src={bmw} alt="BMW" use:lazyImage />
      </div>
      <div class="description">
        <h3>{subtitle}</h3>
        <h2>{title}</h2>
        <ul class="list">
          <li>
            <div class="icon">
              <Wallet />
            </div>
            <div class="text">
              <p>{items[0].firstText}</p>
              <p>{items[0].secondText}</p>
            </div>
          </li>
          <li>
            <div class="icon">
              <Profile />
            </div>
            <div class="text">
              <p>{items[1].firstText}</p>
              <p>{items[1].secondText}</p>
            </div>
          </li>
          <li>
            <div class="icon">
              <Time />
            </div>
            <div class="text">
              <p>{items[2].firstText}</p>
              <p>{items[2].secondText}</p>
            </div>
          </li>
          <li>
            <div class="icon">
              <Message />
            </div>
            <div class="text">
              <p>{items[3].firstText}</p>
              <p>{items[3].secondText}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .advantage__wrapper {
  position: relative;
}

.advantage {
  display: flex;
  justify-content: space-between;
  padding: 100px 0;
  gap: 40px;
}

.image {
  position: relative;
  flex-basis: 60%;

  .positionImg {
    position: absolute;
    width: 200px;
    height: 100px;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &:hover {
      img {
        transform: scale(1.3);
        transition: 0.3s;
      }
    }
  }

  div:first-child {
    top: 0;
    left: 0;
  }

  div:nth-child(2) {
    top: 0;
    right: 0;
  }

  div:nth-child(3) {
    bottom: 0;
    left: 0;
  }

  div:nth-child(4) {
    right: 0;
    bottom: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.description {
  flex: 1 1 auto;

  h3 {
    margin-bottom: 16px;
    color: #acaeb4;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.1225em;
    line-height: 110%;
    text-align: center;
    text-transform: uppercase;
  }

  h2 {
    margin-bottom: 32px;
    color: #fdfdfd;
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 0.0125em;
    line-height: 124%;
  }
}

.list {
  li {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: #fff;
      box-shadow: 0 12px 32px rgb(169 169 173 / 16%);
    }

    .text {
      p:first-child {
        margin-bottom: 8px;
        color: #fdfdfd;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.0125em;
        line-height: 18px;
      }

      p:last-child {
        color: #929395;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.01em;
        line-height: 144%;
      }
    }
  }

  li:last-child {
    margin-bottom: 0;
  }
}

@media (width <= 992px) {
  .advantage {
    flex-wrap: wrap;
    padding: 50px 0;
    gap: 40px;
  }

  .image {
    flex-basis: 100%;
    height: 200px;

    .positionImg {
      display: none;
    }
  }

  .description {
    flex: 1 1 auto;

    h3 {
      margin-bottom: 10px;
      font-size: 16px;
      text-align: center;
      text-transform: lowercase;
    }

    h2 {
      margin-bottom: 20px;
      font-size: 20px;
      text-align: center;
    }
  }

  .list {
    li {
      .icon {
        width: 50px;
        height: 50px;
      }

      .text {
        p:first-child {
          font-size: 14px;
        }

        p:last-child {
          font-size: 12px;
          line-height: 144%;
        }
      }
    }

    li:last-child {
      margin-bottom: 0;
    }
  }
}

@media (width <= 768px){
  .image {
    display: none;
  }
}

</style>
