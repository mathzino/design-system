import { FC } from "react";
import Typography, { TFontWeight } from "../../atoms/typography/typography";
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
                <Typography fontWeight={TFontWeight.semiBold}>/</Typography>
              </div>
            )}
            <div key={label} className=" px-1 ">
              <Typography fontWeight={TFontWeight.medium}>
                <div>{label}</div>
              </Typography>
            </div>
          </div>
        ) : (
          <div className=" flex">
            {index > firstIndex && (
              <div>
                <Typography fontWeight={TFontWeight.semiBold}>/</Typography>
              </div>
            )}
            <div key={label} className=" flex flex-row hover:bg-gray-100 px-1 rounded-sm">
              <Typography fontWeight={TFontWeight.semiBold}>
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
