import type { ReactNode /*, FC*/ } from "react";
type CardVariant = "outlined" | "primary";
interface CardProps {
  width?: string;
  height?: string;
  children?: ReactNode;
  variant?: CardVariant;
}

// enum CardVariant {
//   outlined = "outlined",
//   primary = "primary",
// }
//inline styles
//width:200px

const Card /*: FC<CardProps>*/ = ({
  width = "50px",
  height = "50px",
  children,
  variant,
}: CardProps) => {
  return (
    <div
      style={{
        width,
        height,
        border: variant === "outlined" ? "1px solid black" : "none",
        backgroundColor: variant === "primary" ? "#52c747" : "transparent",
      }}
    >
       
      {children}
    </div>
  );
};
export default Card;