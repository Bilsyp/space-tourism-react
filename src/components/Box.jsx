const Box = ({ active, name, setUrl, setImage }) => {
  const handleClick = () => {
    setUrl(name);
    console.log(name);
  };
  return (
    <div
      onClick={handleClick}
      className={`${
        active ? "bg-white" : "bg-grays"
      } w-[20px] h-[20px]  rounded-full    cursor-pointer`}
    ></div>
  );
};

export default Box;
