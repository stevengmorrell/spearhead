import TwistDeck from "./components/TwistDeck";
import BattleTacticDeck from "./components/BattleTacticDeck";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="mt-8 text-2xl font-bold">Spearhead Deck Assistant</div>
      <TwistDeck />
      <BattleTacticDeck />
    </main>
  );
}
