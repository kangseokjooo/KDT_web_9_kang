import src from "./logo192.png";

const BestsellerComponent = (props) => {
  return (
    <>
      <div
        style={{ textAlign: "center", backgroundColor: "wheat", width: "50%" }}
      >
        <h1 style={{ color: "orange" }}>이번주 베스트 셀러</h1>
        <img src={src} alt="코딩"></img>
        <h2>{props.title}</h2>
        <div>저자:{props.author}</div>
        <div>가격:{props.price}</div>
        <div>구분:{props.type}</div>
      </div>
    </>
  );
};

export default BestsellerComponent;
