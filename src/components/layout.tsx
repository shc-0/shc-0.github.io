/** @jsx jsx */

import React from 'react'
import { Link } from 'gatsby'

import { css, jsx, Global } from '@emotion/core'

import Bio from './bio'

const globalStyle = css`
  :root {
    --text-color: #ccc;
    --border-color: #333;
  }
  body {
    background-color: #111111;
    color: var(--text-color);
    word-break: keep-all;
    font-family: 'Gothic A1';
    line-height: 160%;
    overflow-x: hidden;
  }
  pre::-webkit-scrollbar {
    display: none;
  }
  a {
    color: hsl(0, 0%, 50%);
  }
  p {
    margin-top: 20px;
    & > img {
      margin-left: 50%;
      transform: translateX(-50%);
    }
    pre,
    code {
      font-size: 0.9rem;
    }
  }
  blockquote {
    margin: 3rem 2rem;
    padding: 0 30px;
    border: 1px solid #222;
    overflow-x: auto;
    box-shadow: 0.7rem 0.7rem 0px 0px var(--border-color);
  }
  pre,
  code {
    font-family: Menlo, Monaco, Consolas, monospace;
  }
  li {
    padding: 0.6rem 0;
  }
  h1,
  h2,
  h3,
  h4 {
    margin-top: 4rem;
    line-height: initial;
    pre,
    code {
      font-size: inherit;
    }
  }
  table {
    margin: 2rem 0;
    width: 100%;
    border-collapse: collapse;
    border: 1px solid var(--border-color);
    thead {
      background-color: #222;
    }
    thead,
    tbody,
    tr,
    th,
    td {
      padding: 8px 12px;
      border: 1px sold var(--border-color);
    }
    tr,
    th,
    td {
      border: 1px solid var(--border-color);
    }
  }
  .grvsc-container {
    border: 1px solid var(--border-color);
    margin: 2rem 0;
    border-radius: 0 !important;
  }
  .grvsc-container,
  .grvsc-code {
    font-size: 0.9rem;
  }
  .utterances {
    max-width: inherit;
  }
`

function Layout(props) {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header: JSX.Element

  if (location.pathname === rootPath) {
    header = (
      <h1
        css={css`
          font-size: 4em;
          font-weight: bold;
          margin: 2rem 0 4rem;
        `}
      >
        <Link
          css={css`
            box-shadow: none;
            text-decoration: none;
            color: inherit;
          `}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        css={css`
          font-size: 3rem;
        `}
      >
        <Link
          css={css`
            box-shadow: none;
            text-decoration: none;
            color: inherit;
          `}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      css={css`
        max-width: 640px;
        height: 100%;
        margin: 0 auto;
        padding: 10px;
        overflow-x: hidden;
      `}
    >
      <Global styles={globalStyle} />
      <header>{header}</header>
      <main>{children}</main>
      <footer
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 20px;
        `}
      >
        © {new Date().getFullYear()} Sehyun Chung <Bio />
      </footer>
    </div>
  )
}

export default Layout
