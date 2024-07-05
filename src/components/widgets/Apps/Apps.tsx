import Image from "next/image";
import cls from "./Apps.module.scss";

const apps = [
  {
    img: "/images/apps/google.svg",
    description: "get it on",
    name: "Google Play",
  },
  {
    img: "/images/apps/ios.svg",
    description: "Avaiable on the",
    name: "App Store",
  },
];

export const Apps = () => {
  return (
    <div className={cls.container}>
      {apps.map((app) => (
        <div key={app.description} className={cls.app}>
          <div className={cls.appImg}>
            <Image layout="fill" objectFit="contain" src={app.img} alt="" />
          </div>

          <div className={cls.text}>
            <div className={cls.description}>{app.description}</div>
            <div className={cls.title}>{app.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
