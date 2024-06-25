import Image from "next/image";
import TwistDeck from "./components/twistDeck";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Title Section</div>
      <TwistDeck />
      <div>Battle Tactic Deck Section</div>
    </main>
  );
}
