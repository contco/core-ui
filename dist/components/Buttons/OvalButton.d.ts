import React, { SVGProps } from "react";
declare type Props = {
    onClick?: () => void;
    Icon: React.FC<SVGProps<SVGSVGElement>>;
    IconWidth?: string;
    IconHeight?: string;
};
declare const OvalButton: React.FC<Props>;
export default OvalButton;
