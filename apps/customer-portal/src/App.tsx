import './App.css'
import { Button } from "@repo/ui"
import { formatCurrency } from "@repo/utils";

function App() {

  function handleClick() {
    alert('button clicked');
  }

  return (
    <section id="center">
      <h1>Welcome to mono repo</h1>
      <Button onClick={handleClick} />
      <Button onClick={() => {
        alert(formatCurrency(1000))
      }} />
    </section>
  )
}

export default App
