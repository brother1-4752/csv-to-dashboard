import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary100: string;
      primary200: string;

      white100: string;
      white200: string;
      white300: string;
      white400: string;

      black100: string;
      black200: string;
      black300: string;

      gray100: string;
      gray200: string;
      gray300: string;

      brown100: string;

      gradient100: string;

      tableHeaderBg: string;
    };

    hover: {
      primary100: string;
      sencondary100: string;
    };

    spacing: {
      padding100: string;
      margin000: string;
      margin100: string;
      margin200: string;
      margin300: string;

      sidebarLargeDesktop: {
        left: string;
        top: string;
        margin: string;
      };
      sidebarDesktop: {
        left: string;
        top: string;
        margin: string;
      };
      sidebarTablet: {
        left: string;
        top: string;
        margin: string;
      };
    };

    font: {
      getSize: (size: number) => string;
    };

    media: {
      tabletS: string;
      tabletB: string;
      desktop: string;
    };
  }
}
