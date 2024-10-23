import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import css from "./DetailPage.module.css";
import { useParams } from "react-router-dom";
import { detailFetch } from "../../api";
import Loader from "../../components/Loader/Loader";
import DetailTruck from "../../components/DetailTruck/DetailTruck";
import Message from "../../components/Message/Message";

const TruckPage = () => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchDetailtTruck = async (id) => {
      try {
        const data = await detailFetch(id);
        setDetail(data);
      } catch ({ message, status }) {
        if (status === 404) {
          setError("No data found.");
        } else {
          setError(message || "Oops, something went wrong!");
        }
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
        {error && <Message>{error}</Message>}
        {!error && detail && <DetailTruck data={detail} />}
      </div>
    </Container>
  );
};

export default TruckPage;
