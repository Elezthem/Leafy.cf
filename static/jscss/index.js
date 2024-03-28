function StatusOnl() {
    document.getElementById("statistic").style.display = "none";
    document.getElementById("status").style.display = "flex";

    document.getElementById("navonl").classList.add("active");
    document.getElementById("navstat").classList.remove("active");
}
function StatusStat() {
    document.getElementById("statistic").style.display = "flex";
    document.getElementById("status").style.display = "none";

    document.getElementById("navonl").classList.remove("active");
    document.getElementById("navstat").classList.add("active");
}