import { useQuery } from "react-query";
import instance from "../hooks/useAxiosInstance";
import { Category } from "../tsInterfaces&types/HambergerMenu";

export const getCategories = (): Category[] => {
  const { data } = useQuery("categories", async () => {
    const response: { data: Category[] } = await instance.get("/categories");
    return response.data;
  });

  return data || [];
};
