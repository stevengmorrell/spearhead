import TwistDeck from "./components/TwistDeck";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div>Spearhead Card Selector</div>
      <TwistDeck />
      <div>Battle Tactic Deck Section</div>
    </main>
  );
}
