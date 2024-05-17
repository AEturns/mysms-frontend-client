import { cilWarning } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import CSVReader from 'react-csv-reader'
import { useParams } from 'react-router-dom'
import { COLORS, MODAL_MSGES, PER_MSG_COST } from 'src/common/const'
import ChatBubble from 'src/components/ChatBubble'
import MobileNumbersList from 'src/components/MobileNumbersList'
import SuccessModal from 'src/components/Modals/SuccessModal'
import { CampaignService } from 'src/services/campaign.service'
import Swal from 'sweetalert2'

function AddEditCampaign() {
  const { id, type } = useParams()

  const [campaignName, setCampaignName] = useState('')
  const [campaignMessage, setCampaignMessage] = useState('')
  const [numberList, setNumberList] = useState([])
  const [audienceType, setAudienceType] = useState('custom')
  const [enteredNumber, setEnteredNumber] = useState('')
  const [enteredNumberAlert, setEnteredNumberAlert] = useState('')

  const [successModalVisible, setSuccessModalVisible] = useState(false)
  const [isAlert, setIsAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  useEffect(() => {
    if (type == 'edit' && id > 0) {
      // getVoterById(id)
    }
  }, [id, type])

  const handleForce = (data, fileInfo) => {
    setNumberList(data)
  }

  let messageCost = (numberList.length * PER_MSG_COST).toLocaleString('en-US')

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, '_'),
  }

  const enterNumbersCustom = () => {
    setEnteredNumberAlert('')
    if (enteredNumber.length != 10) {
      setEnteredNumberAlert('Please enter a valid number!!')
      return
    }
    setNumberList([...numberList, { mobile: enteredNumber }])
    setEnteredNumber('')
  }

  const clearNumbers = () => {
    setNumberList([])
  }

  const createCampaign = async () => {
    setIsAlert(false)
    if (campaignName == '') {
      setIsAlert(true)
      setAlertMessage('Campaign Name is required')
      return
    }

    if (campaignMessage == '') {
      setIsAlert(true)
      setAlertMessage('Camapign Message is required')
      return
    }

    if (numberList.length <= 0) {
      setIsAlert(true)
      setAlertMessage('Number base is required')
      return
    }

    const nums = numberList.map((item) => item.mobile)

    const data = {
      data: {
        user: 1,
        campaignName: campaignName,
        campaignDetails: campaignMessage,
        messageCost: Number(messageCost),
        numberCount: nums.length,
        audience: audienceType,
        numberList: audienceType == 'custom' ? nums : [],
      },
    }

    await CampaignService.createCampaign(data)
      .then((res) => {
        setSuccessModalVisible(true)
      })
      .catch((e) => {
        console.error(e)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      })
  }



  return (
    <CCard className="mb-4">
      <CCardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h5>Campaign Configaration</h5>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol md={8}>
            <CRow className="mb-4">
              <h6 style={{ color: COLORS.MAIN }}>
                {type == 'edit' ? 'Edit' : 'Create New'} Campaign
              </h6>
            </CRow>
            <CRow>
              <CCol md={8}>
                <CFormLabel htmlFor="staticEmail" className="col-form-label">
                  Campaign Name (For References) <span style={{ color: 'red' }}>*</span>
                </CFormLabel>
                <CFormInput
                  type="text"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
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
                  style={{ height: 200 }}
                  id="exampleFormControlInput1"
                  placeholder="Type the message here..."
                  value={campaignMessage}
                  onChange={(e) => setCampaignMessage(e.target.value)}
                />
              </CCol>
            </CRow>
            <CRow className="mt-3">
              <CCol>
                <CFormLabel htmlFor="staticEmail" className="col-form-label">
                  Audience Type <span style={{ color: 'red' }}>*</span>
                </CFormLabel>
                <div style={{ display: 'flex', gap: 50 }} className="mt-2">
                  <CFormCheck
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    label="Custom Numbers"
                    value="custom"
                    onChange={(e) => {
                      clearNumbers()
                      setAudienceType(e.target.value)
                    }}
                    checked={audienceType == 'custom'}
                  />
                  <CFormCheck
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    label="CSV Upload"
                    value="csv"
                    onChange={(e) => {
                      clearNumbers()
                      setAudienceType(e.target.value)
                    }}
                    checked={audienceType == 'csv'}
                  />
                </div>
              </CCol>
            </CRow>
            {audienceType == 'csv' && (
              <div>
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
              </div>
            )}
            {audienceType == 'custom' && (
              <div>
                <CRow className="mt-3">
                  <CCol md={8}>
                    <CFormLabel htmlFor="staticEmail" className="col-form-label">
                      Enter Numbers <span style={{ color: 'red' }}>*</span>
                    </CFormLabel>
                    <CFormInput
                      type="text"
                      placeholder="Type & Enter"
                      text={
                        <span style={{ color: 'red', paddingLeft: 5 }}>{enteredNumberAlert}</span>
                      }
                      value={enteredNumber}
                      onChange={(e) => setEnteredNumber(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key == 'Enter') {
                          enterNumbersCustom()
                        }
                      }}
                    />
                  </CCol>
                </CRow>
              </div>
            )}
            <CRow className="mt-4">
              <CCol>
                <div
                  style={{
                    backgroundColor: '#F0F0F0',
                    padding: '10px',
                    width: '500px',
                    borderRadius: 10,
                  }}
                >
                  <p style={{ fontWeight: 'bold' }}>SUMMERY:</p>
                  <p>Number Count = {numberList.length}</p>
                  <p>Per Message Count = Rs. {PER_MSG_COST} </p>
                  <p style={{ color: COLORS.MAIN }}>Total Campaign Cost = Rs. {messageCost}</p>
                </div>
              </CCol>
            </CRow>{' '}
            {isAlert && (
              <CAlert
                hidden={!isAlert}
                color="warning"
                className="d-flex align-items-center mt-4"
                style={{ width: '500px' }}
              >
                <CIcon icon={cilWarning} className="flex-shrink-0 me-2" width={24} height={24} />
                <div>{alertMessage}</div>
              </CAlert>
            )}
            <CRow className="mt-5">
              <CCol>
                <CButton
                  onClick={() => createCampaign()}
                  style={{ backgroundColor: COLORS.MAIN, border: '0px', width: 200 }}
                >
                  CREATE CAMPAIGN
                </CButton>
              </CCol>
            </CRow>
          </CCol>

          <CCol>
            {campaignMessage.length > 0 && (
              <CRow>
                <CCol>
                  <CCard>
                    <CCardBody>
                      <p>Message Preview:</p>
                      <ChatBubble text={campaignMessage} />
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            )}
            {numberList.length > 0 && (
              <CRow className="mt-3">
                <CCol>
                  <MobileNumbersList
                    mobileNumbers={numberList}
                    deleteBtn={audienceType == 'custom'}
                    deleteItem={(i) => {
                      setNumberList((numberList) => numberList.filter((_, index) => index !== i))
                    }}
                  />
                </CCol>
              </CRow>
            )}
          </CCol>
        </CRow>
      </CCardBody>
      <SuccessModal
        open={successModalVisible}
        title={'Successful Operation'}
        description={MODAL_MSGES.CAMPAIGN.ADD_SUCCESS_MSG}
        onOpen={(status) => setSuccessModalVisible(status)}
        rediretUrl="/campaigns"
      />
    </CCard>
  )
}

export default AddEditCampaign
