import BeamGridBackground from "./components/lightswind/beam-grid-background";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <BeamGridBackground
        gridSize={30}
        gridColor="#d1d5db"
        darkGridColor="#1f2937"
        beamColor="rgba(0,180,255,0.8)"
        darkBeamColor="rgba(0,255,255,0.8)"
        beamCount={10}
        extraBeamCount={3}
        beamThickness={3}
        beamGlow
        glowIntensity={50}
        idleSpeed={1.15}
        asBackground={true}
      />
      <Nav />
    </>
  );
}

export default App;
