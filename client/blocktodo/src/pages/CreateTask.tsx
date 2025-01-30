
import { useState } from "react";

// ✅ Define the correct props interface
interface CreateTaskProps {
  state: {
    contract: any; // You can replace `any` with `Web3.eth.Contract` if using Web3.js
    account: string | null;
  };
}

const CreateTask: React.FC<CreateTaskProps> = ({ state }) => {
  const [inputName, setInputName] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { contract, account } = state;

    try {
      if (contract && contract.methods && account) {
        await contract.methods.createTask(inputName).send({
          from: account, // ✅ Fixed: `{account}` was incorrect, should be `account`
        });

        setResult("Task Created ✅");
      } else {
        setResult("Contract or account is missing ❌");
      }
    } catch (err) {
      console.error(err);
      setResult("Error creating task ❌");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            id="name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
      <p>{result}</p>
    </div>
  );
};

export default CreateTask;

