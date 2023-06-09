import { Card, Col, Input, Pagination, Row } from 'antd'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { TPeopleByPage } from '../service'
import { Link } from 'react-router-dom'
import { getNumberPersonFromUrl } from '../utilites/getNumberPersonFromUrl'
import starWarsLogo from '../assets/star.png'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'

type ListPeopleProps = {
  data: TPeopleByPage
  error: FetchBaseQueryError | SerializedError | undefined
  isLoading: boolean
  handleQuery: Dispatch<SetStateAction<string>>
  handleSearch: Dispatch<SetStateAction<string>>
}

export const ListPeople: FC<ListPeopleProps> = ({
  data,
  isLoading,
  // error,
  handleSearch,
  handleQuery,
}) => {
  const { Search } = Input
  const { Meta } = Card

  const [currentPage, setCurrentPage] = useState(1)
  const handleChange = (page: number): void => {
    page && handleQuery(String(page))
    page && setCurrentPage(page)
  }

  const onSearch = (value: string) => {
    setCurrentPage(1)
    handleQuery(String(1))
    handleSearch(value)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
      }}>
      <Row>
        <Col md={6} lg={8} xl={10}>
          <Search placeholder="input search name" enterButton="Search" size="large" onSearch={onSearch} style={{ margin: '10px 0 20px 0' }} />
        </Col>
        <Col md={12} lg={8} xl={4}></Col>
        <Col md={6} lg={8} xl={10}></Col>
      </Row>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}>
        {data?.results.length === 0 && 'Not found'}
        {data?.results.map((person) => (
          <Link key={person?.url} style={{ flex: '0 0 30%', margin: '10px' }} to={`people/${getNumberPersonFromUrl(person.url)}`}>
            <Card hoverable bordered={false} cover={<img alt={person?.url} src={starWarsLogo} />}>
              <Meta title={person?.name} description={person?.url} />
            </Card>
          </Link>
        ))}
      </div>
      <Row gutter={16} justify={'center'} align={'middle'}>
        <Pagination
          style={{ margin: '20px 0' }}
          defaultCurrent={1}
          current={currentPage}
          total={data?.count}
          onChange={handleChange}
          disabled={isLoading}
          showSizeChanger={false}
        />
      </Row>
    </div>
  )
}
