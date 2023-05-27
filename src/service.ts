import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type People = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: [];
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
};
// Define a service using a base URL and expected endpoints
export const swapiApi = createApi({
  reducerPath: "swapiApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({
    getPeople: builder.query<{ results: Array<People> }, void>({
      query: () => `people`,
    }),
    getPersonByNumber: builder.query<People, string>({
      query: (number) => `people/${number}`,
    }),
    getPeopleByPage: builder.query<{ results: Array<People>, count: number }, string>({
      query: (page) => `people/?page=${page}`,
      keepUnusedDataFor: 6,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPeopleQuery,
  useGetPersonByNumberQuery,
  useGetPeopleByPageQuery,
} = swapiApi;
