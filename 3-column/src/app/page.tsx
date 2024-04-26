import Sedans from "../../components/sedans/sedans";
import Suvs from "../../components/suvs/suvs";
import Luxury from "../../components/luxury/luxury";

export default function Home() {
  return (
    <>
    <div className="container">
      <Sedans />
      <Suvs />
      <Luxury />
    </div>
    </>
  );
}
