import MenuIcon from "@mui/icons-material/Menu";

function BurgerIcon() {
    const handleClick = () => {
        alert("Kholte hoon bhai")
    }
    return (
    <div className="cursor-pointer" onClick={handleClick}>
      <MenuIcon sx={{ fontSize: 32, marginRight : 3, color : "GrayText" }} />
    </div>
  );
}

export default BurgerIcon;
