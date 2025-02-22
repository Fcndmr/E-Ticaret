import BlogArticle from "../components/singleBlog/BlogArticle";
import BlogPanel from "../components/singleBlog/BlogPanel";

function SingleBlogPage() {
  return (
    <>
      <section className="single-blog">
        <div className="container">
          <BlogArticle/>
          <BlogPanel/>
        </div>
      </section>
    </>
  );
}

export default SingleBlogPage;
