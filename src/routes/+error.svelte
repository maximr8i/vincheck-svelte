<script>
  import localization from '$lib/data/localization'
  import Image from '$lib/image/error.gif'
  import { language } from '$lib/stores/language'

  $: title = localization[$language].error.title
  $: subtitle = localization[$language].error.subtitle
  $: subsubtitle = localization[$language].error.subsubtitle
</script>

<svelte:head>
  <title>
    Сайт vincheck.by предоставляет бесплатную информацию о повреждениях страховых
    автомобилей в Америке, после аварии, града, наводнения,
    кражи или любого другого страхового случая.
  </title>
  <meta
    name="description"
    content="Сайт vincheck.by предоставляет бесплатную информацию о повреждениях страховых автомобилей в Америке,
    после аварии, града, наводнения, кражи или любого другого страхового случая."
  />
  <link rel="icon" href="./public/favicon.ico" type="image/x-icon" />
  <meta name="keywords" content="" />
  <meta name="robots" content="noindex" />
</svelte:head>
<section>
  <div class="container">
    <div class="errorPage">
      <h1>{title}
        <a href="/" class="link">{subtitle}</a>{subsubtitle}
      </h1>
      <img src={Image} alt="500" width={245} height={200} />
    </div>
  </div>
</section>

<style lang="scss">
.errorPage {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  gap: 30px;

  h1 {
    position: relative;
    z-index: 2;
    color: #fdfdfd;
    font-size: 24px;
    line-height: 31px;
  }

  .link {
    color: #b00d23;
    font-weight: 600;
  }
}
</style>
