import { Person, Country } from "./components/Person";
import "./App.css";

function App() {
  //Function ":type" after paranthesis is the return type
  const getAge = (name: string): number => {
    return 99;
  };

  return (
    <div className="App">
      <Person
        name="John Doe"
        email="john.doe@example.com"
        age={30}
        isMarried={true}
        friends={["Jane Doe", "John Smith", "Jane Smith"]}
        country={Country.USA}
      />
    </div>
  );
}

export default App;
