import { SVGProps, memo } from "react";
import theme from "../../styles/theme";

interface CustomIconProps extends SVGProps<SVGSVGElement> {
  marginRight?: string;
  color?: string;
  width?: number;
  height?: number;
}

export const SendingIcon = memo(
  ({
    width = 20,
    height = 20,
    marginRight = "5",
    color,
    ...rest
  }: CustomIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="svg-inline--fa fa-chart-user"
      data-icon="chart-user"
      data-prefix="fal"
      viewBox="0 0 640 512"
      width={width}
      height={height}
      style={{ marginRight }}
      {...rest}
    >
      <path
        fill={color ?? theme.color.primary100}
        d="M576 32H224c-17.7 0-32 14.3-32 32v36c-10.2-2.6-21-4-32-4V64c0-35.3 28.7-64 64-64h352c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H336.8c-5.3-11.4-11.8-22.2-19.5-32H576c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-176 96c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-57.4L395.3 267.3c-6.2 6.2-16.4 6.2-22.6 0l-80-80c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l68.7 68.7 89.4-89.4H416c-8.8 0-16-7.2-16-16zM160 288a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0-160a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm-26.7 256c-54.2 0-98.4 42.5-101.2 96h255.8c-2.8-53.5-47-96-101.2-96h-53.4zm0-32h53.3c73.7 0 133.4 59.7 133.4 133.3 0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3 0 411.7 59.7 352 133.3 352z"
      />
    </svg>
  )
);
