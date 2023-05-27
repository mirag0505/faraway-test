import starWarsLogo from "./assets/star.png";
import "./App.css";
import { useAppSelector, useAppDispatch } from "./counterReducer";
import { useGetPeopleByPageQuery } from "./service";
import { Card, Row } from "antd";
import { Link } from "react-router-dom";
import { getNumberPersonFromUrl } from "./utilites/getNumberPersonFromUrl";
import { Pagination } from "antd";
import { useState } from "react";
import { Spin } from "antd";

function App() {
  const [query, setQuery] = useState("1");
  const { data, error, isLoading } = useGetPeopleByPageQuery(query);

  console.log(isLoading)
  const { Meta } = Card;
  //TODO заменить на адекватный тип
  const handleChange = (event: any) => {
    setQuery(event);
  };

  return (
    <>
      <h1>Star wars</h1>
      <div>
        {error ? (
          <pre>{JSON.stringify(error)}</pre>
        ) : (
          <>
            {isLoading ? (
              <Spin />
            ) : (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}>
                <Row gutter={16}>
                  <Pagination
                    defaultCurrent={1}
                    total={data?.count}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </Row>
                <Row gutter={16}>
                  {data?.results?.map((person) => (
                    <Link
                      key={person?.url}
                      style={{ flex: "0 0 30%", margin: "10px" }}
                      to={`people/${getNumberPersonFromUrl(person.url)}`}>
                      <Card
                        hoverable
                        bordered={false}
                        cover={<img alt={person?.url} src={starWarsLogo} />}>
                        <Meta title={person?.name} description={person?.url} />
                      </Card>
                    </Link>
                  ))}
                </Row>
                <Row gutter={16}>
                  <Pagination
                    defaultCurrent={1}
                    total={data?.count}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </Row>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
