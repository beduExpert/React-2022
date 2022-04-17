[`React`](../../README.md) > [`Sesión 07: React Router`](../Readme.md) > `Postwork`

---

# Postwork

## 🎯 Objetivos

- Crear una SPA con React
- Manejar rutas, pasar parámetros y realizar redireccionamiento

## 🛠 Desarrollo

Tu aplicación ya es bastante robusta, para dar una mejor experiencia al usuario puedes agregar enrutamiento con todo lo visto en esta sesión. Esto te permitirá agregar distintas vistas dependiendo de la URL que esté visitando el usuario.

Sigue las siguientes instrucciones:

- Instala la versión más reciente de React Router
- Utiliza el componente `<BrowserRouter>` para envolver toda tu aplicación.
- Define una ruta de inicio para la aplicación, esta debe ser diferente al menú, aquí puedes renderizar el nombre de la aplicación, una breve descripción y una imagen.
- Define una ruta `/menu` para el menú que ya tienes.
- Define una ruta `/menu/:mealId` para renderizar los detalles del platillo. Si en la sesión anterior agregaste en Firebase más información a cada platillo aquí puedes mostrar esa información.
- Define una ruta `/checkout`. Si aún no lo tienes agrega un botón al modal que diga Ordenar, este botón debe llevar a la nueva ruta `/checkout` donde mostrarás el resumen de la compra.
- Define una ruta que se muestre por defecto cuando la ruta no se encuentre y muestra al usuario un mensaje como `Página no encontrada`.
- Agrega links de navegación para todas las rutas.
