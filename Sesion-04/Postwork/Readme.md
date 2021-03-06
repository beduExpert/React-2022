[`React`](../../README.md) > [`Sesi贸n 04: Fragments, Portals y Refs`](../Readme.md) > `Postwork`

---

# Postwork

## 馃幆 Objetivos

- Utilizar fragmentos de React para evitar renderizar elementos innecesarios.
- Utilizar portales de React para crear un modal.

## 馃洜 Desarrollo

Tu proyecto ya tiene estructura, estilos, y state para manejar cantidades de los platillos. Con lo visto en esta sesi贸n puedes agregar un modal a tu aplicaci贸n para mostrar el carrito de compras. Por ahora s贸lo nos vamos a enfocar en mostrar el modal, m谩s adelante aprender谩s a manipular states mucho m谩s complejos desde distintas partes de la aplicaci贸n, eso te permitir谩 modificar el contenido del carrito de compras desde el modal.

Sigue las siguientes instrucciones:

- Revisa nuevamente tu aplicaci贸n. Si tuviste que envolver varios elementos dentro de un `<div>` c谩mbialos por React Fragments.
- En el `index.html` agrega dos nuevos nodos al mismo nivel del nodo principal donde se renderiza la aplicaci贸n. Estos te servir谩n para crear los portales que necesitas.
- Crea un portal para el `backdrop`, oscurecer la pantalla ayuda a resaltar el modal, recuerda que al hacer click en el backdrop el modal debe cerrarse.
- Crea un portal para el modal, este se debe abrir al seleccionar el carrito. Por el momento puedes mostrar el resumen del carrito de compras dentro del modal pero no te preocupes por modificar las cantidades.

### Im谩gen de referencia

Recuerda que el dise帽o de la aplicaci贸n es a tu gusto, por lo que los colores y el acomodo de los elementos est谩 completamente a tu criterio. A continuaci贸n te mostramos una im谩gen que te servir谩 como referencia de lo que llevamos hasta el momento:

![ReactMeals](./assets/react-meals-cart.png)
