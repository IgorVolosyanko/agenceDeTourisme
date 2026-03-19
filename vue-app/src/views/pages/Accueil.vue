<template>
  <div className="p-8 min-h-screen">
    <section className="text-center mb-10">
      <h1 className="text-3xl font-bold text-blue-600">
        Bienvenue chez VoyagePlus
      </h1>
      <p className="mt-4 text-lg text-blue-900">
        Votre agence spécialisée dans les forfaits touristiques sur mesure
        partout dans le monde.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3 text-blue-900">
        Pourquoi choisir notre agence ?
      </h2>
      <ul className="list-disc ml-6 space-y-2 text-blue-900">
        <li>Large choix de forfaits touristiques</li>
        <li>Destinations culturelles, plage et aventure</li>
        <li>Prix compétitifs et service personnalisé</li>
        <li>Expérience client au cœur de nos priorités</li>
      </ul>
    </section>

    <section className="bg-blue-100 p-6 rounded text-center">
      <h2 className="text-xl font-semibold mb-2 text-blue-900">
        Prêt à partir à l’aventure ?
      </h2>
      <p className="mb-4 text-blue-900">
        Découvrez nos forfaits touristiques dès maintenant.
      </p>
      <router-link
        to="/forfaits"
        className="inline-block btn p-2 border rounded-xl  bg-blue-600 hover:bg-blue-500 text-gray-100"
      >
        Voir les forfaits
      </router-link>
    </section>
  </div>
</template>
