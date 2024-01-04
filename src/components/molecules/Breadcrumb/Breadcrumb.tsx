import { joinPath } from "../../../lib/utils";
import { FC } from "react";

import Typography from "src/Components/atoms/typography/typography";

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
        if (isLast) {
          return (
            <div className="flex">
              {index > firstIndex && (
                <div>
                  <Typography fontWeight={"semibold"}>/</Typography>
                </div>
              )}
              <div key={label} className=" px-1 ">
                <Typography fontWeight={"medium"}>
                  <div>{label}</div>
                </Typography>
              </div>
            </div>
          );
        }

        return (
          <div className=" flex">
            {index > firstIndex && (
              <div>
                <Typography fontWeight={"semibold"}>/</Typography>
              </div>
            )}
            <div key={label} className=" flex flex-row hover:bg-gray-100 px-1 rounded-sm">
              <Typography fontWeight={"semibold"}>
                <div>
                  <a href={joinPath({ index, breadcrumbs })}>{label}</a>
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
