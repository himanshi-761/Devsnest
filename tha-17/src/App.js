import './App.css';
import Card from './Components/card';

function App()  {
  return (
    <div className="container">
      <Card title = "Pizza" value = "500" />
      <Card title = "Coke" value = "50" />
      <Card title = "Apple" value = "100" />
      <Card title = "Milk"  value = "25" />
      <Card title = "Egg"  value = "250" />
    </div>
  );
};

export default App;