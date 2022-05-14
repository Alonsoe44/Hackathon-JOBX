import GiftListCard from "./components/GiftList";

function App() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold mb-10">Get your gifts here</h1>
      <div className="flex shadow flex-wrap lg:flex-nowrap flex-row lg:overflow-x-scroll ">
        <GiftListCard
          title="The special day"
          description="A generous list of wishes"
          etiquettes={["Electronics", "Toys", "kids"]}
          key="tunometecabrasaramambiche"
        />
        <GiftListCard
          title="The special day"
          description="A generous list of wishes"
          etiquettes={["Electronics", "Toys", "kids"]}
          key="esponja"
        />
        <GiftListCard
          title="The special day"
          description="A generous list of wishes"
          etiquettes={["Electronics", "Toys", "kids"]}
          key="tunometecabrasarmbiche"
        />
        <GiftListCard
          title="The special day"
          description="A generous list of wishes"
          etiquettes={["Electronics", "Toys", "kids"]}
          key="espnja"
        />
      </div>
    </div>
  );
}

export default App;
