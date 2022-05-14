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
          action={() => {
            console.log("click");
          }}
        />
        <GiftListCard
          title="The special day"
          description="A generous list of wishes"
          etiquettes={["Electronics", "Toys", "kids"]}
          key="esponja"
          action={() => {
            console.log("click");
          }}
        />
        <GiftListCard
          title="The special day"
          description="A generous list of wishes"
          etiquettes={["Electronics", "Toys", "kids"]}
          key="tunometecabrasarmbiche"
          action={() => {
            console.log("click");
          }}
        />
        <GiftListCard
          title="The special day"
          description="A generous list of wishes"
          etiquettes={["Electronics", "Toys", "kids"]}
          key="espnja"
          action={() => {
            console.log("click");
          }}
        />
      </div>
    </div>
  );
}

export default App;
