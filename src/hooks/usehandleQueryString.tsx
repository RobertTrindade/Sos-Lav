"use client";
import dayjs from "dayjs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const useQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [queryParams, setQueryParams] = useState(
    new URLSearchParams(searchParams)
  );

  useEffect(() => {
    setQueryParams(new URLSearchParams(searchParams));
  }, [searchParams]);

  const updateQueryParams = (key: string, value: any) => {
    const SearchParams = new URLSearchParams(searchParams);
    SearchParams.set(key, value);
    router.push(`${pathname}?${SearchParams}`);
  };

  const addTodayToqueryeParams = () => {
    const SearchParams = new URLSearchParams(searchParams);

    const date = dayjs(new Date()).startOf("day");;


    SearchParams.set("dataInicio", date.toISOString());


    router.push(`${pathname}?${SearchParams}`);
  };

  const updateQueryPaginationParams = (page: any, limit: any) => {
    const SearchParams = new URLSearchParams(searchParams);



    SearchParams.set("page", page === 0 ? 1 : page);
    SearchParams.set("limit", limit);

    router.push(`${pathname}?${SearchParams}`);
  };

  const cleanSearch = () => {
    router.push(`${pathname}`);
  };

  return {
    queryParams,
    updateQueryParams,
    cleanSearch,
    updateQueryPaginationParams,
    addTodayToqueryeParams
  };
};

export default useQueryParams;
