const Info = () => {
  return (
    <div className="flex justify-center items-center p-4 text-lg gap-2">
      <p className="text-slate-400">Tarea utilizando 3 apis de:</p>
      <a
        className="text-sky-500 hover:text-sky-300 active:text-sky-700"
        href="https://fakerapi.it/en"
        target="_blank"
      >
        fakerapi
      </a>
    </div>
  );
};

export default Info;
