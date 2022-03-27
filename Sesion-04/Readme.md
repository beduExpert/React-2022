[`React`](../README.md) > `Sesión 04: Fragments, Portals y Refs`

---

# Sesión 04 - Fragments, Portals y Refs

## 🎯 Objetivos

- Renderizar elementos en un nodo del DOM que se encuentra afuera de la jerarquía del componente padre
- Obtener acceso a nodos del DOM o elementos de React creados en el método render

## 🛠 Contenido

### React Fragments

Hasta ahora hemos sido cuidadosos al crear nuestros componentes y hemos tratado de no retornar un `<div>` para envolver más de un elemento. Sin embargo, en nuestro componente `App` tuvimos que envolver los componentes `<NewExpense>` y `<Expenses>` en un `<div>`.

![No Fragment](./assets/no-fragment.png)

Aprovechemos para usar React Fragments y corregir este detalle.

- [`Ejemplo 01: React Fragments`](./Ejemplo-01/Readme.md)

### React Portals

Los portales nos permiten renderizar elementos en un nodo del DOM que se encuentra afuera de la jerarquía del componente padre, un buen ejemplo de uso son los componentes que sobresalen visualmente de su contenedor, por ejemplo, alertas, cuadros de diálogo, tooltips, o hovercards.

- [`Ejemplo 02: React portals`](./Ejemplo-02/Readme.md)

- [`Reto 01: Error Modal`](./Reto-01/Readme.md)

Para mejorar la experiencia del modal podemos agregar un backdrop. Esto es oscurecer un poco el fondo para resaltar visualmente el modal, otra característica es que agrega una opción más al usuario para cerrar el modal, además del botón `Aceptar` si el usuario hace click en cualquier otra parte fuera del modal este se cierra.

- [`Reto 02: Backdrop`](./Reto-02/Readme.md)

### React Refs

Los Refs o referencias en React nos permiten acceder a los nodos del DOM. Es importante considerar que no es buena práctica manipular el DOM directamente, en su lugar, algunos ejemplos de buenos casos para los refs son controlar enfoques, selección de texto, reproducción de medios, o activar animaciones.

- [`Ejemplo 03: useRef Hook`](./Ejemplo-03/Readme.md)
