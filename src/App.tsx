import GiftListCard from "./components/GiftList";

function App() {
  return (
    <div className="App">
      Desktop
      <GiftListCard
        title="The special day"
        description="A generous list of wishes"
        etiquettes={["Electronics", "Toys", "kids"]}
      />
      <GiftListCard
        title="The special day"
        description="A generous list of wishes"
        etiquettes={["Electronics", "Toys", "kids"]}
      />
    </div>
  );
}

export default App;
