
import React, { useState, useEffect } from 'react';
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CForm,
  CButtonGroup,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const modules = {
  toolbar: [
    [{ 'font': [] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }, { 'align': [] }],
    ['link', 'image'],
    ['clean'],
  ],
};

const formats = [
  'font',
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'color',
  'background',
  'script',
  'list',
  'bullet',
  'indent',
  'align',
  'link',
  'image',
];

const Content = () => {
  const [content, setContent] = useState([
    { id: 1, page: 'Terms & Conditions', body: 'Terms & Conditions' },
    { id: 2, page: 'Privacy Policy', body: 'Privacy Policy' },
    { id: 3, page: 'Shipping Policy', body: 'Shipping Policy' },
    { id: 4, page: 'Refund Policy', body: 'Refund Policy' },
    { id: 5, page: 'About Us', body: 'About Us' },
  ]);

  const [editMode, setEditMode] = useState(false);
  const [currentContent, setCurrentContent] = useState({ id: null, page: '', body: '' });
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const savedContent = JSON.parse(localStorage.getItem('savedContent'));
    if (savedContent) {
      const updatedContent = content.map((item) => {
        const savedItem = savedContent.find((saved) => saved.id === item.id);
        return savedItem ? { ...item, ...savedItem } : item;
      });
      setContent(updatedContent);
    }
  }, []);

  const handleEdit = (item) => {
    const savedContent = JSON.parse(localStorage.getItem('savedContent'));
    const itemToEdit = savedContent ? savedContent.find((saved) => saved.id === item.id) || item : item;
    setCurrentContent(itemToEdit);
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    setCurrentContent({ id: null, page: '', body: '' });
  };

  const handleSave = () => {
    const savedContent = JSON.parse(localStorage.getItem('savedContent')) || [];
    const updatedContent = savedContent.map((item) =>
      item.id === currentContent.id ? currentContent : item
    );
    const newContent = savedContent.find((item) => item.id === currentContent.id)
      ? updatedContent
      : [...savedContent, currentContent];

    localStorage.setItem('savedContent', JSON.stringify(newContent));
    setEditMode(false);
    setModalVisible(true);
  };

  const handleChange = (value) => {
    setCurrentContent({ ...currentContent, body: value });
  };

  const containerStyle = {
    border: '2px solid black',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  };

  return (
    <div className="container" style={containerStyle}>
      <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <CModalHeader>
          <CModalTitle>Congratulations!!</CModalTitle>
        </CModalHeader>
        <CModalBody>{currentContent.page} updated successfully!</CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => setModalVisible(false)}>
            OK
          </CButton>
        </CModalFooter>
      </CModal>
      {!editMode ? (
        <>
          <h2>Content</h2>
          <CTable hover responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Page</CTableHeaderCell>
                <CTableHeaderCell className="text-end">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {content.map((item) => (
                <CTableRow key={item.id}>
                  <CTableDataCell>
                    <div dangerouslySetInnerHTML={{ __html: item.page }} />
                  </CTableDataCell>
                  <CTableDataCell className="text-end">
                    <CButton color="info" onClick={() => handleEdit(item)}>
                      Edit
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </>
      ) : (
        <div>
          <h2><strong>{currentContent.page}</strong></h2>
          <CForm>
            <div className="mb-3">
              <ReactQuill
                id="body"
                value={currentContent.body}
                onChange={handleChange}
                modules={modules}
                formats={formats}
              />
            </div>
            <CButtonGroup>
              <CButton color="primary" onClick={handleSave}>
                Save
              </CButton>
              <CButton color="secondary" onClick={handleCancel}>
                Cancel
              </CButton>
            </CButtonGroup>
          </CForm>
        </div>
      )}
    </div>
  );
};

export default Content;





















