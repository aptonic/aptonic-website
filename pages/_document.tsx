import { Html, Head, Main, NextScript } from 'next/document'
import { sfPro, sfProLight, roboto, inter } from "../app/fonts";
import cx from "classnames";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={cx(sfPro.variable, sfProLight.variable, roboto.variable, inter.variable)}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
