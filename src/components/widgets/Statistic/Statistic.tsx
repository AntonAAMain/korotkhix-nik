import cls from "./Statistic.module.scss";

const elements = [
  { value: "20K+", text: "subscribers" },
  { value: "19,5K", text: "successful cases" },
  { value: "4.8/5", text: "rating" },
];

export const Statistic = () => {
  return (
    <div className={cls.container}>
      {elements.map((element) => (
        <div key={element.text} className={cls.element}>
          <div className={cls.elementValue}>{element.value}</div>
          <div className={cls.elementText}>{element.text}</div>
        </div>
      ))}
    </div>
  );
};
