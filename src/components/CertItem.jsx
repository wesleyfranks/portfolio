const CertItem = ({imgUrl, url}) => {

return (
  <ol>
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="
        inline-block 
        transition 
        duration-300 
        ease-in-out 
        hover:drop-shadow-[0px_0px_40px_rgba(255,125,0,30)] 
        dark:hover:drop-shadow-[0px_0px_40px_rgba(125,255,0,30)]
        "
      >
        <img
          src={imgUrl}
          alt="cert"
          className="
          h-40
          object-cover 
          cursor-pointer
          "
        />
      </a>
    </li>
  </ol>
);

}

export default CertItem;