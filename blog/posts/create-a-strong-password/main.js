$(() => {
  $(".accordian").on("click", ".accordian-title", function () {
    $(this).toggleClass("active").next().slideToggle(500);
  });
})
