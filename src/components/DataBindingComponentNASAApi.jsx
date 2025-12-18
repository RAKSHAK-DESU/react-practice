import { useEffect, useState } from "react";
export default function DataBindingComponentNASAApi() {
  const [mars, setMars] = useState({});
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => response.json())
      .then((data) => {
        setMars(data);
      });
  }, []);
  return (
    <div className="container">
      <h2>Mars Photos</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>explanation</th>
          </tr>
        </thead>
        <tbody>
          {mars.photos.map((photo) => (
            <tr>
              <td>{photo.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
