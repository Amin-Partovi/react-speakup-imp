"use client";

import TextToVoice from "./components/TextToVoice";
import VoiceToText from "./components/VoiceToText";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-10 items-center justify-center p-24">
      <VoiceToText />
      <TextToVoice />
    </main>
  );
}
