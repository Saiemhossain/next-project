
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

  

const Page = () => {
  return (
    <>
      <div className="page">
        <div className="page-div">
          <h1 className="page-h1 ">All in one card.</h1>
          <p className="page-p">
            Senectus et netus et malesuada fames ac turpis. Sagittis vitae et
            leo duis ut diam.
          </p>
          <div className="page-btn">
            <Button className="bg-[#5BB5A2] py-[16px] px-[24px] text-[18px] font-medium">
              Open Account
            </Button>
            <Button
              className="flex items-center gap-2 width={135}
              height={32} bg-transparent text-[#5BB5A2] text-[18px] font-medium "
            >
              Compare Card
              <Image
                src="/arrow.png"
                alt="arrow"
                width={1000}
                height={1000}
                className="w-4 h-4 "
              />
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/cards.png"
            alt="card"
            width={1764}
            height={692}
            className="w-full h-auto pt-20"
          />
        </div>
      </div>

      <div className="transection">
        {[1, 2, 3].map(i => (
          <div key={i} className="transection-div ">
            <div className="transection-div-first">
              <h4 className="transection-h4">Transactions</h4>
              <h2 className="transection-h2">Send & receive money instantly</h2>
              <p className="transection-p">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className=" transection-img">
                <div>
                  <Image
                    src="/check.png"
                    alt="right-icon"
                    width={20}
                    height={10}
                    className="bg-[#E8F2EE] rounded-full"
                  />
                </div>
                <div>
                  <h4 className="transection-info">Malesuada Ipsum</h4>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 pt-2">
                <div>
                  <Image
                    src="/check.png"
                    alt="right-icon"
                    width={20}
                    height={10}
                    className="bg-[#E8F2EE] rounded-full"
                  />
                </div>
                <div>
                  <h4 className="transection-info">Vestibulum</h4>
                </div>
              </div>
              <div className="py:2 flex items-center justify-center md:justify-start gap-2 pt-2">
                <div>
                  <Image
                    src="/check.png"
                    alt="right-icon"
                    width={20}
                    height={10}
                    className="bg-[#E8F2EE] rounded-full"
                  />
                </div>
                <div>
                  <h4 className="transection-info">Parturient Lorem</h4>
                </div>
              </div>
            </div>
            <div className="transection-img-one">
              <Image
                src="/app.png"
                alt="app"
                width={1000}
                height={1000}
                className="w-[290px] md:w-[380px] h-[800px] "
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bank">
        <h2 className="bank-heading">All in one bank Really.</h2>
        <p className="bank-para">
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam.
        </p>

        <div className="mt-8">
          {[1].map(item => (
            <div key={item} className="bank-div">
              <div className="bank-img">
                <Image
                  src="/cardOne.png"
                  alt="card-one"
                  width={1000}
                  height={1000}
                  className="w-[380px] h-[300px] object-cover"
                />
              </div>
              <div className="bank-img">
                <Image
                  src="/card-two.png"
                  alt="card-five"
                  width={1000}
                  height={1000}
                  className="w-[380px] h-[300px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[32px]">
          {[1].map(item => (
            <div key={item} className="bank-card">
              <div className="bank-div">
                <Image
                  src="/card-five.png"
                  alt="card-five"
                  width={300}
                  height={160}
                />
              </div>
              <div className="bank-div">
                <Image
                  src="/card-three.png"
                  alt="card-three"
                  width={300}
                  height={160}
                />
              </div>
              <div className="bank-div">
                <Image
                  src="/card-four.png"
                  alt="card-four"
                  width={300}
                  height={160}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="acc">
        <div className="text-center">
          {' '}
          <h4 className="acc-h4">Accounts</h4>
          <h2 className="acc-h2">Choose your card</h2>
        </div>
        <div>
          {[1].map(item => (
            <div key={item}>
              <div className="acc-div">
                <div>
                  <div className="acc-div-first">
                    <div className="text-center">
                      <h5 className="acc-h5">Basic</h5>
                    </div>
                    <div>
                      <p className="acc-div-para">popular</p>
                    </div>
                  </div>
                  <h3 className="acc-h3">Free</h3>
                  <p className="text-center text-[16px] font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Image
                    src="/card-t.png"
                    alt="card"
                    width={1000}
                    height={1000}
                    className="acc-img"
                  />
                  <Button className=" bg-[#5BB5A2] w-[90%] mt-4 flex items-center justify-center mx-auto  px-[16px]  py-[12px] font-[DM Sans]">
                    Get started
                  </Button>
                </div>
                <div>
                  <div className="sub">
                    <div className="text-center">
                      <h5 className="acc-h5">Premium</h5>
                    </div>
                  </div>
                  <h3 className="acc-h3 ">$5</h3>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Image
                    src="/card-s.png"
                    alt="card"
                    width={1000}
                    height={1000}
                    className="acc-img"
                  />
                  <Button className=" bg-[#5BB5A2] w-[90%] mt-4 flex items-center justify-center mx-auto  px-[16px]  py-[12px] font-[DM Sans]">
                    Get started
                  </Button>
                </div>
                <div>
                  <div className="gold">
                    <div className="text-center">
                      <h5 className="acc-h5">Gold</h5>
                    </div>
                  </div>
                  <h3 className="acc-h3">$10</h3>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Image
                    src="/support-two.png"
                    alt="card"
                    width={1000}
                    height={1000}
                    className="acc-img"
                  />
                  <Button className="bg-[#5BB5A2] w-[90%] mt-4 flex items-center justify-center mx-auto  px-[16px]  py-[12px] font-[DM Sans]">
                    Get started
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="app">
        <div className="app-sec ">
          <h2 className="app-h2">One app. One banking.</h2>
          <p className="app-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <div className="flex items-center gap-5">
            <div>
              <div className="app-icon">
                <div>
                  <Image
                    src="/check.png"
                    alt="right-icon"
                    width={20}
                    height={20}
                    className="  bg-[#7CC4B5] "
                  />
                </div>
                <div className="app-icon-h5">
                  <h5>Instant transactions</h5>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <Image
                    src="/check.png"
                    alt="right-icon"
                    width={20}
                    height={20}
                    className="  bg-[#7CC4B5] "
                  />
                </div>
                <div>
                  <h5 className="app-icon-h5">Instant transactions</h5>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center  gap-2">
                <div>
                  <Image
                    src="/check.png"
                    alt="right-icon"
                    width={20}
                    height={20}
                    className="  bg-[#7CC4B5] "
                  />
                </div>
                <div>
                  <h5 className="app-icon-h5">Instant transactions</h5>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <Image
                    src="/check.png"
                    alt="right-icon"
                    width={20}
                    height={10}
                    className="  bg-[#7CC4B5] "
                  />
                </div>
                <div>
                  <h5 className="app-icon-h5">Instant transactions</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start mt-4 gap-2 ">
            <div>
              <Image
                src="/apple-store.png"
                alt="apple-store"
                width={150}
                height={50}
              />
            </div>
            <div>
              <Image
                src="/Google-Store.png"
                alt="google-store"
                width={150}
                height={50}
                className=""
              />
            </div>
          </div>
        </div>

        <Image src="/app.png" alt="app" width={380} height={800} className='mt-[140px]'  />
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-[1400px] mx-auto w-full m-[160px] px-4">
        <div className="w-full md:w-[30%]">
          <h3 className="help-head">Need help?</h3>
          <div className="flex items-center gap-4">
            <div>
              <Image
                src="/phone.png"
                alt="phone"
                width={30}
                height={30}
                className="bg-[#E8F2EE] p-1 rounded-2xl"
              />
            </div>
            <div className="phone">
              <h6 className="phone-h6">+49 176 123 456</h6>
              <p className="phone-p">Support Hotline</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <div>
              <Image
                src="/mail.png"
                alt="email"
                width={30}
                height={30}
                className="bg-[#E8F2EE] p-1 rounded-2xl"
              />
            </div>
            <div className="phone">
              <h6 className="phone-h6">help@banquee.com Support Email</h6>
              <p className="phone-p">Support Email</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[55%] max-w-[600px]">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do I open an Banko account?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I order a new card?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How to change my account limits?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How does Banko premium works?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis
                natoque penatibus et magnis dis parturient.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Page;
