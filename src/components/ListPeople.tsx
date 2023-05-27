import { Card, Pagination, Row } from "antd";
import { Dispatch, FC, SetStateAction } from "react";
import { TPeopleByPage } from "../service";
import { Link } from "react-router-dom";
import { getNumberPersonFromUrl } from "../utilites/getNumberPersonFromUrl";
import starWarsLogo from "../assets/star.png";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

type ListPeopleProps = {
  data: TPeopleByPage,
  error: FetchBaseQueryError | SerializedError | undefined,
  isLoading: boolean,
  handleQuery: Dispatch<SetStateAction<string>>
}

export const ListPeople: FC<ListPeopleProps> = ({data, error, isLoading, handleQuery }) => {

  const { Meta } = Card;
  
  //TODO заменить на адекватный тип
  const handleChange = (event: any) => {
    handleQuery(event);
  };

  return (
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
  );
};
