const config = {
  locales: ['es'],
  translations: {
    es: {
      "app.components.HomePage.welcome": "Bienvenido a eLauncher!",
      "app.components.HomePage.welcome.again": "Bienvenido",
      "Auth.form.welcome.subtitle": "Inicie sesión en su cuenta de eLauncher",
      "app.components.LeftMenu.navbrand.title": "Panel de control de eLauncher",
      "app.components.HomePage.welcomeBlock.content.again": "Hola, espero que eLauncher te ayude en la gestion de tu biblioteca de juegos, si tienes problemas puedes pedir ayuda al WSP 51961283300",
      "app.components.HomePage.community": "Encuentre ayuda con el desarrollador",
      "app.components.HomePage.community.content": "Hable con el desarrollador de eLauncher, solicite una funcion, comente un problema, sugiera cambios, etc",
      "global.documentation": "Apps",
      "app.components.BlockLink.documentation.content": "Configura tus apps, muestralos, ocultalos, cambia de iconos",
      "app.components.BlockLink.code": "Games",
      "app.components.BlockLink.code.content":"Configura tus juegos, muestralos, ocultalos, cambia los cover, agrega videos, agrega imagenes, etc",
    },
  },
};


const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
