import './App.css';
import List from './Components/List';

function App() {
  return (
      <div className={"bg-slate-200 flex justify-center flex-col text-center space-y-5 py-5 max-w-5xl mx-auto ring-2 ring-blue-200 rounded-2xl text-gray-700"}>
        <h1 className={"text-5xl pb-10"}>To do list</h1>
        <List />
      </div>
  );
}

export default App;
