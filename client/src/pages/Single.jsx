import React from "react";
import iconEdit from "../img/edit.png";
import iconDelete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://www.imgcorporations.com/images/bg-img.jpg" alt="" />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div className="info">
            <p className="name">Olay</p>
            <p className="timePost">Posted 2 day</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={iconEdit} alt="" />
            </Link>
            <img src={iconDelete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          sit?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab libero
          provident voluptate, nemo non perspiciatis totam, a dolor cum
          voluptatibus delectus voluptatem officia iure eos ullam animi? Ullam,
          earum a!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab libero
          provident voluptate, nemo non perspiciatis totam, a dolor cum
          voluptatibus delectus voluptatem officia iure eos ullam animi? Ullam,
          earum a!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          repudiandae accusamus voluptatem officiis exercitationem voluptatum
          tempora consequatur quae nesciunt perferendis sunt et quidem, id
          possimus modi expedita, eveniet iusto molestias tempore. Sunt,
          excepturi voluptate. Illum maiores, quis quia fuga id sapiente quasi
          alias ab ipsum neque possimus, repellendus eum corporis?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          perferendis minus nulla totam doloribus dolores nisi reprehenderit
          eaque ut atque quidem vel neque vitae dicta consectetur odio omnis ab
          vero repellendus placeat commodi recusandae, molestiae, officia odit.
          Ab, porro? Dicta voluptatem quaerat ad porro aut, soluta nam, dolores
          veniam exercitationem totam ipsa culpa libero pariatur quas ipsam
          delectus maiores necessitatibus distinctio accusantium perspiciatis
          numquam! Exercitationem nemo inventore aut, quidem reiciendis illum
          necessitatibus sit eius et, iste sequi expedita enim vitae officiis
          sint velit facilis rem voluptatum rerum. Ex eum error iure accusamus,
          nostrum enim tempora quidem, eos quasi suscipit facilis.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
