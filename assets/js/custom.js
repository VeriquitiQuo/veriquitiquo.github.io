window.onload = () => {
    const canvas = document.getElementById("trees");
    const ctx = canvas.getContext("2d");
    const image = document.getElementById("source");
    const counter = document.getElementById("counter");
    let count = 0;

    canvas.width = document.body.clientWidth - 24 * 2;
    canvas.height = window.innerHeight * .8;

    canvas.addEventListener("click", plantTree);

    function plantTree(e) {
        let scale = 4 + (Math.random() - 0.5) * 1.5;
        count++;
        switch (count) {
            case 20:
            case 72:
                document.getElementsByClassName("tree-desc")[0].textContent = "Good girl! Just say ok to planting trees!💦💦💦";
                break;
            case 69:
                document.getElementsByClassName("tree-desc")[0].textContent = "NICEEEE!!!!";
                scale = 2;
        }
        scale = count % 100 ? scale : 2.5;
        ctx.drawImage(image, e.offsetX - 352 / scale / 2, e.offsetY - 250 / scale, 250 / scale, 352 / scale);
        counter.textContent = count;
    }
}
