import React from 'react'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

const SampleTable = () => {
  // Sample data
  const data = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
    { id: 4, name: 'Alice Brown', age: 28, email: 'alice@example.com' },
  ]

  return (
    <CTable striped hover responsive>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">ID</CTableHeaderCell>
          <CTableHeaderCell scope="col">Name</CTableHeaderCell>
          <CTableHeaderCell scope="col">Age</CTableHeaderCell>
          <CTableHeaderCell scope="col">Email</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {data.map((row) => (
          <CTableRow key={row.id}>
            <CTableDataCell>{row.id}</CTableDataCell>
            <CTableDataCell>{row.name}</CTableDataCell>
            <CTableDataCell>{row.age}</CTableDataCell>
            <CTableDataCell>{row.email}</CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  )
}

export default SampleTable
