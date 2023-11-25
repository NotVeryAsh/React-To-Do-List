function ListItem({setList, value, index}) {

  function handleClick() {
    setList((prevList) => {
      return prevList.filter((item) => {
        return item.props.index !== index;
      });
    });
  }

  return (
      <div className={"flex flex-row w-6/12 bg-slate-100 ring-2 ring-blue-200 mx-auto px-4 py-4 rounded-xl items-center shadow-md"}>
          <p className={"text-xl"}>{value}</p>
          <button className="ml-auto bg-red-400 shadow hover:bg-red-500 text-white font-bold py-2 px-4 rounded " onClick={handleClick}>Delete</button>
      </div>
  );
}

export default ListItem;
