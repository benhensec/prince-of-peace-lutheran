import { Pause, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { canSpeak, speakText, stopSpeaking } from "@/lib/speech";

export function ListenButton({
  label = "Listen",
  text,
}: {
  label?: string;
  text: string;
}) {
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setReady(canSpeak());
    return () => stopSpeaking();
  }, []);

  if (!ready) return null;

  return (
    <Button
      type="button"
      variant={playing ? "default" : "outline"}
      onClick={() => {
        if (playing) {
          stopSpeaking();
          setPlaying(false);
          return;
        }
        const ok = speakText(text, () => setPlaying(false));
        if (ok) setPlaying(true);
      }}
    >
      {playing ? <Pause /> : <Volume2 />}
      {playing ? "Stop" : label}
    </Button>
  );
}
