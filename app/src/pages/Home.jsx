import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useNavbarCb, useLogoCb, useSubPagesCb, useFlex3Cb, useAuthorCardCb, useFlex4Cb, useAuthorPicCb, useDiv6Cb, useFlex5Cb, useLogoNameCb, useAboutCb, useContactCb, useServicesCb, useProjectsCb, useBookCallCb, useHighlightedHeadlineCb, useHeadlineCb, useAuthorBioCb, useButton2Cb, useButton3Cb, useImage2Cb, useTextBox12Cb, useImage4Cb, useImage7Cb, useImage8Cb, useImage9Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const NavbarProps = useStore((state)=>state["Home"]["Navbar"]);
const NavbarIoProps = useIoStore((state)=>state["Home"]["Navbar"]);
const NavbarCb = useNavbarCb()
const LogoProps = useStore((state)=>state["Home"]["Logo"]);
const LogoIoProps = useIoStore((state)=>state["Home"]["Logo"]);
const LogoCb = useLogoCb()
const SubPagesProps = useStore((state)=>state["Home"]["SubPages"]);
const SubPagesIoProps = useIoStore((state)=>state["Home"]["SubPages"]);
const SubPagesCb = useSubPagesCb()
const Flex3Props = useStore((state)=>state["Home"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Home"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const AuthorCardProps = useStore((state)=>state["Home"]["AuthorCard"]);
const AuthorCardIoProps = useIoStore((state)=>state["Home"]["AuthorCard"]);
const AuthorCardCb = useAuthorCardCb()
const Flex4Props = useStore((state)=>state["Home"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["Home"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const AuthorPicProps = useStore((state)=>state["Home"]["AuthorPic"]);
const AuthorPicIoProps = useIoStore((state)=>state["Home"]["AuthorPic"]);
const AuthorPicCb = useAuthorPicCb()
const Div6Props = useStore((state)=>state["Home"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Home"]["Div6"]);
const Div6Cb = useDiv6Cb()
const Flex5Props = useStore((state)=>state["Home"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Home"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const LogoNameProps = useStore((state)=>state["Home"]["LogoName"]);
const LogoNameIoProps = useIoStore((state)=>state["Home"]["LogoName"]);
const LogoNameCb = useLogoNameCb()
const AboutProps = useStore((state)=>state["Home"]["About"]);
const AboutIoProps = useIoStore((state)=>state["Home"]["About"]);
const AboutCb = useAboutCb()
const ContactProps = useStore((state)=>state["Home"]["Contact"]);
const ContactIoProps = useIoStore((state)=>state["Home"]["Contact"]);
const ContactCb = useContactCb()
const ServicesProps = useStore((state)=>state["Home"]["Services"]);
const ServicesIoProps = useIoStore((state)=>state["Home"]["Services"]);
const ServicesCb = useServicesCb()
const ProjectsProps = useStore((state)=>state["Home"]["Projects"]);
const ProjectsIoProps = useIoStore((state)=>state["Home"]["Projects"]);
const ProjectsCb = useProjectsCb()
const BookCallProps = useStore((state)=>state["Home"]["BookCall"]);
const BookCallIoProps = useIoStore((state)=>state["Home"]["BookCall"]);
const BookCallCb = useBookCallCb()
const HighlightedHeadlineProps = useStore((state)=>state["Home"]["HighlightedHeadline"]);
const HighlightedHeadlineIoProps = useIoStore((state)=>state["Home"]["HighlightedHeadline"]);
const HighlightedHeadlineCb = useHighlightedHeadlineCb()
const HeadlineProps = useStore((state)=>state["Home"]["Headline"]);
const HeadlineIoProps = useIoStore((state)=>state["Home"]["Headline"]);
const HeadlineCb = useHeadlineCb()
const AuthorBioProps = useStore((state)=>state["Home"]["AuthorBio"]);
const AuthorBioIoProps = useIoStore((state)=>state["Home"]["AuthorBio"]);
const AuthorBioCb = useAuthorBioCb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const Button3Props = useStore((state)=>state["Home"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Home"]["Button3"]);
const Button3Cb = useButton3Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()

  return (<>
  <Flex className="p-Home Navbar bpt" {...NavbarProps} {...NavbarCb} {...NavbarIoProps}>
<Div className="p-Home Logo bpt" {...LogoProps} {...LogoCb} {...LogoIoProps}>
<TextBox className="p-Home LogoName bpt" {...LogoNameProps} {...LogoNameCb} {...LogoNameIoProps}/>
</Div>
<Flex className="p-Home SubPages bpt" {...SubPagesProps} {...SubPagesCb} {...SubPagesIoProps}>
<TextBox className="p-Home About bpt" {...AboutProps} {...AboutCb} {...AboutIoProps}/>
<TextBox className="p-Home Contact bpt" {...ContactProps} {...ContactCb} {...ContactIoProps}/>
<TextBox className="p-Home Services bpt" {...ServicesProps} {...ServicesCb} {...ServicesIoProps}/>
<TextBox className="p-Home Projects bpt" {...ProjectsProps} {...ProjectsCb} {...ProjectsIoProps}/>
<TextBox className="p-Home BookCall bpt" {...BookCallProps} {...BookCallCb} {...BookCallIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex3 bpt" {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<Div className="p-Home AuthorCard bpt" {...AuthorCardProps} {...AuthorCardCb} {...AuthorCardIoProps}>
<TextBox className="p-Home HighlightedHeadline bpt" {...HighlightedHeadlineProps} {...HighlightedHeadlineCb} {...HighlightedHeadlineIoProps}/>
<TextBox className="p-Home Headline bpt" {...HeadlineProps} {...HeadlineCb} {...HeadlineIoProps}/>
<TextBox className="p-Home AuthorBio bpt" {...AuthorBioProps} {...AuthorBioCb} {...AuthorBioIoProps}/>
<Flex className="p-Home Flex4 bpt" {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<Button className="p-Home Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
<Button className="p-Home Button3 bpt" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
</Flex>
</Div>
<Div className="p-Home AuthorPic bpt" {...AuthorPicProps} {...AuthorPicCb} {...AuthorPicIoProps}>
<Image className="p-Home Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Div>
</Flex>
<Div className="p-Home Div6 bpt" {...Div6Props} {...Div6Cb} {...Div6IoProps}>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<Flex className="p-Home Flex5 bpt" {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<Image className="p-Home Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
<Image className="p-Home Image7 bpt" {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
<Image className="p-Home Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<Image className="p-Home Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
</Flex>
</Div>
  </>);
}
