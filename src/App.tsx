import BeamGridBackground from './components/lightswind/beam-grid-background'

function App() {

  return (
    <>
      <BeamGridBackground 
      gridSize={30}
      gridColor="#d1d5db"
      darkGridColor="#1f2937"
      beamColor="#000000"
      darkBeamColor="ffffff"
      beamCount={10}
      extraBeamCount={3}
      beamThickness={3}
      beamGlow
      glowIntensity={50}
      idleSpeed={1.15}
      asBackground={true}
      />
    </>
  )
}

export default App
