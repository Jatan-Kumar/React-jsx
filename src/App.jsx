//Hooks
import { useState } from "react";

//Components
import Banner from "./components/Banner/Banner.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/Button/TabButton.jsx";

//Dummy Data
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {

  const [activeTab, setActiveTab] = useState('components');

  function handleSelect(tabName) {
    setActiveTab(tabName);
  }
  
  return (
    <div>
      <Banner />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((data, index) => {
              return (
                <CoreConcepts
                  key={index}
                  title={data.title}
                  description={data.description}
                  image={data.image}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}> JSX </TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[activeTab].title}</h3>
            <p>{EXAMPLES[activeTab].description}</p>
            <pre>
              <code>{EXAMPLES[activeTab].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
