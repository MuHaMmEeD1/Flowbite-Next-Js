import {
  Footer,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export function FooterComponent() {
  return (
    <Footer className="bg-[#F4F4F4] ">
      <div className="md:items-around flex w-full flex-col gap-[10px] md:flex-row-reverse md:items-center md:justify-between md:pt-[60px]">
        <div className="grid w-full grid-cols-3 gap-8 px-6 py-8 md:w-[50%] md:grid-cols-4">
          <div>
            <FooterTitle title="Product" className="text-black" />
            <FooterLinkGroup col>
              <FooterLink href="#">Download</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Locations</FooterLink>
              <FooterLink href="#">Server</FooterLink>
              <FooterLink href="#">Countries</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="Engage" className="text-black" />
            <FooterLinkGroup col>
              <FooterLink href="#">LaslesVPN?</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
              <FooterLink href="#">Tutorials</FooterLink>
              <FooterLink href="#">About us</FooterLink>
              <FooterLink href="#">Privacy policy</FooterLink>
              <FooterLink href="#">Terms of service</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="Earn money" className="text-black" />
            <FooterLinkGroup col>
              <FooterLink href="#">Become partner</FooterLink>
              <FooterLink href="#">Affilite</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[10px] md:relative md:flex md:flex-col md:items-start md:justify-center md:pl-[100px]">
          <div className="flex gap-[10px] ">
            <img src="/icons/logo.svg" alt="logo" />
            <h3>
              <span>Lasles</span>
              <span className="font-bold">VPN</span>
            </h3>
          </div>
          <p className="text-center md:text-start">
            <span className="block">
              Lorem ipsum dolor sit amet consectetur. Quis{" "}
            </span>
            <span className="block">
              tortor gravida nibh arcu id purus ullamcorper.{" "}
            </span>
            <span className="block">Vel vel erat semper augue.</span>
          </p>
          <div className="items-center justify-center ">
            <ul className="flex gap-[18px]">
              <li>
                <img src="/icons/facebook.svg" alt="facebook" />
              </li>
              <li>
                <img src="/icons/whatchap.svg" alt="whatchap" />
              </li>
              <li>
                <img src="/icons/youtobe.svg" alt="youtobe" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Footer>
  );
}
