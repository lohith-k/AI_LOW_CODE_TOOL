import React, { useState,useEffect,lazy } from 'react'
import  tfvis from '@tensorflow/tfjs-vis';
import {BarChart,Bar, LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line } from 'recharts';
import {db} from "src/firebase";
import {uid} from "uid";
import { set,ref,onValue,update } from "firebase/database";
import {
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

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Evaluate = () => {
  const [mse,setmse]=useState([]);
  const [loss,setloss]=useState([]);
  let dataa;
  useEffect(() => {
    
    console.log(localStorage.getItem("fav"));
    onValue(ref(db), (snapshot) => {
      dataa = snapshot.val();
     console.log("ewww",dataa);
     if (dataa !== undefined) {

       let newele=Object.values(dataa).map((todo) => {
        if(todo.uuid==localStorage.getItem("fav"))
        {
          if(todo.hisloss)
          {
           setloss(todo.hisloss);
          }
          if(todo.hismse)
          {
           setmse(todo.hismse);
          }
       }
         
       });
     }
   });
   
  },[]);


  const dataloss = [
    {
      "name": "Epoch 1",
      "loss": loss[0],
    },
    {
      "name": "Epoch 2",
      "loss": loss[1],
    },
    {
      "name": "Epoch 3",
      "loss": loss[2],
    },
    {
      "name": "Epoch 4",
      "loss": loss[3],
    },
    {
      "name": "Epoch 5",
      "loss": loss[4],
    },
    {
      "name": "Epoch 6",
      "loss": loss[5],
    },
    {
      "name": "Epoch 7",
      "loss": loss[6],
    },
    {
      "name": "Epoch 8",
      "loss": loss[7],
    },
    {
      "name": "Epoch 9",
      "loss": loss[8],
    },
    {
      "name": "Epoch 10",
      "loss": loss[9],
    },
    
  ]

  const datamse = [
    {
      "name": "Epoch 1",
      "mse": loss[10],
      "amt": 2400
    },
    {
      "name": "Epoch 2",
      "mse": loss[11],
      "amt": 2400
    },
    {
      "name": "Epoch 3",
      "mse": loss[12],
      "amt": 2400
    },
    {
      "name": "Epoch 4",
      "mse": loss[13],
      "amt": 2400
    },
    {
      "name": "Epoch 5",
      "mse": loss[14],
      "amt": 2400
    },
    {
      "name": "Epoch 6",
      "mse": loss[15],
      "amt": 2400
    },
    {
      "name": "Epoch 7",
      "mse": loss[16],
      "amt": 2400
    },
    {
      "name": "Epoch 8",
      "mse": loss[17],
      "amt": 2400
    },
    {
      "name": "Epoch 9",
      "mse": loss[18],
      "amt": 2400
    },
    {
      "name": "Epoch 10",
      "mse": loss[19],
      "amt": 2400
    },
    
    
    
  ]
  
  const datalossmse = [
    {
      "name": "Epoch 1",
      "mse": loss[10],
      "loss":loss[0],
      "amt": 2400
    },
    {
      "name": "Epoch 2",
      "mse": loss[11],
      "loss":loss[1],
      "amt": 2400
    },
    {
      "name": "Epoch 3",
      "mse": loss[12],
      "loss":loss[2],
      "amt": 2400
    },
    {
      "name": "Epoch 4",
      "mse": loss[13],
      "loss":loss[3],
      "amt": 2400
    },
    {
      "name": "Epoch 5",
      "mse": loss[14],
      "loss":loss[4],
      "amt": 2400
    },
    {
      "name": "Epoch 6",
      "mse": loss[15],
      "loss":loss[5],
      "amt": 2400
    },
    {
      "name": "Epoch 7",
      "mse": loss[16],
      "loss":loss[6],
      "amt": 2400
    },
    {
      "name": "Epoch 8",
      "mse": loss[17],
      "loss":loss[7],
      "amt": 2400
    },
    {
      "name": "Epoch 9",
      "mse": loss[18],
      "loss":loss[8],
      "amt": 2400
    },
    {
      "name": "Epoch 10",
      "mse": loss[19],
      "loss":loss[9],
      "amt": 2400
    },
  ]

  // Render to visor
  const surface = { name: 'Bar chart', tab: 'Charts' };
  return (
    <>
    <h2>Evaluate</h2>
    <CCard>
      <CCardBody>
       <center> <h3>Loss</h3> </center>
    <LineChart width={930} height={350} data={dataloss}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="loss" stroke="#82ca9d" />
</LineChart>
</CCardBody>
</CCard>
<br></br><br></br>
<CCard>
  
      <CCardBody>
        <center><h3>MSE</h3></center>
<LineChart width={930} height={350} data={datamse}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="mse" stroke="#82ca9d" />
</LineChart>
</CCardBody>
</CCard>
<br></br><br></br>
<CCard>
      <CCardBody>
        <center><h3>LOSS vs MSE</h3></center>
<BarChart width={930} height={350} data={datalossmse}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="loss" fill="#8884d8" />
  <Bar dataKey="mse" fill="#82ca9d" />
</BarChart>
</CCardBody>
</CCard>
</>
  )
}

export default Evaluate
