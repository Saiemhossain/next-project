const Footer = () => {
  return (
    <div className="max-w-custom mx-auto">
      {[1].map(item => (
        <div
          key={item}
          className="sm:grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 mt-10 text-center place-content-center"
        >
          <div className="text-center mx-auto">
            <h3 className="text-[32px] font-bold font-Sans text-[#5BB5A2]">
              banquee
            </h3>
          </div>
          <div className="p-4 ">
            <h4 className="text-[20px] font-medium font-sans">About</h4>
            <p>Features</p>
            <p>Pricing</p>
            <p>Support</p>
          </div>
          <div className="p-4 ">
            <h4 className="text-[20px] font-medium font-sans">Blog</h4>
            <p>Products</p>
            <p>Technology</p>
            <p>Crypto</p>
          </div>
          <div className="p-4 ">
            <h4 className="text-[20px] font-medium font-sans">Webflow</h4>
            <p>Styleguide</p>
            <p>Licensing</p>
            <p>Changelog</p>
          </div>
          <div className="p-4">
            <h4 className="text-[20px] font-medium font-sans">Social Media</h4>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Footer