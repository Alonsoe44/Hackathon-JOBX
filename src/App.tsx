import GiftListCard from "./components/GiftListCard";

function App() {
  return (
    <div className="sm:p-10">
      <h1 className="text-3xl font-semibold mt-10 sm:my-10 pl-5">
        Get your gifts here
      </h1>
      <div className="flex shadow flex-wrap lg:flex-nowrap lg:overflow-x-scroll ">
        <GiftListCard
          title="The special day"
          description="This is a very special list because it's the first chrismas with my new dog, i am counting the hours to go outside and give him his new toy a dinosaur femur"
          etiquettes={["Electronics", "Toys", "kids"]}
          key="tunometecabrasaramambiche"
          action={() => {
            console.log("click");
          }}
        />
        <GiftListCard
          title="The special day"
          description="324 packages are looking for funding , can you help? "
          etiquettes={["Electronics", "Toys", "kids"]}
          key="esponja"
          action={() => {
            console.log("click");
          }}
        />
        <GiftListCard
          title="The special day"
          description="Happy new year"
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
