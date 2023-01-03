<template>
  
      <!-- LOPPING CARDS -->
      <div class="card my-2 w-full md:w-1/2 lg:w-1/3">
        <div class="flex justify-center px-2">
          <div class="rounded-lg shadow-lg bg-white max-w-md relative overflow-hidden">
            <div
            class="overflow-hidden group"
            >
            <nuxt-link
              :to="{name : 'id', params : {id : moviesProps.mal_id}}"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
                <img
                  class="w-[700px] w-screen transform h-[40vh] group-hover:scale-110 transition duration-1000 ease-in-out"
                  :src="moviesProps.images.jpg.large_image_url"
                  alt=""
                />
            

              <div
                class="absolute top-5 left-0 w-20 bg-red-400 px-3 py-2 group-hover:translate-x-3 transition ease-in-out duration-1000"
              >
              <div v-if="this.moviesProps.episodes">
                <h1 class="text-center text-xs text-primary">
                  Episodes : {{ moviesProps.episodes }}
                </h1>
              </div>
              <div v-else>
                <h1 class="text-center text-xs text-primary">
                  Ongoing
                </h1>
              </div>
           
              </div>

              <div
                class="py-3 absolute bottom-2 bg-white -skew-y-6 w-full group-hover:-translate-y-6 transition ease-in-out duration-1000"
              >
                <h5
                  class="text-gray-900 text-xl font-medium mb-2 text-center text-base"
                >
                  {{ moviesProps.title }}
                </h5>
              </div>
            </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <!-- END LOOPING CARDS -->
   
</template>

<script>
export default {
  name: 'CardsImageEpisodes',
  props: ['moviesProps'],
  data(){
    return{
    }
  },
  methods: {
  },
}
</script>

<style></style>
