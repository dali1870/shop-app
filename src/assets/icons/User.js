import * as React from "react"

const User = (props) => {
    const size = props.size || 36
    
    return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M237 .6c-1.9.2-7.8.9-13 1.5-28.2 3.2-62.7 14-88 27.5-11.1 6-31.3 19.5-42 28.1C83.2 66.4 66.4 83.2 57.7 94c-30.6 38-49 80.7-55.8 130-1.7 12.3-1.8 51.6-.1 63.5 8.4 59.2 32.8 108.8 73.3 149.4 40.6 40.6 90.1 64.8 149.4 73.3 11.9 1.7 51.2 1.6 63.5-.1 58-8 108.7-33 149-73.3 46.4-46.5 72.3-106.3 74.7-172.3 1.3-39.1-6.3-78.1-22.3-113.7-5.4-12.1-13.9-27.2-16.6-29.7-4.7-4.4-12.8-2.7-15.3 3.2-1.8 4.3-1.1 7 4 15.6 13.1 22.2 23.9 54 28.2 82.6 2.4 16.6 2.4 51.5-.1 67.3-2.3 14.6-6.5 32-11.1 45.2-7.6 21.9-23.9 51.2-38.5 69-6 7.4-26.1 28-27.2 28-.5 0-.8-.7-.8-1.5 0-.9-1.6-6.6-3.6-12.8-18.1-56.4-64-97.2-122.6-108.9-16.2-3.2-43.4-3.2-59.6 0C165.7 320.9 118.3 364.5 102 423c-1.3 4.7-2.5 8.7-2.7 8.9-.7.9-19.4-18.4-26.7-27.4C36.5 360.1 18 304.2 20.4 247c1.5-37.9 11-72.1 28.9-104.5C85 77.8 148.2 33.9 222 22.4c16-2.5 51.9-2.5 67.8 0 39.3 6.1 73 19.8 104 42.1 6.9 5 10.3 6.7 12.8 6.8 7 .2 12-6.9 9.4-13.3-.7-1.7-4-5.1-7.9-7.9C373.1 24.3 333.5 8.3 289 2 281.2.9 243.1-.1 237 .6zm36 326.5c46.4 5.7 87.2 34.3 107.9 75.7 5.1 10.2 10.4 25.9 12.4 36.6l1.5 7.8-10.7 7c-27.3 17.8-59.7 30-94.3 35.4-17.2 2.8-52.9 2.5-70.3-.4-34.3-5.9-65.4-17.8-91.6-35.1l-10.7-7 1.5-7.8c9.7-52.4 49.6-94.8 101.9-108.6 17-4.5 35.3-5.8 52.4-3.6z" />
    <path d="M435.1 83.4c-8.7 4.8-5 18.6 4.9 18.6 5.1 0 10-4.9 10-9.9 0-7.5-8.3-12.4-14.9-8.7zM238 107.9c-33.9 7.4-60.1 32.3-69.1 65.6-1.8 6.5-2.2 10.7-2.2 22.5s.4 16 2.2 22.5c8.8 32.4 34 57 66.8 65.2 10.3 2.6 32.3 2.3 42.8-.6 31.7-8.5 56-32.9 64.6-64.6 1.8-6.5 2.2-10.7 2.2-22.5s-.4-16-2.2-22.5c-8.6-31.7-33.3-56.4-64.6-64.6-11.6-3-29.4-3.5-40.5-1zm31.3 19.5c21.2 4.1 39.5 18.2 49.1 37.8 10.1 20.7 10.1 40.9-.1 61.8-3.8 7.9-6 10.9-13.2 18.1-7.2 7.2-10.2 9.4-18.1 13.2-20.9 10.2-41.1 10.2-62 0-7.9-3.8-10.9-6-18.1-13.2-7.1-7.1-9.4-10.2-13.3-18.1-10.1-20.6-10.1-41.4 0-62 3.9-7.9 6.2-11 13.3-18.1 7.1-7.1 10.2-9.4 18.1-13.3 14.6-7.2 28.7-9.1 44.3-6.2z" />
  </svg>
)}

export default User
