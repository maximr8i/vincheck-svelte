<script lang="ts">
  import back from '$lib/assets/main-back.png'
  import TelegramSvg from '$lib/components/TelegramSvg.svelte'
  import WhatsappSvg from '$lib/components/WhatsappSvg.svelte'
  import Location from '$lib/components/Location.svelte'
  import Calendar from '$lib/components/Calendar.svelte'
  import Car from '$lib/components/Car.svelte'
  import Wallet from '$lib/components/Wallet.svelte'
  import Profile from '$lib/components/Profile.svelte'
  import Time from '$lib/components/Time.svelte'
  import Message from '$lib/components/Message.svelte'
  import bmw from '$lib/assets/bmw.png'
  import EmailSvg from '$lib/components/EmailSvg.svelte'
</script>

    <header class="headerWrap">
      <div class="container">
        <div class="header">
          <a href="/">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="logo">
              <p><span>vin</span>Check</p>
            </a>
          </a>
          <nav class="menu">
            <ul>
              <li>
                <a href="/">
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <a>
                    <button type="button">
                      Catalog
                    </button>
                  </a>
                </a>
              </li>
              <li>
                <a href="http://t.me/v1ncheck" class="telegram">
                  <TelegramSvg />
                </a>
              </li>
              <li>
                <a href="https://wa.me/375257961816" class="whatsapp">
                  <WhatsappSvg />
                </a>
              </li>
              <li>
                <button type="button">EN</button>
              </li>
              <li>
                <button type="button">RU</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
<section class="main">
  <div class="container">
    <div class="searchWrap">
      <div class="image">
        <img src={back} alt="background" />
      </div>
      <div class="search">
        <h1>Проверьте ваш автомобиль по<span>VIN</span>перед покупкой.</h1>
        <h2>Мы сохраняем историю данных с аукционов США Copart и IAAI</h2>
        <form class="handling">
          <input type="text" placeholder="введите VIN" />
          <button type="submit">
            Поиск
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
<section class='servicesWrap'>
  <div class='container'>
    <div class='services'>
      <h3 class='subtitle'>
        КАК ЭТО РАБОТАЕТ
      </h3>
      <a id='services'>
        <h2 class='title'>
          Мы предоставляем
        </h2>
      </a>
      <div class='servicesItems'>
        <div class='item'>
          <div class='services_image'>
            <Location />
          </div>
          <h3>
            Большая база VIN номеров
          </h3>
          <p>
            Мы собираем базу с аукционов США
          </p>
        </div>
        <div class='item'>
          <div class='services_image'>
            <Calendar />
          </div>
          <h3>
            В любое время
          </h3>
          <p>
            Никаких ограничений по количеству проверок
          </p>
        </div>
        <div class='item'>
          <div class='services_image'>
            <Car />
          </div>
          <h3>
            Большая база фотографий авто
          </h3>
          <p>
            Проверьте начальное состояние вашего авто
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="advantageWrapper">
  <div class="container">
    <div class="advantage">
      <div class="bmw_image">
        <img src={bmw} alt="BMW" />
      </div>
      <div class="description">
        <h3>ПОЛУЧИТЕ ДОСТУП К ИСТОРИИ ВАШЕГО АВТО</h3>
        <h2>Если вы давно хотели купить авто из США</h2>
        <ul class="list">
          <li>
            <div class="icon">
              <Wallet />
            </div>
            <div class="text">
              <p>Стоит проверить его еще до осмотра</p>
              <p>Кто знает по какой причине он был продан?</p>
            </div>
          </li>
          <li>
            <div class="icon">
              <Profile />
            </div>
            <div class="text">
              <p>Получите данные о пробеге</p>
              <p>Кто знает о настоящих цифрах?</p>
            </div>
          </li>
          <li>
            <div class="icon">
              <Time />
            </div>
            <div class="text">
              <p>Узнайте степень повреждения авто</p>
              <p>Будьте готовы</p>
            </div>
          </li>
          <li>
            <div class="icon">
              <Message />
            </div>
            <div class="text">
              <p>Достаточно большая информация по авто</p>
              <p>Собираем самое важное</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<footer class="footerWrap">
  <div class="container">
    <div class="footer" id="contact">
      <div class="logo">
        <!-- <Logo /> -->
        <p>vinCheck</p>
      </div>
      <a href="http://t.me/v1ncheck" class="telegram">
        <TelegramSvg />
        telegram
      </a>
      <a href="mailto: vincheck@inbox.lt" class="email">
        <EmailSvg />
        email
      </a>
      <a href="https://wa.me/375257961816" class="telegram">
        <WhatsappSvg />
        whatsapp
      </a>
    </div>
  </div>
</footer>

<style lang="scss">
  .headerWrap {
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
  justify-content: space-between;
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

    svg {
      width: 40px;
      height: 40px;
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

.telegram,
.email,
.whatsapp {
  svg {
    width: 30px;
    height: 30px;
  }
}

.burger {
  display: none;
}

  .main {
  background: #000;
}

.searchWrap {
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
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    input {
      width: 80%;
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

.servicesWrap {
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

.servicesItems {
  display: flex;
  justify-content: space-between;
  gap: 30px;

  .item {
    display: flex;
    flex-basis: 30%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .services_image {
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

.advantageWrapper {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 200px;
    height: 75%;
    background-color: #fff;
    filter: blur(150px);
    backdrop-filter: blur(-1);
  }
}

.advantage {
  display: flex;
  justify-content: space-between;
  padding: 100px 0;
  gap: 40px;
}

.bmw_image {
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

.footerWrap {
  background: #010101;

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    color: #fff;
    font-size: 16px;
    font-weight: 500;

    .logo {
      display: flex;
      align-items: center;
      gap: 15px;
      font-weight: 600;

      svg {
        width: 30px;
        height: 30px;
      }
    }

    .telegram {
      display: flex;
      align-items: center;
      gap: 15px;

      svg {
        width: 30px;
        height: 30px;
      }
    }

    .email {
      display: flex;
      align-items: center;
      gap: 15px;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
