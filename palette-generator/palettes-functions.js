const buttonGenerate = document.querySelector("#btnGenerate");
buttonGenerate.addEventListener("click", generate);

function generate(){
    const sectionHide = document.querySelector("#palettes-divs");
    sectionHide.innerHTML = "";

    const palettes = [
        [
            "#fcd8af",
            "#fec49b",
            "#fe9b91",
            "#fd6084",
            "#045071"
        ],
        [
            "#4d3b36",
            "#eb613b",
            "#f98f6f",
            "#c1d9cd",
            "#f7eadc"
        ],
        [
            "#eff3cd",
            "#b2d5ba",
            "#61ada0",
            "#248f8d",
            "#605063"
        ],
        [
            "#0ab4f7",
            "#08a3e4",
            "#0591d1",
            "#0380be",
            "#006eab"
        ]
    ]
    const color = Math.floor(Math.random() * palettes.length);

    var div = document.createElement('div');
    div.classList.add("color-palette");

    for(var i=0; i < 5; i++){
        div.style.backgroundColor = palettes[color][i];
        div.textContent = palettes[color][i];
        sectionHide.append(div);
        sectionHide.innerHTML += "<br/>";
    }

}