import { Spin, Typography } from "antd";
import "./App.css";
import { ListPeople } from "./components/ListPeople";
import { useGetPeopleByPageQuery } from "./service";
import { useState } from "react";
import { FC } from "react";
import { CustomLayout } from "./components/CustomLayout";
import { Route, Routes } from "react-router-dom";
import { Editor } from "./components/Editor";

// type AppProps = {}

export const App: FC = () => {
  const [query, setQuery] = useState("1");
  const { data, error, isLoading } = useGetPeopleByPageQuery(query);
  const { Title } = Typography;

  return (
    <Routes>
      <Route path="/" element={<CustomLayout />}>
        <Route
          path="/"
          element={
            <>
              <Title level={2}>Star wars</Title>
              {error && <pre>{JSON.stringify(error)}</pre>}
              {isLoading && <Spin style={{ margin: "auto" }} />}
              {data && (
                <ListPeople
                  data={data}
                  error={error}
                  isLoading={isLoading}
                  handleQuery={setQuery}
                />
              )}
            </>
          }
        />
        <Route path="/people/:peopleId" element={<Editor />} />
      </Route>
    </Routes>
  );
};
