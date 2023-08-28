<script lang="ts">
  import '../styles/reset.scss'
  import GoogleAnalytics from '$lib/GoogleAnalytics/GoogleAnalytics.svelte'
  import Footer from '../components/Footer/Footer.svelte'
  import Header from '../components/Header/Header.svelte'
</script>

<GoogleAnalytics />
<Header />
<main>
  <slot />
</main>
<Footer />
