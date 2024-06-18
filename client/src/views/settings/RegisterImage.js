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

const RegisterImage = () => {
  const data = useMemo(
    () => [
      {
        image: 'https://via.placeholder.com/150',
        registerImageName: 'Register Image 1',
      },
      {
        image: 'https://via.placeholder.com/150',
        registerImageName: 'Register Image 2',
      },
      {
        image: 'https://via.placeholder.com/150',
        registerImageName: 'Register Image 3',
      },
      // Add more register image data here...
    ],
    [],
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Image',
        accessor: 'image',
        Cell: ({ cell: { value } }) => (
          <img src={value} alt="Register" style={{ width: '100px', height: 'auto' }} />
        ),
      },
      {
        Header: 'Register Image Name',
        accessor: 'registerImageName',
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: ({ row }) => (
          <>
            <CButton color="info" size="sm" onClick={() => handleEdit(row.original)}>
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

  const handleEdit = (registerImage) => {
    alert('Editing register image: ' + registerImage.registerImageName)
  }

  const handleDelete = (registerImage) => {
    alert('Deleting register image: ' + registerImage.registerImageName)
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Register Images</h2>
        <CButton color="primary">Add New Register Image</CButton>
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

export default RegisterImage
