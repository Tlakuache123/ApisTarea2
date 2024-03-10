/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

const UserCard = ({ data, gender }) => {
  return (
    <div className="bg-slate-900 px-2 py-1 flex flex-col justify-center items-center rounded-t-lg">
      <div className={`bg-slate-400 h-16 w-16 rounded-full my-2`}></div>
      <div className="flex gap-2 text-sm text-slate-200 text-end">
        <p>{data.firstname}</p>
        <p>{data.lastname}</p>
      </div>
      <div className="my-2 text-md font-mono text-center">
        <p className={gender == "male" ? "text-sky-500" : "text-pink-500"}>
          {data.username}
        </p>
        <p className="font-mono text-slate-600 text-sm">{data.password}</p>
      </div>
    </div>
  );
};

const Users = () => {
  const [amount, setAmount] = useState(1);
  const [gender, setGender] = useState("male");
  const [creditCards, setCreditCards] = useState([]);

  const refreshData = () => {
    axios
      .get(
        `https://fakerapi.it/api/v1/users?_quantity=${amount}&_gender=${gender}&_locale=es_MX`
      )
      .then((result) => {
        const { data } = result;
        console.log(data);
        setCreditCards(data.data);
      })
      .catch((err) => {
        console.error(err);
        setCreditCards([]);
      });
  };

  return (
    <div className="section">
      <p className="text text-xl text-center">Users</p>
      <div className="border border-sky-600 p-2 rounded m-2 min-w-full min-h-1 grid grid-cols-3 gap-2">
        {creditCards.map((v, i) => (
          <UserCard data={v} gender={gender} key={i} />
        ))}
      </div>
      <div className="flex gap-2">
        <button className="button" onClick={refreshData}>
          Fetch
        </button>
        <input
          type="number"
          max={12}
          min={1}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="rounded px-2"
        />
        <select
          className="rounded px-2"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
            setCreditCards([]);
          }}
        >
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </div>
    </div>
  );
};

export default Users;
