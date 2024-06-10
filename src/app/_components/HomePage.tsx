"use client";
import Navbar from "./Navbar";
import PostCard from "./PostCard";
type Props = {
  userId: string;
  allPosts: ({
    createdBy: {
      id: string;
      username: string;
      email: string;
      password: string;
      image: string | null;
    };
  } & {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
    createdById: string;
  })[];
};
const HomePage = (props: Props) => {
  return (
    <div className="container2">
      <Navbar />
      <div
        style={{
          textAlign: "center",
          fontSize: 26,
          fontWeight: "bold",
        }}
      >
        Items for sale
      </div>
      <div className="postcard-wrapper">
        {props.allPosts.map((post) => {
          return (
            <PostCard
              createdById={post.createdById}
              userId={props.userId}
              title={post.title}
              key={post.id}
              id={post.id}
              image={post.image}
              price={post.price}
              profileimage={post.createdBy.image}
              username={post.createdBy.username}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
