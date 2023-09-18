import "./App.css";

function App() {
  //map함수
  const lists=['k','d','t','w','e','b'];
  //filter함수
  const animals=['dog','cat','rabbit'];
  const newAnimals=animals.filter((value)=>{
    return value.includes('a')
  })
  console.log(newAnimals);
  //단축평가
  //&&연산자
  const result=false && 'Hello'
  console.log(result);
  //||연산자
  const defaultValue=1000
  const price=null
  const dbPrice=price||defaultValue;
  console.log(dbPrice);
  return (
    <>
      {/*<img src={logo}></img>*/}
      <div className="container">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
      {lists.map((value,id)=>{
        return <div key={id}>
          <p>Hello {value}</p>
        </div>
      })}
    </>
  );
}

export default App;
