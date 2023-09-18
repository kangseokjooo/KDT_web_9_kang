import "./App.css";

function App() {
  //map함수
  const lists = ["k", "d", "t", "w", "e", "b"];
  //filter함수
  const animals = ["dog", "cat", "rabbit"];
  const newAnimals = animals.filter((value) => {
    return value.includes("a");
  });
  console.log(newAnimals);
  //단축평가
  //&&연산자
  const result = false && "Hello";
  console.log(result);
  //||연산자
  const defaultValue = 1000;
  const price = null;
  const dbPrice = price || defaultValue;
  console.log(dbPrice);
  const users = [
    { id: 1, name: "John", age: 25, vip: true },
    { id: 2, name: "Jane", age: 19, vip: false },
    { id: 3, name: "Alice", age: 30, vip: true },
    { id: 4, name: "Bob", age: 18, vip: false },
    { id: 5, name: "Charlie", age: 35, vip: true },
  ];
  const v = users.filter((value) => {
    return value.vip === true;
  });
  const bool = true;
  return (
    <>
      {/*<img src={logo}></img>*/}
      {bool && (
        <div>
          <div className="container">
            <div className="red"></div>
            <div className="orange"></div>
            <div className="yellow"></div>
            <div className="green"></div>
            <div className="blue"></div>
            <div className="navy"></div>
            <div className="purple"></div>
          </div>
          {lists.map((value, id) => {
            return (
              <div key={id}>
                <p>Hello {value}</p>
              </div>
            );
          })}
          {v.map((value) => (
            <div key={value.id}>- {value.name}</div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
