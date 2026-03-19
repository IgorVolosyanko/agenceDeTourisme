<template>
  <footer className="bg-blue-600 p-2 text-white">
    <div
      className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
    >
      <span className="text-sm text-body sm:text-center">
        © 2023
        <a href="https://flowbite.com/" className="hover:underline">
          Agence de voyages
        </a>
        . All Rights Reserved.
      </span>
      <ul
        className="flex flex-wrap gap-5 items-center mt-3 text-sm font-medium text-body sm:mt-0"
      >
        <li>
          <router-link to="/">Accueil</router-link>
        </li>
        <li>
          <router-link to="/forfaits">Forfaits</router-link>
        </li>
        <li>
          <router-link to="/apropos">À propos</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>
;
