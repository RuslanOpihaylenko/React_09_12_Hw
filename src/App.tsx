import "./App.css";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <Card width="1500px" height="500px" variant={"primary"} 
      >
        <br />
        <h1>Книжки для малечі</h1>
        <h2 className="first">Обирайте 3 книжки за ціною двох для свого малюка!</h2>
        <h2 className="second">Збирайте свою бібліотеку яскравого настрою!</h2>
        <button style={{ marginTop: "20px" }}>Детальніше</button>
        <img src="https://www.ranok.com.ua/storage/images/VRPwWsctM3T0JQpeLFJuLqyAhQppKmqokH7TMBtA.jpg"></img>
      </Card>
    </>
  );
};

export default App;