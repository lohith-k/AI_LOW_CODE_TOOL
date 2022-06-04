import React,{useEffect,useState} from "react";
import { set,ref,onValue,update} from "firebase/database"
import {db} from "src/firebase";


const DenseSettings =(props) =>
{
 /* console.log("re",props)
    const [dsettings,setdsettings]=useState({neurons:"",activationfunction:"",dropout:"",batchnormalization:""});
let id=props.elements.id;
  const handleChange = (e) => {
    setdsettings({
      ...dsettings,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
    console.log(dsettings);
    
  };

  const handleSubmit=(e)=>
  {
    e.preventDefault();
    update(ref(db, `/${localStorage.getItem("fav")}`), {
      uuid: localStorage.getItem("fav"),
      settings:dsettings
    });
    console.log(dsettings);
  }
  useEffect(()=>{
    onValue(ref(db),(snapshot)=>{
      const data=snapshot.val();
      console.log(id);
      const settings=data[localStorage.getItem("fav")].settings;
      console.log(settings); 
      if(settings!=null)
      {

        setdsettings(settings);
      }
      console.log(settings)
               
    })
    
  },[])*/

return (
    <div>
      <hr></hr>
         <form>
         
            

            <div class="mb-3 row">
              <label class="col-sm-4 " >Neurons:</label>
              <div class="col-sm-8" >
                <input class="form-control" name="neurons"  />
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-6 "  >Activation Function:</label>
              <div class="col-sm-6"    >
              <input class="form-check-input" type="radio" id="none" name="activationfunction" value="none" />
               <label for="none">None</label><br></br>
               <input class="form-check-input" type="radio" id="sigmoid" name="activationfunction" value="sigmoid" />
               <label for="sigmoid">Sigmoid</label><br/>
                <input class="form-check-input" type="radio" id="relu" name="activationfunction" value="relu" />
               <label for="relu">ReLU</label><br></br>
               <input class="form-check-input" type="radio" id="tanh" name="activationfunction" value="tanh" />
               <label for="tanh">Tanh</label><br/>
                <input class="form-check-input" type="radio" id="softmax" name="activationfunction" value="softmax" />
               <label for="softmax">Softmax</label><br></br>
               <input class="form-check-input" type="radio" id="leakyrelu" name="activationfunction" value="leakyrelu" />
               <label for="leakyrelu">LeakyReLU</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-6 " >Dropout:</label>
              <div class="col-sm-6"  >
              <input class="form-check-input" type="radio" id="yes" name="dropout" value="yes"  />
               <label for="yes">Yes</label><br></br>
               <input class="form-check-input" type="radio" id="no" name="dropout" value="no" />
               <label for="no">No</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-6 " >Batch Normalization:</label>
              <div class="col-sm-6" >
              <input class="form-check-input" type="radio"  id="yes" name="batchnormalization" value="yes" />
               <label for="yes">Yes</label><br></br>
               <input class="form-check-input" type="radio" id="no" name="batchnormalization" value="no" />
               <label for="no">No</label><br/>
              </div>
            </div>

            <button >Save Settings</button>
              </form> 
    </div>

)
}


const ConvolutionSettings =() =>
{

return (
    <div>
     			<form>

           

            <div class="mb-3 row">
              <label class="col-sm-6 " >Convolution Type:</label>
              <div class="col-sm-6" >
                <input class="form-check-input" type="radio" id="conv" name="ctype" value="conv"/>
                <label for="conv">Conv</label><br/>
                <input class="form-check-input" type="radio" id="transpose" name="ctype" value="transpose"/>
                <label for="transpose">Transpose</label><br/>
                <input class="form-check-input" type="radio" id="seperable" name="ctype" value="seperable"/>
                <label for="seperable">Separable</label><br/>
                <input class="form-check-input"  type="radio" id="depthwise" name="ctype" value="depthwise"/>
                <label for="depthwise">Depthwise</label>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-6 " >Dimension</label>
              <div class="col-sm-6" >
              <input class="form-check-input" type="radio" id="1d" name="dimension" value="1d"/>
              <label  for="1d">1D</label><br></br>
              <input class="form-check-input" type="radio" id="2d" name="dimension" value="2d"/>
              <label for="2d">2D</label><br></br>
              <input class="form-check-input" type="radio" id="3d" name="dimension" value="3d"/>
              <label for="3d">3D</label>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-5 " >Patch Size</label>
              <div class="col-sm-5" >
                <input class="form-control" />
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-5 " >Stride</label>
              <div class="col-sm-5" >
                <input class="form-control" />
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-5 " >Feature Maps</label>
              <div class="col-sm-5" >
                <input class="form-control" />
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-5 " >Zero Padding</label>
              <div class="col-sm-7" >
              <input class="form-check-input" type="radio" id="same" name="zeropadding" value="same"/>
              <label for="same">SAME</label><br></br>
              <input class="form-check-input" type="radio" id="valid" name="zeropadding" value="valid"/>
              <label for="valid">VALID</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-5 " >Activation Function</label>
              <div class="col-sm-7" >
              <input class="form-check-input" type="radio" id="none" name="activationfunction" value="none"/>
                <label for="none">None</label><br></br>
                <input class="form-check-input" type="radio" id="sigmoid" name="activationfunction" value="sigmoid"/>
                <label for="sigmoid">Sigmoid</label><br/>
                <input class="form-check-input" type="radio" id="relu" name="activationfunction" value="relu"/>
                <label for="relu">ReLU</label><br></br>
                <input class="form-check-input" type="radio" id="tanh" name="activationfunction" value="tanh"/>
                <label for="tanh">Tanh</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-5 " >Dropout</label>
              <div class="col-sm-5" >
              <input class="form-check-input" type="radio" id="yes" name="dropout" value="yes"/>
              <label for="yes">Yes</label><br></br>
              <input class="form-check-input" type="radio" id="no" name="dropout" value="no"/>
              <label for="no">No</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-5 " >Batch Normalization</label>
              <div class="col-sm-5" >
              <input class="form-check-input" type="radio" id="yes" name="batchnormalization" value="yes"/>
              <label for="yes">Yes</label><br></br>
              <input class="form-check-input" type="radio" id="no" name="batchnormalization" value="no"/>
              <label  for="no">No</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-5 " >Pooling</label>
              <div class="col-sm-5" >
              <input class="form-check-input" type="radio" id="yes" name="pooling" value="yes"/>
              <label for="yes">Yes</label><br></br>
              <input class="form-check-input" type="radio" id="no" name="pooling" value="no"/>
              <label for="yes">No</label><br/>
              </div>
            </div>



			</form>
    </div>
)
}

const RecurrentSettings =() =>
{

return (
    <div>
       <form>

           

            <div class="mb-3 row">
              <label class="col-sm-4 " >Neurons</label>
              <div class="col-sm-8" >
                <input class="form-control" type="number" />
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-6 " >Activation Function</label>
              <div class="col-sm-6" >
              <input class="form-check-input" type="radio" id="none" name="Activationfunction" value="none"/>
              <label for="none">None</label><br/>
              <input class="form-check-input" type="radio" id="sigmoid" name="Activationfunction" value="sigmoid"/>
              <label for="sigmoid">Sigmoid</label><br/>
              <input class="form-check-input" type="radio" id="relu" name="Activationfunction" value="relu"/>
              <label for="relu">ReLU</label><br></br>
              <input class="form-check-input" type="radio" id="tanh" name="Activationfunction" value="tanh"/>
              <label for="tanh">Tanh</label><br/>
              <input class="form-check-input" type="radio" id="softmax" name="Activationfunction" value="softmax"/>
              <label for="Softmax">Softmax</label><br></br>
              <input class="form-check-input" type="radio" id="leakyrelu" name="Activationfunction" value="leakyrelu"/>
              <label for="leakyrelu">LeakyReLU</label><br/>
            
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-6 " >Recurrent Alternative</label>
              <div class="col-sm-6" >
              <input class="form-check-input" type="radio" id="lstm" name="recurrentalternative" value="lstm"/>
              <label for="lstm">LSTM</label><br/>
              <input class="form-check-input" type="radio" id="gru" name="recurrentalternative" value="gru"/>
              <label for="gru">GRU</label><br/>
              <input class="form-check-input" type="radio" id="rnn" name="recurrentalternative" value="rnn"/>
              <label for="rnn">RNN</label>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-6 " >Return Sequence</label>
              <div class="col-sm-6" >
              <input class="form-check-input" type="radio" id="yes" name="returnsequence" value="yes"/>
              <label for="yes">Yes</label><br></br>
              <input class="form-check-input" type="radio" id="no" name="returnsequence" value="no"/>
              <label for="no">No</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-6 " >Dropout</label>
              <div class="col-sm-6" >
              <input class="form-check-input" type="radio" id="yes" name="dropout" value="yes"/>
              <label for="yes">Yes</label><br></br>
              <input class="form-check-input" type="radio" id="no" name="dropout" value="no"/>
              <label for="no">No</label><br/>
              </div>
            </div>

         
          </form> 
    </div>
)
}

const VGG16Settings =() =>
{

return (
    <div>
      <form>

            

            <div class="mb-3 row">
              <label class="col-sm-4 " >Include Top</label>
              <div class="col-sm-8" >
              <input class="form-check-input" type="radio" id="yes" name="includetop" value="yes"/>
              <label for="yes">Yes</label>
              <input class="form-check-input" type="radio" id="no" name="includetop" value="no"/>
              <label for="no">No</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-4 " >Pooling</label>
              <div class="col-sm-8" >
              <input class="form-check-input" type="radio" id="yes" name="pooling" value="yes"/>
              <label for="yes">Yes</label>
              <input class="form-check-input" type="radio" id="no" name="pooling" value="no"/>
              <label for="no">No</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-4 " >Trainable</label>
              <div class="col-sm-8" >
              <input class="form-check-input" type="radio" id="yes" name="trainable" value="yes"/>
              <label for="yes">Yes</label>
              <input class="form-check-input" type="radio" id="no" name="tarinable" value="no"/>
              <label for="no">No</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-4 " >Weights</label>
              <div class="col-sm-8" >
              <input class="form-check-input" type="radio" id="none" name="weights" value="none"/>
              <label for="none">None</label>
              <input class="form-check-input" type="radio" id="imagement" name="weights" value="imagement"/>
              <label for="imagement">imagement</label><br/>
              </div>
            </div>

       
        </form> 
    </div>
)
}

const ResNet50Settings =() =>
{

return (
    <div>
      <form>
      

            <div class="mb-3 row">
              <label class="col-sm-4 " >Include Top</label>
              <div class="col-sm-8" >
              <input class="form-check-input" type="radio" id="yes" name="includetop" value="yes"/>
              <label for="yes">Yes</label>
              <input class="form-check-input" type="radio" id="no" name="includetop" value="no"/>
              <label for="no">No</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-4 " >Pooling</label>
              <div class="col-sm-8" >
              <input class="form-check-input" type="radio" id="yes" name="pooling" value="yes"/>
              <label for="yes">Yes</label>
              <input class="form-check-input" type="radio" id="no" name="pooling" value="no"/>
              <label for="no">No</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-4 " >Trainable</label>
              <div class="col-sm-8" >
              <input class="form-check-input" type="radio" id="yes" name="trainable" value="yes"/>
              <label for="yes">Yes</label>
              <input class="form-check-input" type="radio" id="no" name="tarinable" value="no"/>
              <label for="no">No</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-4 " >Weights</label>
              <div class="col-sm-8" >
              <input class="form-check-input" type="radio" id="none" name="weights" value="none"/>
              <label for="none">None</label>
              <input class="form-check-input" type="radio" id="imagement" name="weights" value="imagement"/>
              <label for="imagement">imagement</label><br/>
              </div>
            </div>

       
        </form> 
    </div>
)
}

const InceptionV3Settings =() =>
{

return (
    <div>
      <form>
      

            <div class="mb-3 row">
              <label class="col-sm-4 " >Include Top</label>
              <div class="col-sm-8" >
              <input class="form-check-input" type="radio" id="yes" name="includetop" value="yes"/>
              <label for="yes">Yes</label>
              <input class="form-check-input" type="radio" id="no" name="includetop" value="no"/>
              <label for="no">No</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-4 " >Pooling</label>
              <div class="col-sm-8" >
              <input class="form-check-input" type="radio" id="yes" name="pooling" value="yes"/>
              <label for="yes">Yes</label>
              <input class="form-check-input" type="radio" id="no" name="pooling" value="no"/>
              <label for="no">No</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-4 " >Trainable</label>
              <div class="col-sm-8" >
              <input class="form-check-input" type="radio" id="yes" name="trainable" value="yes"/>
              <label for="yes">Yes</label>
              <input class="form-check-input" type="radio" id="no" name="tarinable" value="no"/>
              <label for="no">No</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-4 " >Weights</label>
              <div class="col-sm-8" >
              <input class="form-check-input" type="radio" id="none" name="weights" value="none"/>
              <label for="none">None</label>
              <input class="form-check-input" type="radio" id="imagement" name="weights" value="imagement"/>
              <label for="imagement">imagement</label><br/>
              </div>
            </div>

       
        </form> 
    </div>
)
}

const MobileNetV2Settings =() =>
{

return (
    <div>
      <form>
      

            <div class="mb-3 row">
              <label class="col-sm-4 " >Include Top</label>
              <div class="col-sm-8" >
              <input class="form-check-input" type="radio" id="yes" name="includetop" value="yes"/>
              <label for="yes">Yes</label>
              <input class="form-check-input" type="radio" id="no" name="includetop" value="no"/>
              <label for="no">No</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-4 " >Pooling</label>
              <div class="col-sm-8" >
              <input class="form-check-input" type="radio" id="yes" name="pooling" value="yes"/>
              <label for="yes">Yes</label>
              <input class="form-check-input" type="radio" id="no" name="pooling" value="no"/>
              <label for="no">No</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-4 " >Trainable</label>
              <div class="col-sm-8" >
              <input class="form-check-input" type="radio" id="yes" name="trainable" value="yes"/>
              <label for="yes">Yes</label>
              <input class="form-check-input" type="radio" id="no" name="tarinable" value="no"/>
              <label for="no">No</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-4 " >Weights</label>
              <div class="col-sm-8" >
              <input class="form-check-input" type="radio" id="none" name="weights" value="none"/>
              <label for="none">None</label>
              <input class="form-check-input" type="radio" id="imagement" name="weights" value="imagement"/>
              <label for="imagement">imagement</label><br/>
              </div>
            </div>

       
          </form> 
    </div>
)
}

const UNetSettings =() =>
{

return (
    <div>
      <form>

            

            <div class="mb-3 row">
              <label class="col-sm-4 " >Attention</label>
              <div class="col-sm-8" >
              <input class="form-check-input" type="radio" id="yes" name="attention" value="yes"/>
              <label for="yes">Yes</label><br></br>
              <input class="form-check-input" type="radio" id="no" name="attention" value="no"/>
              <label for="no">No</label><br/><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-4 " >N labels</label>
              <div class="col-sm-8" >
                <input class="form-control" type="number" value="1" />
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-4 " >Stack num Down</label>
              <div class="col-sm-8" >
                <input class="form-control" type="number" value="1" />
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-4 " >Stack num Up</label>
              <div class="col-sm-8" >
                <input class="form-control" type="number" value="1" />
              </div>
            </div>

            <div class="mb-4 row">
              <label class="col-sm-6 " >Activation</label>
              <div class="col-sm-6" >
              <input class="form-check-input" type="radio" id="relu" name="Activation" value="relu"/>
              <label for="relu">Relu</label><br></br>
              <input class="form-check-input" type="radio" id="softmax" name="Activation" value="softmax"/>
              <label for="softmax">Softmax</label><br/>
              <input class="form-check-input" type="radio" id="leakyrelu" name="Activation" value="leakyrelu"/>
              <label for="leakyrelu">LeakyReLU</label><br/>
              <input class="form-check-input" type="radio" id="snake" name="Activation" value="snake"/>
              <label for="snake">Snake</label><br></br>
              <input class="form-check-input" type="radio" id="gelu" name="Activation" value="gelu"/>
              <label for="gelu">Gelu</label><br></br>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-6 " >Output Activation</label>
              <div class="col-sm-6" >
              <input class="form-check-input" type="radio" id="none" name="outputactivation" value="none"/>
            <label for="none">None</label><br/>
            <input class="form-check-input" type="radio" id="softmax" name="outputactivation" value="softmax"/>
            <label for="softmax">Softmax</label><br/>
            <input class="form-check-input" type="radio" id="relu" name="outputactivation" value="relu"/>
            <label for="relu">Relu</label><br/>
          <input class="form-check-input" type="radio" id="leakyrelu" name="outputactivation" value="leakyrelu"/>
            <label for="leakyrelu">LeakyReLU</label><br/>
          <input class="form-check-input" type="radio" id="sigmoid" name="outputactivation" value="sigmoid"/>
            <label for="sigmoid">Sigmoid</label><br/>
           <br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-6 " >Batch Normalization</label>
              <div class="col-sm-6" >
              <input class="form-check-input" type="radio" id="yes" name="batchnormalization" value="yes"/>
            <label for="yes">Yes</label><br></br>
            <input class="form-check-input" type="radio" id="no" name="batchnormalization" value="no"/>
            <label for="no">No</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-6 " >Pool</label>
              <div class="col-sm-6" >
              <input class="form-check-input" type="radio" id="none" name="pool" value="none"/>
              <label for="none">None</label><br></br>
              <input class="form-check-input" type="radio" id="max" name="pool" value="max"/>
              <label for="max">Max</label><br/>
            <input class="form-check-input" type="radio" id="avg" name="pool" value="avg"/>
              <label for="avg">Avg</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-6 " >Unpool</label>
              <div class="col-sm-6" >
              <input class="form-check-input" type="radio" id="none" name="unpool" value="none"/>
              <label for="none">None</label><br></br>
              <input class="form-check-input" type="radio" id="bilinear" name="unpool" value="bilinear"/>
              <label for="bilinear">Bilinear</label><br/>
              <input class="form-check-input" type="radio" id="nearest" name="unpool" value="nearest"/>
              <label for="nearest">Nearest</label><br/>
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-4 " for="cars">Backbone</label>
              <div class="col-sm-8" >
              <select id="cars" name="cars">
              <option value="volvo">None</option>
            </select>
              </div>
            </div>

        
            
          </form> 
    </div>
)
}

const Settings=({elements}) =>
{
        const layer=elements.type;
        console.log(elements);
      return(
        <>
        {layer=="dense"?<DenseSettings />:
        layer=="convolution"? <ConvolutionSettings />:
        layer=="recurrent"?<RecurrentSettings />:
        layer=="vgg16"?<VGG16Settings />:
        layer=="resnet50"?<ResNet50Settings />:
        layer=="inceptionv3"?<InceptionV3Settings />:
        layer=="mobilenetv2"?<MobileNetV2Settings />:
        layer=="unet"?<UNetSettings />:<></>
        }
        </>
      )
}
export default Settings;