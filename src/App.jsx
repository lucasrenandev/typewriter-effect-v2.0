import TypewriterComponent from "typewriter-effect"

export default function App() {
  return (
    <main className="container">
      <h1>TypeWriter Effect</h1>
      
      <h2>
        <TypewriterComponent
          options={{
            strings: ["Hello, be welcome ;D !", "My name is Lucas Renan", "I from Brazil, SP", "I study Information Technology"],
            autoStart: true,
            delay: 70,
            deleteSpeed: 60,
            pauseFor: 300,
            loop: true
          }}
        />
      </h2>
    </main>//End main container
  )
}