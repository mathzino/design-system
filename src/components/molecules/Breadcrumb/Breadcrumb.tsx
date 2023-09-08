import { FC } from "react";

import Typography, { EFontWeight, TFontWeight } from "src/Components/atoms/typography/typography";

export type TBreadcrumbsItem = {
  label: string;
  path: string;
};

interface PropsBreadcrumb {
  breadcrumbs: TBreadcrumbsItem[];
}

const Breadcrumbs: FC<PropsBreadcrumb> = ({ breadcrumbs }) => {
  return (
    <div className="  mb-2 flex">
      {breadcrumbs.map(({ label, path }, index) => {
        const firstIndex = 0;
        const isLast = breadcrumbs.length === index + 1;
        return isLast ? (
          <div className="flex">
            {index > firstIndex && (
              <div>
                <Typography fontWeight={"semibold"}>/</Typography>
              </div>
            )}
            <div key={label} className=" px-1 ">
              <Typography fontWeight={EFontWeight.medium}>
                <div>{label}</div>
              </Typography>
            </div>
          </div>
        ) : (
          <div className=" flex">
            {index > firstIndex && (
              <div>
                <Typography fontWeight={"semibold"}>/</Typography>
              </div>
            )}
            <div key={label} className=" flex flex-row hover:bg-gray-100 px-1 rounded-sm">
              <Typography fontWeight={"semibold"}>
                <div>
                  <a href={path}>{label}</a>
                </div>
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
