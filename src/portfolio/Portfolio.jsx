import React from "react";
import myImg from "../img/profile.jpg";

const Portfolio = ({ toggle }) => {
  return (
    <div className={toggle ? "bg-[#403d39] text-white p-20" : "p-20"}>
      <h1>About Me</h1>
      <p>Description about me...</p>
      <img src={myImg} width={200} alt="Ivonna profile" />
      <h2 className="mt-4">My Skills</h2>
      <p>
        Lorem ipsum dolor sit amet. Et mollitia nulla est placeat laudantium ut
        debitis quam eos harum velit aut quas voluptatem sit nesciunt pariatur
        sit asperiores saepe. Et sunt quis et quod consequatur aut possimus
        voluptas sed iusto mollitia id reprehenderit asperiores! Et voluptatem
        totam sit exercitationem placeat ut perspiciatis repellendus hic modi
        nobis ut vero assumenda. Sit rerum galisum est necessitatibus quia et
        galisum neque eos laudantium molestias. In sequi rerum cum laboriosam
        voluptates qui magni aliquam eos iste veniam et omnis sint. In sint
        galisum ab perferendis recusandae sed odio voluptatem 33 harum impedit
        eum voluptas fugiat. Qui harum accusantium sed molestiae dolores et
        quisquam quisquam. Aut maiores Quis qui quasi sunt 33 modi autem id
        commodi galisum et cupiditate ipsa ad quas tempora.{" "}
      </p>
   
      <p>
        Et earum impedit quo amet commodi rem omnis quae sit eligendi
        necessitatibus est consequuntur enim ut magni quam hic dolore similique!
        In fugit nihil quo vitae accusantium ea officia dicta sit tenetur
        obcaecati non cumque fuga ut ipsam commodi eos harum voluptate. A saepe
        quisquam et quos quasi et nihil molestiae est nesciunt commodi! Ea
        dolorem esse aut earum tempore qui dolorem voluptatibus. Qui quibusdam
        cupiditate ab quia unde sit repellat corporis ea deleniti distinctio et
        cupiditate voluptate ab quia labore in autem quia. Ea cumque animi non
        voluptate molestias ut nemo maiores? Ea iure optio et quae expedita aut
        nemo dolores est minima eveniet in molestias voluptatibus qui tenetur
        reprehenderit est labore quia. Qui facilis excepturi eos consequatur
        illo 33 sint quidem eos ipsa impedit in velit asperiores eos odio
        voluptatem est alias ducimus.{" "}
      </p>
    </div>
  );
};

export default Portfolio;
