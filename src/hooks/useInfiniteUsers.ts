import { useInfiniteQuery } from "@tanstack/react-query";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  university: string;
  company: {
    title: string;
  };
}

interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

const fetchUsers = async ({ pageParam = 0 }): Promise<UsersResponse> => {
  const response = await fetch(
    `https://tech-test.raintor.com/api/users/GetUsersList?take=10&skip=${pageParam}`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch users: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
};

export const useInfiniteUsers = () => {
  return useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
    initialPageParam: 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
};

export type { User, UsersResponse };
