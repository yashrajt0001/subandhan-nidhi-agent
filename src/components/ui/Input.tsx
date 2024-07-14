import { forwardRef } from "react";
import { Text, TextInput, View } from "react-native";

import { cn } from "../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput>,
    VariantProps<typeof InputVariants> {
  label?: string;
  labelClasses?: string;
  viewClasses?: string;
  onchangeText: (arg: string) => void;
}

const InputVariants = cva("flex flex-col gap-1.5", {
  variants: {
    theme: {
      default: "border-blueSecondary border rounded-lg px-3.5 font-medium text-sm",
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

const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  (
    {
      className,
      theme,
      size,
      label,
      labelClasses,
      viewClasses,
      onchangeText,
      ...props
    },
    ref
  ) => (
    <View className={cn("flex gap-2", viewClasses)}>
      {label && <Text className={cn("text-base", labelClasses)} style={{fontFamily: 'Roboto', fontWeight: '400'}}>{label}</Text>}
      <TextInput
        className={cn(InputVariants({ theme, size, className }))}
        onChangeText={(text) => onchangeText(text)}
        {...props}
      />
    </View>
  )
);

export { Input };
