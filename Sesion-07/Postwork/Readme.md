[`React`](../../README.md) > [`Sesi贸n 07: React Router`](../Readme.md) > `Postwork`

---

# Postwork

## 馃幆 Objetivos

- Crear una SPA con React
- Manejar rutas, pasar par谩metros y realizar redireccionamiento

## 馃洜 Desarrollo

Tu aplicaci贸n ya es bastante robusta, para dar una mejor experiencia al usuario puedes agregar enrutamiento con todo lo visto en esta sesi贸n. Esto te permitir谩 agregar distintas vistas dependiendo de la URL que est茅 visitando el usuario.

Sigue las siguientes instrucciones:

- Instala la versi贸n m谩s reciente de React Router
- Utiliza el componente `<BrowserRouter>` para envolver toda tu aplicaci贸n.
- Define una ruta de inicio para la aplicaci贸n, esta debe ser diferente al men煤, aqu铆 puedes renderizar el nombre de la aplicaci贸n, una breve descripci贸n y una imagen.
- Define una ruta `/menu` para el men煤 que ya tienes.
- Define una ruta `/menu/:mealId` para renderizar los detalles del platillo. Si en la sesi贸n anterior agregaste en Firebase m谩s informaci贸n a cada platillo aqu铆 puedes mostrar esa informaci贸n.
- Define una ruta `/checkout`. Si a煤n no lo tienes agrega un bot贸n al modal que diga Ordenar, este bot贸n debe llevar a la nueva ruta `/checkout` donde mostrar谩s el resumen de la compra.
- Define una ruta que se muestre por defecto cuando la ruta no se encuentre y muestra al usuario un mensaje como `P谩gina no encontrada`.
- Agrega links de navegaci贸n para todas las rutas.
