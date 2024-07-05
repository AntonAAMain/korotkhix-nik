import Image from "next/image";

import cls from "./Crypto.module.scss";

export const Crypto = () => {
  return (
    <>
      <div className={cls.bitcoin}>
        <Image
          layout="fill"
          objectFit="contain"
          src={"/images/crypto/Bitcoin.svg"}
          alt=""
        />
      </div>

      <div className={cls.eth}>
        <Image
          layout="fill"
          objectFit="contain"
          src={"/images/crypto/Ethereum.svg"}
          alt=""
        />
      </div>

      <div className={cls.litcoin}>
        <Image
          layout="fill"
          objectFit="contain"
          src={"/images/crypto/Litecoin.svg"}
          alt=""
        />
      </div>
    </>
  );
};
