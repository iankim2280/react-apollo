import React from "react";
import {useQuery, gql} from "@apollo/client";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

export default () => {
  // const {loading, data} = useQuery(GET_MOVIES);
  // if (loading) {
  //   return "loading...";
  // }
  // if (data && data.movies) {
  //   return data.movies.map((m) => <h1>{m.id}</h1>);
  // }
  const {loading, error} = useQuery(GET_MOVIES);
  console.log(loading, error);
  return <h1>home</h1>;
};
