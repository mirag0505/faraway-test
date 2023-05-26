import reactLogo from "./assets/react.svg";
import starWarsLogo from "./assets/star.png";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAppSelector, increment, useAppDispatch } from "./counterReducer";
import { Button, Space } from "antd";
import { useGetPersonByNumberQuery, useGetPeopleQuery } from "./service";
import { Card } from "antd";
import { Outlet, Link } from "react-router-dom";

function App() {
  const countFromReducer = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetPeopleQuery();

  const { Meta } = Card;
  return (
    <>
      <h1>Star wars</h1>
      <div>
        {isLoading ? (
          <img src={reactLogo} className="logo react logo-spin" alt="React logo" />
        ) : (
          <>
            {error ? (
              <pre>{JSON.stringify(error)}</pre>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}>
                {data?.results?.map((person) => (
                  <Link
                    key={person?.url}
                    to={`contacts/${
                      person.url.split("/")[person.url.split("/").length]
                    }`}>
                    <Card
                      hoverable
                      bordered={false}
                      style={{ flex: "0 0 30%", margin: "10px" }}
                      cover={<img alt={person?.url} src={starWarsLogo} />}>
                      <Meta title={person?.name} description={person?.url} />
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <Button onClick={() => dispatch(increment())}>
        count is {countFromReducer}
      </Button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
