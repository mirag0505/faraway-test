
import { Spin } from "antd";
import "./App.css";
import { ListPeople } from "./components/ListPeople";
import { useGetPeopleByPageQuery } from "./service";
import { useState } from "react";
import { FC } from 'react'

// type AppProps = {}

export const App: FC = () => {
  const [query, setQuery] = useState("1");
  const { data, error, isLoading } = useGetPeopleByPageQuery(query);

  return (
    <>
      <h1>Star wars</h1>
      <div>
        {error && <pre>{JSON.stringify(error)}</pre>}
        {isLoading && <Spin />}
        {data && <ListPeople data={data} error={error} isLoading={isLoading} handleQuery={setQuery}/>}
      </div>
    </>
  );
}

export default App;
