export function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] opacity-60">
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-primary/20 blur-[120px] animate-blob" />
      <div className="absolute top-[30%] right-[-10%] w-[40vw] h-[60vw] max-w-[700px] max-h-[900px] rounded-full bg-secondary/20 blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[50vw] max-w-[900px] max-h-[800px] rounded-full bg-accent/10 blur-[120px] animate-blob animation-delay-4000" />
    </div>
  );
}
