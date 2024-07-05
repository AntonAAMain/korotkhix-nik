import { Review } from "@/components/Entities/Review/Review";
import cls from "./Reviews.module.scss";

export const Reviews = () => {
  return (
    <>
      <Review
        className={cls.lorenzo}
        name="LORENZO"
        tag="@lorenzoo"
        text="Amazing Telegram bot! Provides real-time crypto prices and news"
        photo={"/images/people/1.png"}
      />

      <Review
        className={cls.adalina}
        name="ADALINA"
        tag="@ada"
        text="Must-have bot for crypto traders. Accurate signals and analysis"
        photo={"/images/people/2.png"}
      />

      <Review
        className={cls.alexander}
        name="ALEXANDER"
        tag="@alex_x"
        text="Superb cryptocurrency bot! Quick updates and reliable data"
        photo={"/images/people/3.png"}
      />

      <Review
        className={cls.rushana}
        name="RUSHANA"
        tag="@Hana"
        text="Efficient and user-friendly bot. Simplifies crypto trading tasks"
        photo={"/images/people/4.png"}
      />
    </>
  );
};
