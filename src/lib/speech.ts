let current: SpeechSynthesisUtterance | null = null;

export function canSpeak() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function stopSpeaking() {
  if (!canSpeak()) return;
  window.speechSynthesis.cancel();
  current = null;
}

export function speakText(text: string, onEnd?: () => void) {
  if (!canSpeak()) return false;
  stopSpeaking();
  const utterance = new SpeechSynthesisUtterance(text.replace(/\s+/g, " ").trim());
  utterance.rate = 0.95;
  utterance.pitch = 1;
  utterance.onend = () => {
    current = null;
    onEnd?.();
  };
  utterance.onerror = () => {
    current = null;
    onEnd?.();
  };
  current = utterance;
  window.speechSynthesis.speak(utterance);
  return true;
}

export function isSpeaking() {
  return Boolean(current) && canSpeak() && window.speechSynthesis.speaking;
}
