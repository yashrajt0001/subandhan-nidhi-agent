import { forwardRef } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

import { cn } from "../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof ButtonVariants> {

}

const ButtonVariants = cva("flex flex-col gap-1.5", {
  variants: {
    theme: {
      default: "",
      outline: "",
    },
    size: {
      default: "",
      sm: "",
    },
  },
  defaultVariants: {
    theme: "default",
    size: "default",
  },
});

const CustomButton = forwardRef<
  React.ElementRef<typeof TextInput>,
  ButtonProps
>(
  (
    {
      children,
      className,
      theme,
      size,
      ...props
    },
    ref
  ) => (
    <TouchableOpacity className={cn("flex gap-2")} {...props}>
      {children}
    </TouchableOpacity>
  )
);

export { CustomButton };
