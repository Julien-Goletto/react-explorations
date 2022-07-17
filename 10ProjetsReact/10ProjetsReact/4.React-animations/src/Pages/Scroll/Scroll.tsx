import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";
import "./Scroll.css";

export default function Scroll() {
  const [toggleTxt, setToggleTxt] = useState(false);
  const animation = useSpring({
    opacity: toggleTxt? 1 : 0,
    transform: toggleTxt ? "translateX(0)" : "translateX(-50%)",
  })
  return (
    <div>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        voluptatibus, hic doloribus at rem consequuntur facere similique
        quisquam odit libero quae, pariatur mollitia dolor rerum consequatur
        voluptatem dolores odio sed! Quas esse quidem eveniet vitae, totam nemo
        perspiciatis ipsam nostrum non. Incidunt ad facere velit unde
        voluptates. Numquam autem saepe id ad, a voluptas eum aperiam,
        voluptatum praesentium accusamus nisi molestiae aspernatur nobis ea
        odit? Voluptatem, dicta recusandae. Necessitatibus deleniti sed nesciunt
        odio iure dolorem, aut nulla aspernatur eaque ducimus dolor quam ratione
        amet omnis. Rerum quaerat omnis voluptatibus asperiores, dicta dolorum.
        Dolor amet, dignissimos quibusdam odit voluptatum sed quae molestiae nam
        voluptate nemo. Maiores, recusandae. Sunt quidem dolorem perspiciatis
        ratione accusantium, iure voluptatibus aut itaque saepe aliquid
        consequatur beatae quod dolore in necessitatibus fugit hic tempora
        accusamus, magni minus assumenda illum non! Culpa eaque officia totam
        ipsam, nesciunt sapiente veritatis, non aperiam molestias consequatur
        dignissimos sint! Repellendus magni, pariatur quibusdam, praesentium
        molestiae veniam maxime cupiditate qui fuga ducimus sint nostrum id nam
        eius nisi alias nulla enim consequatur assumenda obcaecati modi
        architecto soluta perferendis? Cumque facere nobis provident modi
        veritatis illum nemo similique, necessitatibus veniam dolores fugiat
        officia! Ullam ea cum adipisci, quae nihil neque illum ducimus nisi.
        Exercitationem.
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        voluptatibus, hic doloribus at rem consequuntur facere similique
        quisquam odit libero quae, pariatur mollitia dolor rerum consequatur
        voluptatem dolores odio sed! Quas esse quidem eveniet vitae, totam nemo
        perspiciatis ipsam nostrum non. Incidunt ad facere velit unde
        voluptates. Numquam autem saepe id ad, a voluptas eum aperiam,
        voluptatum praesentium accusamus nisi molestiae aspernatur nobis ea
        odit? Voluptatem, dicta recusandae. Necessitatibus deleniti sed nesciunt
        odio iure dolorem, aut nulla aspernatur eaque ducimus dolor quam ratione
        amet omnis. Rerum quaerat omnis voluptatibus asperiores, dicta dolorum.
        Dolor amet, dignissimos quibusdam odit voluptatum sed quae molestiae nam
        voluptate nemo. Maiores, recusandae. Sunt quidem dolorem perspiciatis
        ratione accusantium, iure voluptatibus aut itaque saepe aliquid
        consequatur beatae quod dolore in necessitatibus fugit hic tempora
        accusamus, magni minus assumenda illum non! Culpa eaque officia totam
        ipsam, nesciunt sapiente veritatis, non aperiam molestias consequatur
        dignissimos sint! Repellendus magni, pariatur quibusdam, praesentium
        molestiae veniam maxime cupiditate qui fuga ducimus sint nostrum id nam
        eius nisi alias nulla enim consequatur assumenda obcaecati modi
        architecto soluta perferendis? Cumque facere nobis provident modi
        veritatis illum nemo similique, necessitatibus veniam dolores fugiat
        officia! Ullam ea cum adipisci, quae nihil neque illum ducimus nisi.
        Exercitationem.
      </p>
      < Waypoint
      bottomOffset="30%"
        onEnter={() => (!toggleTxt) && setToggleTxt(true)}
      />
      < animated.div style={animation} className="cta-section">
      <h2>N'en râtez pas une miette !</h2>
      <form>
        <label htmlFor="email">Inscrivez-vous à la newsletter</label>
        <input type="email" id="email" />
      </form>
      </animated.div>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        voluptatibus, hic doloribus at rem consequuntur facere similique
        quisquam odit libero quae, pariatur mollitia dolor rerum consequatur
        voluptatem dolores odio sed! Quas esse quidem eveniet vitae, totam nemo
        perspiciatis ipsam nostrum non. Incidunt ad facere velit unde
        voluptates. Numquam autem saepe id ad, a voluptas eum aperiam,
        voluptatum praesentium accusamus nisi molestiae aspernatur nobis ea
        odit? Voluptatem, dicta recusandae. Necessitatibus deleniti sed nesciunt
        odio iure dolorem, aut nulla aspernatur eaque ducimus dolor quam ratione
        amet omnis. Rerum quaerat omnis voluptatibus asperiores, dicta dolorum.
        Dolor amet, dignissimos quibusdam odit voluptatum sed quae molestiae nam
        voluptate nemo. Maiores, recusandae. Sunt quidem dolorem perspiciatis
        ratione accusantium, iure voluptatibus aut itaque saepe aliquid
        consequatur beatae quod dolore in necessitatibus fugit hic tempora
        accusamus, magni minus assumenda illum non! Culpa eaque officia totam
        ipsam, nesciunt sapiente veritatis, non aperiam molestias consequatur
        dignissimos sint! Repellendus magni, pariatur quibusdam, praesentium
        molestiae veniam maxime cupiditate qui fuga ducimus sint nostrum id nam
        eius nisi alias nulla enim consequatur assumenda obcaecati modi
        architecto soluta perferendis? Cumque facere nobis provident modi
        veritatis illum nemo similique, necessitatibus veniam dolores fugiat
        officia! Ullam ea cum adipisci, quae nihil neque illum ducimus nisi.
        Exercitationem.
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        voluptatibus, hic doloribus at rem consequuntur facere similique
        quisquam odit libero quae, pariatur mollitia dolor rerum consequatur
        voluptatem dolores odio sed! Quas esse quidem eveniet vitae, totam nemo
        perspiciatis ipsam nostrum non. Incidunt ad facere velit unde
        voluptates. Numquam autem saepe id ad, a voluptas eum aperiam,
        voluptatum praesentium accusamus nisi molestiae aspernatur nobis ea
        odit? Voluptatem, dicta recusandae. Necessitatibus deleniti sed nesciunt
        odio iure dolorem, aut nulla aspernatur eaque ducimus dolor quam ratione
        amet omnis. Rerum quaerat omnis voluptatibus asperiores, dicta dolorum.
        Dolor amet, dignissimos quibusdam odit voluptatum sed quae molestiae nam
        voluptate nemo. Maiores, recusandae. Sunt quidem dolorem perspiciatis
        ratione accusantium, iure voluptatibus aut itaque saepe aliquid
        consequatur beatae quod dolore in necessitatibus fugit hic tempora
        accusamus, magni minus assumenda illum non! Culpa eaque officia totam
        ipsam, nesciunt sapiente veritatis, non aperiam molestias consequatur
        dignissimos sint! Repellendus magni, pariatur quibusdam, praesentium
        molestiae veniam maxime cupiditate qui fuga ducimus sint nostrum id nam
        eius nisi alias nulla enim consequatur assumenda obcaecati modi
        architecto soluta perferendis? Cumque facere nobis provident modi
        veritatis illum nemo similique, necessitatibus veniam dolores fugiat
        officia! Ullam ea cum adipisci, quae nihil neque illum ducimus nisi.
        Exercitationem.
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        voluptatibus, hic doloribus at rem consequuntur facere similique
        quisquam odit libero quae, pariatur mollitia dolor rerum consequatur
        voluptatem dolores odio sed! Quas esse quidem eveniet vitae, totam nemo
        perspiciatis ipsam nostrum non. Incidunt ad facere velit unde
        voluptates. Numquam autem saepe id ad, a voluptas eum aperiam,
        voluptatum praesentium accusamus nisi molestiae aspernatur nobis ea
        odit? Voluptatem, dicta recusandae. Necessitatibus deleniti sed nesciunt
        odio iure dolorem, aut nulla aspernatur eaque ducimus dolor quam ratione
        amet omnis. Rerum quaerat omnis voluptatibus asperiores, dicta dolorum.
        Dolor amet, dignissimos quibusdam odit voluptatum sed quae molestiae nam
        voluptate nemo. Maiores, recusandae. Sunt quidem dolorem perspiciatis
        ratione accusantium, iure voluptatibus aut itaque saepe aliquid
        consequatur beatae quod dolore in necessitatibus fugit hic tempora
        accusamus, magni minus assumenda illum non! Culpa eaque officia totam
        ipsam, nesciunt sapiente veritatis, non aperiam molestias consequatur
        dignissimos sint! Repellendus magni, pariatur quibusdam, praesentium
        molestiae veniam maxime cupiditate qui fuga ducimus sint nostrum id nam
        eius nisi alias nulla enim consequatur assumenda obcaecati modi
        architecto soluta perferendis? Cumque facere nobis provident modi
        veritatis illum nemo similique, necessitatibus veniam dolores fugiat
        officia! Ullam ea cum adipisci, quae nihil neque illum ducimus nisi.
        Exercitationem.
      </p>
    </div>
  );
}
