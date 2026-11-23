import { useEffect, useState } from "react";
import "./App.css";

interface ProductPros {
  title: string;
  id: number;
}

interface DataProps {
  products: ProductPros[];
}

function App() {
  const [data, setData] = useState<DataProps | null>(null);

  const fetchJsonData = async () => {
    const response = await fetch("http://localhost:8000/api/v1/jsonData").then(
      (data) => data.json(),
    );
    setData(response?.data || null);
  };

  useEffect(() => {
    fetchJsonData();
  }, []);

  return (
    <>
      <section id="center">
        <ul>
          {data?.products?.map((d) => (
            <li key={d.id}>{d.title}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
