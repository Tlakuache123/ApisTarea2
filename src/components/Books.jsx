/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

const Book = ({ data }) => {
  return (
    <div className="bg-slate-600 p-2 rounded">
      <p className="font-bold text-slate-200 text-xl">
        {data.title || "Title"}
      </p>
      <p className="text-sm text-slate-400">{data.author}</p>
      <div className="mt-2">
        <p className="text-md text-slate-300 pl-2">{data.description}</p>
      </div>
      <div className="flex justify-between mt-2 text-sm text-slate-400">
        <p>{data.genre}</p>
        <p>{data.published}</p>
      </div>
    </div>
  );
};

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    axios
      .get("https://fakerapi.it/api/v1/books?_quantity=3?_locale=es_MX")
      .then((result) => {
        const { data } = result;
        console.log(data);
        setBooks(data.data);
      })
      .catch((err) => {
        console.error(err);
        setBooks([]);
      });
  };

  return (
    <div className="section">
      <p className="text text-xl text-center">Books</p>
      <div className="border border-sky-600 p-2 rounded m-2 min-w-full min-h-1 grid grid-cols-3 gap-2">
        {books.map((b) => (
          <Book data={b} key={b.id} />
        ))}
      </div>
      <div>
        <button className="button" onClick={refreshData}>
          Refresh
        </button>
      </div>
    </div>
  );
};

export default Books;
