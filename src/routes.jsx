import { Navigate } from "react-router-dom"

import { Layout } from "./components/layout"
import { MainPage } from "./components/mainPage"
import { Users } from "./components/users"
import { UserListPage } from "./components/userListPage"
import { SingleUserPage } from "./components/singleUserPage"
import { EditUserPage } from "./components/EditUserPage"

export const routes = () => [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "users",
        element: <Users />,
        children: [
          {
            index: true,
            element: <UserListPage />,
          },
          {
            path: ":userId",
            children: [
              { path: "profile", element: <SingleUserPage /> },
              { path: "edit", element: <EditUserPage /> },
            ],
          },
        ],
      },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]
