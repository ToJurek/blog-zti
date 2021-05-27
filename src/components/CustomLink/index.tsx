import {Link} from "react-router-dom";
import {ReactNode} from "react";
import styled from "styled-components";

interface IProps {
    className?: string,
    to: string,
    children: ReactNode
}

const CustomLink = ({className, to, children}: IProps) => (
    <div className={className}>
        <Link to={to}>{children}</Link>
    </div>
)

const StyledCustomLink = styled(CustomLink)`
  a {
    color: inherit;
    text-decoration: inherit; 
  }
`

export default StyledCustomLink