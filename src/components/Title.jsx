import React from 'react';
import { ReactNode } from 'react'; // Імпортуйте React і тип ReactNode// Імпортуйте React і тип ReactNode

interface TitleProps {
  text: string;
  children: ReactNode;
}

export const Title: React.FunctionComponent<TitleProps> = ({
  text,
  children,
}) => {
  return (
    <>
      <h2 className="">{text}</h2>
      {children}
    </>
  );
};

// export const Title = ({ text, children }) => {
//   return (
//     <>
//       <h2 className="">{text}</h2>
//       {children}
//     </>
//   );
// };
