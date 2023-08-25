<script lang="ts">
  export let photos: string[]
  export let vin: string
  export let handleImage: () => boolean
</script>

<div class="popup">
  <ul>
    <button type="button" class="cross" on:click={handleImage} />
    {#each photos as photo}
    <li key={vin}>
      <img src={photo} alt={vin} />
    </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .popup {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 100px 0;
  overflow: scroll;
  background: rgb(0 0 0 / 50%);

  .cross {
    position: fixed;
    top: 15px;
    right: 15px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #fff;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 16px;
      left: 5px;
      width: 70%;
      height: 3px;
      background: #929395;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }

  ul {
    li {
      width: 100%;
      margin-bottom: 10px;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    li:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
