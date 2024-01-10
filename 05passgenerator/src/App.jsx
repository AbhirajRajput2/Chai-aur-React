import { useCallback, useEffect, useState ,useRef} from "react";
import "./App.css";

function App() {

  const [password,setpassword] =useState("")
  const [length,setlength] =useState(8)
  const [numallowed,setnumallowed] =useState(false)
  const [charallowed,setcharallowed] =useState(false)

  const passref = useRef(null)

  const passgenerator = useCallback(()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numallowed) str += "1234567890"
    if(charallowed) str += "!@#$%^&*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setpassword(pass)

  },[setpassword,length,numallowed,charallowed])

  const copypasstoclipboard=useCallback(()=>{
    passref.current?.select()
    passref.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passgenerator()
  },[length,numallowed,charallowed,passgenerator])
  return (
    <>
    <div className="box">
      <h1>Password generator</h1>
      <div className="up">
        <input type="text" name="pass" className="pass" readOnly placeholder="password" value={password} ref={passref}  />
        <button className="copy" onClick={copypasstoclipboard} >Copy</button>
      </div>

      <div className="bottom">
        <div className="lenbar">
          <input type="range"  id='length' name='length' min={6} max={100} onChange={(e)=>{setlength(e.target.value)}} />
          <label htmlFor="length">Length:{length}</label>
        </div>

        <div className="numask">
          <input type="checkbox" name="num" id="num" onChange={()=>{setnumallowed((prev)=>!prev)}}/>
          <label htmlFor="num">Numbers </label>
        </div>

        <div className="charask">
          <input type="checkbox" name="char" id="char" onChange={()=>{setcharallowed((prev)=>!prev)}}/>
          <label htmlFor="char">Characters </label>
        </div>
      </div>
    </div>
    </>
  );
}
//btm
//lenbar
//limit
//numask
//num
//charask
//char
export default App;
