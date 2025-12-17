import "./App.css";
import Card from "./components/Card";
import styles from'./index.module.css'

const App = () => {
  return (
    <>
      <Card width="1500px" height="500px" variant={"primary"} 
      >
        <br />
        <h1 className={`${styles.title}`}>Книжки для малечі</h1>
        <h2 className={`${styles.first}`}>Обирайте 3 книжки за ціною двох для свого малюка!</h2>
        <h2 className={`${styles.second}`}>Збирайте свою бібліотеку яскравого настрою!</h2>
        <button className={`${styles.button_size}`} style={{ marginTop: "20px" }}>Детальніше</button>
        <img className={`${styles.image}`} src="https://www.ranok.com.ua/storage/images/VRPwWsctM3T0JQpeLFJuLqyAhQppKmqokH7TMBtA.jpg"></img>
      </Card>
    </>
  );
};

export default App;