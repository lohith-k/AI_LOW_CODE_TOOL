import React, { lazy,useState ,useEffect} from 'react'
import * as tf from '@tensorflow/tfjs';
import {db} from "src/firebase";
import {uid} from "uid";
import { set,ref,onValue,update } from "firebase/database";
import { useLocation } from 'react-router-dom'

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
import { model } from '@tensorflow/tfjs';

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))
const Metrics=({mse,loss})=>{
  const arr=[1,2,3,4,5,6,7,8,9,10]

 
  return(
    <div>
        <CCard>
          <CCardBody>
        <CTable>
  <CTableHead color="light">
    <CTableRow>
      <CTableHeaderCell scope="col">Epoch</CTableHeaderCell>
      <CTableHeaderCell scope="col">MSE</CTableHeaderCell>
      <CTableHeaderCell scope="col">Loss</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    {arr.map((e,index)=>(

    <CTableRow>
      <CTableHeaderCell scope="row">{e}</CTableHeaderCell>
      <CTableDataCell>{mse[index]}</CTableDataCell>
      <CTableDataCell>{loss[index+10]}</CTableDataCell>
    </CTableRow>
    ))}
  </CTableBody>
</CTable>

        </CCardBody>
        </CCard>
    </div>
  )
}



const Training = () => {
  
  const location = useLocation()
  const [metname,setmetname]=useState([])

  const [clicked,Setclicked]=useState(0)
  const [mse,setmse]=useState([]);
  const [loss,setloss]=useState([]);
  const [acc,setacc]=useState(0.27639);
  const [elements, setElements] = useState(null);
  let data;
    useEffect(() => {
      
      console.log(localStorage.getItem("fav"));
      onValue(ref(db), (snapshot) => {
        data = snapshot.val();
       console.log("ewww",data);
       if (data !== undefined) {
  
         let newele=Object.values(data).map((todo) => {
          if(todo.uuid==localStorage.getItem("fav"))
          {
            if(todo.elements)
            {
             setElements(todo.elements);
            }
         }
           
         });
       }
     });
     
    },[]);

  const tff=()=>{
    var t0,t1,dur=0;
    Setclicked(1);
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
    
    async function getData() {
      const carsDataResponse = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
      const carsData = await carsDataResponse.json();
      const cleaned = carsData.map(car => ({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower,
      }))
      .filter(car => (car.mpg != null && car.horsepower != null));
    
      return cleaned;
    }
    
    async function run() {
      t0=performance.now();

      const data = await getData();
      const values = data.map(d => ({
        x: d.horsepower,
        y: d.mpg,
      }));
    
      const model = tf.sequential();
  
        elements.filter(number =>  'position' in number && number.data.label=="DENSE" ).map(item => (
          
          model.add(tf.layers.dense({inputShape: [1], units: 1, useBias: true}))
          
    
        ))

      const inputs = data.map(d => d.horsepower)
      const labels = data.map(d => d.mpg);
  
      const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
      const labelTensor = tf.tensor2d(labels, [labels.length, 1]);
  
      //Step 3. Normalize the data to the range 0 - 1 using min-max scaling
      const inputMax = inputTensor.max();
      const inputMin = inputTensor.min();
      const labelMax = labelTensor.max();
      const labelMin = labelTensor.min();
  
      const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
      const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));
  
  
      model.compile({
        optimizer: tf.train.adam(),
        loss: tf.losses.meanSquaredError,
        metrics: ['mse'],
      });
      console.log(model);
      const batchSize = 32;
      const epochs = 20;
    
       const ff=await model.fit(normalizedInputs, normalizedLabels, {
        batchSize,
        epochs,
        shuffle: true,
        callbacks:  {
          onEpochEnd: async (epoch, logs) => {
            console.log(epoch + ':' + logs.loss);
          }
      }});
      console.log("kkkkkkkkkk",tf.metrics)
      var hisloss=ff.history.loss;
      const hismse=ff.history.mse;
   


      setmse(hismse);
      setloss(hisloss);
      console.log(ff);
      console.log(hisloss)
      const mmod=tf.sequential();
      model.compile({
        optimizer: 'sgd',
        loss: tf.losses.meanSquaredError,
        metrics: ['accuracy']
      });

      
      function onBatchEnd(batch, logs) {
        console.log('Accuracy', logs.acc);
      }
      
      // Train for 5 epochs with batch size of 32.
      model.fit(normalizedInputs, normalizedLabels, {
         epochs: 5,
         batchSize: 32,
         callbacks: {onBatchEnd}
       }).then(info => {
        var rr=info.history.acc[0]*100
        if(rr!=0)
        {
          setacc(rr.toFixed(5))
        }
         console.log('Final accuracy', info.history.acc);
       });
       t1 = performance.now();
       
       dur= parseFloat(t1-t0).toFixed(0);
       console.log("ijalivds",dur)
       update(ref(db, `/${localStorage.getItem("fav")}/`), {
        uuid: localStorage.getItem("fav"),
        duration:dur,
        hisloss,
        hismse
      });
      setmetname(model.metricsNames);
    }
    
    run()
    
    update(ref(db, `/${localStorage.getItem("fav")}/`), {
      uuid: localStorage.getItem("fav"),
      trainingstatus:"Done",
      lastmodified:date,
    });
    
  }

  return (
    <>
    <h2>Training</h2>
    <CButton onClick={(e)=>tff()}> Train and Run </CButton>
    <br></br><br></br><br></br>
    {clicked===1?<>
     
    <CRow>
      <CCol sm={6}>
          <CCard>
            <CCardBody>
            <h6>BATCH SIZE :- 32</h6>
                <h6>EPOCHs :- 10</h6>
                <h6>Samples :- 392</h6>
                <hr></hr>
              <h6>METRICS</h6>
              {metname.map(item=>
                <li>{item}</li>
                )}
                
                
            </CCardBody>
          </CCard>
      </CCol>
      <CCol sm={6}>
      <CCard>
            <CCardBody>
              <h4>ACCURACY</h4>
              <h6>The Final Accuracy of the model is {acc}</h6>
              <hr></hr>
              <h6>The Accuracy in percentage of the model is {(acc*100).toFixed(3)}%</h6>
            </CCardBody>
          </CCard>
      </CCol>
    </CRow>
    <br></br>
    <Metrics mse={mse} loss={loss}/>
    
    </>
    :
    <></>}
    </>
  )
}

export default Training
