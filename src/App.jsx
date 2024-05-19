import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [picNum,SetPicNum] = useState(1);
 const [use,setUse]= useState(-2);
 function changePic(e){
   SetPicNum(e.target.value);
 }
 useEffect(()=>{
  setUse(use=>use+1);
 },[picNum]);
 
  return( 
    <>
    <div className='main_div'> 
      <h2>Photos Selectors</h2>
      <input type="range"
      min={1} max={7}
      onChange={changePic}
      value={picNum}
      />
      <p>use change photos {use} times</p>
      <h1>Photos</h1>
       <img 
       src={`src/photos/animal${(picNum<8)?(picNum==""||(picNum==0||picNum<0)?1:picNum):3}.jpg`}
       alt='pic' 
       />

    </div>
    </>
  )
}
export default App
