/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

const CreditCard = ({ data }) => {
  return (
    <div className="bg-slate-900 px-2 py-1 rounded flex flex-col justify-between h-28">
      <div>
        <p className="text text-lg text-yellow-400">{data.type}</p>
        <p className="text font-light">{data.number}</p>
      </div>
      <p className="text-slate-200 text-sm text-end">{data.owner}</p>
    </div>
  );
};

const Cards = () => {
  const [amount, setAmount] = useState(1);
  const [creditCards, setCreditCards] = useState([]);

  const refreshData = () => {
    axios
      .get(
        `https://fakerapi.it/api/v1/credit_cards?_quantity=${amount}?_locale=es_MX`
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
      <p className="text text-xl text-center">Credit Cards</p>
      <div className="border border-sky-600 p-2 rounded m-2 min-w-full min-h-1 grid grid-cols-3 gap-2">
        {creditCards.map((v) => (
          <CreditCard data={v} key={v.number} />
        ))}
      </div>
      <div className="flex gap-2">
        <button className="button" onClick={refreshData}>
          Refresh
        </button>
        <input
          type="number"
          name=""
          id=""
          max={12}
          min={1}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="rounded px-2"
        />
      </div>
    </div>
  );
};

export default Cards;
