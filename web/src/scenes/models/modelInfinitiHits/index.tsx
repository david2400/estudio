/** @format */

import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetch from "@hooks/useFetch";
import {
  addModels,
  setNumberOfPosts,
  setTotals,
} from "@store/models/models.slice";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "@material-tailwind/react";
import Models from "@scenes/models/modelItem";
function SimpleInfiniteList() {
  const dispatch = useDispatch();
  const { result, total, limit, posts } = useSelector(
    ({
      model,
    }: {
      model: {
        result: Array<any>;
        total: number;
        limit: number;
        posts: number;
      };
    }) => ({ ...model })
  );

  const API = `https://dummyjson.com/products?limit=${limit}&skip=${posts}`;
  const [hasMore, setHasMore] = useState(true);

  const getMorePosts = async () => {
    const { fetchData } = useFetch();
    try {
      fetchData({ endpoint: API }).then((data: any) => {
        console.log(data);
        dispatch(addModels({ result: data.products }));
        dispatch(setNumberOfPosts({ posts: result.length }));
        dispatch(setTotals({ total: data.total }));
      });
    } catch (error) {
      // dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    setHasMore(total > posts ? true : false);
  }, [result]);

  useEffect(() => {
    getMorePosts();
  }, []);
  return (
    <InfiniteScroll
      dataLength={total}
      next={getMorePosts}
      hasMore={hasMore}
      className='flex w-full grid grid-cols-12 gap-5'
      loader={<Spinner className='h-12 w-12' />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }>
      {/* {result.map((post) => (
        <Models product={post}></Models>
      ))} */}
    </InfiniteScroll>
  );
}

export default SimpleInfiniteList;
