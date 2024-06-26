import { useState } from "react";

const SideBar = ({ isOpen, onClose }) => {
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className={`fixed top-20 left-20 z-40 w-64 h-5/6 sidebar  ${
          isOpen ? "open" : "closed"
        }  sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-8 py-4 overflow-y-auto default-sidebar dark:bg-gray-800 rounded-lg flex flex-col justify-between">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.833333 8.32314H5.83333C6.29167 8.32314 6.66667 7.9527 6.66667 7.49995V0.914382C6.66667 0.461624 6.29167 0.0911865 5.83333 0.0911865H0.833333C0.375 0.0911865 0 0.461624 0 0.914382V7.49995C0 7.9527 0.375 8.32314 0.833333 8.32314ZM0.833333 14.9087H5.83333C6.29167 14.9087 6.66667 14.5383 6.66667 14.0855V10.7927C6.66667 10.34 6.29167 9.96953 5.83333 9.96953H0.833333C0.375 9.96953 0 10.34 0 10.7927V14.0855C0 14.5383 0.375 14.9087 0.833333 14.9087ZM9.16667 14.9087H14.1667C14.625 14.9087 15 14.5383 15 14.0855V7.49995C15 7.04719 14.625 6.67675 14.1667 6.67675H9.16667C8.70833 6.67675 8.33333 7.04719 8.33333 7.49995V14.0855C8.33333 14.5383 8.70833 14.9087 9.16667 14.9087ZM8.33333 0.914382V4.20716C8.33333 4.65992 8.70833 5.03036 9.16667 5.03036H14.1667C14.625 5.03036 15 4.65992 15 4.20716V0.914382C15 0.461624 14.625 0.0911865 14.1667 0.0911865H9.16667C8.70833 0.0911865 8.33333 0.461624 8.33333 0.914382Z"
                    fill="white"
                  />
                </svg>

                <span className="ms-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.60625 2.09124C2.73555 1.72997 2.9751 1.4172 3.29189 1.19605C3.60867 0.974896 3.98709 0.856245 4.375 0.856446H8.125C8.51291 0.856245 8.89133 0.974896 9.20811 1.19605C9.5249 1.4172 9.76445 1.72997 9.89375 2.09124H10.625C11.1223 2.09124 11.5992 2.28638 11.9508 2.63373C12.3025 2.98109 12.5 3.4522 12.5 3.94343V7.03041H6.25C5.25544 7.03041 4.30161 7.42069 3.59835 8.1154C2.89509 8.81011 2.5 9.75233 2.5 10.7348V15.674C2.5 16.6223 2.86125 17.4891 3.455 18.1436H1.875C1.37772 18.1436 0.900806 17.9484 0.549175 17.6011C0.197544 17.2537 0 16.7826 0 16.2914V3.94343C0 3.4522 0.197544 2.98109 0.549175 2.63373C0.900806 2.28638 1.37772 2.09124 1.875 2.09124H2.60625ZM4.375 2.09124C4.20924 2.09124 4.05027 2.15629 3.93306 2.27207C3.81585 2.38785 3.75 2.54489 3.75 2.70864C3.75 2.87238 3.81585 3.02942 3.93306 3.1452C4.05027 3.26099 4.20924 3.32603 4.375 3.32603H8.125C8.29076 3.32603 8.44973 3.26099 8.56694 3.1452C8.68415 3.02942 8.75 2.87238 8.75 2.70864C8.75 2.54489 8.68415 2.38785 8.56694 2.27207C8.44973 2.15629 8.29076 2.09124 8.125 2.09124H4.375ZM6.25 8.26521C5.58696 8.26521 4.95107 8.52539 4.48223 8.98853C4.01339 9.45167 3.75 10.0798 3.75 10.7348V15.674C3.75 16.3289 4.01339 16.9571 4.48223 17.4202C4.95107 17.8834 5.58696 18.1436 6.25 18.1436H12.5C13.163 18.1436 13.7989 17.8834 14.2678 17.4202C14.7366 16.9571 15 16.3289 15 15.674V10.7348C15 10.0798 14.7366 9.45167 14.2678 8.98853C13.7989 8.52539 13.163 8.26521 12.5 8.26521H6.25ZM6.875 10.7348H11.875C12.0408 10.7348 12.1997 10.7998 12.3169 10.9156C12.4342 11.0314 12.5 11.1884 12.5 11.3522C12.5 11.5159 12.4342 11.673 12.3169 11.7888C12.1997 11.9045 12.0408 11.9696 11.875 11.9696H6.875C6.70924 11.9696 6.55027 11.9045 6.43306 11.7888C6.31585 11.673 6.25 11.5159 6.25 11.3522C6.25 11.1884 6.31585 11.0314 6.43306 10.9156C6.55027 10.7998 6.70924 10.7348 6.875 10.7348ZM6.25 15.0566C6.25 14.8928 6.31585 14.7358 6.43306 14.62C6.55027 14.5042 6.70924 14.4392 6.875 14.4392H11.875C12.0408 14.4392 12.1997 14.5042 12.3169 14.62C12.4342 14.7358 12.5 14.8928 12.5 15.0566C12.5 15.2203 12.4342 15.3773 12.3169 15.4931C12.1997 15.6089 12.0408 15.674 11.875 15.674H6.875C6.70924 15.674 6.55027 15.6089 6.43306 15.4931C6.31585 15.3773 6.25 15.2203 6.25 15.0566Z"
                    fill="#E5E7EB"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Cases</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6978 2.64706L7.80815 0.327705C7.72502 0.299665 7.6135 0.285645 7.50198 0.285645C7.39047 0.285645 7.27895 0.299665 7.19582 0.327705L0.306162 2.64706C0.137874 2.70314 0 2.89542 0 3.07167V12.7337C0 12.9099 0.115571 13.1422 0.255473 13.2524L7.24448 18.6322C7.31545 18.6863 7.40669 18.7143 7.49996 18.7143C7.59322 18.7143 7.68649 18.6863 7.75543 18.6322L14.7444 13.2524C14.8843 13.1442 14.9999 12.9119 14.9999 12.7337V3.07167C15.004 2.89542 14.8661 2.70514 14.6978 2.64706ZM9.82963 10.3402C8.84626 11.3116 7.33572 11.4458 6.2084 10.7428L4.63704 12.295C4.60655 12.3248 4.56538 12.3416 4.52248 12.3416C4.47958 12.3416 4.43841 12.3248 4.40792 12.295L3.71855 11.614C3.68836 11.5839 3.67143 11.5432 3.67143 11.5009C3.67143 11.4585 3.68836 11.4178 3.71855 11.3877L5.28991 9.83546C4.57824 8.71984 4.71408 7.22969 5.69745 6.25828C6.83897 5.13065 8.68811 5.13065 9.82963 6.25828C10.9711 7.38592 10.9711 9.21256 9.82963 10.3402ZM6.61513 9.43348C6.76551 9.58437 6.94464 9.70436 7.14219 9.78654C7.33974 9.86871 7.55181 9.91145 7.76616 9.91227C7.98051 9.91309 8.1929 9.87199 8.3911 9.79134C8.58929 9.71068 8.76936 9.59207 8.92092 9.44234C9.07249 9.2926 9.19254 9.11472 9.27417 8.91893C9.35581 8.72314 9.39739 8.51332 9.39654 8.30158C9.39569 8.08984 9.35241 7.88035 9.26921 7.68521C9.186 7.49007 9.06451 7.31313 8.91175 7.1646C8.76137 7.0137 8.58224 6.89371 8.38469 6.81153C8.18714 6.72936 7.97507 6.68663 7.76072 6.6858C7.54637 6.68498 7.33397 6.72608 7.13578 6.80673C6.93759 6.88739 6.75752 7.006 6.60596 7.15574C6.45439 7.30547 6.33433 7.48336 6.2527 7.67915C6.17107 7.87494 6.12948 8.08475 6.13034 8.29649C6.13119 8.50824 6.17447 8.71772 6.25767 8.91286C6.34088 9.108 6.46236 9.28494 6.61513 9.43348Z"
                    fill="#E5E7EB"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Calendar</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="15" height="15" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        href="#image0_3308_1797"
                        transform="scale(0.00195312)"
                      />
                    </pattern>
                    <image
                      id="image0_3308_1797"
                      width="512"
                      height="512"
                      href="data:image/png;base64,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"
                    />
                  </defs>
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Messages</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
          </ul>
          <div className="flex justify-between flex-col">
            <div className="flex border border-1 border-white rounded-full py-2 px-9  w-5/6 mx-5 justify-center">
              <svg
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M2.60625 2.09124C2.73555 1.72997 2.9751 1.4172 3.29189 1.19605C3.60867 0.974896 3.98709 0.856245 4.375 0.856446H8.125C8.51291 0.856245 8.89133 0.974896 9.20811 1.19605C9.5249 1.4172 9.76445 1.72997 9.89375 2.09124H10.625C11.1223 2.09124 11.5992 2.28638 11.9508 2.63373C12.3025 2.98109 12.5 3.4522 12.5 3.94343V7.03041H6.25C5.25544 7.03041 4.30161 7.42069 3.59835 8.1154C2.89509 8.81011 2.5 9.75233 2.5 10.7348V15.674C2.5 16.6223 2.86125 17.4891 3.455 18.1436H1.875C1.37772 18.1436 0.900806 17.9484 0.549175 17.6011C0.197544 17.2537 0 16.7826 0 16.2914V3.94343C0 3.4522 0.197544 2.98109 0.549175 2.63373C0.900806 2.28638 1.37772 2.09124 1.875 2.09124H2.60625ZM4.375 2.09124C4.20924 2.09124 4.05027 2.15629 3.93306 2.27207C3.81585 2.38785 3.75 2.54489 3.75 2.70864C3.75 2.87238 3.81585 3.02942 3.93306 3.1452C4.05027 3.26099 4.20924 3.32603 4.375 3.32603H8.125C8.29076 3.32603 8.44973 3.26099 8.56694 3.1452C8.68415 3.02942 8.75 2.87238 8.75 2.70864C8.75 2.54489 8.68415 2.38785 8.56694 2.27207C8.44973 2.15629 8.29076 2.09124 8.125 2.09124H4.375ZM6.25 8.26521C5.58696 8.26521 4.95107 8.52539 4.48223 8.98853C4.01339 9.45167 3.75 10.0798 3.75 10.7348V15.674C3.75 16.3289 4.01339 16.9571 4.48223 17.4202C4.95107 17.8834 5.58696 18.1436 6.25 18.1436H12.5C13.163 18.1436 13.7989 17.8834 14.2678 17.4202C14.7366 16.9571 15 16.3289 15 15.674V10.7348C15 10.0798 14.7366 9.45167 14.2678 8.98853C13.7989 8.52539 13.163 8.26521 12.5 8.26521H6.25ZM6.875 10.7348H11.875C12.0408 10.7348 12.1997 10.7998 12.3169 10.9156C12.4342 11.0314 12.5 11.1884 12.5 11.3522C12.5 11.5159 12.4342 11.673 12.3169 11.7888C12.1997 11.9045 12.0408 11.9696 11.875 11.9696H6.875C6.70924 11.9696 6.55027 11.9045 6.43306 11.7888C6.31585 11.673 6.25 11.5159 6.25 11.3522C6.25 11.1884 6.31585 11.0314 6.43306 10.9156C6.55027 10.7998 6.70924 10.7348 6.875 10.7348ZM6.25 15.0566C6.25 14.8928 6.31585 14.7358 6.43306 14.62C6.55027 14.5042 6.70924 14.4392 6.875 14.4392H11.875C12.0408 14.4392 12.1997 14.5042 12.3169 14.62C12.4342 14.7358 12.5 14.8928 12.5 15.0566C12.5 15.2203 12.4342 15.3773 12.3169 15.4931C12.1997 15.6089 12.0408 15.674 11.875 15.674H6.875C6.70924 15.674 6.55027 15.6089 6.43306 15.4931C6.31585 15.3773 6.25 15.2203 6.25 15.0566Z"
                  fill="#E5E7EB"
                />
              </svg>
              <p className="text-white flex justify-center">Support</p>
            </div>
            <div className="flex justify-center flex-col px-10 p-5">
              <label className="text-gray-300 flex justify-center text-sm">
                powered by
              </label>
              <div className="flex justify-center">
              <svg
                width="93"
                height="34"
                viewBox="0 0 93 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                
              >
                <g clip-path="url(#clip0_3328_34516)">
                  <path
                    d="M4.18457 6.98376H8.54763V24.4294H4.18457V6.98376Z"
                    fill="white"
                  />
                  <path
                    d="M32.7329 0.990356H37.096V24.4294H32.7329V0.990356Z"
                    fill="white"
                  />
                  <path
                    d="M6.36915 5.34682C7.57215 5.34682 8.54738 4.37159 8.54738 3.16859C8.54738 1.96558 7.57215 0.990356 6.36915 0.990356C5.16615 0.990356 4.19092 1.96558 4.19092 3.16859C4.19092 4.37159 5.16615 5.34682 6.36915 5.34682Z"
                    fill="white"
                  />
                  <path
                    d="M62.0331 6.98376H66.3961V24.4294H62.0331V6.98376Z"
                    fill="white"
                  />
                  <path
                    d="M64.2113 5.34682C65.4143 5.34682 66.3895 4.37159 66.3895 3.16859C66.3895 1.96558 65.4143 0.990356 64.2113 0.990356C63.0083 0.990356 62.0331 1.96558 62.0331 3.16859C62.0331 4.37159 63.0083 5.34682 64.2113 5.34682Z"
                    fill="white"
                  />
                  <path
                    d="M38.8977 6.98376H43.2608V24.4294H38.8977V6.98376Z"
                    fill="white"
                  />
                  <path
                    d="M55.9147 7.72297C54.9246 7.25432 53.8157 6.9903 52.6408 6.9903C51.4659 6.9903 50.3636 7.25432 49.3668 7.72297V6.9903H45.0038V14.6207V24.4359H49.3668V14.6207C49.3668 12.8187 50.8322 11.3534 52.6408 11.3534C54.4494 11.3534 55.9147 12.8187 55.9147 14.6207V24.4359H60.2778V14.6207C60.2778 11.5712 58.4956 8.9441 55.9147 7.72297Z"
                    fill="white"
                  />
                  <path
                    d="M41.0759 5.34682C42.2789 5.34682 43.2542 4.37159 43.2542 3.16859C43.2542 1.96558 42.2789 0.990356 41.0759 0.990356C39.8729 0.990356 38.8977 1.96558 38.8977 3.16859C38.8977 4.37159 39.8729 5.34682 41.0759 5.34682Z"
                    fill="white"
                  />
                  <path
                    d="M89.413 6.98372H85.5978V3.16852H81.2348V6.98372H77.4196V11.3468H81.2348V15.162H85.5978V11.3468H89.413V6.98372Z"
                    fill="#3FC4F2"
                  />
                  <path
                    d="M85.5778 16.2511H81.2346H81.2016C80.9309 18.3963 79.0959 20.0663 76.8781 20.0663C74.4754 20.0663 72.515 18.1125 72.515 15.7033C72.515 13.4854 74.185 11.6438 76.3302 11.3798V7.00354C71.7692 7.28737 68.152 11.0762 68.152 15.7099C68.152 20.5284 72.0596 24.4294 76.8715 24.4294C78.4623 24.4294 79.9474 24.0069 81.2346 23.2611V32.7067H85.5976V16.2511H85.5778Z"
                    fill="white"
                  />
                  <path
                    d="M27.7095 17.3865C27.5577 17.5713 27.3993 17.7495 27.2277 17.9146C25.8349 19.3073 23.9867 20.073 22.0263 20.073C20.0659 20.073 18.2111 19.3073 16.825 17.9146C15.4322 16.5218 14.6665 14.6736 14.6665 12.7132C14.6665 10.7528 15.4322 8.89799 16.825 7.51185C18.2177 6.1191 20.0659 5.35342 22.0263 5.35342C23.9867 5.35342 25.8415 6.1191 27.2277 7.51185C27.3993 7.68346 27.5577 7.86168 27.7095 8.0399L31.0099 5.1884C28.858 2.62733 25.6303 0.990356 22.0263 0.990356C15.551 0.990356 10.3035 6.23791 10.3035 12.7132C10.3035 19.1885 15.551 24.436 22.0263 24.436C25.6369 24.436 28.858 22.8057 31.0099 20.238L27.7095 17.3865Z"
                    fill="white"
                  />
                  <path
                    d="M5.87458 28.2645H4.19141V27.5582H8.31684V28.2645H6.62706V32.7068H5.87458V28.2645Z"
                    fill="white"
                  />
                  <path
                    d="M12.766 30.2446V32.7067H12.0399V30.37C12.0399 29.7957 11.6702 29.3865 11.1488 29.3865C10.5613 29.3865 10.0795 29.7957 10.0795 30.2974V32.7001H9.3468V27.4657H10.0795V29.4063C10.3105 29.0169 10.7858 28.7396 11.3138 28.7396C12.1719 28.7462 12.766 29.3667 12.766 30.2446Z"
                    fill="white"
                  />
                  <path
                    d="M16.8979 31.7166L17.3599 32.1984C17.0167 32.5681 16.3434 32.7991 15.7955 32.7991C14.7196 32.7991 13.8021 31.9542 13.8021 30.7661C13.8021 29.6044 14.6602 28.7529 15.7361 28.7529C16.9177 28.7529 17.5975 29.6506 17.5975 31.0367H14.548C14.647 31.6836 15.1157 32.1456 15.7823 32.1456C16.1982 32.139 16.6668 31.9608 16.8979 31.7166ZM14.5678 30.436H16.8913C16.8054 29.8354 16.4424 29.3997 15.7757 29.3997C15.1685 29.4063 14.6866 29.809 14.5678 30.436Z"
                    fill="white"
                  />
                  <path
                    d="M25.8949 27.5648L23.6837 32.7067H22.8454L20.6342 27.5648H21.4724L23.2612 31.7364L25.05 27.5648H25.8949Z"
                    fill="white"
                  />
                  <path
                    d="M26.7325 27.7431C26.7325 27.5121 26.9306 27.3008 27.1814 27.3008C27.419 27.3008 27.6236 27.5121 27.6236 27.7431C27.6236 27.9807 27.419 28.1919 27.1814 28.1919C26.924 28.1919 26.7325 27.9807 26.7325 27.7431ZM26.8052 28.8322H27.5444V32.7002H26.8052V28.8322Z"
                    fill="white"
                  />
                  <path
                    d="M31.0234 28.7463V29.3932C30.2248 29.3932 29.6505 29.8354 29.5845 30.5087V32.7068H28.8452V28.8387H29.5845V29.578C29.8353 29.0698 30.3568 28.7463 31.0234 28.7463Z"
                    fill="white"
                  />
                  <path
                    d="M34.0203 32.5218C33.8091 32.6934 33.5252 32.799 33.248 32.799C32.6473 32.799 32.2315 32.3634 32.2315 31.7429V29.4657H31.6506V28.8386H32.2315V27.7759H32.9576V28.8386H33.8685V29.4657H32.9576V31.6901C32.9576 31.9607 33.1358 32.1521 33.3536 32.1521C33.5186 32.1521 33.6704 32.0927 33.7497 32.0069L34.0203 32.5218Z"
                    fill="white"
                  />
                  <path
                    d="M38.3697 28.8322V32.7002H37.6239V32.1391C37.3928 32.5219 36.9176 32.7926 36.3961 32.7926C35.5446 32.7926 34.944 32.1721 34.944 31.2942V28.8322H35.67V31.1688C35.67 31.7431 36.0397 32.1523 36.5611 32.1523C37.1024 32.1523 37.5644 31.8025 37.6239 31.3404V28.8322H38.3697Z"
                    fill="white"
                  />
                  <path
                    d="M42.8716 30.3635V32.7068H42.1455V32.1721C41.8617 32.5747 41.327 32.7926 40.8584 32.7926C40.0333 32.7926 39.426 32.3107 39.426 31.5582C39.426 30.786 40.1191 30.2711 40.9772 30.2711C41.36 30.2711 41.7693 30.3569 42.1455 30.4823V30.3635C42.1455 29.8751 41.9211 29.3602 41.1488 29.3602C40.766 29.3602 40.3897 29.512 40.0531 29.6836L39.7825 29.1358C40.3369 28.8586 40.8254 28.7463 41.2478 28.7463C42.2973 28.7463 42.8716 29.4064 42.8716 30.3635ZM42.1455 31.4922V30.9774C41.8287 30.8784 41.4722 30.8256 41.0894 30.8256C40.5745 30.8256 40.1389 31.116 40.1389 31.5384C40.1389 31.9543 40.5151 32.2117 40.997 32.2117C41.4854 32.2117 42.0201 31.9741 42.1455 31.4922Z"
                    fill="white"
                  />
                  <path
                    d="M44.1324 27.4724H44.8651V32.7068H44.1324V27.4724Z"
                    fill="white"
                  />
                  <path
                    d="M52.8055 27.5648V32.7067H52.0464V30.4361H49.2411V32.7067H48.4821V27.5648H49.2411V29.7364H52.0464V27.5648H52.8055Z"
                    fill="white"
                  />
                  <path
                    d="M53.8812 30.7662C53.8812 29.6638 54.8185 28.7463 55.9274 28.7463C57.0298 28.7463 57.9539 29.6638 57.9539 30.7662C57.9539 31.8685 57.0232 32.7926 55.9274 32.7926C54.8185 32.7926 53.8812 31.8685 53.8812 30.7662ZM57.2146 30.7662C57.2146 30.0203 56.6205 29.3866 55.9274 29.3866C55.2146 29.3866 54.6271 30.0137 54.6271 30.7662C54.6271 31.5252 55.2212 32.1523 55.9274 32.1523C56.6205 32.1523 57.2146 31.5252 57.2146 30.7662Z"
                    fill="white"
                  />
                  <path
                    d="M58.7529 32.2183L59.1028 31.6836C59.512 31.9807 59.9543 32.1589 60.4097 32.1589C60.8453 32.1589 61.1424 31.9543 61.1424 31.6572C61.1424 31.3008 60.7463 31.182 60.2645 31.05C59.3734 30.8058 58.9312 30.5483 58.9312 29.9213C58.9246 29.2084 59.512 28.7463 60.3371 28.7463C60.8388 28.7463 61.347 28.918 61.7695 29.1952L61.4394 29.743C61.0632 29.512 60.6737 29.3866 60.3371 29.3866C59.9543 29.3866 59.6572 29.5516 59.6572 29.8421C59.6572 30.1391 59.8949 30.2315 60.5483 30.4361C61.182 30.6209 61.8685 30.8322 61.8685 31.6044C61.8685 32.3371 61.248 32.8058 60.4031 32.8058C59.842 32.7926 59.2216 32.5945 58.7529 32.2183Z"
                    fill="white"
                  />
                  <path
                    d="M66.8585 30.7661C66.8585 31.9542 66.0928 32.7925 65.0763 32.7925C64.4757 32.7925 64.0004 32.5087 63.6968 32.0268V33.9872H62.9641V28.8255H63.6968V29.4922C63.9938 29.0169 64.4757 28.7331 65.0763 28.7331C66.0928 28.7463 66.8585 29.5846 66.8585 30.7661ZM66.106 30.7661C66.106 29.9542 65.6044 29.3866 64.8915 29.3866C64.1918 29.3866 63.6902 29.9542 63.6902 30.7661C63.6902 31.578 64.1918 32.1523 64.8915 32.1523C65.6044 32.1523 66.106 31.578 66.106 30.7661Z"
                    fill="white"
                  />
                  <path
                    d="M67.8617 27.7431C67.8617 27.5121 68.0531 27.3008 68.3105 27.3008C68.5482 27.3008 68.7528 27.5121 68.7528 27.7431C68.7528 27.9807 68.5482 28.1919 68.3105 28.1919C68.0531 28.1919 67.8617 27.9807 67.8617 27.7431ZM67.9343 28.8322H68.6736V32.7002H67.9343V28.8322Z"
                    fill="white"
                  />
                  <path
                    d="M72.0137 32.5218C71.8025 32.6934 71.5186 32.799 71.2414 32.799C70.6408 32.799 70.2249 32.3634 70.2249 31.7429V29.4657H69.644V28.8386H70.2249V27.7759H70.951V28.8386H71.8619V29.4657H70.951V31.6901C70.951 31.9607 71.1292 32.1521 71.347 32.1521C71.512 32.1521 71.6639 32.0927 71.7431 32.0069L72.0137 32.5218Z"
                    fill="white"
                  />
                  <path
                    d="M76.1985 30.3635V32.7068H75.4724V32.1721C75.1886 32.5747 74.6539 32.7926 74.1853 32.7926C73.3602 32.7926 72.7529 32.3107 72.7529 31.5582C72.7529 30.786 73.4526 30.2711 74.3041 30.2711C74.6869 30.2711 75.0962 30.3569 75.4724 30.4823V30.3635C75.4724 29.8751 75.248 29.3602 74.4757 29.3602C74.0929 29.3602 73.7166 29.512 73.38 29.6836L73.1094 29.1358C73.6638 28.8586 74.1523 28.7463 74.5747 28.7463C75.6242 28.7463 76.1985 29.4064 76.1985 30.3635ZM75.4724 31.4922V30.9774C75.1556 30.8784 74.7992 30.8256 74.4163 30.8256C73.9015 30.8256 73.4658 31.116 73.4658 31.5384C73.4658 31.9543 73.842 32.2117 74.3239 32.2117C74.8058 32.2117 75.347 31.9741 75.4724 31.4922Z"
                    fill="white"
                  />
                  <path
                    d="M77.4596 27.4724H78.1923V32.7068H77.4596V27.4724Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3328_34516">
                    <rect width="92.8058" height="33.9936" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
const SideBarContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };

  return (
    <>
      <div className="bg-white">
        <div
          className={`menu-button ${isRotated ? "rotated" : ""}`}
          onClick={toggleSidebar}
        >
          <svg
            width="31"
            height="26"
            viewBox="0 0 31 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.3536 0.0698242H8.47861V3.19482H30.3536V0.0698242ZM30.3536 11.0073H14.7286V14.1323H30.3536V11.0073ZM30.3536 21.9448H8.47861V25.0698H30.3536V21.9448ZM0.650488 7.5917L2.85674 5.38232L10.0411 12.5636L2.8583 19.7448L0.648926 17.5354L5.6208 12.5636L0.650488 7.5917Z"
              fill="white"
            />
          </svg>
        </div>

        <SideBar isOpen={isOpen} onClose={toggleSidebar} />
      </div>
    </>
  );
};
export default SideBarContainer;

// <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
// Pro
// </span>
