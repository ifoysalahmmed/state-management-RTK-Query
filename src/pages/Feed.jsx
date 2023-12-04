import { useForm } from "react-hook-form";
import PostCard from "../components/PostCard";
import {
  useGetPostByIdQuery,
  useSetPostMutation,
  // useGetPostsQuery,
} from "../redux/features/api/baseAPI";

const Feed = () => {
  // const { data: posts, isLoading, isError } = useGetPostsQuery(); // * Return an object

  const { register, handleSubmit, reset } = useForm();

  const { data: post, isLoading, isError } = useGetPostByIdQuery(2); // * pass id to get specific post

  const [setPost, { data: postData }] = useSetPostMutation();

  console.log(postData);

  const handlePost = (data) => {
    setPost({ title: "This is a title", body: data.post, userId: 8988 });
    reset();
  };

  if (isLoading) {
    return <p className="text-9xl text-zinc-300">Loading...</p>;
  }

  if (!isLoading && isError) {
    return <p className="text-9xl text-zinc-300">Something went wrong</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-yellow-500">Feed</h1>
      <div className="my-10">
        <form onSubmit={handleSubmit(handlePost)} className="flex gap-3">
          <input
            type="text"
            className="w-full text-zinc-300 bg-zinc-800 p-3 rounded-md"
            {...register("post")}
          />
          <button
            type="submit"
            className="bg-zinc-800 text-zinc-300 text-lg p-3 border border-zinc-600 rounded-md"
          >
            Post
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-3">
        {/* {posts?.map((post) => ( */}
        <PostCard key={post?.id} post={post} />
        {/* ))} */}
      </div>
    </div>
  );
};

export default Feed;
