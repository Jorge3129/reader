import {FC} from "react";
import {icons} from "../../../constants/icons";

interface IProps {
    isOpen: boolean
}

export const Chevron: FC<IProps> = ({isOpen}) => {
    return isOpen ? icons.ANGLE_DOWN : icons.ANGLE_RIGHT;
}