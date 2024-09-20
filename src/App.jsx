import { useState,useEffect } from "react";
import moodeng from "./image/moodeng.jpg";
import g from "./image/glass.jpg";
import fuk from "./image/fukthong.jpg";
import wat from "./image/watermelon.jpg";
import bas from "./image/bas.jpg";


export default function App() {
  const [level, setLevel] = useState(0);

  const [size, setSize] = useState(100);

  const addSize1 = () => {
    if (level < 100) {
      setSize(size + 15);
    }
  }
  const addSize2 = () => {
    if (level < 100) {
      setSize(size + 35);
    }
  }
  const addSize3 = () => {
    if (level < 100) {
      setSize(size + 45);
    }
  }
  
  useEffect(() => {
    let thePhoto = document.getElementById('bas');
    if (level >= 100) {
      thePhoto.src = bas;
      setSize(200)
      
    }
  }, [level]);
  
  return (
    <>
      <h1 className="text-2xl text-center mt-5">Level {level}</h1>

      <div className="flex justify-between items-center h-screen px-10">
       
        <div className="flex-1 flex justify-center items-center transform -translate-y-10">
          <img style={{ width: `${size}px`, transition: 'width 0.3s ease-in-out' }}
            src={moodeng}
            id='bas'
            alt="หมูเด้ง"
            className="max-w-[500px] h-auto"
          />
        </div>

      
        <div className="flex flex-col justify-center items-center space-y-5">
        <img
            src={wat}
            alt="แตงโม"
            className="w-[150px] h-auto cursor-pointer cursor-pointer"
            onClick={() => {setLevel(level + 5); addSize1();}}
            />
          
          <img
            src={fuk}
            alt="ฟักทอง"
            className="w-[150px] h-auto cursor-pointer"
            onClick={() => {setLevel(level + 10); addSize2();}}
          />
          <img
            src={g}
            alt="หญ้า"
            className="w-[150px] h-auto cursor-pointer"
            onClick={() => {setLevel(level + 20); addSize3();}}
          />
        </div>
      </div>
    </>
  );
}
