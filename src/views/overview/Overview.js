/* eslint-disable */
import React, { lazy ,useEffect,useState} from 'react'
import { Redirect,Link } from 'react-router-dom';
import {db} from "src/firebase";
import {uid} from "uid";
import { set,ref,onValue } from "firebase/database"
import {
  CFormSelect,
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CModalBody,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasBody,
  CCloseButton,
  COffcanvasTitle,
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CPopover,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import history from './history';
import { useHistory } from 'react-router-dom'
import { All } from '@tensorflow/tfjs';

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))



const newmod=
  {
    modelname: "",
  label1: "",
  label2:"",
  type1:"",
  type2:"",
  trainingstatus:"NA",
  duration:"NA",
  testavailable:"NA",
  lastmodified:"NA",
  }


const Overview = () => {
  const [visible, setVisible] = useState(false)
  const [visiblen, setVisiblen] = useState(false)
  const [Newmodel, updateNewmodel] = useState(newmod);
  const history = useHistory();

  let [Allmodels,updateAllmodels] = useState([]);
  const handleChange = (e) => {
    updateNewmodel({
      ...Newmodel,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  useEffect(()=>{
    
    
    onValue(ref(db),(snapshot)=>{
      const data=snapshot.val();
      console.log(data);
      if(data!=null)
      {

        Object.values(data).map((model)=>{
          updateAllmodels((oldmodels)=>[...oldmodels,model]);
        });
        Allmodels=data;
        console.log("ksakjnkjn")
      }
      console.log(Allmodels);
    })
  },[])

  const gotomodel=(e,source)=>
  {
    history.push({pathname:`/model`,state: source});
  }

  const handleSubmit = (e) => {
    const uuid=uid();
    e.preventDefault()
    const mname=Newmodel.modelname,mlabel1=Newmodel.label1,mlabel2=Newmodel.label2,mtype1=Newmodel.type1,mtype2=Newmodel.type2;
    const trainingstatus=Newmodel.trainingstatus,duration=Newmodel.duration,testavailable=Newmodel.testavailable,lastmodified=Newmodel.lastmodified;
    const loss=Newmodel.loss,mse=Newmodel.mse;
    set(ref(db,`/${uuid}`),{
      uuid,
      mname,
      mlabel1,
      mlabel2,
      mtype1,
      mtype2,
      trainingstatus,
      duration,
      testavailable,
      lastmodified,

    });
    history.push({pathname:`/model`,state: uuid});
    
  };

  return (
    <>
    <h2>Overview</h2>
    <CCard>
  <CCardBody>
    <CCard>
  <CCardBody>
    
  <>
    <CButton onClick={() => setVisible(!visible)}>Create Model</CButton>
    <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>Local Dataset</CModalTitle>
      </CModalHeader>
      <CModalBody>

      <CForm>
      <CRow className="mb-3">
        <CFormLabel  className="col-sm-2 col-form-label">Model Name</CFormLabel>
        <CCol sm={10}>
          <CFormInput name="modelname" type="text" onChange={handleChange} defaultValue="Enter Model Name"  plainText/>
        </CCol>
      </CRow>
        <div className="mb-3">
          <CFormLabel >Upload CSV file</CFormLabel>
          <CFormInput type="file" id="formFile"/>
          <center>OR</center>
          <CFormSelect name="datset"  aria-label="Default select example">
                  <option >Select Dataset</option>
                  <option value="carsdata">CARS-DATA</option>
                  </CFormSelect>
        </div>
        <div>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">Path</th>
                <th scope="col">Labels</th>
              </tr>
            </thead>
            <tbody>
              <tr>

                <td>
                  <CFormSelect name="label1" onChange={handleChange} aria-label="Default select example">
                  <option >Select</option>
                  <option value="Input">Input</option>
                  <option value="Target">Target </option>
                  <option value="Don't Use">Don't Use</option>
                  </CFormSelect>
                </td>
                <td>
                <CFormSelect name="label2" onChange={handleChange} aria-label="Default select example">
                  <option >Select</option>
                  <option value="Input">Input</option>
                  <option value="Target">Target </option>
                  <option value="Don't Use">Dont'use</option>
                  </CFormSelect>
                </td>
              </tr>
              <tr>

                <td>
                  <CFormSelect name="type1" onChange={handleChange} aria-label="Default select example">
                    <option >Select</option>
                    <option value="Categorical">Categorical</option>
                    <option value="Image">Image </option>
                    <option value="Mask">Mask</option>
                    <option value="Text">Text</option>
                    </CFormSelect>
                </td>
                <td>
                    <CFormSelect name="type2" onChange={handleChange} aria-label="Default select example">
                      <option >Select</option>
                      <option value="Categorical">Categorical</option>
                      <option value="Image">Image </option>
                      <option value="Mask">Mask</option>
                      <option value="Text">Text</option>
                    </CFormSelect>
                </td>
              </tr>
              
             
            </tbody>
          </table>
        </div>
      </CForm>

      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Close
        </CButton>
        <>
        <Link to="/model"><CButton color="primary" onClick={handleSubmit} >  Submit</CButton></Link>
    
    
  
        </>
      </CModalFooter>
    </CModal>
  </>

  

    </CCardBody>
    </CCard>
    <br></br>
    <CCard>
  <CCardBody>
    <CTable hover>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell colSpan="2" scope="col">Datasets</CTableHeaderCell>
      <CTableHeaderCell scope="col">Training Status</CTableHeaderCell>
      <CTableHeaderCell scope="col">Duration(ms)</CTableHeaderCell>
      <CTableHeaderCell scope="col">Test Available</CTableHeaderCell>
       <CTableHeaderCell scope="col">Last Modified</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    {Allmodels.map(item=>(


    <CTableRow key={item.uuid}>
      <CTableDataCell colSpan="2">{item.mname}</CTableDataCell>
      <CTableDataCell>{item.trainingstatus}</CTableDataCell>
      <CTableDataCell>{item.duration}</CTableDataCell>
      <CTableDataCell>{item.testavailable}</CTableDataCell>
      <CTableDataCell>{item.lastmodified}</CTableDataCell>
      <CTableDataCell><CButton onClick={(e)=>gotomodel(e,item.uuid)}>Goto</CButton></CTableDataCell>

    </CTableRow>
     ))}
  </CTableBody>
</CTable>
</CCardBody>
</CCard>
</CCardBody>
    </CCard>
    </>
  )
}

export default Overview
