import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";



const DUMMY_PLACES = [

  // this is for the first users
  {
    id: "p1",
    title: "Emp. state buildingssss",
    description: "One of the most famouse sky scrapers in the world",
    imageUrl:
      "https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/small_feature/public/2019-10/home_banner-min.jpg?itok=uZt-03Vw",
    address: "20 w 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1"
  },

  // this is for the second users
  {
    id: 'p2',
    title: 'Emp. state building',
    description: 'One of the most famouse sky scrapers in the world',
    imageUrl:
      'https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/small_feature/public/2019-10/home_banner-min.jpg?itok=uZt-03Vw',
    address: '20 w 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u2'
  },

  // // this is for the 3 users

  {
    id: 'p3',
    title: 'Emperor Pinguin. state building',
    description: 'One of the most famouse sky scrapers in the world',
    imageUrl:
      'https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/small_feature/public/2019-10/home_banner-min.jpg?itok=uZt-03Vw',
    address: '20 w 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u3'
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((job) => job.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
