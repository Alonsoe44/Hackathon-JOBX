import GiftListSection from "./components/giftListSection/GiftListSection";
import { giftListCardData } from "./utils/apiData";

function App() {
  return (
    <div className="sm:p-10 ">
      <GiftListSection cardsData={giftListCardData} />
      <GiftListSection cardsData={[]} />
    </div>
  );
}

export default App;
