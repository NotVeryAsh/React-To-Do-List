import {useState} from "react";
import ListInput from "./ListInput";

function List() {
  const [list, setList] = useState([]);

  return (
      <>
        <ListInput setList={setList} />
        <ul className={"flex flex-col space-y-6"}>
          {list}
        </ul>
      </>
  );
}

export default List;
