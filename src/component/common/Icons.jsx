import { RiLinkedinFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { RiShoppingBagLine } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import { LuMenu } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";

export const socialHandle = [
  {
    id: 1,
    icon: <TiSocialFacebook />,
  },
  {
    id: 2,
    icon: <FaInstagram />,
  },
  {
    id: 3,
    icon: <FaTwitter />,
  },
  {
    id: 4,
    icon: <FaYoutube />,
  },
  {
    id: 5,
    icon: <RiLinkedinFill />,
  },
];

export const RightArrow = GoArrowRight;
export const Shop = RiShoppingBagLine;
export const Search = LuSearch;
export const Menu = LuMenu;
export const CloseMenu = IoCloseSharp;
