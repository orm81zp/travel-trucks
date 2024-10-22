import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import css from "./DetailPage.module.css";
import { useParams } from "react-router-dom";
import { truckFetch } from "../../api";
import Loader from "../../components/Loader/Loader";
import DetailTruck from "../../components/DetailTruck/DetailTruck";

const TruckPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchDetailtTruck = async (id) => {
      try {
        const response = await truckFetch(id);
        setData(response);
      } catch ({ message }) {
        setError(
          message || "Oops, something went wrong. Try again a bit later..."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDetailtTruck(id);
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <div className={css.wrapper}>
        {error && <span>{error}</span>}
        {!error && <DetailTruck data={data} />}
      </div>
    </Container>
  );
};

export default TruckPage;
