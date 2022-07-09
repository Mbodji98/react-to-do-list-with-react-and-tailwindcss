function Form({children, values}) {

    const submit = (event) => {
        event.preventDefault();
        console.log(values);
        alert(JSON.stringify(values));
    }

  return <form className="w-full h-full p-10" onSubmit={(event) => submit(event)}>
      {children}
      <input type='submit' className="bg-sky-600 hover:bg-sky-700 mt-4 rounded-md p-2 text-sm" />
  </form>;
}

export { Form };
