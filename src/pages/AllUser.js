
import { useEffect, useState } from "react";

function AllUser() {
    const [userList, setuserList] = useState([]);

    useEffect(() => {
        getAllUserAction();
    }, []);

    const getAllUserAction = async () => {
        let url = `http://localhost:4000/finduser`;
        let res = await fetch(url);
        let list = await res.json();

        setuserList([...list]);
    };

    return (
      <>
        {userList.map((item) => (
          <>
            <div>
              <p>
                Name : {item.name}
                <br />
                Email : {item.email}
                <br />
                Mobile : {item.mobile}
              </p>
              <hr />
            </div>
          </>
        ))}
      </>
    );
}

export default AllUser;
