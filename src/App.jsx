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

  let tabContent = <p>Please Select a button</p>

  if (activeTab){
    tabContent = (
      <div id="tab-content">
            <h3>{EXAMPLES[activeTab].title}</h3>
            <p>{EXAMPLES[activeTab].description}</p>
            <pre>
              <code>{EXAMPLES[activeTab].code}</code>
            </pre>
          </div>
    )
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
                  {...data}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={activeTab === 'components'} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={activeTab === 'jsx'} onSelect={() => handleSelect("jsx")}> JSX </TabButton>
            <TabButton isSelected={activeTab === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={activeTab === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
