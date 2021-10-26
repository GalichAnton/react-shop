function App() {
  return (
    <div className="wrapper clear">
      <header className="header d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} alt="logo" src="./img/logo.png" />
          <div>
            <h3 className="text-uppercase">React sneacers</h3>
            <p>Магазин лучших кроссовок</p>
          </div></div>
        <ul className="d-flex">
          <li className="mr-30"><img width={20} height={20} alt="cart" src="/img/cart.svg" /><span>1205 p.</span></li>
          <li><img width={20} height={20} alt="user" src="/img/user.svg" /></li>
        </ul>
      </header>
      <div className="content p-40 ">
        <h1>Все кроссовки</h1>
        <div className="d-flex justify-between">
        <div className="card">
          <img width={133} height={112} src="./img/sneakers/1.jpg" alt="card" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 p.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="./img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="./img/sneakers/2.jpg" alt="card" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 p.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="./img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="./img/sneakers/3.jpg" alt="card" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 p.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="./img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="./img/sneakers/4.jpg" alt="card" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 p.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="./img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;