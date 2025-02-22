import Categories from "../components/categories/Categories"
import CampaignSingle from "../components/layout/campaign/CampaignSingle";
import Products from "../components/products/Products"


function ShopPage() {
  return (
    <>
      <div>
        <Categories/>
        <Products/>
        <CampaignSingle/>
        <Products/>
      </div>
    </>
  );
}

export default ShopPage;
