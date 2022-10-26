import { FaTelegramPlane } from "react-icons/fa"
import { FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi"
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCog,
  HiOutlineEye,
  HiOutlineMail
} from "react-icons/hi"

type IconProps = {
  name: string
}

const Icon: React.FC<IconProps> = ({ name }) => {
  switch (name) {
    case "Home":
      return <HiOutlineHome />
    case "About":
      return <HiOutlineUser />
    case "Skills":
      return <HiOutlineCog />
    case "Works":
      return <HiOutlineEye />
    case "Contact":
      return <HiOutlineMail />
    case "Github":
      return <FiGithub />
    case "Telegram":
      return <FaTelegramPlane />
    case "LinkedIn":
      return <FiLinkedin />
    case "External":
      return <FiExternalLink />
    default:
      return null
  }
}

export default Icon
