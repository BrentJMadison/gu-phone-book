import PhoneBook from "./PhoneBook/PhoneBook";

function App() {
  /**
   * In reality, this would make more sense in a multi page app. Nevertheless, here is where routes and other logic would be defined.
   */

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <PhoneBook />
    </div>
  );
}

export default App;
