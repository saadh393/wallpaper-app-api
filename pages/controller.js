import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import InputItem from "../components/InputItem";

export default function controller() {
  return (
    <div>
      <Head>
        <title>Wallpaper API Controller | WWInc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Script src="https://cdn.tailwindcss.com"></Script>

      <div className="grid item-center justify-center p-8 ">
        <div>
          <Image
            src="https://www.weblywork.com/wp-content/uploads/2022/01/logo_165X41_color.png"
            width={200}
            height={100}
            objectFit="contain"
            alt="WeblyWork"
          />

          <h3>MovieWall</h3>
          <InputItem blogId="3944955138453979913" postId="4117186442350424743" packageName="com.wwinc.MovieWall" />

          <h3>GameWall</h3>
          <InputItem blogId="3944955138453979913" postId="1747376000160831678" packageName="com.wwinc.gameWall" />
        </div>
      </div>
    </div>
  );
}
