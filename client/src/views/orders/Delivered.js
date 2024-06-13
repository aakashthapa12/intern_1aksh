import React, { useState } from 'react'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CPagination,
  CPaginationItem,
  CBadge,
} from '@coreui/react'

const Delivered = () => {
  const data = [
    {
      id: '20240000177',
      customer: 'pawan',
      value: '₹27630.34',
      date: '10 May 2024, 02:21 pm',
      status: 'Delivered',
    },
    {
      id: '20240000174',
      customer: 'pawan',
      value: '₹31860.39',
      date: '10 May 2024, 02:06 pm',
      status: 'Delivered',
    },
    {
      id: '20240000173',
      customer: 'pawan',
      value: '₹665.28',
      date: '10 May 2024, 02:05 pm',
      status: 'Delivered',
    },
    {
      id: '20240000087',
      customer: 'pawan',
      value: '₹1076.92',
      date: '19 Apr 2024, 10:16 am',
      status: 'Delivered',
    },
    // Add more order data here...
  ]

  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const handleView = (id) => {
    alert('Viewing order with ID: ' + id)
  }

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage)
  }

  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value))
    setCurrentPage(1)
  }

  const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  const pageCount = Math.ceil(data.length / pageSize)

  return (
    <div className="container">
      <h2>Delivered Orders</h2>
      <div>
        <label>
          Show{' '}
          <select value={pageSize} onChange={handlePageSizeChange}>
            {[10, 20, 30, 40, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>{' '}
          entries
        </label>
      </div>
      <CTable hover responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>Order ID</CTableHeaderCell>
            <CTableHeaderCell>Customer</CTableHeaderCell>
            <CTableHeaderCell>Order Value</CTableHeaderCell>
            <CTableHeaderCell>Order At</CTableHeaderCell>
            <CTableHeaderCell>Status</CTableHeaderCell>
            <CTableHeaderCell>Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {paginatedData.map((order) => (
            <CTableRow key={order.id}>
              <CTableDataCell>{order.id}</CTableDataCell>
              <CTableDataCell>{order.customer}</CTableDataCell>
              <CTableDataCell>{order.value}</CTableDataCell>
              <CTableDataCell>{order.date}</CTableDataCell>
              <CTableDataCell>
                <CBadge color="warning">{order.status}</CBadge>
              </CTableDataCell>
              <CTableDataCell>
                <CButton color="info" onClick={() => handleView(order.id)}>
                  View
                </CButton>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      <CPagination>
        <CPaginationItem
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </CPaginationItem>
        {Array.from({ length: pageCount }, (_, i) => (
          <CPaginationItem
            key={i}
            onClick={() => handleChangePage(i + 1)}
            active={currentPage === i + 1}
          >
            {i + 1}
          </CPaginationItem>
        ))}
        <CPaginationItem
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === pageCount}
        >
          Next
        </CPaginationItem>
      </CPagination>
    </div>
  )
}

export default Delivered