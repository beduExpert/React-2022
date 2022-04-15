[`React`](../README.md) > `Sesión 07: React Router`

---

# Sesión 07: React Router

## 🎯 Objetivos

- Crear una single page application (SPA) con React
- Manejar rutas, pasar parámetros y realizar redireccionamiento

## 🛠 Contenido

React Router como librería es una colección de componentes de navegación que puede usarse tanto para web como para móvil. En web se usa la librería `react-router-dom` con React y en móvil se usa la librería `react-router-native` con React Native.

### Definiendo y usando rutas

Para empezar debemos instalar la librería con el siguiente comando:

```bash
npm install react-router-dom@6
```

- [`Ejemplo 01: Rutas`](./Ejemplo-01/Readme.md)

- [`Ejemplo 02: Rutas protegidas`](./Ejemplo-02/Readme.md)

- [`Reto 01: Terminando la autenticación`](./Reto-01/Readme.md)

Como te habrás dado cuenta contamos con dos formas de navegación. Con el componente `<Link>` que renderiza un elemento `<a>` y permite al usuario cambiar la url con un click. El hook `useNavigate` y el componente `<Navigate>` ambos te permiten navegar programáticamente (imperativamente), usualmente con un event handler o en respuesta de algún cambio en el state.

### Parámetros

Tenemos dos formas de pasar parámetros en una url. La primera es agregando el parámetro o la variable al final de la ruta después de un `/`:

```
/users/:userId
```

Esto nos dice que después de `/users/` se espera un valor el cuál se asigna en la variable `:userId`. En la práctica la url se vería como la siguiente:

```
/users/1
```

- [`Ejemplo 03: Parámetros de ruta`](./Ejemplo-03/Readme.md)

La otra forma se conoce como _query params_ o _parámetros de consulta_. Para este tipo de parámetros agregamos el signo `?` en la url y luego los pares `parámetro=valor`.

```
/users?id=1
```

Y podemos agregar varios parámetros separados por el símbolo `&`:

```
/users?id=1&location=mx
```

- [`Ejemplo 04: Parámetros de consulta`](./Ejemplo-04/Readme.md)

- [`Reto 02: Parámetros`](./Reto-02/Readme.md)
