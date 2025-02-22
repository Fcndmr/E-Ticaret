import BlogComments from "./BlogComments";
import BlogReview from "./BlogReview";

function BlogPanel() {
  return (
    <>
      <div className="tab-panel-reviews">
        <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
        <BlogComments/>
        <BlogReview/>
      </div>
    </>
  );
}

export default BlogPanel;
