import "./DogDetails.css";
import { Link, Navigate } from "react-router-dom";

function DogDetails({ dog }) {
  if (!dog) {
    return <Navigate to="/dogs" />;
  } else {
    return (
      <div className="DogDetails">
        <div className="DogDetails-content">
          <h1 className="DogDetails-header">{dog.name}</h1>
          <img src={dog.src} alt={dog.name} />
          <h2>{dog.age} years old</h2>
          <ul>
            {dog.facts.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
          <Link className="DogDetails-bckbtn" to="/dogs">
            Go Back
          </Link>
        </div>
      </div>
    );
  }
}

export default DogDetails;
