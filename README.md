## Tercera práctica con React

En esta tercera práctica de React, se realizaron modificaciones en el componente Titulo.jsx. Se agregó un estado (state) con la clave msj y su valor inicial es "(from changed state)". También, se añadió un botón que, al ser presionado (onClick), muestra el valor del estado mensaje por pantalla.
Se agregaron los componentes Navbar y Footer utilizando react-bootstrap y fontawesome.

- **Bootstrap y React-Bootstrap:** Utilizados para estilizar y estructurar la interfaz de usuario de la aplicación de manera eficiente y responsiva.

- **FontAwesome:** Se incorporó FontAwesome para agregar iconos a la interfaz de usuario, proporcionando una experiencia visual mejorada.

- **React:** El proyecto se basa en el framework de trabajo React, permitiendo un desarrollo eficiente y una interfaz de usuario dinámica.



## Dependencias Instaladas
- [Documentación React-bootstrap](https://react-bootstrap.github.io/docs/getting-started/introduction)
- [Documentación React-Fontawesome](https://fontawesome.com/v5/docs/web/use-with/react)


- Copiar y pegar los siguientes comandos en el bash y luego realziar los imports:
>npm install --save @fortawesome/fontawesome-free@6.5.1
>npm i --save @fortawesome/fontawesome-svg-core
>npm install --save @fortawesome/free-solid-svg-icons
>npm install --save @fortawesome/react-fontawesome
>npm install react-bootstrap bootstrap

## Imports de las depdendencias (Main.jsx)

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

# React + Vite

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refreshsh
