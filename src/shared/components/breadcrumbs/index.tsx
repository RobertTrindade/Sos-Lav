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
    //pathName /motoristas/4
    const pathParts = PathName.split("/").filter((part) => part !== "");
    const links = pathParts.map((part) => (
      <Link href={Number(part) ? part : `/${pathParts[0]}`}>
        <Label actual={Number(part) ? true : false}>
          {Number(part) ? `${pathParts[0]} ${part}` : part}
        </Label>
      </Link>
    ));
    setBreadcrumbs(links);
  }, []);

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
  color: white;
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
  color: #999a9a;

  ${({ actual }) =>
    actual &&
    css`
      font-weight: medium;

      color: white;
    `}
`;
