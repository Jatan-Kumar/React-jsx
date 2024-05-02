import bannerImage from "./assets/react-core-concepts.png";
const keyWords = ["Fundamental", "Crucial", "Core"];

function calculateRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Banner() {
  const description = keyWords[calculateRandomInt(2)];

  return (
    <header>
      <img src={bannerImage} alt="Stylized atom" />
      <h1>React Fundamentals</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts() {
  return (
    <li>
      <img src={"img"} alt={"alt"} />
      <h3>{"Title"}</h3>
      <p>{"Descripting"}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Banner />
      <main>
        <section id="core-concept">
          <h2>Time to get started!</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
