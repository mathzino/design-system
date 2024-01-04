import { ClassValue, clsx } from "clsx";
import { TBreadcrumbsItem } from "src/Components/molecules/Breadcrumb/Breadcrumb";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface IJointPath {
  index: number;
  breadcrumbs: TBreadcrumbsItem[];
}
export const joinPath = ({ index, breadcrumbs }: IJointPath): string => {
  let path = "";
  for (let i = 0; i <= index; i++) {
    path = path + "/" + breadcrumbs[i].path;
  }
  return path;
};
