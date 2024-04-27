import { CCard, CCardBody, CCardHeader, CCol, CFormInput, CFormLabel, CFormTextarea, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import CSVReader from 'react-csv-reader'
import { useParams } from 'react-router-dom'
import { COLORS } from 'src/common/const'
import MobileNumbersList from 'src/components/MobileNumbersList'

function AddEditCampaign() {
  const { id, type } = useParams()

  const [lotteryName, setLotteryName] = useState('')
  const [numberList, setNumberList] = useState([])

  useEffect(() => {
    if (type == 'edit' && id > 0) {
      // getVoterById(id)
    }
  }, [id, type])

  const handleForce = (data, fileInfo) => setNumberList(data)

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, '_'),
  }

  return (
    <CCard className="mb-4">
      <CCardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h5>Campaign Configaration</h5>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol md={6}>
            <CRow className="mb-4">
              <h6 style={{ color: COLORS.MAIN }}>
                {type == 'edit' ? 'Edit' : 'Create New'} Campaign
              </h6>
            </CRow>
            <CRow>
              <CCol md={8}>
                <CFormLabel htmlFor="staticEmail" className="col-form-label">
                  Campaign Name <span style={{ color: 'red' }}>*</span>
                </CFormLabel>
                <CFormInput
                  type="text"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  value={lotteryName}
                  onChange={(e) => setLotteryName(e.target.value)}
                />
              </CCol>
            </CRow>
            <CRow className="mt-3">
              <CCol md={8}>
                <CFormLabel htmlFor="staticEmail" className="col-form-label">
                  Upload CSV File <span style={{ color: 'red' }}>*</span>
                </CFormLabel>
                <CSVReader
                  cssClass="mt-1"
                  onFileLoaded={handleForce}
                  parserOptions={papaparseOptions}
                />
              </CCol>
            </CRow>
            <CRow className="mt-3">
              <CCol md={8}>
                <CFormLabel htmlFor="staticEmail" className="col-form-label">
                  Campaign Message <span style={{ color: 'red' }}>*</span>
                </CFormLabel>
                <CFormTextarea
                  type="text"
                  id="exampleFormControlInput1"
                  placeholder="Type the message here..."
                  value={lotteryName}
                  onChange={(e) => setLotteryName(e.target.value)}
                />
              </CCol>
            </CRow>
          </CCol>
          {numberList.length > 0 && (
            <CCol>
              <CRow>
                <MobileNumbersList mobileNumbers={numberList} />
              </CRow>
            </CCol>
          )}
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default AddEditCampaign
