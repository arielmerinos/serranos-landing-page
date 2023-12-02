import Nav from "./components/Nav"
import Hero from "./sections/Hero"
import Home from "./sections/Home"


export default function App() {
  return (
    <main className="relative">
      <Nav/>
      <section className="bg-blue-400 w-full"> 
      <Hero/> 
      </section>
      <section className="padding">
      <Home/>
      </section>      
      <section className="padding">
      About me
      </section>      
      <section className="padding">
      CV
      </section>      
      <section className="padding">
      patients
      </section>      
      <section className="padding">
      Footer
      </section>
    </main>
  )
}