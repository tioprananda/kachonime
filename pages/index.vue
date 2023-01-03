<template>
  <div id="app">
   
    <div class="mt-[380px] w-full lg:mt-40">
      <div class="container mx-auto lg:px-24">

          <!-- TOP ANIME -->
        <div class="mx-auto my-5">
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
              <CardsImage v-for="item in topAnime" :key="item.id" :moviesProps = "item"/>
            </div>
        </div>
        <!-- END CARDS -->
          <!-- END TOP ANIME -->

           <!-- ONGOING -->
        <div class="mx-auto my-5">
          <div
            class="flex flex-row-reverse items-center bg-primary py-3 mb-2 w-full block text-lg uppercase text-primary px-4 shadow-md relative"
          >
            <h1
              class="inline absolute left-4 text-center text-base px-4 lg:text-xl"
            >
              ONGOING
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
              <CardsImage v-for="item in ongoingAnime" :key="item.id" :moviesProps = "item"/>
            </div>
        </div>
        <!-- END CARDS -->
          <!-- END ONGOING -->

             <!-- Batch-->
        <div class="mx-auto my-5">
          <div
            class="flex flex-row-reverse items-center bg-primary py-3 mb-2 w-full block text-lg uppercase text-primary px-4 shadow-md relative"
          >
            <h1
              class="inline absolute left-4 text-center text-base px-4 lg:text-xl"
            >
              Batch
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
              <CardsImageEpisodes v-for="item in batchAnime" :key="item.id" :moviesProps = "item"/>
            </div>
        </div>
        <!-- END CARDS -->
          <!-- END Batch-->

      </div>
    </div>
  </div>

  
</template>

<script>
import axios from 'axios'

export default {
  name: 'IndexPage',

  data() {
    return {
      topAnime: [],
      ongoingAnime : [],
      batchAnime : [],
    }
  },

  async fetch() {
    await this.getMovies()
  },

  methods: {
    getMovies: async function () {

      const topMovies = axios.get(`https://api.jikan.moe/v4/top/anime`)
      const result = await topMovies
      result.data.data.forEach((item) => {
        if(this.topAnime.length < 6){
        this.topAnime.push(item)
        };
      });

      const ongoingMovies = axios.get(`https://api.jikan.moe/v4/seasons/now`)
      const ongoingResult = await ongoingMovies;
      ongoingResult.data.data.forEach((item) => {
        if(this.ongoingAnime.length < 6) {
          this.ongoingAnime.push(item)
        }
      });
      
      const animeMovies = axios.get(`https://api.jikan.moe/v4/anime`)
      const moviesResult = await animeMovies;
      moviesResult.data.data.forEach((item) => {
        if(this.batchAnime.length < 6) {
          this.batchAnime.push(item)
        }
      });
      console.log(this.batchAnime)
    },
  },
}
</script>

<style>
body {
    background: rgb(235, 235, 230);
  }
</style>
