import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export const getUpdatedList = (data, config) => {
  const userIndex = data.findIndex((usr) => usr.id === config.id);
  let filteredItems = [...data];
  filteredItems[userIndex]["name"] = config.name;
  filteredItems[userIndex]["email"] = config.email;
  filteredItems[userIndex]["phone"] = config.phone;
  return filteredItems;
};

export const getMaxId = datum => {
  return datum.reduce(
    (max, data) => (data.id > max ? data.id : max),
    datum[0].id) + 1;
}

export const checkUserExists = (data, field, value) => {
  return data.findIndex(user => user[field] === value) > -1;
}

