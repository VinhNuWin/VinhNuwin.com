export const Apple = () => {
  //   window.addEventListener("scroll", function (e) {
  //     if (this.window.scrollY > 500) {
  //       console.log(`You have scrolled ${scrollY} pixels`);
  //       console.log(this.window.getElementById("apple"));
  //     }
  //   });

  //   var apple = document.getElementById("apple");
  //   window.addEventListener("scroll", function (e) {
  //     var scroll =
  //       window.pageYOffset ||
  //       document.documentElement.scrollTop ||
  //       document.body.scrollTop ||
  //       0;
  //     apple.style.opacity = Math.max(0, Math.min(1, -scroll / 400 + 2));
  //   });

  window.addEventListener("scroll", function () {
    var currScrollPos2 =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (currScrollPos2 > 50) {
      console.log;
      document.getElementById("apple").style.opacity =
        -currScrollPos2 / 800 + 2;
    }
  });

  return (
    <div id="apple">
      <h2 id="">Apple</h2>
    </div>
  );
};
