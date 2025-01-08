import TextUpload from "./components/upload/TextUpload";
import CharacterDetection from "./components/character/CharacterDetection";
import VoiceAssignment from "./components/voice/VoiceAssignment";
import AudioPreview from "./components/audio/AudioPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <TextUpload />
        <CharacterDetection />
        <VoiceAssignment />
        <AudioPreview />
      </div>
    </main>
  );
}