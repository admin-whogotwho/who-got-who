import { ChefHat, FolderCode,  Youtube, Instagram , TabletSmartphone ,GlobeLock , Globe } from "lucide-react";

import { ReactNode } from "react";

interface iAppProps {
  name: string;
  title: string;
  image: ReactNode;
  id: number;
}

export const categoryItems: iAppProps[] = [
  {
    id: 0,
    name: "saas",
    title: "SAAS Product",
    image: <FolderCode />,
  },
  {
    id: 1,
    name: "amazon",
    title: "Amazon Account",
    image: <ChefHat />,
  },
  {
    id: 2,
    name: "youtube",
    title: "Youtube Channel",
    image: <Youtube />,
  },
  {
    id: 3,
    name: "instagram",
    title: "Instagram Account",
    image: <Instagram />,
  },
  {
    id: 4,
    name: "mobileapps",
    title: "Mobile Apps",
    image: < TabletSmartphone/>,
  },
  {
    id: 5,
    name: "domains",
    title: "Domains",
    image: <GlobeLock />,
  },
  {
    id: 6,
    name: "others",
    title: "Others",
    image: <Globe />,
  },
];
