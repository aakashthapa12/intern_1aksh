
// import React, { useState } from 'react';
// import {
//   CTable,
//   CTableHead,
//   CTableRow,
//   CTableHeaderCell,
//   CTableBody,
//   CTableDataCell,
//   CButton,
//   CPagination,
//   CPaginationItem
// } from '@coreui/react';
// import './Businesses.css'; // Importing the CSS file

// const Businesses = () => {
//   const businesses = [
//     { id: 1, name: 'Business 1', location: 'USA' },
//     { id: 2, name: 'Business 2', location: 'Canada' },
//     { id: 3, name: 'Business 3', location: 'Australia' },
//   ];

//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize, setPageSize] = useState(10);

//   const handleChangePage = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const handlePageSizeChange = (event) => {
//     setPageSize(Number(event.target.value));
//     setCurrentPage(1);
//   };

//   const paginatedData = businesses.slice((currentPage - 1) * pageSize, currentPage * pageSize);
//   const pageCount = Math.ceil(businesses.length / pageSize);

//   return (
//     <div className="container">
//       <h2 className="heading">Businesses</h2>
//       <div className="page-size-selector">
//         <label>
//           Show{' '}
//           <select value={pageSize} onChange={handlePageSizeChange}>
//             {[10, 20, 30, 40, 50].map((size) => (
//               <option key={size} value={size}>
//                 {size}
//               </option>
//             ))}
//           </select>{' '}
//           entries
//         </label>
//       </div>
//       <CTable hover responsive className="custom-table">
//         <CTableHead>
//           <CTableRow>
//             <CTableHeaderCell>ID</CTableHeaderCell>
//             <CTableHeaderCell>Business Name</CTableHeaderCell>
//             <CTableHeaderCell>Country</CTableHeaderCell>
//             <CTableHeaderCell>Joined on</CTableHeaderCell>
//             <CTableHeaderCell>Actions</CTableHeaderCell>
//           </CTableRow>
//         </CTableHead>
//         <CTableBody>
//           {paginatedData.map((business) => (
//             <CTableRow key={business.id}>
//               <CTableDataCell>{business.id}</CTableDataCell>
//               <CTableDataCell>{business.name}</CTableDataCell>
//               <CTableDataCell>{business.location}</CTableDataCell>
//               <CTableDataCell>{new Date().toLocaleDateString()}</CTableDataCell>
//               <CTableDataCell>
//                 <CButton color="info" className="action-button">Edit</CButton>
//                 <CButton color="danger" className="action-button">Delete</CButton>
//               </CTableDataCell>
//             </CTableRow>
//           ))}
//         </CTableBody>
//       </CTable>
//       <CPagination className="pagination">
//         <CPaginationItem
//           onClick={() => handleChangePage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </CPaginationItem>
//         {Array.from({ length: pageCount }, (_, i) => (
//           <CPaginationItem
//             key={i}
//             onClick={() => handleChangePage(i + 1)}
//             active={currentPage === i + 1}
//           >
//             {i + 1}
//           </CPaginationItem>
//         ))}
//         <CPaginationItem
//           onClick={() => handleChangePage(currentPage + 1)}
//           disabled={currentPage === pageCount}
//         >
//           Next
//         </CPaginationItem>
//       </CPagination>
//     </div>
//   );
// };

// export default Businesses;









import React, { useState } from 'react';
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CPagination,
  CPaginationItem
} from '@coreui/react';
import './Businesses.css'; // Importing the CSS file

const Businesses = () => {
  const businesses = [
    { id: 1, name: 'Business 1', location: 'USA' },
    { id: 2, name: 'Business 2', location: 'Canada' },
    { id: 3, name: 'Business 3', location: 'Australia' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value));
    setCurrentPage(1);
  };

  const paginatedData = businesses.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const pageCount = Math.ceil(businesses.length / pageSize);

  return (
    <div className="businesses-container">
      <div className="businesses-content">
        <h2 className="heading">Businesses</h2>
        <div className="page-size-selector">
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
        <CTable hover responsive className="custom-table">
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>ID</CTableHeaderCell>
              <CTableHeaderCell>Business Name</CTableHeaderCell>
              <CTableHeaderCell>Country</CTableHeaderCell>
              <CTableHeaderCell>Joined on</CTableHeaderCell>
              <CTableHeaderCell>Actions</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {paginatedData.map((business) => (
              <CTableRow key={business.id}>
                <CTableDataCell>{business.id}</CTableDataCell>
                <CTableDataCell>{business.name}</CTableDataCell>
                <CTableDataCell>{business.location}</CTableDataCell>
                <CTableDataCell>{new Date().toLocaleDateString()}</CTableDataCell>
                <CTableDataCell>
                  <CButton color="info" className="action-button">Edit</CButton>
                  <CButton color="danger" className="action-button">Delete</CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
        <CPagination className="pagination">
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
    </div>
  );
};

export default Businesses;
