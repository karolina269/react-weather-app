const Searchbar = (props) => {
  return (
    <div className="searchbar">
      <form>
        <label htmlFor="searchbar">Szukaj:</label>
        <input id="searchbar" type="text" onChange={(e) => props.search(e.target.value)} />
      </form>
    </div>
  );
};

export default Searchbar;
