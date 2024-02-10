import { menusFetchSuccess, menusDetailSuccess } from "./actionCreator";

const BASE_URL = "http://localhost:3001";
export function fetchMenu() {
  return (dispatch) => {
    fetch(`${BASE_URL}/public/items`, {
      method: "get",
    })
      .then((res) => {
        if (!res.ok) {
          throw res.text();
        }

        return res.json();
      })
      .then((data) => dispatch(menusFetchSuccess(data)))
      .catch((err) => console.log(err));
  };
}

export const detailMenu = (id) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/public/items/${id}`, {
      method: "get",
    })
      .then((res) => {
        if (!res.ok) {
          throw res.text();
        }

        return res.json();
      })
      .then((data) => {
        dispatch(menusDetailSuccess(data));
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };
};
