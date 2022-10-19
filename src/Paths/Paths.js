import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "../DogList/DogList";
import FilterDogDetails from "../FilterDogDetails/FilterDogDetails";

function Paths({ dogs }) {
  return (
    <Routes>
      <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<FilterDogDetails dogs={dogs} />} />
      <Route path="*" element={<Navigate replace to="/dogs" />} />
    </Routes>
  );
}

export default Paths;
