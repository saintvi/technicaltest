const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const indexs = $$(".tabindex");
const tabActive = $(".tab-item.active");

tabs.forEach((tab, index) => {
    const pane = panes[index];
    const tabindex = indexs[index];
    tab.onclick = function () {
        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");

        this.classList.add("active");
        pane.classList.add("active");
    };
    tabindex.onclick = function () {
        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");

        tab.classList.add("active");
        pane.classList.add("active");
    };
});
function getCompleted() {
    var x = document.getElementById("input").value;
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${x}`)
        .then((res) => res.json())
        .then((data) => {
            let hoanthanh = 0;
            let chuaht = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].completed == true) {
                    hoanthanh = hoanthanh + 1;
                } else {
                    chuaht = chuaht + 1;
                }
            }

            document.getElementById(
                "output"
            ).innerHTML = `Tổng số task đã <strong>hoàn thành</strong> của userId ${x} là <strong>${hoanthanh}</strong> và <strong>chưa hoàn thành</strong> là <strong>${chuaht}</strong>`;
        });
}
