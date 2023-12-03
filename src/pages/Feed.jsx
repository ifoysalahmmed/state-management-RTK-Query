import PostCard from "../components/PostCard";
import {
  // useGetPostByIdQuery,
  useGetPostsQuery,
} from "../redux/features/api/baseAPI";

const Feed = () => {
  const { data: posts, isLoading, isError } = useGetPostsQuery(); // * Return an object

  // const { data: post, isLoading, isError } = useGetPostByIdQuery(2); // * pass id to get specific post

  if (isLoading) {
    return <p className="text-9xl text-zinc-300">Loading...</p>;
  }

  if (!isLoading && isError) {
    return <p className="text-9xl text-zinc-300">Something went wrong</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-yellow-500">Feed</h1>
      <div className="flex flex-col gap-3">
        {posts?.map((post) => (
          <PostCard key={post?.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
