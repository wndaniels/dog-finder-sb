import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({ dogs }) {
  return (
    <div className="DogList">
      <div className="DogList-content">
        <h1 className="DogList-header">Pick a Pup!</h1>
        {dogs.map((d) => (
          <div key={d.name}>
            <h2>{d.name}</h2>
            <Link to={`/dogs/${d.name.toLowerCase()}`}>
              <img src={d.src} alt={d.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
