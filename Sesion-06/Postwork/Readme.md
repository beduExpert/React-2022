[`React`](../../README.md) > [`Sesión 06: Peticiones HTTP y Custom Hooks`](../Readme.md) > `Postwork`

---

# Postwork

## 🎯 Objetivos

- Realizar peticiones HTTP con React y el hook useEffect
- Manejar errores HTTP

## 🛠 Desarrollo

Ahora que sabes cómo realizar peticiones HTTP en React ya sea a través de un event handler o al momento de renderizar un componente con `useEffect`, ya puedes mover la lista de platillos que estabas renderizando anteriormente a un proyecto de Firebase.

Sigue las siguientes instrucciones:

- Crear un nuevo proyecto en Firebase, en una nueva base de datos guardar la información de 10 platillos distintos. Debes guardar como mínimo el nombre del platillo, la descripción y el precio.
- Crea un custom hook que te permita realizar peticiones HTTP, puedes tomar como referencia el creado durante la sesión.
- Elimina el arreglo de platillos que hayas hecho en tu aplicación.
- Al iniciar la aplicación realiza una petición HTTP a tu proyecto de Firebase para obtener la lista de platillos que debes renderizar.
