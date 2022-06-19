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
        const scale = 4;
        ctx.drawImage(image, e.offsetX - 352 / scale / 2, e.offsetY - 250 / scale, 250 / scale, 352 / scale);
        count++;
        counter.textContent = count;
        if (count === 20) {
            document.getElementsByClassName("tree-desc")[0].textContent = "Good girl! Just say ok to planting trees!💦💦💦";
        }
    }
}
