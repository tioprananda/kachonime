<template>
  <div id="app">
   
    <div class="mt-[380px] w-full lg:mt-40">

      <!-- TOP ANIME -->
      <div class="container mx-auto lg:px-24">
        <div class="mx-auto">
          <div
            class="flex flex-row-reverse items-center bg-primary py-3 mb-2 w-full block text-lg uppercase text-primary px-4 shadow-md relative"
          >
            <h1
              class="inline absolute left-4 text-center text-base px-4 lg:text-xl"
            >
              TOP ANIME
            </h1>
            <div class="flex space-x-2 justify-center">
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-red-500 text-primary font-normal text-xs leading-tight uppercase rounded shadow-md hover:bg-red-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
              >
                MORE
              </button>
            </div>
          </div>
        </div>
        <!-- CARDS -->
        <div class="container mx-auto">
    <div class="flex flex-wrap justify-between w-full">
          <CardsImage v-for="item in movies" :key="item.id" :moviesProps = "item"/>
        </div>
        </div>
        
        <!-- END CARDS -->
      </div>
      <!-- END TOP ANIME -->

      
    </div>
  </div>

  
</template>

<script>
import axios from 'axios'

export default {
  name: 'IndexPage',

  data() {
    return {
      movies: [],
    }
  },

  async fetch() {
    await this.getMovies()
  },

  methods: {
    getMovies: async function () {
      const data = axios.get(`https://api.jikan.moe/v4/top/anime`)
      const result = await data

      result.data.data.forEach((item) => {
        if(this.movies.length < 6){
        this.movies.push(item)
      }
      })
      console.log(this.movies)
    },
  },
}
</script>

<style>
/* body {
    color : rgb(26, 206, 176)
  } */
</style>
