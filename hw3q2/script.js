let maxDigMask = document.querySelector("#max12digits");
maxDigMask.addEventListener("input", () => {
    maxDigMask.value = maxDigMask.value.replace(/\D/g, "").substring(0, 12);
});
let dollarMask = document.querySelector("#dollar");
dollar.addEventListener("input", () => {
    dollar.value = dollar.value.replace(/\D/g, "") + " $";
});
