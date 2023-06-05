import Image from "next/image"
import Link from "next/link"
import { ExternalLinkIcon } from "lucide-react"
import { useMDXComponent } from "next-contentlayer/hooks"
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc"
import probe from "probe-image-size"
import { Tweet } from "react-tweet"
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"
import { BUNDLED_LANGUAGES, HighlighterOptions, getHighlighter } from "shiki"
import githubDarkDimmed from "shiki/themes/github-dark-dimmed.json"
import githubLight from "shiki/themes/github-light.json"

import { BoxDrawn } from "./box-drawn"

const components = {
  Tweet,
  Image,
  BoxDrawn,
  LinkIcon: ExternalLinkIcon,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}

export async function MDXTIL({ source }: { source: string }) {
  const components: MDXRemoteProps["components"] = {
    BoxDrawn: BoxDrawn.Box,
    Tweet,
    a: ({ href, ref, ...props }) => {
      if (href?.startsWith("/")) {
        return (
          <Link
            href={{
              href,
            }}
            {...props}
          />
        )
      } else {
        return (
          <a target="_blank" href={href} rel="noopener noreferrer" {...props} />
        )
      }
    },
    // @ts-expect-error
    img: async ({ src, alt }) => {
      const { width, height } = await probe(src ?? "")
      return (
        <Image src={src ?? ""} alt={alt ?? ""} width={width} height={height} />
      )
    },
  }

  return (
    // @ts-expect-error
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: { dark: githubDarkDimmed, light: githubLight },
                getHighlighter: (options: HighlighterOptions) => {
                  return getHighlighter({
                    ...options,
                    langs: [...BUNDLED_LANGUAGES],
                  })
                },
              },
            ],
          ],
        },
      }}
    />
  )
}
