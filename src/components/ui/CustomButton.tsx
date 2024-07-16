import { forwardRef } from "react";
import {
  Button,
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";

import { cn } from "../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof ButtonVariants> {
  title: string;
  textClasses?: string;
  textStyle?: StyleProp<TextStyle>;
}

const ButtonVariants = cva("", {
  variants: {
    theme: {
      link: "bg-white py-2 pr-2",
      outline: "",
      default:
        "bg-redPrimary flex items-center justify-center py-3.5 rounded-lg",
    },
    size: {
      default: "",
      sm: "",
    },
    textColor: {
      white: "text-white",
      link: "text-bluePrimary text-base",
    },
  },
  defaultVariants: {
    textColor: "white",
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
      textColor,
      textStyle,
      textClasses,
      title,
      ...props
    },
    ref
  ) => (
    <TouchableOpacity
      className={cn(ButtonVariants({ theme, size, className }))}
      {...props}
    >
      <Text
        style={textStyle}
        className={cn(ButtonVariants({ textColor }), textClasses)}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
);

export { CustomButton };
