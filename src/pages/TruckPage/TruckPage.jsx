import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import css from "./TruckPage.module.css";
import { useParams } from "react-router-dom";
import { truckFetch } from "../../api";
import Loader from "../../components/Loader/Loader";

const TruckPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();

  console.log(data);
  console.log("error", error);

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
      <div className={css.wrapper}>ProductPage</div>
    </Container>
  );
};

export default TruckPage;
