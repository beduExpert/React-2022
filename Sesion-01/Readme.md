[`React`](../README.md) > `Sesi贸n 01: Fundamentos de React`

---

# Sesi贸n 01 - Fundamentos de React

## 馃幆 Objetivos

- Utilizar la sintaxis JSX
- Construir componentes y pasar datos entre ellos mediante props
- Mapear listas y renderizar sus elementos

## 馃洜 Contenido

### 驴Qu茅 es React?

React es una librebr铆a open source de JavaScript creada por el equipo de Facebook para desarrollar interfaces de usuario. React est谩 basado en componentes, estos son como piezas de lego independientes que se pueden componer para crear interfaces complejas.

### Componentes

Vamos a retomar la instalaci贸n que se hizo durante el prework para desarrollar una aplicaci贸n que nos permita dominar los conceptos de esta y las siguientes sesiones. La aplicaci贸n que vamos a hacer nos permitir谩 llevar un registro de gastos.

- [`Ejemplo 01: Componentes`](Ejemplo-01/Readme.md)

Los componentes de React son reutilizables, si queremos ver varios gastos simplemente debemos agregar las veces que necesitemos el componente `<ExpenseItem />`. Adem谩s de esto, en el prework vimos que en JSX podemos usar expresiones de JavaScript, y como los componentes son funciones podemos tener l贸gica dentro del componente antes de realizar el renderizado.

En nuestro componente `<ExpenseItem />` agregamos la fecha, descripci贸n y monto directamente en el JSX, pero podemos crear variables y usar expresiones para crear un componente que sea m谩s flexible:

```jsx
import "./ExpenseItem.css";

function ExpenseItem() {
  const date = new Date(2022, 4, 23);
  const title = "Libros";
  const amount = 250;

  return (
    <div className="expense-item">
      <div>{date.toLocaleDateString()}</div>
      <div className="expense-item-description">
        <h2>{title}</h2>
        <div className="expense-item-price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```

> El constructor `Date` genera un objeto `Date` que tiene distintos m茅todos como `toLocaleDateString()` que genera una cadena con una representaci贸n de la fecha en el formato indicado. Esto es de JavaScript, no de React.

### Props

Para que los componentes de React puedan ser reutilizables muchas veces es necesario que rendericen contenido din谩mico, esto implica que de alguna manera los componentes se deben comunicar o pasar informaci贸n entre ellos. Los componentes padres pueden pasar informaci贸n a los hijos mediante los `props`.

- [`Ejemplo 02: Props`](Ejemplo-02/Readme.md)

- [`Reto 01: Props`](Reto-01/Readme.md)

- [`Reto 02: Props`](Reto-02/Readme.md)

### Children Props

Ya tenemos varios componentes para nuestra lista de gastos. En lugar de tener todo en `App` separamos la l贸gica en componentes m谩s peque帽os e independientes que pueden ser reutilizados. A esto se le conoce como **composition**. S贸lo nos falta ver un concepto m谩s que forma parte del composition en React y es **children props**. Todos los componentes cuentan con un prop especial que se llama **children** el cual contiene todo lo que se encuentre dentro de las etiquetas del componente.

- [`Ejemplo 03: Children Props`](Ejemplo-03/Readme.md)

Antes de continuar es momento de revisar nuestro directorio. Hasta ahora hemos creado todo dentro de la carpeta `components`, si seguimos as铆 vamos a terminar con cientos de archivos en una misma carpeta. Para evitarlo vamos a organizar nuestros componentes por l贸gica, crearemos una carpeta `Expenses` donde pondremos todos los componentes que tengan que ver con el renderizado de gastos y haremos otra carpeta `UI` para componentes generales como `Card`.

![Directory](./assets/expenses-directory.png)

> No olvides actualizar las rutas en los imports

### Renderizado de listas

En nuestro componente `Expenses` estamos renderizando `ExpenseItem` varias veces, una por cada elemento del arreglo `expenses`. Esta forma de renderizar nuestra lista no es din谩mica, afortunadamente en JSX podemos usar expresiones de JavaScript y renderizar nuestra lista de una mejor manera.

- [`Ejemplo 04: Renderizado de listas`](Ejemplo-04/Readme.md)

## 馃摑 Postwork

- [`Postwork`](Postwork/Readme.md)
