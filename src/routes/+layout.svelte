<script lang="ts">
  import '../styles/reset.scss'
  import Footer from '../components/Footer/Footer.svelte'
  import GoogleAnalytics from '../components/GoogleAnalytics/GoogleAnalytics.svelte'
  import Header from '../components/Header/Header.svelte'
</script>

<svelte:head>
  <GoogleAnalytics />
</svelte:head>
<Header />
<main>
  <slot />
</main>
<Footer />
