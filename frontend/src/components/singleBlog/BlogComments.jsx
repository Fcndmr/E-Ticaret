import BlogCommentItem from "./BlogCommentItem"


function BlogComments() {
  return (
    <>
      <div className="comments">
          <ol className="comment-list">
            <BlogCommentItem/>
            <BlogCommentItem/>
            <BlogCommentItem/>    
          </ol>
        </div>
    </>
  )
}

export default BlogComments
