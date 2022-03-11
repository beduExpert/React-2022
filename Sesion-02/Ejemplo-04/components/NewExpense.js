import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const saveExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpense);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpense={saveExpense} />
    </Card>
  );
}

export default NewExpense;
