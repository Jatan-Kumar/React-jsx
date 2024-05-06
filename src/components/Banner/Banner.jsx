import bannerImage from "../../assets/react-core-concepts.png";
import './Banner.css'
const keyWords = ["Fundamental", "Crucial", "Core"];

function calculateRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  export default function Banner() {
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