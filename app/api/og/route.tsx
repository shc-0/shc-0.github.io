import { ImageResponse } from "@vercel/og"

export const runtime = "edge"

const comicNeueR = fetch(
  new URL("./ComicNeue-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

const comicNeueB = fetch(new URL("./ComicNeue-Bold.ttf", import.meta.url)).then(
  (res) => res.arrayBuffer()
)

export async function GET(request: Request) {
  const url = new URL(request.url)
  const searchParams = url.searchParams
  const title = searchParams.has("title")
    ? searchParams.get("title")
    : "sehyunchung.dev"
  const description = searchParams.has("description")
    ? searchParams.get("description")
    : ""

  const comicNeueRegular = await comicNeueR
  const comicNeueBold = await comicNeueB

  return new ImageResponse(
    (
      <div
        tw="w-full h-full flex flex-col"
        style={{
          backgroundImage: "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
        }}
      >
        <div tw="font-bold flex-auto flex flex-col pb-10 justify-center items-center text-8xl capitalize">
          <div tw="w-[360px] flex">
            <svg
              id="emoji"
              viewBox="0 0 72 72"
              xmlns="http://www.w3.org/2000/svg"
              width="360"
            >
              <g id="color">
                <path
                  fill="#fcea2b"
                  d="M29.8073,57.5977a12.7772,12.7772,0,0,1-4.2627-.7305l-.66-.2334a14.3228,14.3228,0,0,0-5.7744-.79l-.4073.0273a2.56,2.56,0,0,1-2.7314-2.5527A2.6869,2.6869,0,0,1,18.573,50.624l6.8759-.2627c.2706-.0009.337-.0742.3594-.0976a.596.596,0,0,0,.1084-.4248.509.509,0,0,0-.5732-.459H11.4781a2.5551,2.5551,0,0,1-2.5469-2.5567,3.367,3.367,0,0,1,1.01-2.4521,3.4455,3.4455,0,0,1,2.4228-.9609l6.3224.1992a.2121.2121,0,0,0,.1583-.0869.5163.5163,0,0,0,.1308-.3584l-.0058-.1026c0-.1553-.3086-.3135-.6124-.3135H13.45a2.298,2.298,0,0,1-2.2949-2.2959,2.9176,2.9176,0,0,1,2.7861-2.9179l2.1192-.0987a1.8772,1.8772,0,0,0,1.6318-2.6289l-.1435-.3291a14.377,14.377,0,0,1-.9014-7.8584C18.77,16.0732,27.6648,9.248,38.2556,10.05c11.1767.833,19.6611,9.6748,18.9131,19.708a16.5214,16.5214,0,0,1-.9649,4.4658l-.5146,1.62a.749.749,0,0,0,.5976.9677l2.7334.4268a2.9237,2.9237,0,0,1,2.4854,2.9033,2.2842,2.2842,0,0,1-.0371.4111,3.7718,3.7718,0,0,1,3.582,3.7627A4.0962,4.0962,0,0,1,61.322,48.41l-2.5928.2431a22.1358,22.1358,0,0,1-4.5137-.04l-1.3671-.1524a1.9908,1.9908,0,0,0-2.211,1.9776.685.685,0,0,0,.6348.6816l.7568.0537a3.092,3.092,0,0,1,2.8662,3.0742,2.6853,2.6853,0,0,1-2.6826,2.6827H49.2185a11.5429,11.5429,0,0,1-2.3731-.2471l-1.583-.333a17.5922,17.5922,0,0,0-6.7109-.1055l-6.5166,1.1572A12.74,12.74,0,0,1,29.8073,57.5977Z"
                />
              </g>
              <g id="line">
                <path
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M49.2188,55.98h2.9939a1.7319,1.7319,0,0,0,1.7319-1.7319h0a2.1331,2.1331,0,0,0-1.9834-2.1278l-.7553-.0531a1.6331,1.6331,0,0,1-1.5186-1.6291h0a2.94,2.94,0,0,1,3.2664-2.922l1.3671.1526a21.143,21.143,0,0,0,4.3192.0381l2.5928-.2432A3.1628,3.1628,0,0,0,64.1,44.315h0a2.8164,2.8164,0,0,0-2.8164-2.8165H56.4785"
                />
                <path
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M57.9,41.4938h1.3038a1.3519,1.3519,0,0,0,1.3518-1.3518h0a1.9888,1.9888,0,0,0-1.6817-1.9649l-2.733-.427a1.6993,1.6993,0,0,1-1.3568-2.1949l.5287-1.659a15.5812,15.5812,0,0,0,.9087-4.2088c.71-9.5268-7.3646-17.8946-18.0354-18.69S19.4645,17.4416,17.5785,26.8068a13.5114,13.5114,0,0,0,.84,7.29l.1437.3276a2.8276,2.8276,0,0,1-2.4582,3.96l-2.119.0986a1.9716,1.9716,0,0,0-1.88,1.97h0A1.3451,1.3451,0,0,0,13.45,41.7976h4.9072A1.4314,1.4314,0,0,1,19.92,43.0615h0a1.3453,1.3453,0,0,1-1.2582,1.4975L12.39,44.36a2.4141,2.4141,0,0,0-2.4628,2.4135v.05a1.5977,1.5977,0,0,0,1.5964,1.6062h13.82a1.4349,1.4349,0,0,1,1.5194,1.3218h0a1.3423,1.3423,0,0,1-1.3776,1.56l-6.8788.2628a1.7455,1.7455,0,0,0-1.6844,1.7445h0a1.6083,1.6083,0,0,0,1.717,1.6046l.4068-.0276a15.3472,15.3472,0,0,1,6.1558.8434l.66.2333a11.8211,11.8211,0,0,0,6.0076.4948L38.3859,55.31a18.5884,18.5884,0,0,1,7.0715.1113"
                />
                <path d="M34.103,24.4012a3,3,0,1,1-3-3,3.0011,3.0011,0,0,1,3,3" />
                <path d="M46.103,29.5966a3,3,0,1,1-3-3,3.0011,3.0011,0,0,1,3,3" />
                <path
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.928"
                  d="M32.9891,36.805a10.8681,10.8681,0,0,0,10.8831,3.2472"
                />
              </g>
            </svg>
          </div>
          {title}
          {description ? (
            <div tw="justify-center items-center text-bold text-4xl">
              {description}
            </div>
          ) : null}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "Comic Neue",
          weight: 400,
          data: comicNeueRegular,
          style: "normal",
        },
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
