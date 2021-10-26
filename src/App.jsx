import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper clear">
      
    <Drawer/>
      
      <Header/>
      <div className="content p-40 ">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="./img/search.png" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex justify-between">
          <Card name="Мужские Кроссовки Nike Blazer Mid Suede" price="12 999 руб." src="./img/sneakers/1.jpg"></Card>
          <Card name="Мужские Кроссовки Nike Air Max 270" price="12 999 руб." src="./img/sneakers/2.jpg"></Card>
          <Card></Card>
          <Card></Card>


        </div>
      </div>
    </div>
  );
}

export default App;
