import React, {FC, PropsWithChildren} from 'react';
import {ContentTableSection} from "../../../domain/entities/book/books";
import {NavLink, useParams, To} from "react-router-dom";
import {StyledLink} from "../../reusable/StyledLink";

interface LinkProps {
    section: {uid?: number}
    step: -1 | 0 | 1
    content?: ContentTableSection[]
    className: string
}

export const generateUrl = (bookIdParam: string, sectionId: number, step: number) =>
    `/reader/${bookIdParam}/${sectionId + step}`


const SectionLink: FC<PropsWithChildren<LinkProps>> =
    ({
         section,
         step,
         children,
         className
     }) => {
        const {bookIdParam} = useParams();
        const link = generateUrl(bookIdParam || "", section.uid || 0, step)
        return <StyledLink to={link} className={className || ""}>{children}</StyledLink>
    };

export default SectionLink;