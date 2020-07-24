<template>
  <div>
<q-toggle v-model="drawerState" />

<br><br>

    <div class="p-grid">
      <div class="p-col-4">
        <InputText type="text" v-model="value" placeholder="Add Country" style="width:100%" />
      </div>
      <div class="p-col-2">
        <Button label="Add" class="p-button" style="width:100%" @click="addCountries = value" />
      </div>
    </div>

<br><br>

    <div class="p-grid">
      <div class="p-col-4">
        <PAutoComplete></PAutoComplete>
      </div>
      <div class="p-col-2">
        <Button label="Hard Refresh" class="p-button" style="width:100%" @click="updateCountries = value" />
      </div>
    </div>
      
  </div>
</template>

<script>
import PAutoComplete from "components/AutoComplete";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import 'primeflex/primeflex.css';

export default {
  name:"StoreDemo",
  components:{
      PAutoComplete,
      InputText,
      Button
  },
  computed: {
    drawerState: {
      get () {
        return this.$store.state.demo.drawerState
      },
      set (val) {
        this.$store.dispatch('demo/updateDrawerState', val)
        // this.$store.commit('demo/updateDrawerState', val)
      }
    },
    addCountries: {
      get () {
        return this.$store.state.demo.addCountry
      },
      set(val){
        this.$store.dispatch('demo/addCountry', this.value)
      }
    },
    updateCountries: {
      get () {
        return this.$store.state.demo.updateCountries
      },
      set(val){
        this.$store.dispatch('demo/updateCountries', this.value)
      }
    }
  },
  data() {
    return {
      value:'',
      drawerState2:false   
    }
  },
  methods:{
    // addCountries(){
    //   console.log(this.$store);
    //   this.$store.commit['livre/someMutation'];
    //   // this.$store.dispatch('someAction');
    //   // this.$store.dispatch('addCountry',this.value);
    //   // this.$store.commit('livre/addCountry', this.value)
    // }
  }
}
</script>

<style>

</style>