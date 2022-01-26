import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifd";
import { GigGridItem } from "./GigGridItem";

export const GifGrid = ({ category }) => {
  //const [images, setImages] = useState([]);

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__fadeIn"> {category} </h3>

      {loading && <p className="animate__fadeIn">Loading</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GigGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
