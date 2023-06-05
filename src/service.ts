import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type TPeople = {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: Array<string>
  species: []
  vehicles: Array<string>
  starships: Array<string>
  created: string
  edited: string
  url: string
}

export type TPeopleByPage = { results: Array<TPeople>; count: number }

// Define a service using a base URL and expected endpoints
export const swapiApi = createApi({
  reducerPath: 'swapiApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getPeople: builder.query<{ results: Array<TPeople> }, void>({
      query: () => `people`,
    }),
    getPersonByNumber: builder.query<TPeople, string>({
      query: (number) => `people/${number}`,
    }),
    getPeopleByPage: builder.query<TPeopleByPage, string>({
      query: (page) => `people/?page=${page}`,
      keepUnusedDataFor: 100,
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPeopleQuery, useGetPersonByNumberQuery, useGetPeopleByPageQuery } = swapiApi
