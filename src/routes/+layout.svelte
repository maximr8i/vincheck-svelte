<script lang="ts">
  import '../styles/reset.scss'
  import GoogleAnalytics from '$lib/GoogleAnalytics/GoogleAnalytics.svelte'
  import YandexAnalytics from '$lib/YandexAnalytics/YandexAnalytics.svelte'
  import Footer from '../components/Footer/Footer.svelte'
  import Header from '../components/Header/Header.svelte'
</script>

<GoogleAnalytics />
<YandexAnalytics />
<Header />
<main>
  <slot />
</main>
<Footer />
