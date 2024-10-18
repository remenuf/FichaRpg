const style = /*css*/ `
.ficha-g,
.ficha-g * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  --main-color: #5382a1;
  --secondary-color: #0c0c0c;
}

.ficha-g br {
  display: none;
}

.ficha-g {
  display: block;
  position: relative;
  margin: auto;
  width: 600px;
  height: auto;
  min-height: 500px;
  background-color: #171b22;
  border-radius: 10px;
  overflow: hidden;
  border: double var(--main-color) 8px;
  font-family: "EB Garamond", serif;
  color: #fff;
  line-height: normal;
}

.ficha-g header {
  width: 100%;
  height: 250px;
  background-image: var(--capa);
  background-size: cover;
  background-position: center 15%;
  position: relative;
}

.ficha-g header h1 {
  display: inline-block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  border-top: double var(--main-color) 8px;
  border-bottom: double var(--main-color) 8px;
  color: white;
  padding: 0 1rem;
  font-family: "Pirata One", system-ui;
  text-align: center;
  font-size: 2rem;
  line-height: normal;
  margin: 0;
}

.ficha-g header h1 span {
  font-family: "UnifrakturMaguntia", cursive;
  font-size: 3rem;
}

.perfil,
.perfil-2 {
  display: flex;
  flex-flow: row nowrap;
  padding: 20px !important;
  gap: 15px;
}

.perfil-2 {
  flex-flow: row-reverse nowrap;
  padding-bottom: 10px !important;
}

.portrait {
  width: 250px;
  height: 375px;
  height: auto;
  background-color: var(--secondary-color);
  background-image: var(--portrait);
  background-size: cover;
  background-position: center;
  position: relative;
  flex: 1 0 auto;
}

.portrait div {
  filter: hue-rotate(176deg) saturate(0.6) brightness(0.9);
  width: 108%;
  height: 106%;
  display: flex;
  flex-flow: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.portrait div img {
  width: 100%;
  position: relative;
}

.portrait div img:nth-child(1) {
  top: 1px;
}

.portrait div img:nth-child(2) {
  flex: 1;
}

.portrait div img:nth-child(3) {
  bottom: 1px;
}

.f-info {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  gap: 10px;
}

.f-info div {
  width: auto;
  height: 45px;
  display: inline-block;
  border: solid 2px var(--main-color);
  padding: 8px;
  border-radius: 5px;
  background-color: #0b0c0f;
  color: #fff;
  font-size: 18px;
  flex: 1 1 auto;
  overflow: hidden;
  white-space: nowrap;
}

.f-info hr {
  display: inline;
  margin: 0px 8px;
  border: solid 1px #fff;
}

.perfil .f-info div:nth-child(1) {
  flex: 2 0 100%;
  text-align: center;
}

.perfil-2 .f-info {
  flex: 1;
}

.f-menu {
  margin: 10px auto;
  width: calc(100% - 40px);
  height: 50px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  border: solid 2px var(--main-color);
  border-radius: 5px;
  overflow: hidden;
  background-color: var(--main-color);
}

.f-button {
  width: 33%;
  height: 100%;
  background-color: var(--secondary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: white;
  font-weight: 900;
  font-size: 20px;

  cursor: pointer;
}

.f-button.active,
.f-button:hover {
  background-color: transparent;
  box-shadow: inset 0px 0px 8px 5px var(--secondary-color);
  color: var(--secondary-color);
}

.f-tab {
  margin: 10px auto 20px auto;
  width: calc(100% - 40px);
  min-height: 300px;
  display: none;
  border: solid 2px var(--main-color);
  padding: 8px;
  border-radius: 5px;
  background-color: #0b0c0f;
  color: #fff;
  white-space: pre-wrap;
  font-size: 16px;
}

.f-tab.active {
  display: block;
}

.f-tab br{display: inline;}

.f-level {
  width: 100px;
  padding: 10px;
  background-image: url(https://remenuf.github.io/FichaRpg/Template/lvlFrame.svg);
  background-position: top center;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 65px;
  position: relative;
  background-repeat: no-repeat;
}

.f-level p {
  position: relative;
  bottom: 10px;
}

.f-level::after {
  content: "Nível";
  display: block;
  position: absolute;
  bottom: 19px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
}

.f-d {
  border-color: #5382a1;
  width: 93%;
  margin: auto;
}

.ficha-g p {
    font-family: inherit;
    font-size: inherit;
    margin-bottom: unset;
    line-height: normal;
}

dl.codebox {
    background-color: #171b22;
    border-radius: 5px;
}
`;

function menuButtons(x) {
  let flag = false;
  if (x.classList.contains("active")) {
    flag = true;
  }

  let remove = x.parentElement.querySelector(".active");
  if (remove) {
    remove.classList.toggle("active");
    remove = remove.innerText.toLowerCase();
    remove = document.querySelector(`#${remove}`);
    if (remove) remove.classList.toggle("active");
  }

  if (flag) {
    return;
  }

  x.classList.toggle("active");
  let target = x.querySelector("p").innerText.toLowerCase();
  target = document.querySelector(`#${target}`);
  if (target) {
    target.classList.toggle("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let ficha = document.querySelector(".ficha-g");
  if (ficha) {
    ficha.innerHTML = ficha.innerHTML;

    document.querySelector("head").innerHTML += `<style>${style}</style>`;
    document.querySelectorAll(".f-button").forEach((x) => {
      x.addEventListener("click", () => menuButtons(x));
    });
  }
});
