import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import {useState} from "react";
import ImageList from "./components/ImageList";
function App() {
  const [images, setImages] = useState([]);
  const doTheSearch = async (term) => {
    const results = await searchImages(term);
    setImages(results);
  }

  return (
    <div>
   <SearchBar onSearch={doTheSearch} />
   <ImageList images={images} />
    </div>
  );
}

export default App;
