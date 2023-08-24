<script lang="ts">
  import Email from '../icons/Email/Email.svelte'
  import Logo from '../icons/Logo/Logo.svelte'
  import Telegram from '../icons/Telegram/Telegram.svelte'
  import Whatsapp from '../icons/Whatsapp/Whatsapp.svelte'
</script>

<footer class="footer__wrap">
  <div class="container">
    <div class="footer">
      <div class="logo">
        <Logo />
        <p>vinCheck</p>
      </div>
      <a href="http://t.me/v1ncheck" class="telegram">
        <Telegram />
        telegram
      </a>
      <a href="mailto: vincheck@inbox.lt" class="email">
        <Email />
        email
      </a>
      <a href="https://wa.me/375257961816" class="telegram">
        <Whatsapp />
        whatsapp
      </a>
    </div>
  </div>
</footer>

<style lang="scss">
  .footer__wrap {
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

@media (width <= 992px) {
  .footer__wrap {
    .footer {
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
      font-size: 14px;
    }
  }
}

</style>
