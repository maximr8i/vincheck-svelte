<script lang="ts">
  import '../styles/reset.scss'
  import Footer from '../components/Footer/Footer.svelte'
  import Header from '../components/Header/Header.svelte'
</script>

<Header />
<main>
  <slot />
</main>
<Footer />
