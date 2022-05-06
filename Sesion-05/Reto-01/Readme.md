[`React`](../../README.md) > [`Sesión 05: Efectos Secundarios, Reducers y Context`](../Readme.md) > `Reto 01: useEffect con dependencias`

---

## Reto 01: useEffect con dependencias

### Objetivos

- Controlar la cantidad de veces que se ejecuta useEffect agregando dependencias

### Desarrollo

El formulario cuenta con un par de validaciones que se encuentran en el componente `Login`, el correo debe contener `@` y la contraseña debe ser mayor a 6 caracteres. Si revisas a detalle el componente te darás cuenta `emailChangeHandler` y `passwordChangeHandler` usan la misma lógica para llamar `setFormIsValid` pero en orden opuesto.

1. Eliminar `setFormIsValid` de ambos handlers.

2. Realizar las mismas validaciones utilizando el hook `useEffect`.

3. Recuerda definir las dependencias para que React ejecute la función de `useEffect` en cuanto dichas dependencias cambien.

---

[Solución](./Solucion/Readme.md)
