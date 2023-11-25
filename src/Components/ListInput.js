import {useState} from "react";
import ListItem from "./ListItem";

function ListInput({setList}) {

  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setList((prevList) => {
      return [...prevList, <ListItem setList={setList} value={value} index={Date.now()} key={Date.now()} />];
    });
    setValue('');
  }

  return (
      <>
        <form className={""} onSubmit={handleSubmit}>
            <div className="mb-4 space-x-5 space-y-5">
                <label className="block text-2xl font-bold mb-2" htmlFor="username">
                    Add item
                </label>
                <input
                    className="py-2 px-4 shadow appearance-none border rounded focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Feed the cat..." maxLength="100" onChange={handleChange} value={value}></input>
                <button className="bg-blue-500 shadow hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Add</button>
            </div>
        </form>
      </>
  );
}

export default ListInput;
