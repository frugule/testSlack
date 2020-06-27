<template>
  <div>
    <b-card-group deck>
      <b-card title="Title" header-tag="header" footer-tag="footer">
        <template v-slot:header>
          <h6 class="mb-0">Header Slot</h6>
        </template>
        <b-card-text>Header and footers using slots.</b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
        <template v-slot:footer>
          <em>Footer Slot</em>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
