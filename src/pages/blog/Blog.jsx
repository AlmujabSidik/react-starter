import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import CardBlog from "./CardBlog";
import Search from "../Search";

function Blog({ title }) {
  const [allNews, setAllNews] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleSearchNews = (query) => {
    if (query.trim() === "") {
      setFilteredPosts(allNews);
      return;
    }

    const filtered = allNews.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get("/antara/politik");
        const post = response.data.data.posts;
        const limitedData = post.slice(0, 6);
        setAllNews(limitedData);
        setFilteredPosts(limitedData);
      } catch (error) {
        console.log("You have an error: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <Search
          text={"news"}
          onSearch={handleSearchNews}
          totalResults={filteredPosts.length}
        />
      </div>
      {isLoading ? (
        <p className="mt-10">loading...</p>
      ) : (
        <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((item) => {
              return <CardBlog key={item.pubDate} users={item} />;
            })
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No news found matching your search.
            </p>
          )}
        </div>
      )}
    </section>
  );
}

export default Blog;
