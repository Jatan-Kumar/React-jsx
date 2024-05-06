//Components
import Banner from "./components/Banner/Banner.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/Button/TabButton.jsx"

//Dummy Data
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
      <Banner />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((data) => (
              <CoreConcepts
                title={data.title}
                description={data.description}
                image={data.image}
              />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
              <TabButton>
                testing 
              </TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
