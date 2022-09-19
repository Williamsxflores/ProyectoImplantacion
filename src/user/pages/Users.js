import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Susana Robles",
      image:
        "https://scontent.ftij1-2.fna.fbcdn.net/v/t39.30808-6/271882250_3746439058914109_2101917563154735118_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEEqDII-S_MY0qUVC5rGKd26pc64ZHPBg3qlzrhkc8GDRt-pDRjpU-Zy7k8wWWBNBulDUCEEoXbXlGZuP5mjG_j&_nc_ohc=HmKVyPiHjwQAX848REk&_nc_ht=scontent.ftij1-2.fna&oh=00_AT-q35qyXjI6P3Vcu3OmN2HjxFxDYRLg6vIHww3EZvwc_A&oe=628B5807",
      jobs: 3,
    },
    {
      id: "u2",
      name: "Flores Williams",
      image:
        "https://scontent.ftij1-1.fna.fbcdn.net/v/t39.30808-6/278468887_4933855853350614_2423286521976304197_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGjetJKZd_0QdjiIpZLWdfv_VuqAwD31t_9W6oDAPfW32fJmeW_rl6DRAesJp691f6DbUZzg4ZRAPKq5Ff-AJ4w&_nc_ohc=DfdHBxuWIN0AX8rBpmH&_nc_oc=AQkPqnkFWnvr7HYRJ_5mgS8jzcsnB0CY_rUTRGL1woQaVe0-F995Y3WK0-QVfkluR2w&tn=V4IaLP7ZtlBicgij&_nc_ht=scontent.ftij1-1.fna&oh=00_AT_XrRPruerwrgtTutVDc6ZgqwKN6ySGNGbfnjao3YxxJA&oe=628F30AF",
      jobs: 3,
    },
    {
      id: "u3",
      name: "Susana Robles",
      image:
        "https://scontent.ftij1-1.fna.fbcdn.net/v/t1.15752-9/274971053_504832561179407_831242951934968731_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFpbpz8W4FxKxLYAt0o0Y3dxysGwnMYJkDHKwbCcxgmQFr3r-i4cOuhoyW5yIuwCkkEAXJpE6mejylP9HdT402i&_nc_ohc=6oIediE2sOUAX8ipfcm&_nc_ht=scontent.ftij1-1.fna&oh=03_AVLODoz2ZmXnAf41zWrS4wKXxxQEW6jr-2Ng5b37bSbKcg&oe=62AF7D0D",
      jobs: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
