const Footer = () => {
    return (
      <footer className="flex flex-col gap-2 text-gray-500 text-xs font-serif p-2">
        <div>
          <p>&copy; Copyright {new Date().getFullYear()} <b>JsFiddle</b></p>
          <div className="flex italic gap-1">
            <p>All rights reserved</p>|<p>Privacy Policy</p>
          </div>
        </div>
        <div className="flex gap-1 justify-end">
          <p>Powered by</p>
          <a
            href="https://www.mindrisers.com.np/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-4 inline-block"
              src="https://www.mindrisers.com.np/_next/static/media/mindrisers.1fedbf2d.png"
              alt=""
            />
            <b>Mindrisers</b>
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  