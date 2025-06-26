const BounceLoader = () => (
  <div
    className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-700"
    aria-live="polite"
  >
    <div className="loader relative h-[128px] w-[112px]" aria-hidden="true">
      {/* Box 1 - Bottom Bar */}
      <div className="box1 absolute bg-white" />

      {/* Box 2 - Top Left Square */}
      <div className="box2 absolute bg-white" />

      {/* Box 3 - Top Right Square */}
      <div className="box3 absolute bg-white" />
    </div>

    {/* Global styles using a regular <style> tag */}
    <style>
      {`
        .loader {
          width: 112px;
          height: 128px;
          position: relative;
          background-color: rgb(255, 0, 0);
        }

        .box1,
        .box2,
        .box3 {
          position: absolute;
          display: block;
        }

        .box1 {
          width: 50px;
          height: 41px;
          top: 67px;
          left: 42px;
          border-width: 1px;
          animation: abox1 5s 1s forwards ease-in-out infinite;
        }

        .box2 {
          width: 16px;
          height: 88px;
          top: 20px;
          left: 20px;
          border-width: 1px;
          animation: abox2 5s 1s forwards ease-in-out infinite;
        }

        .box3 {
          width: 50px;
          height: 41px;
          top: 20px;
          left: 42px;
          border-width: 1px;
          animation: abox3 5s 1s forwards ease-in-out infinite;
        }

        @keyframes abox1 {
          12.5% {
            border-radius:100px;
          }
          25% {
            width: 33px;
            height: 66px;
            top: 42px;
            left: 20px;
          }
          37.5% {
            border-radius:100px;
          }
          50% {
            width: 50px;
            height: 41px;
            top: 20px;
            left: 20px;
          }
          62.5% {
            border-radius:100px;
          }
          75% {
            width: 33px;
            height: 66px;
            top: 20px;
            left: 59px;
          }
        }

        @keyframes abox2 {
          25% {
            width: 72px;
            height: 16px;
            top: 20px;
            left: 20px;
          }
          50% {
            width: 16px;
            height: 88px;
            top: 20px;
            left: 76px;
          }
          75% {
            width: 72px;
            height: 16px;
            top: 92px;
            left: 20px;
          }
        }

        @keyframes abox3 {
          12.5% {
            border-radius:100px;
          }
          25% {
            width: 33px;
            height: 66px;
            top: 42px;
            left: 59px;
          }
          37.5% {
            border-radius:100px;
          }
          50% {
            width: 50px;
            height: 41px;
            top: 67px;
            left: 20px;
          }
          62.5% {
            border-radius:100px;
          }
          75% {
            width: 33px;
            height: 66px;
            top: 20px;
            left: 20px;
          }
        }
      `}
    </style>
  </div>
)

export default BounceLoader
