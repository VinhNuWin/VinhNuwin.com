import { motion } from "framer-motion";
import dv from "./assets/dv.png";
import tic from "./assets/TicTacToe.png";
import sigma from "./assets/banner.png";

export const Projects = () => {
  return (
    <section class="section-6">
      <div className="header">
        <motion.div id="bubble">
          <h2>Projects</h2>
        </motion.div>
      </div>
      <div class="row">
        <figure class="figure">
          <img src={dv} />
          <figcaption>
            <h3>Documented Voices</h3>
            <p>
              "But suppose we were to teach creationism. What would be the
              content of the teaching? Merely that a creatore formed the
              universe and all specias of life ready-made? Nothing? No details?"
            </p>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure class="figure">
          <img src={tic} />
          <figcaption>
            <h3>Tic Tac Toe</h3>
            <p>
              "I, for one, bet on science as helping us. I have yet to see how
              it fundamentally endagers us, even with the H-bomb lurking about.
              Science has given us more lives than it has taken; we must
              remember that"
            </p>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure class="figure">
          <img src={sigma} />
          <figcaption>
            <h3>Sigma Creative</h3>
            <p>
              "The moon, by her comparative proximity, and the constantly
              varying appearances produced by her several phases, has always
              occupied a considerable share of the attention of the inhabitants
              of Earth."
            </p>
          </figcaption>
          <a href="#"></a>
        </figure>
      </div>
    </section>
  );
};
