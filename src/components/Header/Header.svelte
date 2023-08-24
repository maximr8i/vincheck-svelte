<script lang="ts">
  import { langText, language } from '../../routes/stores'
  import Logo from '../icons/Logo/Logo.svelte'
  import Telegram from '../icons/Telegram/Telegram.svelte'
  import Whatsapp from '../icons/Whatsapp/Whatsapp.svelte'

  $: title = $langText[$language].header.title

  function setEn() {
    language.set('en')
  }

  function setRu() {
    language.set('ru')
  }
</script>

<header class="header__wrap">
  <div class="container">
    <div class="header">
        <a href="/" class="logo">
          <Logo />
          <p><span>vin</span>Check</p>
        </a>
      <nav class="menu">
        <ul>
          <li>
              <a href="/catalog?page=1">
                <button type="button">
                  {title}
                </button>
              </a>
          </li>
          <li>
            <a href="http://t.me/v1ncheck" class="telegram">
              <Telegram />
            </a>
          </li>
          <li>
            <a href="https://wa.me/375257961816" class="whatsapp">
              <Whatsapp />
            </a>
          </li>
          <li>
            <button type="button" on:click={setEn}>EN</button>
          </li>
          <li>
            <button type="button" on:click={setRu}>RU</button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>

<style lang="scss">
  .header__wrap {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  background: #000;
}

.header {
  display: flex;
  align-items: center;
  color: #fdfdfd;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.0125em;
  line-height: 110%;

  .logo {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: 15px;
    font-weight: 600;

    span {
      color: #fdfdfd;
    }
  }

  a {
    button {
      color: #fdfdfd;
      text-transform: uppercase;

      &:hover {
        transition: 0.3s;
        color: #00c8ff;
      }
    }

    &:hover {
      transition: 0.3s;
      color: #00c8ff;
    }
  }
}

.menu {
  ul {
    display: flex;
    gap: 20px;
    align-items: center;

    li {
      button {
        color: #fdfdfd;
        font-size: 16px;
        font-weight: 700;

        &:hover {
          color: #00c8ff;
        }
      }
    }
  }
}

@media (width <= 992px) {
  .header__wrap {
    padding: 20px 0;
  }

  .header {
    font-size: 16px;
  }
}

@media (width <= 768px) {
  .header {
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  }
}
</style>
