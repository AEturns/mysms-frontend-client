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
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import CSVReader from 'react-csv-reader'
import { useParams } from 'react-router-dom'
import { sassNull } from 'sass'
import { getNullOrUndefinedAttributes } from 'src/common/common'
import { COLORS, MODAL_MSGES, PER_MSG_COST } from 'src/common/const'
import ChatBubble from 'src/components/ChatBubble'
import LoadingFullscreen from 'src/components/LoadingFullscreen'
import MobileNumbersList from 'src/components/MobileNumbersList'
import SuccessModal from 'src/components/Modals/SuccessModal'
import WarningModal from 'src/components/Modals/WarningModal'
import TokenService from 'src/services/TokenService'
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
  const [scheduleType, setScheduleType] = useState('send_now')
  const [scheduleDate, setScheduleDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
  const [scheduleTime, setScheduleTime] = useState(moment(new Date()).format('HH:MM'))

  const [successModalVisible, setSuccessModalVisible] = useState(false)
  const [isAlert, setIsAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [warnningModalVisible, setWarnningModalVisible] = useState(false)
  const userId = TokenService.getUser()?.user?.id

  const [fileInfo, setFileInfo] = useState(null)
  useEffect(() => {
    if (type == 'edit' && id > 0) {
      getCampaignDataByID()
    }
  }, [id, type])

  const handleForce = (data, fileInfo, originalFile) => {
    setFileInfo(originalFile)
    setNumberList(data)
  }

  let messageCost = (
    numberList.length * TokenService.getUser()?.user?.user_detail?.perMessageCount
  ).toLocaleString('en-US')

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
        user: userId,
        campaignName: campaignName,
        campaignDetails: campaignMessage,
        messageCost: Number(messageCost),
        numberCount: nums.length,
        audience: audienceType,
        numberList: audienceType == 'custom' ? nums : [],
      },
    }
    setLoading(true)
    await CampaignService.createCampaign(data)
      .then(async (res) => {
        if (audienceType != 'custom') await uploadCSVFile(res?.data.id)
        setSuccessModalVisible(true)
        setLoading(false)
      })
      .catch((e) => {
        console.error(e)
        setLoading(false)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      })
  }

  const uploadCSVFile = async (id) => {
    if (!fileInfo) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong with the CSV File!',
      })
      return
    }

    const formData = new FormData()
    formData.append('csv', fileInfo)

    await CampaignService.uploadCampaignFile(formData, id)
      .then((res) => {
        setSuccessModalVisible(true)
        setLoading(false)
      })
      .catch((e) => {
        console.error(e)
        setLoading(false)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      })
  }

  const getCampaignDataByID = async () => {
    await CampaignService.getCampaign(id)
      .then((res) => {
        assignData(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const assignData = async (data) => {
    setCampaignName(data.attributes.campaignName)
    setCampaignMessage(data.attributes.campaignDetails)
    setAudienceType(data.attributes.audience)

    setNumberList(
      data.attributes.audience == 'custom'
        ? data.attributes.numberList.map((number) => ({ mobile: number }))
        : [],
    )
  }

  const checkData = async () => {
    setIsAlert(false)
    if (campaignName == '') {
      setIsAlert(true)
      setAlertMessage('Campaign Name is required')
      return false
    }

    if (campaignMessage == '') {
      setIsAlert(true)
      setAlertMessage('Camapign Message is required')
      return false
    }

    if (numberList.length <= 0) {
      setIsAlert(true)
      setAlertMessage('Number base is required')
      return false
    }

    setWarnningModalVisible(true)
  }

  console.log(fileInfo)

  return (
    <CCard className="mb-4">
      <CCardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h5>Campaign Configaration</h5>
      </CCardHeader>
      <CCardBody>
        <LoadingFullscreen loading={loading} />
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
                      onFileLoaded={(data, fileInfo, originalFile) =>
                        handleForce(data, fileInfo, originalFile)
                      }
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
            {/* <CRow className="mt-3">
              <CCol>
                <CFormLabel htmlFor="staticEmail" className="col-form-label">
                  Schedule Type <span style={{ color: 'red' }}>*</span>
                </CFormLabel>
                <div style={{ display: 'flex', gap: 50 }} className="mt-2">
                  <CFormCheck
                    type="radio"
                    name="flexRadioDefaul2"
                    id="flexRadioDefault2"
                    label="Send Now"
                    value="send_now"
                    onChange={(e) => {
                      setScheduleType(e.target.value)
                    }}
                    checked={scheduleType == 'send_now'}
                  />
                  <CFormCheck
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault2"
                    label="Send Later"
                    value="schedule"
                    onChange={(e) => {
                      setScheduleType(e.target.value)
                    }}
                    checked={scheduleType == 'schedule'}
                  />
                </div>
              </CCol>
            </CRow>
            {scheduleType == 'schedule' && (
              <CRow className="mt-3">
                {' '}
                <CCol>
                  <CFormLabel htmlFor="staticEmail" className="col-form-label">
                    Schedule Date & Time <span style={{ color: 'red' }}>*</span>
                  </CFormLabel>
                  <div style={{ display: 'flex', gap: 15 }}>
                    <CFormInput
                      type="date"
                      style={{ width: 200 }}
                      value={scheduleDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setScheduleDate(e.target.value)}
                    />
                    <CFormInput
                      type="time"
                      style={{ width: 140 }}
                      value={scheduleTime}
                      min={new Date().toISOString()}
                      onChange={(e) => setScheduleTime(e.target.value)}
                    />
                  </div>
                </CCol>
              </CRow>
            )} */}
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
                  <p>Mask Name = {TokenService.getUser()?.user?.user_detail?.mask}</p>
                  <p>Number Count = {numberList.length}</p>
                  <p>
                    Per Message Count = Rs.{' '}
                    {TokenService.getUser()?.user?.user_detail?.perMessageCount || PER_MSG_COST}{' '}
                  </p>
                  {/* {scheduleType == 'schedule' && (
                    <p>
                      Schedule Date = {moment(scheduleDate).format('DD/MM/YYYY')} {moment(scheduleTime).format('HH:MM')}
                      
                    </p>
                  )} */}
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
                  onClick={() => checkData()}
                  style={{ backgroundColor: COLORS.SECONDARY, border: '0px', width: 200 }}
                >
                  {type == 'edit' ? 'UPDATE' : 'CREATE'} CAMPAIGN
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
      <WarningModal
        title="Action Required!"
        description="Pause for a moment! Are you sure you want to create this campaign?"
        buttonTitle="CREATE NOW"
        open={warnningModalVisible}
        onOpen={(s) => setWarnningModalVisible(s)}
        okay={(s) => createCampaign()}
      />
    </CCard>
  )
}

export default AddEditCampaign
