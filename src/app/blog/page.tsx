

function page() {
  return (
    <div className="max-w-[1222px] mx-auto m-[40px]">
      <h2 className="blog-h2">Blog</h2>
      <div className=" pt-[40px]">
        <div className="flex flex-wrap md:flex items-center gap-4 text-center">
          <Button className="cat bg-[#ffffff] text-black hover:bg-white">
            Categories
          </Button>
          <Button className=" bg-[#ffffff] text-black hover:bg-white font-[Inter] text-[13px]">
            All
          </Button>
          <Button className="bg-[#ffffff] text-black hover:bg-white font-[Inter] text-[13px]">
            Product
          </Button>
          <Button className="bg-[#ffffff] text-black hover:bg-white font-[Inter] text-[13px]">
            Technology
          </Button>
          <Button className="bg-[#ffffff] text-black hover:bg-white font-[Inter] text-[13px]">
            App
          </Button>
        </div>
        <div className="grid text-center sm:grid-cols-1 md:grid-cols-3 gap-4 mt-10 ">
          <div>
            <Image
              src="/image.png"
              alt="image"
              width={1000}
              height={1000}
              className="w-[378px] mx-auto p-[10px]"
            />
            <h3 className="block-heading text-[28px] font-medium text-[#1A191E];">
              How To Start Using Banko For Your Startup
            </h3>
            <p className="text-[16px] font-medium font-[Inter]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              accumsan sit amet nulla facilisi morbi.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Button className="bg-[#ffffff] text-black hover:bg-white font-[Inter] text-[13px]">
                App
              </Button>
              <Button className="bg-[#ffffff] text-black hover:bg-white font-[Inter] text-[13px]">
                Technology
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/img-6.png"
              alt="image"
              width={1000}
              height={1000}
              className="w-[378px] mx-auto p-[10px]"
            />
            <h3 className="block-heading text-[28px] font-medium text-[#1A191E];">
              10 Things Nobody Told You About Banko
            </h3>
            <p className="text-[16px] font-medium font-[Inter]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              accumsan sit amet nulla facilisi morbi.
            </p>
            <div className=" mt-4 flex flex-start">
              <Button className="bg-[#ffffff] text-black hover:bg-white font-[Inter] text-[13px]">
                Technology
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/bag.png"
              alt="image"
              width={1000}
              height={1000}
              className="w-[90%] mx-auto p-[10px]"
            />
            <h3 className="block-heading text-[28px] font-medium text-[#1A191E];">
              How To Start Using Banko For Your Startup
            </h3>

            <p className="text-[16px] font-medium font-[Inter]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              accumsan sit amet nulla facilisi morbi.
            </p>
            <div className="flex items-center gap-4 mt-15">
              <Button className="bg-[#ffffff] text-black hover:bg-white font-[Inter] text-[13px]">
                App
              </Button>
              <Button className="bg-[#ffffff] text-black hover:bg-white font-[Inter] text-[13px]">
                Product
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/man.png"
              alt="image"
              width={1000}
              height={1000}
              className="w-[90%] mx-auto p-[10px]"
            />
            <h3 className="block-heading text-[28px] font-medium text-[#1A191E];">
              Why We Love Banko (And You Should, Too!)
            </h3>

            <p className="text-[16px] font-medium font-[Inter]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              accumsan sit amet nulla facilisi morbi.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Button className="bg-[#ffffff] text-black hover:bg-white font-[Inter] text-[13px]">
                Product
              </Button>
              <Button className="bg-[#ffffff] text-black hover:bg-white font-[Inter] text-[13px]">
                Technology
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/dollar.png"
              alt="image"
              width={1000}
              height={1000}
              className="w-[90%] mx-auto p-[10px]"
            />
            <h3 className="block-heading text-[28px] font-medium text-[#1A191E];">
              5 Principles Of Crypto Investing
            </h3>

            <p className="text-[16px] font-medium font-[Inter]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              accumsan sit amet nulla facilisi morbi.
            </p>
            <div className=" mt-4 flex flex-start">
              <Button className="bg-[#ffffff] text-black hover:bg-white font-[Inter] text-[13px]">
                App
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/fb.png"
              alt="image"
              width={1000}
              height={1000}
              className="w-[90%] mx-auto p-[10px]"
            />
            <h3 className="block-heading text-[28px] font-medium text-[#1A191E];">
              7 Things About Banko Your Friends Want To Know
            </h3>

            <p className="text-[16px] font-medium font-[Inter]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              accumsan sit amet nulla facilisi morbi.
            </p>
            <div className=" mt-4 flex flex-start">
              <Button className="bg-[#ffffff] text-black hover:bg-white font-[Inter] text-[13px]">
                Technology
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
