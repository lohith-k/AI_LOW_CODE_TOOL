import React,{useState} from "react";
import { Handle } from "react-flow-renderer";
import { CCard,CCardHeader,CCardBody, } from "@coreui/react";
import {CChart} from '@coreui/react-chartjs'



const InputNode = ({ data }) => {
  return (
      <div>
    {[
           
        { color: 'dark' },
      ].map((item, index) => (
        <CCard
          textColor={item.textColor}
          className={`mb-3 border-top-${item.color} border-top-3`}
          style={{ maxWidth: '10rem' }}
          key={index}
        >
          <CCardHeader>{data.label}</CCardHeader>
          <CCardBody>
       
        <div id={data.id}>{data.id}</div>
        <div></div>
        <Handle
        type="source"
        position="right"
        id={`${data.id}.right1`}
        style={{  borderRadius: 0 }}
      />
            <CCard style={{height:"100px"}}>
              <CCardBody >
             
              </CCardBody>
            </CCard>
          </CCardBody>
        </CCard>
      ))}
      
      
      
     
    </div>
  );
};

const OutputNode = ({ data }) => {
  return (
      <div>
    {[
           
        { color: 'dark' },
      ].map((item, index) => (
        <CCard
          textColor={item.textColor}
          className={`mb-3 border-top-${item.color} border-top-3`}
          style={{ maxWidth: '10rem' }}
          key={index}
        >
          <CCardHeader>{data.label}</CCardHeader>
          <CCardBody>
          <Handle
        type="target"
        position="left"
        id={`${data.id}.left`}
        style={{ borderRadius: 0 }}
      />
        <div id={data.id}>{data.id}</div>
        <div></div>
            <CCard style={{height:"100px"}}>
              <CCardBody >
             
              </CCardBody>
            </CCard>
          </CCardBody>
        </CCard>
      ))}
      
      
      
     
    </div>
  );
};

const DenseNode = ({ data}) => {
  return (
      <div>
    {[
           
        { color: 'dark' },
      ].map((item, index) => (
        <CCard
          textColor={item.textColor}
          className={`mb-3 border-top-${item.color} border-top-3`}
          style={{ maxWidth: '10rem' }}
          key={index}
        >
          <CCardHeader>{data.label}</CCardHeader>
          <CCardBody>
          <Handle
        type="target"
        position="left"
        id={`${data.id}.left`}
        style={{ borderRadius: 0 }}
      />
        <div id={data.id}>{data.id}</div>
        <div>
        </div>
        <Handle
        type="source"
        position="right"
        id={`${data.id}.right1`}
        style={{  borderRadius: 0 }}
      />
            <CCard style={{height:"100px"}}>
              <CCardBody >
             
              </CCardBody>
            </CCard>
          </CCardBody>
        </CCard>
      ))}
      
      
      
     
    </div>
  );
};


const ConvolutionNode = ({ data }) => {
    console.log("kekwhi");
    return (
        <div>
      {[
             
          { color: 'dark' },
        ].map((item, index) => (
          <CCard
            textColor={item.textColor}
            className={`mb-3 border-top-${item.color} border-top-3`}
            style={{ maxWidth: '10rem' }}
            key={index}
          >
            <CCardHeader>{data.label}</CCardHeader>
            <CCardBody>
            <Handle
          type="target"
          position="left"
          id={`${data.id}.left`}
          style={{ borderRadius: 0 }}
        />
          <div id={data.id}>{data.id}</div>
          <Handle
          type="source"
          position="right"
          id={`${data.id}.right1`}
          style={{  borderRadius: 0 }}
        />
              <CCard style={{height:"100px"}}>
                <CCardBody >
               
                </CCardBody>
              </CCard>
            </CCardBody>
          </CCard>
        ))}
        
        
        
       
      </div>
    );
  };

  const RecurrentNode = ({ data }) => {
    return (
        <div>
      {[
             
          { color: 'dark' },
        ].map((item, index) => (
          <CCard
            textColor={item.textColor}
            className={`mb-3 border-top-${item.color} border-top-3`}
            style={{ maxWidth: '10rem' }}
            key={index}
          >
            <CCardHeader>{data.label}</CCardHeader>
            <CCardBody>
            <Handle
          type="target"
          position="left"
          id={`${data.id}.left`}
          style={{ borderRadius: 0 }}
        />
          <Handle
          type="source"
          position="right"
          id={`${data.id}.right1`}
          style={{  borderRadius: 0 }}
        />
              <CCard style={{height:"100px"}}>
                <CCardBody >
               
                </CCardBody>
              </CCard>
            </CCardBody>
          </CCard>
        ))}
        
        
        
       
      </div>
    );
  };

  const VGG16Node = ({ data }) => {
    console.log("kekwhi");
    return (
        <div>
      {[
             
          { color: 'dark' },
        ].map((item, index) => (
          <CCard
            textColor={item.textColor}
            className={`mb-3 border-top-${item.color} border-top-3`}
            style={{ maxWidth: '10rem' }}
            key={index}
          >
            <CCardHeader>{data.label}</CCardHeader>
            <CCardBody>
            <Handle
          type="target"
          position="left"
          id={`${data.id}.left`}
          style={{ borderRadius: 0 }}
        />
          <div id={data.id}>{data.id}</div>
          <Handle
          type="source"
          position="right"
          id={`${data.id}.right1`}
          style={{  borderRadius: 0 }}
        />
              <CCard style={{height:"100px"}}>
                <CCardBody >
               
                </CCardBody>
              </CCard>
            </CCardBody>
          </CCard>
        ))}
        
        
        
       
      </div>
    );
  };

  const ResNet50Node = ({ data }) => {
    console.log("kekwhi");
    return (
        <div>
      {[
             
          { color: 'dark' },
        ].map((item, index) => (
          <CCard
            textColor={item.textColor}
            className={`mb-3 border-top-${item.color} border-top-3`}
            style={{ maxWidth: '10rem' }}
            key={index}
          >
            <CCardHeader>{data.label}</CCardHeader>
            <CCardBody>
            <Handle
          type="target"
          position="left"
          id={`${data.id}.left`}
          style={{ borderRadius: 0 }}
        />
          <div id={data.id}>{data.id}</div>
          <Handle
          type="source"
          position="right"
          id={`${data.id}.right1`}
          style={{  borderRadius: 0 }}
        />
              <CCard style={{height:"100px"}}>
                <CCardBody >
               
                </CCardBody>
              </CCard>
            </CCardBody>
          </CCard>
        ))}
        
        
        
       
      </div>
    );
  };

  const InceptionV3Node = ({ data }) => {
    console.log("kekwhi");
    return (
        <div>
      {[
             
          { color: 'dark' },
        ].map((item, index) => (
          <CCard
            textColor={item.textColor}
            className={`mb-3 border-top-${item.color} border-top-3`}
            style={{ maxWidth: '10rem' }}
            key={index}
          >
            <CCardHeader>{data.label}</CCardHeader>
            <CCardBody>
            <Handle
          type="target"
          position="left"
          id={`${data.id}.left`}
          style={{ borderRadius: 0 }}
        />
          <div id={data.id}>{data.id}</div>
          <Handle
          type="source"
          position="right"
          id={`${data.id}.right1`}
          style={{  borderRadius: 0 }}
        />
              <CCard style={{height:"100px"}}>
                <CCardBody >
               
                </CCardBody>
              </CCard>
            </CCardBody>
          </CCard>
        ))}
        
        
        
       
      </div>
    );
  };

  const MobileNetV2Node = ({ data }) => {
    console.log("kekwhi");
    return (
        <div>
      {[
             
          { color: 'dark' },
        ].map((item, index) => (
          <CCard
            textColor={item.textColor}
            className={`mb-3 border-top-${item.color} border-top-3`}
            style={{ maxWidth: '10rem' }}
            key={index}
          >
            <CCardHeader>{data.label}</CCardHeader>
            <CCardBody>
            <Handle
          type="target"
          position="left"
          id={`${data.id}.left`}
          style={{ borderRadius: 0 }}
        />
          <div id={data.id}>{data.id}</div>
          <Handle
          type="source"
          position="right"
          id={`${data.id}.right1`}
          style={{  borderRadius: 0 }}
        />
              <CCard style={{height:"100px"}}>
                <CCardBody >
               
                </CCardBody>
              </CCard>
            </CCardBody>
          </CCard>
        ))}
        
        
        
       
      </div>
    );
  };

  const UNetNode = ({ data }) => {
    console.log("kekwhi");
    return (
        <div>
      {[
             
          { color: 'dark' },
        ].map((item, index) => (
          <CCard
            textColor={item.textColor}
            className={`mb-3 border-top-${item.color} border-top-3`}
            style={{ maxWidth: '10rem' }}
            key={index}
          >
            <CCardHeader>{data.label}</CCardHeader>
            <CCardBody>
            <Handle
          type="target"
          position="left"
          id={`${data.id}.left`}
          style={{ borderRadius: 0 }}
        />
          <div id={data.id}>{data.id}</div>
          <Handle
          type="source"
          position="right"
          id={`${data.id}.right1`}
          style={{  borderRadius: 0 }}
        />
              <CCard style={{height:"100px"}}>
                <CCardBody >
               
                </CCardBody>
              </CCard>
            </CCardBody>
          </CCard>
        ))}
        
        
        
       
      </div>
    );
  };

export const nodeTypes = {
  convolution: ConvolutionNode,
  recurrent:RecurrentNode,
  vgg16:VGG16Node,
  resnet50:ResNet50Node,
  inceptionv3:InceptionV3Node,
  mobilenetv2:MobileNetV2Node,
  unet:UNetNode,
  dense: DenseNode,
  input:InputNode,
  output:OutputNode,
  
};
