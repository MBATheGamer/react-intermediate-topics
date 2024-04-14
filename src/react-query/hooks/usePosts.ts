import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

type PostQuery = {
  pageSize: number;
};

const usePosts = (query: PostQuery) =>
  useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam }) =>
      apiClient
        .get<Post[]>("/posts", {
          params: {
            _start: ((pageParam as number) - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then(response => response.data),
    initialPageParam: 1,
    staleTime: 60 * 1000,
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length > 0 ? allPages.length + 1 : undefined,
  });

export default usePosts;
