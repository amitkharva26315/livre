<template>
<div>
  <!-- <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
  </q-page> -->
  <CrudDataTable></CrudDataTable>
</div>
</template>

<script>
import CrudDataTable from 'components/CrudDataTable';
export default {
  name: 'PageIndex',
  components:{
    CrudDataTable
  }
}
</script>
