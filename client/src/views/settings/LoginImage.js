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

const LoginImage = () => {
  const data = useMemo(
    () => [
      {
        image: 'https://via.placeholder.com/150',
        loginImageName: 'Login Image 1',
      },
      {
        image: 'https://via.placeholder.com/150',
        loginImageName: 'Login Image 2',
      },
      {
        image: 'https://via.placeholder.com/150',
        loginImageName: 'Login Image 3',
      },
      // Add more login image data here...
    ],
    [],
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Image',
        accessor: 'image',
        Cell: ({ cell: { value } }) => (
          <img src={value} alt="Login" style={{ width: '100px', height: 'auto' }} />
        ),
      },
      {
        Header: 'Login Image Name',
        accessor: 'loginImageName',
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

  const handleEdit = (loginImage) => {
    alert('Editing login image: ' + loginImage.loginImageName)
  }

  const handleDelete = (loginImage) => {
    alert('Deleting login image: ' + loginImage.loginImageName)
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Login Images</h2>
        <CButton color="primary">Add New Login Image</CButton>
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

export default LoginImage
