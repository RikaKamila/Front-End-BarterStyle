import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { addKomen} from "../redux/komenSlice"


function Komen() {
    const dispatch = useDispatch();
    const komens = useSelector((state) => state.komen. komens);

    const [input, setInput] = useState("");


    const handleAddKomen = (e) => {
    e.preventDefault()
    dispatch(addKomen(input))
    setInput("")
  }
    }
    return (
  
      <div className="w-full mt-10"> {/* Added spacing between product and comments */}
      <div className="flex flex-col border rounded-md p-5">
        <h1 className="text-2xl font-bold pb-5">Kolom Komentar</h1>
        <form className="pb-5">
          <input
            type="text"
            placeholder="Tulis Komentar Anda"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-[100px] text-center border border-black rounded-md"
          />
        </form>
        <ul className="p-5 border rounded-md text-xl flex flex-col">
          {komens.map((item) => (
            <li key={item.id} className="text-xl">
              {item}
            </li>
          ))}
        </ul>
        <button
          className="w-full h-[50px] flex rounded-md text-white p-3 justify-center gap-3 cursor-pointer bg-teal-700 hover:bg-teal-600 font-bold mt-5"
          onClick={handleAddKomen}
        >
          <h1 className="text-xl">Kirim Komentar</h1>
        </button>
      </div>
    </div>
          );
    

  export default Komen;
  