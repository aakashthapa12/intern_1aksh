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

const Testimonials = () => {
  const data = useMemo(
    () => [
      {
        name: 'John Doe',
        testimonial: 'This is a great product!',
        dateTime: '2024-05-01 14:00',
      },
      {
        name: 'Jane Smith',
        testimonial: 'I had a wonderful experience!',
        dateTime: '2024-05-02 15:30',
      },
      {
        name: 'Sam Johnson',
        testimonial: 'Highly recommended!',
        dateTime: '2024-05-03 16:45',
      },
      // Add more testimonial data here...
    ],
    [],
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Testimonial',
        accessor: 'testimonial',
      },
      {
        Header: 'Date & Time',
        accessor: 'dateTime',
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: ({ row }) => (
          <>
            <CButton color="info" size="sm" onClick={() => handleView(row.original)}>
              View
            </CButton>{' '}
            <CButton color="warning" size="sm" onClick={() => handleEdit(row.original)}>
              Edit
            </CButton>{' '}
            <CButton color="danger" size="sm" onClick={() => handleDelete(row.original)}>
              Delete
            </CButton>
          </>
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

  const handleView = (testimonial) => {
    alert('Viewing testimonial: ' + testimonial.testimonial)
  }

  const handleEdit = (testimonial) => {
    alert('Editing testimonial: ' + testimonial.testimonial)
  }

  const handleDelete = (testimonial) => {
    alert('Deleting testimonial: ' + testimonial.testimonial)
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Testimonials</h2>
        <CButton color="primary">Add New Testimonial</CButton>
      </div>
      <div className="mb-3">
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

export default Testimonials
