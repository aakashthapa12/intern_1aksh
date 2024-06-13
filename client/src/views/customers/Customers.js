import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
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
} from '@coreui/react'

const Customers = () => {
  const data = useMemo(
    () => [
      {
        name: 'Vijay Sundar',
        id: '65cb62fb45097c9f71412fad',
        registered: 'Tue, 13 Feb, 2024, 6:09 pm',
        lastPurchase: 'Sun, 28 Apr, 2024, 4:34 pm',
        orders: 2,
      },
      {
        name: 'Vijay Sundar',
        id: '65d472a1e1cb4101533b8037',
        registered: 'Tue, 20 Feb, 2024, 3:06 pm',
        lastPurchase: 'No Purchase',
        orders: 'No Order',
      },
      {
        name: 'rajTest',
        id: '65dc2695359750257436d2cd',
        registered: 'Mon, 26 Feb, 2024, 11:20 am',
        lastPurchase: 'Sun, 28 Apr, 2024, 4:24 pm',
        orders: 2,
      },
      // Add more customer data here...
    ],
    [],
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Customer Name',
        accessor: 'name',
      },
      {
        Header: 'Unique Id',
        accessor: 'id',
      },
      {
        Header: 'Date Registered',
        accessor: 'registered',
      },
      {
        Header: 'Last Purchase',
        accessor: 'lastPurchase',
      },
      {
        Header: 'Orders',
        accessor: 'orders',
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: ({ row }) => (
          <CButton color="info" onClick={() => handleView(row.original.id)}>
            View
          </CButton>
        ),
      },
    ],
    [],
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
  } = useTable({ columns, data }, usePagination)

  const { pageIndex, pageSize } = state

  const handleView = (id) => {
    alert('Viewing user with ID: ' + id)
  }

  return (
    <div className="container">
      <h2>All Customers</h2>
      <CButton color="primary" className="mb-3">
        Add User
      </CButton>
      <div>
        <label>
          Show{' '}
          <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
            {[10, 20, 30, 40, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>{' '}
          entries
        </label>
      </div>
      <CTable hover responsive {...getTableProps()}>
        <CTableHead>
          {headerGroups.map((headerGroup) => (
            <CTableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <CTableHeaderCell {...column.getHeaderProps()}>
                  {column.render('Header')}
                </CTableHeaderCell>
              ))}
            </CTableRow>
          ))}
        </CTableHead>
        <CTableBody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <CTableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <CTableDataCell {...cell.getCellProps()}>{cell.render('Cell')}</CTableDataCell>
                ))}
              </CTableRow>
            )
          })}
        </CTableBody>
      </CTable>
      <CPagination>
        <CPaginationItem onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </CPaginationItem>
        {pageOptions.map((page, index) => (
          <CPaginationItem key={index} onClick={() => gotoPage(page)} active={pageIndex === page}>
            {page + 1}
          </CPaginationItem>
        ))}
        <CPaginationItem onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </CPaginationItem>
      </CPagination>
    </div>
  )
}

export default Customers