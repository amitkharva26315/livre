<template>
  <div>
        <AutoComplete v-model="selectedCountry1" :suggestions="filteredCountries" @complete="searchCountry($event)" :dropdown="true" field="name" placeholder="Select Country" style="width:100%">
            <template #item="slotProps">
                <div class="country-item">
                    <div>{{slotProps.item.name}}</div>
                </div>
            </template>
        </AutoComplete>
  </div>
</template>

<script>
import AutoComplete from 'primevue/autocomplete';
export default {
    name:"p-AutoComplete",
    components:{
        AutoComplete
    },
    data() {
		return {
            selectedCountry1:[],
            filteredCountries: [],
            selectedCountries: []
		}
	},
	mounted() {
        // this.countryService.getCountries().then(data => this.countries = data);
        
        // this.$store.dispatch('getcountries').then((data)=>{
        //     this.countries = data;
        //     console.log(this.countries);
        // });
        // this.countries = this.$store.state.livre.countries;
        this.$store.dispatch('demo/getCountries', {'url':'api/act/countries'}).then((data)=>{
            this.countries = data;
        })
    },
    computed: {
        countries: {
            get () {
                return this.$store.state.demo.countries
            },
            set (val) {
                this.$store.commit('demo/updateCountries', val)
            }
        }
    },
    methods: {
        searchCountry(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    console.log(this.countries);
                    if(this.countries)
                        this.filteredCountries = [...this.countries];
                    else 
                        this.countries = [];
                }
                else {
                    this.filteredCountries = this.countries.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        }
    }
}
</script>

<style>

</style>