import CampaignSingle from "../components/layout/campaign/CampaignSingle";
import SingleContent from "../components/singleProduct/SingleContent";
import SingleTabs from "../components/singleProduct/SingleTabs";
import SingleTopBar from "../components/singleProduct/SingleTopBar";

function SingleProductPage() {
  return (
    <>
      <section className="single-product">
        <div className="container">
          <div className="single-product-wrapper">
            <SingleTopBar/>
            <SingleContent/>
            <SingleTabs/>
          </div>
        </div>
      </section>
      <CampaignSingle/>
    </>
  );
}

export default SingleProductPage;
