import ContentGallery from "./ContentGallery";
import ContentInfo from "./ContentInfo";

function SingleContent() {
  return (
    <>
      <div className="single-content">
        <main className="site-main">
          <ContentGallery/>
          <ContentInfo/>
        </main>
      </div>
    </>
  );
}

export default SingleContent;
