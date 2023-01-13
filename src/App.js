import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const apiData = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );

      const res = await apiData.json();

      setData(res);
      console.log(res);
    }
    getData();
    document.title = `${state} Employees Online`;
  }, [state]);

  return (
    <>
      <div className="App">
        <Header />
        <button onClick={() => setState(state + 1)}>Click Me {state}</button>
        {data.map((element, index) => {
          return (
            <div className="jsx-class" key={index}>
              <h4>Name: {element.firstName}</h4>
              <h4>LastName: {element.lastName}</h4>
              <h4>Email: {element.email}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
