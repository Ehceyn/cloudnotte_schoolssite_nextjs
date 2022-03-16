function ClipboardCopy({ copyText }) {
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <p className="text-lg font-bold text-[#F44336]">{copyText}</p>
      {isCopied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" h-7 w-7 translate-x-5 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#8EA2BA"
          onClick={handleCopyClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      ) : (
        <span>copied!</span>
      )}
    </>
    // <div>
    //   <input type="text" value={copyText} readOnly />
    //   {/* Bind our handler function to the onClick button property */}
    //   <button onClick={handleCopyClick}>
    //     <span>{isCopied ? "Copied!" : "Copy"}</span>
    //   </button>
    // </div>
  );
}
