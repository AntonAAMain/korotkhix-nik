import { Statistic } from "@/components/widgets/Statistic/Statistic";
import { Crypto } from "@/components/widgets/Crypto/Crypto";
import { Button } from "@/components/ui/Button/Button";
import { Apps } from "@/components/widgets/Apps/Apps";

import cls from "./page.module.css";
import { Reviews } from "@/components/widgets/Reviews/Reviews";

export default function Home() {
  return (
    <main className={cls.main}>
      <Crypto />
      <h1 className={cls.title}>
        Do you want to Learn more About cryptocurrencies
        <p className={cls.title_colored}>quickly and easily ?</p>
      </h1>

      <div className={cls.description}>
        Subscribe to our channel to learn more
      </div>

      <Statistic />

      <Button>Join Whatsapp</Button>

      <Apps />

      <Reviews />
    </main>
  );
}
