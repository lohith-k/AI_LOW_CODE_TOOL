/* eslint-disable */
import React, { lazy,useState,Fragment,useEffect,useCallback} from 'react'
import ReactFlow, {isEdge,getConnectedEdges,ControlButton,addEdge, Background, updateEdge,Controls, MiniMap,Handle, Position,removeElements} from 'react-flow-renderer';
import useCollapse from 'react-collapsed'
import { nodeTypes } from "./Nodes.js";
import {CChart } from '@coreui/react-chartjs'
import Settings from './Settings'
import {db} from "src/firebase";
import {uid} from "uid";
import { set,ref,onValue,update } from "firebase/database";
import xtype from 'xtypejs'

import {
  CWidgetStatsE,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CCollapse,
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardTitle,
  CCardText,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CDropdown,
  CDropdownToggle,
  CDropdownItem,
  CDropdownMenu,
  CNav,
  CFormCheck,
  CNavItem,
  CNavLink,
  CForm,
  CFormLabel
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
import { useLocation } from 'react-router-dom'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))



const initialElements = [
  {
    id: '101',
    type: 'input',
    position: { x: 0, y: 0 },
    data: { label: 'INPUT' },
  },
  {
    id: '102',
    type: 'dense',
    position: { x: 200, y: 0 },
    data: { label: 'DENSE' },
  },
  {
    id: '103',
    type: 'convolution',
    position: { x: 400, y: 0 },
    data: { label: 'CONVOLUTION' },
  },
  {
    id: '104',
    type: 'output',
    position: { x: 600, y: 0 },
    data: { label: 'OUTPUT' },
  },
]








const Model = () => {
  const location = useLocation()
  const [tempuuid,settempuuid]=useState("");
  const fromDashboard = location.state?.fromDashboard


  const [visibleA, setVisibleA] = useState(false)
const [visibleB, setVisibleB] = useState(false)

const [clickednode, setclickednode] = useState({id:3});
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  const [elements, setElements] = useState(initialElements);
  let components =elements;
  const [name, setName] = useState("");
  const [activeNode, setActiveNode] = useState();
  const [newName, setNewName] = useState("");
  const [instance, setInstance] = useState();
  let data;
  
  useEffect(() => {
    
    console.log(elements);

    let tempuuid =location.state;
    console.log("pppppppppppppppppppppppp",tempuuid);
    if(tempuuid!=null)
    localStorage.setItem("fav", tempuuid);
    onValue(ref(db), (snapshot) => {
       data = snapshot.val();
      console.log("ewww",data);
      if (data !== undefined) {
        console.log(tempuuid);

        let newele=Object.values(data).map((todo) => {
         if(todo.uuid==localStorage.getItem("fav"))
         {
           if(todo.elements)
           {
            console.log(todo.uuid);
            setElements(todo.elements);
           }
        }
          
        });
      }
     components=elements;
    });
    if (activeNode) setNewName(activeNode.data.label);
  }, [activeNode]);

 
  const elementRemoveHandler = (elementTobeRemoved) => {
    setElements((prev) => removeElements(elementTobeRemoved, prev));
  };

  const connectHandler = (params) => {
    setElements((prev) => addEdge(params, prev));
  };

  const edgeUpdateHandler = (oldEdge, newConnection) =>
  setElements((els) => updateEdge(oldEdge, newConnection, els));

  const clickHandler = (e) => {
    var htmlString = e.target.outerHTML.toString();
    var index = htmlString.indexOf(` id="`);
    index += 5;
    const currentId = htmlString.substr(index, 13);

    elements.forEach((_current) => {
      if (_current.id === currentId) {
        setActiveNode(_current);
      }
    });
    // setNewName(activeNode.data.label)
  };

  const onLoad = (reactFlowInstance) => {
    setInstance(reactFlowInstance);
    reactFlowInstance.fitView();
    console.log("hlsdilvisdv");
  };

  const addNode = (e,source) => {
    console.log(source)
    const newNode = {
      id: `${Date.now()}`,
      data: { label: `${source}` },
      type: source.toLowerCase(),
      position: {
        x: 0,
        y: 0
      }
    };
    newNode.data = { ...newNode.data, id: `${newNode.id}` };

    setElements((prev) => {
      return [...prev, newNode];
    });
    setName("");
  };

  

  const onClickElement = useCallback((event: ReactMouseEvent, element: Node | Edge) => {
    console.log(element)
      setclickednode(element);
    
  }, [])
 

  const savingmodel=()=>
  {
    console.log("skh",localStorage.getItem("fav"))
    elements.map(item=>console.log("l",xtype(item.id)));
    
        update(ref(db, `/${localStorage.getItem("fav")}/`), {
      uuid: localStorage.getItem("fav"),
      elements
    });
  }

  const onNodeDragStop = (event, node) => {
    let elementsCopy = elements;
    let index = elements.findIndex((element) => element.id === node.id);
    let newPositionNode = elements[index];
    newPositionNode.position = node.position;
    elementsCopy.splice(index, 1, newPositionNode);
    setElements(elementsCopy);
  };

  return (
    <>
    <>
    

    
   
    <CCard
      textColor='dark'
      className={`mb-3 border-dark`}
      style={{ maxWidth: '100rem' }}
      key={101}
    >
      <CCardHeader>
                <CNav  variant="pills">
                
                      <CDropdown variant="nav-item">
                        <CDropdownToggle color="secondary">Processing</CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem >Reshape</CDropdownItem>
                          <CDropdownItem >GrayScale</CDropdownItem>
                          <CDropdownItem >Onehot</CDropdownItem>
                          <CDropdownItem >Rescale</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>

                      <CDropdown variant="nav-item">
                        <CDropdownToggle color="secondary">Deep Learning</CDropdownToggle>
                        <CDropdownMenu>
                     <CDropdownItem   onClick={(e)=>addNode(e,"DENSE")} >Dense</CDropdownItem>
                          <CDropdownItem onClick={(e)=>addNode(e,"CONVOLUTION")} >Convolution</CDropdownItem>
                          <CDropdownItem onClick={(e)=>addNode(e,"RECURRENT")}>Recurrent</CDropdownItem>
                          <CDropdownItem onClick={(e)=>addNode(e,"VGG16")}>VGG16</CDropdownItem>
                          <CDropdownItem onClick={(e)=>addNode(e,"RESNET50")}>ResNet50</CDropdownItem>
                          <CDropdownItem onClick={(e)=>addNode(e,"INCEPTIONV3")}>InceptionV3</CDropdownItem>
                          <CDropdownItem onClick={(e)=>addNode(e,"MOBILENETV2")}>MobileNetV2</CDropdownItem>
                          <CDropdownItem onClick={(e)=>addNode(e,"UNET")}>UNet</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>

                      <CDropdown variant="nav-item">
                        <CDropdownToggle color="secondary">Operations</CDropdownToggle>
                        <CDropdownMenu>
                        <CDropdownItem >ArgMax</CDropdownItem>
                        <CDropdownItem >Merge</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>

                      <CDropdown variant="nav-item">
                        <CDropdownToggle color="secondary">Custom</CDropdownToggle>
                        <CDropdownMenu>
                        <CDropdownItem >Custom</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                        
                      <CNavItem >
                        <CNavLink >Weights</CNavLink>
                      </CNavItem>

                      <CNavItem>
                        <CNavLink >Preview</CNavLink>
                      </CNavItem>

                      <CNavItem >
                        <CNavLink >Settings</CNavLink>
                      </CNavItem>
                    
                     
                  </CNav>
      </CCardHeader>
<br></br>
      
      <CRow>
  <CCol sm={9}>

    <CCard>
      <CCardBody>
        
      <div
      style={{
        height: "75vh",
        
        border: "1px solid black",
        
      }}
    >
        <ReactFlow
        elements={elements}
        onElementsRemove={elementRemoveHandler}
        onConnect={connectHandler}
        deleteKeyCode={8 || 46}
        onEdgeUpdate={edgeUpdateHandler}
        nodeTypes={nodeTypes}
        snapToGrid={true}
        snapGrid={[16, 16]}
        connectionLineStyle={{ stroke: "black", strokeWidth: 2 }}
        onDoubleClick={clickHandler}
        onLoad={onLoad}
        onElementClick={onClickElement}
        onNodeDragStop={onNodeDragStop}
        
      >
        <Background    />

        <MiniMap
          nodeColor={(node) => {
            switch (node.type) {
              
              default:
                return "#eee";
            }
          }}
        />

<Controls />

      </ReactFlow>
</div>
         
       
      </CCardBody>
    </CCard>
  </CCol>
  <CCol sm={3}>
    <br></br>
 <center> <CButton onClick={savingmodel}>SAVE MODEL</CButton></center>
 <br></br>
 <CCard>
   <CCardBody>
  <CAccordion flush>
  <CAccordionItem itemKey={1}>
    <CAccordionHeader>
      Components
    </CAccordionHeader>
    <CAccordionBody>
     <ul>
        {elements.filter(number =>  'position' in number  ).map(item => (
          <li key={item.id}>{item.data.label}</li>
        ))}
        </ul>
    </CAccordionBody>
  </CAccordionItem>

</CAccordion>
</CCardBody>
</CCard>
<hr></hr>

<CCard style={{borderWidth:"0px"}}>
  <CCardBody>
<div> Settings</div>
 { clickednode.id!=-1 ?<Settings elements={clickednode} /> :<></>}  
</CCardBody>
</CCard>

  </CCol>
</CRow>
<br></br>
    </CCard>
</>

    </>

  )
}

export default Model
