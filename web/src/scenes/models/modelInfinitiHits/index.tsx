/** @format */

import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetch from "@hooks/useFetch";
import { setModels, setLimits, setTotals } from "@store/models/models.slice";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "@material-tailwind/react";
import Models from "@scenes/models/modelItem";
function SimpleInfiniteList({
  data,
  numberOfPosts,
}: {
  data: Array<any>;
  numberOfPosts: number;
}) {
  const dispatch = useDispatch();
  const { result, limit, total } = useSelector(
    ({
      model,
    }: {
      model: { result: Array<any>; total: number; limit: number };
    }) => ({ ...model })
  );

  const API = `https://dummyjson.com/products?limit=10&skip=10`;
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const getMorePosts = async () => {
    const { fetchData } = useFetch();
    try {
      fetchData({ endpoint: API }).then((data: any) => {
        console.log(data);
        dispatch(setModels({ result: data.products }));
        dispatch(setLimits({ limit: data.limit }));
        dispatch(setTotals({ total: data.total }));
      });
    } catch (error) {
      // dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    setHasMore(numberOfPosts > posts.length ? true : false);
  }, [posts]);

  useEffect(() => {
    getMorePosts();
  }, []);
  return (
    <InfiniteScroll
      dataLength={total}
      next={getMorePosts}
      hasMore={false}
      className='flex w-full grid grid-cols-12 gap-5'
      loader={<Spinner className='h-12 w-12' />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }>
      {result.map((post) => (
        <Models product={post}></Models>
      ))}
    </InfiniteScroll>
  );
}

export default SimpleInfiniteList;
