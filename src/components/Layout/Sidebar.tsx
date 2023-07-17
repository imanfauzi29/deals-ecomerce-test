"use client"
import { TSideMenuItem } from "@/types"
import classNames from "classnames"
import Link from "next/link"
import { usePathname, useSelectedLayoutSegment } from "next/navigation"
import { AiOutlineGold, AiOutlineShoppingCart } from "react-icons/ai"

const sideMenuItems: TSideMenuItem[] = [
  { title: "Products", url: "/", icon: AiOutlineGold, targetSegment: null },
  {
    title: "Cart",
    url: "/cart",
    icon: AiOutlineShoppingCart,
    targetSegment: "cart",
  },
]

const Sidebar = () => {
  const selectedLayout = useSelectedLayoutSegment()

  console.log(selectedLayout)

  return (
    <>
      <aside
        id="default-sidebar"
        className={classNames(
          "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        )}
        aria-label="Sidebar"
      >
        <div
          className={classNames(
            "h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 pt-20"
          )}
        >
          <ul className={classNames("space-y-2 font-medium")}>
            {sideMenuItems.map(
              ({ icon: Icon, title, url, targetSegment }, i) => (
                <li key={i}>
                  <Link
                    href={url}
                    className={classNames(
                      "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                      {
                        "bg-purple-500 text-white hover:bg-purple-600 hover:text-white":
                          targetSegment === selectedLayout,
                      }
                    )}
                  >
                    <Icon size={24} />
                    <span>{title}</span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
