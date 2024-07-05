import cn from "classnames";

import cls from "./Review.module.scss";
import Image from "next/image";

interface Props {
  className?: string;
  photo: string;
  name: string;
  tag: string;
  text: string;
}

export const Review = ({ className, photo, name, tag, text }: Props) => {
  return (
    <div className={cn(cls.container, className)}>
      <div className={cls.user}>
        <div className={cls.userPhoto}>
          <Image layout="fill" objectFit="contain" src={photo} alt="" />
        </div>
        <div className={cls.userInfo}>
          <div className={cls.userInfoName}>{name}</div>

          <div className={cls.userInfoTag}>{tag}</div>
        </div>
      </div>

      <div className={cls.description}>{text}</div>
    </div>
  );
};
