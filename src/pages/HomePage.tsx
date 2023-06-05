import { FC, useState } from 'react'
import { useGetPeopleByPageQuery } from '../service.ts'
import { Spin, Typography } from 'antd'
import { ListPeople } from '../components/ListPeople.tsx'

// type HomeProps = {}

export const HomePage: FC = () => {
  const [query, setQuery] = useState('1')
  const [search, setSearch] = useState('')

  const { data, error, isLoading } = useGetPeopleByPageQuery({ page: query, search: search })
  const { Title } = Typography

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <Title level={2}>Star wars</Title>
      {error && <pre>{JSON.stringify(error)}</pre>}
      {isLoading && <Spin style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />}
      {data && <ListPeople data={data} error={error} isLoading={isLoading} handleQuery={setQuery} handleSearch={setSearch} />}
    </div>
  )
}
