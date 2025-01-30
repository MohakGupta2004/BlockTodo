
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Wallet from "./pages/Wallet";
import ViewAllTask from "./pages/ViewAllTask";
import CreateTask from "./pages/CreateTask";
import ViewTask from "./pages/ViewTask";
import UpdateTask from "./pages/UpdateTask";
import DeleteTask from "./pages/DeleteTask";
import { useState } from "react";
import Web3 from "web3";

// ✅ Define the correct TypeScript types
interface State {
  web3: Web3 | null;
  contract: any; // You can replace `any` with `Contract` if using web3.eth.Contract type
  account: string | null;
}

function App() {
  const [state, setState] = useState<State>({
    web3: null,
    contract: null,
    account: null,
  });

  // ✅ Type the function parameters properly
  const saveState = ({ web3, contract, account }: State) => {
    setState({ web3, contract, account });
  };

  // ✅ Type the router correctly
  const router = createBrowserRouter([
    { path: "/", element: <Wallet saveState={saveState} /> },
    { path: "/view-all-tasks", element: <ViewAllTask /> },
    { path: "/create-task", element: <CreateTask state={state} /> },
    { path: "/view-task", element: <ViewTask /> },
    { path: "/update-task", element: <UpdateTask state={state} /> },
    { path: "/delete-task", element: <DeleteTask state={state} /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

