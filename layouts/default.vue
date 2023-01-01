<template>
  <div id="myframe">

    <!-- header -->
    <header class="absolute top-0 left-0 bg-primary w-full">
     
        <div class="lg:flex lg:flex-wrap relative">

               <!-- navbar -->
        <div class="flex flex-wrap items-center justify-center lg:flex-nowrap lg:justify-start lg:w-4/5">
          <nuxt-link
            to="/"
            class="px-4 block py-5 text-primary w-full w-1/2 text-xs text-center lg:w-auto lg:py-3"
            >Home</nuxt-link
          >
          <nuxt-link
            to="/"
            class="px-4 block py-5 text-primary w-full w-1/2 text-xs text-center lg:w-auto lg:py-3"
            >Daftar Anime</nuxt-link
          >
          <nuxt-link
            to="/"
            class="px-4 block py-5 text-primary w-full w-1/2 text-xs text-center lg:w-auto lg:py-3"
            >Jadwal Rilis</nuxt-link
          >
          <nuxt-link
            to="/"
            class="px-4 block py-5 text-primary w-full w-1/2 text-xs text-center lg:w-auto lg:py-3"
            >Genre</nuxt-link
          >
          <nuxt-link
            to="/"
            class="px-4 block py-5 text-primary w-full w-1/2 text-xs text-center lg:w-auto lg:py-3"
            >Fanspage</nuxt-link
          >
          <nuxt-link
            to="/"
            class="px-4 block py-5 text-primary w-full w-1/2 text-xs text-center lg:w-auto lg:py-3"
            >Cara Download</nuxt-link
          >
          <nuxt-link
            to="/"
            class="px-4 block py-5 text-primary w-full w-1/2 text-xs text-center lg:w-auto lg:py-3"
            >FAQ</nuxt-link
          >
          <nuxt-link
            to="/"
            class="px-4 block py-5 text-primary w-full w-1/2 text-xs text-center lg:w-auto lg:py-3"
            >Request Anime</nuxt-link
          >
        </div>
        <!-- endnavbar -->

          <!-- searchbox -->
          <div class="flex justify-center lg:w-1/5 lg:absolute lg:right-1 lg:top-1">
          <div class="w-full">
            <input
              type="search"
              class="form-control block w-full px-3 py-1.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleSearch"
              placeholder="Search..."
            />
          </div>
        </div>
        <!-- end searcbox -->  
        </div>
     
        <!-- logo -->
        <div class="flex justify-center lg:border-t-2 lg:border-secondary lg:border-solid group shadow-lg">
         
            <h1 class="px-6 py-6 text-xl font-semibold text-primary transition ease-linear duration-1000 group-hover:scale-150 lg:text-2xl">KACHONIME</h1>
          
        </div>
        <!-- endlogo -->
    </header>

    <!-- footer -->
    <footer></footer>

    <Nuxt/>
  </div>



</template>

<script>
export default {}
</script>

<style>
header {
  font-family: 'Roboto Condensed', sans-serif;
}
</style>
