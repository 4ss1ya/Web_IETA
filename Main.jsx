import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

export default function Main() {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  // Асинхронная функция, вызывающая обработчик события через 1 секунду
  async function handleClickAsync(event) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    window.onclick(event);
  }

  // Добавляем асинхронную обработку события onclick
  window.onclick = handleClickAsync;
  
  /*скролл*/
  function settime(){
    alert('Plunge into the interesting maps of the Valorant game');
    setTimeout(clicktomap(), 20000);
  }

  function clicktomap(){
    window.location.href="C:/Users/Acer/Desktop/project/ieta_maps/create-3d-scroll-site/ready-html/index.html"
    
  }
  return (
    <body>
      <link
        rel="shortcut icon"
        type="image/png"
        href="https://animaproject.s3.amazonaws.com/home/favicon.png"
      />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="photo" />
      <link rel="stylesheet" href="style.css" />
      <script src="script.js"></script>

      <script
        id="anima-hotspots-script"
        src="file:///C:/Users/%D0%95%D1%80%D0%BA%D0%B5%D0%B6%D0%B0%D0%BD)/Desktop/hotspots.js"
      ></script>
      <script
        id="anima-overrides-script"
        src="file:///C:/Users/%D0%95%D1%80%D0%BA%D0%B5%D0%B6%D0%B0%D0%BD)/Desktop/overrides.js"
      ></script>
      <script src="ieta3_files/timeline.js.загрузка"></script>
      <script
        id="anime-js-script"
        src="ieta3_files/anime.min.js.загрузка"
        integrity="sha256-98Q574VkbV+PkxXCKSgL6jVq9mrVbS7uCdA+vt0sLS8="
        crossorigin="anonymous"
      ></script>
      <script
        id="imgloaded-js-script"
        src="ieta3_files/imagesloaded.pkgd.min.js.загрузка"
      ></script>

      <input type="hidden" id="anPageName" name="page" value="frame-2" />
      <div className="frame-2 screen " data-id="69:2">
        <header>
          <div className="rectangle-41-GB5BqJ" data-id="108:228"></div>
          <img
            className="mask-group-GB5BqJ mask-group"
            data-id="69:3"
            src="ieta3_files/52863498135819.5ed65297bad0a.gif"
            anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7bc6aef54ee96e70f649f/img/mask-group.png"
            alt="Mask group"
          />
          <img
            className="vector-2-GB5BqJ"
            data-id="69:6"
            src="ieta3_files/vector-2.png"
            anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-2.png"
            alt="Vector 2"
          />
          <img
            className="vector-4-GB5BqJ"
            data-id="69:7"
            src="ieta3_files/vector-4.png"
            anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-4.png"
            alt="Vector 4"
          />
          <img
            className="vector-3-GB5BqJ"
            data-id="69:8"
            src="ieta3_files/vector-3.png"
            anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-3.png"
            alt="Vector 3"
          />
          <img
            className="vector-5-GB5BqJ"
            data-id="69:9"
            src="ieta3_files/vector-5.png"
            anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-5.png"
            alt="Vector 5"
          />
          <div className="valorant-GB5BqJ valorant" data-id="69:10">
            VALORANT
          </div>
          <h1
            className="we-are-valorant-GB5BqJ inter-bold-white-315px"
            data-id="69:11"
          >
            WE ARE
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; VALORANT
          </h1>
          <div className="place-GB5BqJ inter-bold-white-315px" data-id="69:12">
            PLACE
          </div>
          <img
            className="union-GB5BqJ"
            data-id="69:13"
            src="ieta3_files/union@2x.png"
            anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/union@2x.png"
            alt="Union"
          />
          <img
            className="vector-7-GB5BqJ"
            data-id="69:17"
            src="ieta3_files/vector-7.png"
            anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-7.png"
            alt="Vector 7"
          />
          <div className="rectangle-1-GB5BqJ" data-id="69:18"></div>
          <div
            className="ieta-GB5BqJ ieta bigshotone-normal-white-32px"
            data-id="69:19"
          >
            IETA
          </div>
          <div
            className="text_label-GB5BqJ text_label encodesanssc-normal-white-14px"
            data-id="69:20"
          >
            ОБ ИГРЕ
          </div>
          <div
            className="text_label-p1Tl8b text_label encodesanssc-normal-white-14px"
            data-id="69:21"
          >
            НОВОСТИ
          </div>

          <div
            className="text_label-zylno4 text_label encodesanssc-normal-white-14px"
            data-id="69:22"
          >
            <button
              onClick={() => {
                myFunction();
              }}
              className="dropbtn"
            >
              СОЦИАЛЬНЫЕ СЕТИ
            </button>
            <div id="myDropdown" className="dropdown-content">
              <a href="https://vk.com/playvalorant">VK</a>
              <a href="https://discord.com/invite/valorantru">Discord</a>
              <a href="https://www.youtube.com/VALORANTru">Youtube</a>
              <a href="https://twitter.com/valorantru">Twitter</a>
            </div>
          </div>

          <div
            className="text_label-zylno4 text_label encodesanssc-normal-white-14px"
            style={{ marginLeft: 700, color: "white" }}
          >
            <Link style={{ color: "white" }} to="/login">
              ВОЙТИ
            </Link>
            &nbsp;|&nbsp;
            <Link style={{ color: "white" }} to="/signup">
              РЕГИСТРАЦИЯ
            </Link>
          </div>
        </header>
        <p
          className="x5-5-GB5BqJ encodesanssc-normal-white-14px"
          data-id="69:23"
        >
          Тактический шутер с матчами 5 на 5 и уникальными персонажами
        </p>
        <img
          className="vector-6-GB5BqJ"
          data-id="69:24"
          src="ieta3_files/vector-6@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-6@2x.png"
          alt="Vector 6"
        />
        <img
          className="icon-globe-GB5BqJ"
          data-id="69:25"
          src="ieta3_files/free-icon-world-5613960-1@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7bc6aef54ee96e70f649f/img/free-icon-world-5613960-1@2x.png"
          alt="icon-globe"
        />
        <img
          className="image-1-GB5BqJ"
          data-id="69:26"
          src="ieta3_files/image-1@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7bc6aef54ee96e70f649f/img/image-1@2x.png"
          alt="image 1"
        />
        <a href="https://www.youtube.com/watch?v=Mi6ZnVfObbU" target="_blank">
          <div className="rectangle-2-GB5BqJ" data-id="69:27"></div>
        </a>
        <a href="https://www.youtube.com/watch?v=SOhyUY0vk3Q" target="_blank">
          <img
            className="image-2-GB5BqJ"
            data-id="69:28"
            src="ieta3_files/image-2@2x.png"
            anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7bc6aef54ee96e70f649f/img/image-2@2x.png"
            alt="image 2"
          />
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PLMJ9cfx_WDdwrorcWCMarkvzvJlcJZsc-"
          target="_blank"
        >
          <img
            className="image-3-GB5BqJ"
            data-id="69:29"
            src="ieta3_files/image-3@2x.png"
            anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7bc6aef54ee96e70f649f/img/image-3@2x.png"
            alt="image 3"
          />
        </a>
        <div className="text_label-UeOxT1 text_label" data-id="69:30">
          ПОСЛЕДНИЕ НОВОСТИ
        </div>
        <p className="text_label-5pe0YR text_label" data-id="69:31">
          ПЕРЕЙТИ НА СТРАНИЦУ С НОВОСТЯМИ
        </p>
        <div className="x240123-GB5BqJ ptsans-bold-black-12px" data-id="69:32">
          24.01.23
        </div>
        <div className="x180123-GB5BqJ ptsans-bold-black-12px" data-id="69:33">
          18.01.23
        </div>
        <div className="x110123-GB5BqJ ptsans-bold-black-12px" data-id="69:34">
          11.01.23
        </div>
        <div
          className="text_label-qxT5Sh text_label ptsans-bold-sizzling-red-12px"
          data-id="69:35"
        >
          УГОЛОК РАЗРАБОТЧИКОВ
        </div>
        <div
          className="text_label-ptVG7a text_label ptsans-bold-sizzling-red-12px"
          data-id="69:36"
        >
          НОВОСТИ ОБ ИГРЕ
        </div>
        <div
          className="text_label-f4WGxr text_label ptsans-bold-sizzling-red-12px"
          data-id="69:37"
        >
          НОВОСТИ ОБ ИГРЕ
        </div>
        <div className="x-GB5BqJ x ptsans-bold-black-14px" data-id="69:38">
          .
        </div>
        <div className="x-p1Tl8b x ptsans-bold-black-14px" data-id="69:39">
          .
        </div>
        <div className="x-zylno4 x ptsans-bold-black-14px" data-id="69:40">
          .
        </div>
        <p
          className="x2023-valorant-GB5BqJ ptsans-bold-cape-cod-20px"
          data-id="69:41"
        >
          ГОД 2023&nbsp;&nbsp;/ / ДНЕВНИКИ РАЗРАБОТЧИКОВ <br />
          VALORANT
        </p>
        <p
          className="lotus-valorant-GB5BqJ ptsans-bold-cape-cod-20px"
          data-id="69:42"
        >
          ГОРОД ЦВЕТОВ - ОФИЦИАЛЬНЫЙ ТРЕЙЛЕР
          <br />
          КАРТЫ LOTUS&nbsp;&nbsp; / /&nbsp;&nbsp;VALORANT
        </p>
        <p
          className="vct-2022-GB5BqJ ptsans-bold-cape-cod-20px"
          data-id="69:43"
        >
          СЕРИЯ ДОКУМЕНТАЛЬНЫХ ФИЛЬМОВ О <br />
          VCT 2022 “СМЕЛЬЧАКИ”
        </p>
        <img
          className="sage2-1-GB5BqJ"
          data-id="69:44"
          src="ieta3_files/sage2-1.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7bc6aef54ee96e70f649f/img/sage2-1.png"
          alt="sage2 1"
        />
        <div className="rectangle-3-GB5BqJ" data-id="69:45"></div>
        <p className="x06-1-3-GB5BqJ" data-id="69:46">
          ЭПИЗОД&nbsp;&nbsp;06&nbsp;&nbsp; / /&nbsp;&nbsp;
          АКТ&nbsp;&nbsp;1&nbsp;&nbsp; /&nbsp;&nbsp; ГОД&nbsp;&nbsp;3
        </p>
        <p className="x13-spike-GB5BqJ" data-id="69:47">
          Создайте уникальный стиль и испытайте себя на международной
          соревновательной сцене. У вас есть по 13 раундов за атакующих и
          защитников. Используйте весь арсенал оружия и тактических наработок.
          Один раунд – одна жизнь. Если хотите выжить, думайте быстрее
          оппонента. Побеждайте противников в рейтинговых играх, играх без
          ранга, в бою насмерть и в режиме "Быстрая установка Spike".
        </p>
        <div className="text_label-vC3n6T text_label" data-id="69:48">
          СОТРИ ГРАНИЦЫ
        </div>
        <div className="x00-GB5BqJ" data-id="69:49">
          00.
        </div>
        <p className="x000-vlrt-mr0-c-swd-br4-GB5BqJ" data-id="69:50">
          ПР0Т0К0Л VLRT
          <br />
          MR0C - SWD - BR4
        </p>
        <img
          className="vector-8-GB5BqJ"
          data-id="69:51"
          src="ieta3_files/vector-8.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-8.png"
          alt="Vector 8"
        />
        <img
          className="vector-15-GB5BqJ"
          data-id="69:52"
          src="ieta3_files/vector-15.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-15.png"
          alt="Vector 15"
        />
        <img
          className="vector-11-GB5BqJ"
          data-id="69:53"
          src="ieta3_files/vector-11@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-11@2x.png"
          alt="Vector 11"
        />
        <img
          className="vector-16-GB5BqJ"
          data-id="69:54"
          src="ieta3_files/vector-16@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-16@2x.png"
          alt="Vector 16"
        />
        <div className="text_label-gwXAcZ text_label" data-id="69:55">
          ОТКРОВЕНИЕ
        </div>
        <div className="valorant-p1Tl8b valorant" data-id="69:56">
          МЫ - VALORANT
        </div>
        <div className="x1-GB5BqJ" data-id="69:57">
         <a href="file:///C:/Users/Acer/Desktop/project/untitled-html/index.html"> ОБЗОР АКТА 1</a>
        </div>
        <div
          className="text_label-zkNyFL text_label oswald-semi-bold-white-18px"
          data-id="69:58"
        >
          ОСНОВЫ ИГРЫ
        </div>
        <img
          className="vector-12-GB5BqJ"
          data-id="69:59"
          src="ieta3_files/vector-12@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-12@2x.png"
          alt="Vector 12"
        />
        <img
          className="vector-17-GB5BqJ"
          data-id="69:60"
          src="ieta3_files/vector-17@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-17@2x.png"
          alt="Vector 17"
        />
        <img
          className="vector-13-GB5BqJ"
          data-id="69:61"
          src="ieta3_files/vector-13@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-13@2x.png"
          alt="Vector 13"
        />
        <img
          className="vector-18-GB5BqJ"
          data-id="69:62"
          src="ieta3_files/vector-18@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-18@2x.png"
          alt="Vector 18"
        />
        <div className="rectangle-4-GB5BqJ" data-id="69:63"></div>
        <div className="rectangle-6-GB5BqJ" data-id="69:64"></div>
        <div className="rectangle-8-GB5BqJ" data-id="69:65"></div>
        <div className="rectangle-15-GB5BqJ" data-id="69:66"></div>
        <div className="rectangle-9-GB5BqJ" data-id="69:67"></div>
        <div className="rectangle-14-GB5BqJ" data-id="69:68"></div>
        <div className="rectangle-10-GB5BqJ" data-id="69:69"></div>
        <div className="rectangle-5-GB5BqJ" data-id="69:70"></div>
        <div className="rectangle-7-GB5BqJ" data-id="69:71"></div>
        <div className="rectangle-16-GB5BqJ" data-id="69:72"></div>
        <div className="rectangle-12-GB5BqJ" data-id="69:73"></div>
        <div className="rectangle-11-GB5BqJ" data-id="69:74"></div>
        <img
          className="omen-valorant-1-GB5BqJ"
          data-id="69:75"
          src="ieta3_files/omen-valorant-1.gif"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7bc6aef54ee96e70f649f/img/omen-valorant-1.gif"
          alt="omen-valorant 1"
        />
        <div className="rectangle-13-GB5BqJ" data-id="69:76"></div>
        <div
          className="text_label-LIuxO5 text_label ptsans-normal-white-15px"
          data-id="69:77"
        >
          Игровой процесс
        </div>
        <img
          className="vector-19-GB5BqJ"
          data-id="69:78"
          src="./ieta3_files/vector-19.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-19.png"
          alt="Vector 19"
        />
        <img
          className="mask-group-p1Tl8b mask-group"
          data-id="72:554"
          src="./ieta3_files/mask-group-3.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7c415b1f985b51a114776/img/mask-group-3.png"
          alt="Mask group"
        />
        <img
          className="vector-14-GB5BqJ"
          data-id="69:80"
          src="ieta3_files/vector-14.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-14.png"
          alt="Vector 14"
        />
        <img
          className="vector-20-GB5BqJ"
          data-id="69:81"
          src="ieta3_files/vector-20.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-20.png"
          alt="Vector 20"
        />
        <img
          className="vector-21-GB5BqJ"
          data-id="69:82"
          src="ieta3_files/vector-21@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-21@2x.png"
          alt="Vector 21"
        />
        <img
          className="vector-26-GB5BqJ"
          data-id="69:83"
          src="ieta3_files/vector-26@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-26@2x.png"
          alt="Vector 26"
        />
        <img
          className="mask-group-zylno4 mask-group"
          data-id="69:84"
          src="ieta3_files/mask-group-1.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7bc6aef54ee96e70f649f/img/mask-group-1.png"
          alt="Mask group"
        />
        <div className="text_label-R3GouU text_label" data-id="69:87">
          АГЕНТЫ
        </div>
        <img
          className="highres-screenshot000803-1-GB5BqJ"
          data-id="69:101"
          src="ieta3_files/highresscreenshot000803-1.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7bc6aef54ee96e70f649f/img/highresscreenshot000803-1.png"
          alt="HighresScreenshot000803 1"
        />
        <div className="text_label-GZEuN9 text_label" data-id="69:88">
          КАРТЫ
        </div>
        <p className="x-UeOxT1 x" data-id="69:89">
          КРЕАТИВНОСТЬ – ВАШЕ ГЛАВНОЕ ОРУЖИЕ.
        </p>
        <div className="text_label-J58tBN text_label" data-id="69:90">
          СРАЖАЙТЕСЬ ПО ВСЕМУ МИРУ
        </div>
        <p className="x-5pe0YR x ptsans-normal-white-15px" data-id="69:91">
          <br />
          Это не просто игра со стрельбой. Вам на выбор предлагаются агенты,
          вооруженные различными смертоносными умениями, с помощью которых любое
          оружие в ваших руках заиграет новыми красками. У каждого агента
          уникальный игровой процесс – двух одинаковых не найти.
        </p>
        <p className="x-qxT5Sh x" data-id="69:92">
          Каждая карта – площадка для демонстрации ваших нестандартных игровых
          решений. Командные стратегии, яркие моменты и клатчи – вот для чего
          созданы эти карты. Сделайте так, чтобы ваш стиль игры копировали
          многие годы
        </p>
        <img
          className="vector-22-GB5BqJ"
          data-id="69:93"
          src="ieta3_files/vector-22@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-22@2x.png"
          alt="Vector 22"
        />
        <img
          className="vector-23-GB5BqJ"
          data-id="69:94"
          src="ieta3_files/vector-23@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-23@2x.png"
          alt="Vector 23"
        />
        <img
          className="vector-24-GB5BqJ"
          data-id="69:95"
          src="ieta3_files/vector-24@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-24@2x.png"
          alt="Vector 24"
        />

        <div className="text_label-K2BqDd text_label" data-id="69:96">
          ПРОСМОТРЕТЬ ВСЕХ АГЕНТОВ
        </div>
        <img
          className="vector-27-GB5BqJ"
          data-id="69:97"
          src="ieta3_files/vector-27@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-27@2x.png"
          alt="Vector 27"
        />
        <img
          className="vector-28-GB5BqJ"
          data-id="69:98"
          src="ieta3_files/vector-28@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-28@2x.png"
          alt="Vector 28"
        />
        <img
          className="vector-29-GB5BqJ"
          data-id="69:99"
          src="ieta3_files/vector-29@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-29@2x.png"
          alt="Vector 29"
        />
        <div
          className="text_label-uG5Q2f text_label oswald-semi-bold-white-18px"
          data-id="69:100"
        >
          <button
           onClick={() => {
                settime();
              }}
              >
        ПРОСМОТРЕТЬ ВСЕ КАРТЫ
        </button>
        </div>
        <div className="rectangle-17-GB5BqJ" data-id="69:102"></div>
        <div className="rectangle-18-GB5BqJ" data-id="69:103"></div>
        <div
          className="ieta-p1Tl8b ieta bigshotone-normal-white-32px"
          data-id="69:104"
        >
          IETA
        </div>
        <img
          className="vector-25-GB5BqJ"
          data-id="69:105"
          src="ieta3_files/vector-25.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-25.png"
          alt="Vector 25"
        />
        <div className="valorant-zylno4 valorant" data-id="69:106">
          VALORANT
        </div>
        <p
          className="x2022-ieta-games-inc-GB5BqJ ptsanscaption-normal-fuscous-gray-13px"
          data-id="69:115"
        >
          {" "}
          2022 Ieta Games, Inc. Ieta Games, VALORANT и все связанные с ними
          логотипы являются торговыми знаками или
          зарегистрированными&nbsp;&nbsp;торговыми знаками, принадлежащими Ieta
          Games, Inc.
        </p>
        <div
          className="text_label-krEQPE text_label ptsanscaption-normal-fuscous-gray-13px"
          data-id="109:230"
        >
          Ⓒ
        </div>
        <img
          className="foot_copy_icon-1-GB5BqJ"
          data-id="69:116"
          src="ieta3_files/foot-copy-icon-1@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7bc6aef54ee96e70f649f/img/foot-copy-icon-1@2x.png"
          alt="foot_copy_icon 1"
        />
        <div className="ellipse-1-GB5BqJ" data-id="69:117"></div>
        <div className="ellipse-32-GB5BqJ" data-id="69:118"></div>
        <div className="ellipse-15-GB5BqJ" data-id="69:119"></div>
        <div className="ellipse-16-GB5BqJ" data-id="69:120"></div>
        <div className="ellipse-17-GB5BqJ" data-id="69:121"></div>
        <div className="ellipse-18-GB5BqJ" data-id="69:122"></div>
        <div className="ellipse-12-GB5BqJ" data-id="69:123"></div>
        <div className="ellipse-10-GB5BqJ" data-id="69:124"></div>
        <div className="ellipse-11-GB5BqJ" data-id="69:125"></div>
        <div className="ellipse-2-GB5BqJ" data-id="69:126"></div>
        <div className="ellipse-33-GB5BqJ" data-id="69:127"></div>
        <div className="ellipse-24-GB5BqJ" data-id="69:128"></div>
        <div className="ellipse-19-GB5BqJ" data-id="69:129"></div>
        <div className="ellipse-6-GB5BqJ" data-id="69:130"></div>
        <div className="ellipse-34-GB5BqJ" data-id="69:131"></div>
        <div className="ellipse-25-GB5BqJ" data-id="69:132"></div>
        <div className="ellipse-13-GB5BqJ" data-id="69:133"></div>
        <div className="ellipse-8-GB5BqJ" data-id="69:134"></div>
        <div className="ellipse-35-GB5BqJ" data-id="69:135"></div>
        <div className="ellipse-26-GB5BqJ" data-id="69:136"></div>
        <div className="ellipse-4-GB5BqJ" data-id="69:137"></div>
        <div className="ellipse-36-GB5BqJ" data-id="69:138"></div>
        <div className="ellipse-27-GB5BqJ" data-id="69:139"></div>
        <div className="ellipse-20-GB5BqJ" data-id="69:140"></div>
        <div className="ellipse-7-GB5BqJ" data-id="69:141"></div>
        <div className="ellipse-37-GB5BqJ" data-id="69:142"></div>
        <div className="ellipse-28-GB5BqJ" data-id="69:143"></div>
        <div className="ellipse-14-GB5BqJ" data-id="69:144"></div>
        <div className="ellipse-9-GB5BqJ" data-id="69:145"></div>
        <div className="ellipse-38-GB5BqJ" data-id="69:146"></div>
        <div className="ellipse-29-GB5BqJ" data-id="69:147"></div>
        <div className="ellipse-5-GB5BqJ" data-id="69:148"></div>
        <div className="ellipse-39-GB5BqJ" data-id="69:149"></div>
        <div className="ellipse-30-GB5BqJ" data-id="69:150"></div>
        <div className="ellipse-21-GB5BqJ" data-id="69:151"></div>
        <div className="ellipse-3-GB5BqJ" data-id="69:152"></div>
        <div className="ellipse-40-GB5BqJ" data-id="69:153"></div>
        <div className="ellipse-31-GB5BqJ" data-id="69:154"></div>
        <div className="ellipse-22-GB5BqJ" data-id="69:155"></div>
        <div className="ellipse-23-GB5BqJ" data-id="69:156"></div>
        <div className="rectangle-23-GB5BqJ" data-id="69:157"></div>
        <div className="rectangle-29-GB5BqJ" data-id="69:158"></div>
        <div className="rectangle-28-GB5BqJ" data-id="69:159"></div>
        <img
          className="vector-30-GB5BqJ"
          data-id="69:160"
          src="ieta3_files/vector-30@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-30@2x.png"
          alt="Vector 30"
        />
        <img
          className="vector-31-GB5BqJ"
          data-id="69:161"
          src="ieta3_files/vector-30@2x.png"
          anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7ea541d0f18684f77ddae/img/vector-30@2x.png"
          alt="Vector 31"
        />
        <div className="rectangle-24-GB5BqJ" data-id="69:162"></div>
        <div className="rectangle-26-GB5BqJ" data-id="69:163"></div>
        <div className="rectangle-27-GB5BqJ" data-id="69:164"></div>
        <a href="https://vk.com/playvalorant" target="_blank">
          <div className="rectangle-37-GB5BqJ" data-id="72:543"></div>
        </a>
        <a href="https://discord.com/invite/valorantru" target="_blank">
          <div className="rectangle-38-GB5BqJ" data-id="72:544"></div>
        </a>
        <a href="https://discord.com/invite/valorantru" target="_blank">
          <div className="rectangle-40-GB5BqJ" data-id="72:551"></div>
        </a>
        <a href="https://www.youtube.com/VALORANTru" target="_blank">
          <div className="rectangle-39-GB5BqJ" data-id="72:545"></div>
        </a>
        <a href="https://www.youtube.com/VALORANTru" target="_blank">
          <img
            className="icon-youtube-GB5BqJ"
            data-id="72:546"
            src="./ieta3_files/youtube@2x.png"
            anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7bc6aef54ee96e70f649f/img/youtube@2x.png"
            alt="icon-youtube"
          />
        </a>
        <a href="https://twitter.com/valorantru" target="_blank">
          <img
            className="icon-twitter-GB5BqJ"
            data-id="72:547"
            src="ieta3_files/twitter@2x.png"
            anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7bc6aef54ee96e70f649f/img/twitter@2x.png"
            alt="icon-twitter"
          />
        </a>
        <a href="https://discord.com/invite/valorantru" target="_blank">
          <img
            className="discord-GB5BqJ"
            data-id="72:548"
            src="ieta3_files/discord@2x.png"
            anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7bc6aef54ee96e70f649f/img/discord@2x.png"
            alt="discord"
          />
        </a>
        <a href="https://vk.com/playvalorant" target="_blank">
          <img
            className="free-icon-vk-3670354-GB5BqJ"
            data-id="72:549"
            src="ieta3_files/free-icon-vk-3670354@2x.png"
            anima-src="https://cdn.animaapp.com/projects/63d7bc2bd033cf39f5f4c202/releases/63d7bc6aef54ee96e70f649f/img/free-icon-vk-3670354@2x.png"
            alt="free-icon-vk-3670354"
          />
        </a>
      </div>
    </body>
  );
}
