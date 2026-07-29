import { memo, useState, useTransition } from "react";

const TabExample = () => {
  const [tab, setTab] = useState("home");
  const [isPanding, startTransition] = useTransition();

  const selectedTab = (nextTab) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };
 
  return (
    <div>
      <button onClick={() => selectedTab("home")}>Главная</button>
      <button onClick={() => selectedTab("about")}>О нас(медленная)</button>
      <button onClick={() => selectedTab("contact")}>Контакты</button>
      <hr />

      {isPanding ? (
        <div>Загрузка...</div>
      ) : (
        <div>
          {tab === "home" && <HomeTab />}
          {tab === "about" && <AboutTab />}
          {tab === "contact" && <ContactTab />}
        </div>
      )}
    </div>
  );
};

const HomeTab = () => {
  return <h2>Главная страница</h2>;
};

const AboutTab = memo(function AboutTab() {
  let items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<SlotPost key={i} index={i} />);
  }
  return <ul>{items}</ul>;
});

const SlotPost = ({ index }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 2) {
    //
  }
  return <li>Элемент #{index + 1}</li>;
};

const ContactTab = () => {
  return <h2>Контакты</h2>;
};

export default TabExample;
