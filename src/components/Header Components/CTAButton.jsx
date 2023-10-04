function CTAButton() {
    const handleClick = () => {
        alert("Why did you click me : (");
    }
  return (
    <>
        <button type="b" onClick={handleClick} className="px-4 py-1.5 rounded-xl bg-gradient-to-b from-blue-500 via-blue-500 to-blue-800 text-white font-semibold font-sans transition duration-900 hover:bg-gradient-to-b hover:from-blue-700 hover:via-blue-400 hover:to-blue-700 hover:text-gray-50 ml-3">Contact Us</button>
    </>
  )
}

export default CTAButton