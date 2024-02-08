import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Box, css, styled } from "@mui/material";
import { usePathname } from "next/navigation";

export const BreadCrumbsComponent = () => {
  const PathName = usePathname();
  const [breadcrumbs, setBreadcrumbs] = React.useState<React.JSX.Element[]>();
  React.useEffect(() => {
    const pathParts = PathName.split("/").filter((part) => part !== "");

    const links = pathParts.map((part, index) => {
      const url = `/${pathParts.slice(0, index + 1).join("/")}`;
      const label = Number(part) ? `${pathParts[index - 1]} ${part}` : part;

      return (
        <Link href={url} key={part}>
          <Label actual={index === pathParts.length - 1}>{label}</Label>
        </Link>
      );
    });
    setBreadcrumbs(links);
  }, [PathName]);

  return (
    breadcrumbs && (
      <Container>
        <CustomBreadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </CustomBreadcrumbs>
      </Container>
    )
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const CustomBreadcrumbs = styled(Breadcrumbs)`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-weight: bold;
  font-size: 18px;
`;

const Label = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "actual",
})<{
  actual: boolean;
}>`
  font-weight: normal;

  font-size: 20px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.palette.secondary.main};

  ${({ actual, theme }) =>
    actual &&
    css`
      font-weight: medium;
      color: ${theme.palette.secondary.main};
    `}
`;
