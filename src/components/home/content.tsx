import Image from "next/image";

import "./mainPage.module.scss";

export const Content = () => {
  return (
    <div className="mainPageContainer">
      <div className="contentArea">
        <div className="text">
          Cześć! <br /> Nazywam się Mateusz Fordas. Jestem programistą
          JavaScript. Obecnie pracuję w React i React-Native. Zajmuję się
          również konstruowaniem elementów z tworzyw sztucznych dla przemysłu
          motoryzacyjnego.
        </div>
        <div className="image">
          <Image alt="mfordas photo" src="pexels-pixabay-257897.jpg" />
        </div>
      </div>
      <div className="contentArea">
        <div className="image">
          <Image alt="shaking hand photo" src="hand-819279_1920.jpg" />
        </div>
        <div className="text">
          <p>
            Jeśli chcesz nawiązać współpracę możesz skontaktować się ze mną
            przez formularz kontaktowy, e-mail: mateusz@fordas.pl lub
            <a
              href={"https://www.linkedin.com/in/mateusz-fordas/"}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <b>LinkedIn</b>
            </a>
          </p>
        </div>
      </div>
      <div className="contentArea">
        <div className="text">
          <p>
            Aby dowiedzieć się więcej o mnie i moich projektach odwiedź sekcję
            "o mnie" a także moje
            <a
              href={"https://fordas.pl/Portfolio/index"}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <b>portfolio</b>
            </a>
          </p>
        </div>
        <div className="image">
          <Image
            alt="mfordas photo"
            src="ashley-batz-betmVWGYcLY-unsplash.jpg"
          />
        </div>
      </div>
    </div>
  );
};
