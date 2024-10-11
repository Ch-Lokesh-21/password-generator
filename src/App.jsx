import { useCallback, useState, useEffect } from "react";
function App() {
  const [length, setlength] = useState(8);
  const [allowNum, setallowNum] = useState(false);
  const [allowSpe, setallowSpe] = useState(false);
  const [passWord, setpassWord] = useState("");

  const copyTo = useCallback(() => {
    window.navigator.clipboard.writeText(passWord);
    alert("Password Copied");
  }, [passWord]);
  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowNum) str += "0123456789";
    if (allowSpe) str += "`~!@#$%^&*()_+-=,./<>?;':[]{}|";
    for (let i = 1; i <= length; i++) {
      let idx = Math.floor(Math.random() * str.length);
      pass += str.charAt(idx);
    }
    setpassWord(pass);
  }, [length, allowNum, allowSpe]);
  useEffect(() => {
    passGen();
  }, [length, allowNum, allowSpe, passGen]);
  return (
    <div className="box h-screen w-screen bg-c1 text-c5 flex justify-center items-center flex-col gap-4">
      <h1 className="text-4xl text-c5">Password Generator</h1>
      <div className="pass h-1/2 w-3/5 bg-c2 rounded-2xl p-4 flex items-center justify-center gap-10 flex-col shadow-lg">
        <div className="pass-box w-full flex justify-center items-center">
          <input
            type="text"
            id="pass"
            value={passWord}
            className="bg-white text-c3 py-2 px-3 w-3/5 h-full rounded-l-xl outline-none "
            readOnly
            placeholder="Password"
          />
          <button
            className="outline-none rounded-r-xl bg-c1 text-white p-2 h-full cursor-pointer"
            onClick={copyTo}
          >
            Copy
          </button>
        </div>
        <div className="inp-box w-full flex items-center justify-center gap-4">
          <div className="flex items-center">
            <input
              type="range"
              min={6}
              max={80}
              value={length}
              className="cursor-pointer "
              id="pass-len"
              onChange={(e) => {
                setlength(parseInt(e.target.value));
              }}
            />
            <label htmlFor="pass-len">Length: {length}</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="num-inp"
              defaultChecked={allowNum}
              onChange={() => {
                setallowNum((prev) => !prev);
              }}
            />
            <label htmlFor="num-inp">Numbers</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="spe-inp"
              defaultChecked={allowSpe}
              onChange={() => {
                setallowSpe((prev) => !prev);
              }}
            />
            <label htmlFor="spe-inp">Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
