import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import CogIcon from "@heroicons/react/24/solid/CogIcon";
import LockClosedIcon from "@heroicons/react/24/solid/LockClosedIcon";
import ShoppingBagIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UserPlusIcon from "@heroicons/react/24/solid/UserPlusIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import PuzzlePieceIcon from "@heroicons/react/24/solid/PuzzlePieceIcon";

import { SvgIcon } from "@mui/material";

export const items = [
  {
    title: "Overview",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Create Touranment",
    path: "/createTouranment",
    icon: (
      <SvgIcon fontSize="small">
        <PlusIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Touranments",
    path: "/touranments",
    icon: (
      <SvgIcon fontSize="small">
        <PuzzlePieceIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Login",
    path: "/auth/login",
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    ),
  },
];
