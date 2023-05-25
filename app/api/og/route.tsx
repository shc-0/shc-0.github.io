import { ImageResponse } from "@vercel/og"

export const runtime = "edge"

const comicNeueB = fetch(
  new URL("./ComicNeue-Bold.woff", import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(request: Request) {
  const url = new URL(request.url)
  const searchParams = url.searchParams
  const title = searchParams.has("title") ? searchParams.get("title") : ""
  const description = searchParams.has("description")
    ? searchParams.get("description")
    : ""

  const comicNeueBold = await comicNeueB

  return new ImageResponse(
    (
      <div
        tw="w-full h-full flex flex-col"
        style={{
          background: "white",
        }}
      >
        <div
          tw="flex font-extrabold flex-auto px-[60px] py-[120px] items-center"
          style={{ wordBreak: "keep-all" }}
        >
          <div tw="flex items-center w-[360px]">
            <MeltedFaceSvg width="360" height="360" />
          </div>
          <div
            style={{ gap: "26px" }}
            tw="flex flex-col ml-[30px] max-w-[680px]"
          >
            {title ? <div tw="text-5xl opacity-50">sehyunchung.dev</div> : null}
            {title ? (
              <div
                style={{ fontFamily: "sans-serif", fontWeight: 700 }}
                tw="flex flex-wrap items-center leading-[64px] text-7xl pb-0.5"
              >
                {title
                  .split("")
                  .map((c, i) =>
                    c === " " ? (
                      <span key={`space-${i}`} style={{ width: "0.2em" }} />
                    ) : (
                      c
                    )
                  )
                  .map((char, i) =>
                    i < 32 ? <span key={i}>{char}</span> : i < 33 ? "..." : null
                  )}
              </div>
            ) : (
              <div tw="text-7xl">sehyunchung.dev</div>
            )}
            {description ? (
              <div
                tw="flex flex-wrap items-center text-5xl opacity-60"
                style={{
                  lineHeight: 1,
                }}
              >
                {description
                  .split("")
                  .map((c, i) =>
                    c === " " ? (
                      <span key={`space-${i}`} style={{ width: "0.2em" }} />
                    ) : (
                      c
                    )
                  )
                  .map((char, i) => {
                    return i < 107 ? (
                      <span key={i}>{char}</span>
                    ) : i < 108 ? (
                      "..."
                    ) : null
                  })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      emoji: "openmoji",
      fonts: [
        {
          name: "Comic Neue",
          weight: 700,
          data: comicNeueBold,
          style: "normal",
        },
      ],
    }
  )
}

const MeltedFaceSvg = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="512" height="512" fill="white" />
      <path
        d="M197.08 452.451C185.11 452.455 173.228 450.419 161.943 446.43L156.503 444.506C141.251 439.096 125.05 436.879 108.906 437.994L105.549 438.219C102.666 438.412 99.7745 438.012 97.0531 437.042C94.3317 436.072 91.8384 434.554 89.7276 432.582C87.6169 430.609 85.9337 428.224 84.7824 425.574C83.6311 422.925 83.0361 420.067 83.0343 417.178C83.0153 411.413 85.2447 405.868 89.2488 401.721C93.2529 397.574 98.7161 395.151 104.478 394.968L161.154 392.803C163.385 392.795 163.932 392.191 164.117 391.998C164.849 390.987 165.168 389.735 165.01 388.497C164.96 387.934 164.796 387.387 164.528 386.889C164.261 386.391 163.895 385.952 163.454 385.598C163.013 385.245 162.505 384.984 161.96 384.832C161.416 384.68 160.846 384.64 160.286 384.713H45.9963C40.4199 384.696 35.0783 382.467 31.1428 378.516C27.2073 374.566 24.9992 369.216 25.0027 363.639C24.9499 359.882 25.6605 356.153 27.0916 352.679C28.5226 349.205 30.6443 346.057 33.3279 343.427C38.6909 338.274 45.8614 335.43 53.2985 335.507L105.413 337.149C105.669 337.133 105.92 337.06 106.145 336.936C106.371 336.812 106.566 336.64 106.717 336.432C107.441 335.621 107.827 334.564 107.796 333.478L107.748 332.632C107.748 331.352 105.204 330.048 102.7 330.048H62.2502C57.2339 330.041 52.4251 328.045 48.8789 324.497C45.3326 320.95 43.3384 316.14 43.3338 311.124C43.3269 304.928 45.711 298.969 49.9894 294.489C54.2677 290.008 60.1101 287.351 66.299 287.072L83.7671 286.258C86.2748 286.142 88.7164 285.416 90.8812 284.145C93.046 282.874 94.8691 281.095 96.193 278.962C97.517 276.829 98.3021 274.406 98.4806 271.902C98.6591 269.398 98.2256 266.888 97.2176 264.589L96.0348 261.876C87.5504 241.404 84.9763 218.963 88.6048 197.101C106.102 110.174 179.419 53.9154 266.717 60.5261C358.844 67.3923 428.779 140.273 422.613 222.975C421.68 235.554 419.003 247.943 414.66 259.785L410.418 273.138C410.147 273.987 410.063 274.884 410.172 275.768C410.28 276.652 410.579 277.502 411.047 278.26C411.515 279.017 412.141 279.665 412.883 280.158C413.625 280.651 414.464 280.977 415.344 281.115L437.875 284.633C443.593 285.5 448.809 288.394 452.57 292.788C456.331 297.181 458.386 302.781 458.361 308.564C458.362 309.701 458.26 310.835 458.056 311.953C466.014 312.354 473.515 315.795 479.009 321.567C484.504 327.338 487.572 334.999 487.581 342.968C487.612 351.419 484.472 359.575 478.782 365.824C473.092 372.073 465.265 375.96 456.848 376.719L435.476 378.723C423.096 379.881 410.629 379.77 398.271 378.393L387.002 377.137C384.709 376.881 382.388 377.113 380.19 377.815C377.992 378.518 375.967 379.676 374.247 381.215C372.527 382.753 371.151 384.637 370.209 386.743C369.266 388.849 368.778 391.13 368.777 393.438C368.781 394.861 369.321 396.231 370.292 397.273C371.262 398.315 372.59 398.952 374.01 399.056L380.248 399.498C386.655 399.968 392.648 402.839 397.028 407.537C401.409 412.235 403.854 418.415 403.873 424.838C403.868 430.701 401.536 436.322 397.391 440.468C393.245 444.614 387.624 446.945 381.761 446.951H357.082C350.508 446.95 343.953 446.267 337.521 444.915L324.472 442.17C306.26 438.333 287.48 438.037 269.156 441.3L215.441 450.839C209.38 451.913 203.236 452.453 197.08 452.451Z"
        fill="#FCEA2B"
      />
      <path
        d="M357.084 439.117H381.763C385.549 439.117 389.18 437.613 391.857 434.935C394.534 432.258 396.038 428.627 396.038 424.841C396.038 420.391 394.351 416.107 391.317 412.853C388.283 409.598 384.128 407.614 379.689 407.302L373.464 406.864C370.065 406.625 366.884 405.107 364.561 402.615C362.238 400.123 360.946 396.843 360.946 393.436C360.946 390.026 361.665 386.655 363.057 383.543C364.449 380.43 366.482 377.646 369.023 375.373C371.564 373.1 374.556 371.388 377.804 370.351C381.052 369.313 384.482 368.972 387.87 369.351L399.139 370.608C410.965 371.928 422.894 372.033 434.741 370.922L456.113 368.918C462.577 368.311 468.581 365.315 472.952 360.515C477.323 355.715 479.746 349.457 479.747 342.965C479.747 339.916 479.147 336.897 477.98 334.08C476.813 331.264 475.103 328.704 472.948 326.549C470.792 324.393 468.233 322.683 465.416 321.516C462.599 320.349 459.581 319.749 456.532 319.749H416.925"
        stroke="black"
        strokeWidth="8"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M428.641 319.71H439.388C442.343 319.71 445.177 318.536 447.267 316.446C449.357 314.357 450.531 311.523 450.531 308.567C450.531 304.658 449.134 300.878 446.592 297.908C444.05 294.939 440.531 292.975 436.669 292.371L414.141 288.852C412.145 288.54 410.24 287.8 408.556 286.682C406.873 285.565 405.451 284.096 404.389 282.377C403.327 280.659 402.649 278.731 402.401 276.725C402.154 274.72 402.344 272.685 402.958 270.76L407.316 257.085C411.406 245.923 413.927 234.248 414.806 222.393C420.658 143.865 354.101 74.8915 266.144 68.3352C178.187 61.7789 111.826 121.453 96.2805 198.649C93.0008 218.934 95.3972 239.731 103.204 258.738L104.389 261.439C105.907 264.902 106.561 268.683 106.292 272.455C106.023 276.227 104.84 279.877 102.846 283.09C100.851 286.303 98.1047 288.983 94.8435 290.897C91.5823 292.812 87.9041 293.904 84.1265 294.08L66.6601 294.893C62.4844 295.087 58.5442 296.883 55.6582 299.907C52.7723 302.931 51.1626 306.951 51.1637 311.131C51.1648 314.071 52.3333 316.89 54.4123 318.968C56.4912 321.046 59.3105 322.214 62.2502 322.214H102.699C105.784 321.91 108.866 322.832 111.276 324.782C113.687 326.732 115.233 329.552 115.581 332.632C115.754 334.132 115.62 335.651 115.185 337.096C114.751 338.542 114.026 339.883 113.055 341.039C112.084 342.195 110.888 343.14 109.539 343.817C108.19 344.494 106.717 344.888 105.21 344.976L53.5129 343.335C50.8666 343.282 48.2362 343.757 45.7757 344.733C43.3153 345.709 41.0742 347.166 39.1838 349.018C37.2934 350.871 35.7915 353.082 34.7662 355.522C33.7409 357.962 33.2127 360.583 33.2126 363.229V363.642C33.2034 365.376 33.5368 367.095 34.1939 368.7C34.8509 370.306 35.8185 371.765 37.0412 372.995C38.2639 374.225 39.7175 375.202 41.3187 375.869C42.9198 376.536 44.6369 376.88 46.3713 376.881H160.286C163.386 376.689 166.438 377.724 168.781 379.763C171.124 381.801 172.572 384.68 172.81 387.776C173.078 389.397 172.982 391.057 172.528 392.636C172.074 394.214 171.275 395.672 170.188 396.903C169.1 398.134 167.753 399.108 166.242 399.754C164.732 400.399 163.097 400.7 161.455 400.635L104.755 402.801C101.028 402.932 97.4981 404.504 94.9081 407.186C92.3181 409.869 90.8706 413.452 90.8707 417.181C90.8708 418.997 91.2441 420.794 91.9675 422.46C92.6908 424.126 93.7489 425.626 95.076 426.866C96.4031 428.106 97.9708 429.061 99.682 429.67C101.393 430.279 103.211 430.53 105.024 430.407L108.377 430.18C125.587 429.013 142.855 431.379 159.118 437.132L164.558 439.055C180.434 444.671 197.496 446.076 214.077 443.133L267.791 433.594C287.1 430.167 306.888 430.478 326.08 434.511"
        stroke="black"
        strokeWidth="8"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M232.488 178.82C232.488 183.71 231.038 188.491 228.321 192.558C225.604 196.624 221.742 199.794 217.223 201.666C212.705 203.537 207.733 204.027 202.936 203.073C198.139 202.119 193.733 199.763 190.275 196.305C186.816 192.847 184.461 188.441 183.507 183.644C182.553 178.847 183.042 173.875 184.914 169.357C186.786 164.838 189.955 160.976 194.022 158.259C198.088 155.542 202.869 154.091 207.76 154.091C214.318 154.094 220.606 156.7 225.243 161.337C229.88 165.974 232.486 172.262 232.488 178.82Z"
        fill="black"
      />
      <path
        d="M331.401 221.644C331.401 226.535 329.951 231.316 327.234 235.383C324.517 239.449 320.655 242.619 316.136 244.49C311.618 246.362 306.646 246.852 301.849 245.897C297.052 244.943 292.646 242.588 289.188 239.13C285.729 235.671 283.374 231.265 282.42 226.468C281.466 221.672 281.956 216.7 283.827 212.181C285.699 207.663 288.868 203.801 292.935 201.083C297.001 198.366 301.782 196.916 306.673 196.916C313.231 196.918 319.519 199.524 324.156 204.161C328.793 208.798 331.399 215.087 331.401 221.644Z"
        fill="black"
      />
      <path
        d="M223.307 281.061C234.337 293.361 248.554 302.371 264.386 307.094C280.217 311.818 297.047 312.072 313.014 307.827"
        stroke="black"
        strokeWidth="11"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  )
}
