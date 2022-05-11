import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(25),
      height: theme.spacing(15),
      padding: 10,
      background: '#6beefa',
    },
  },
}));

export default function ProductInfo({ product }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        {Object.keys(product)
          .filter(
            (item) =>
              item === "needing_repair" ||
              item === "type" ||
              item === "price" ||
              item === "mileage" ||
              item === "availability" ||
              item === "durability" ||
              item === "minimum_rent_period"
          )
          .map((item) => {
            return (
              <p style={{ margin: 0, padding: 0, fontSize: 12 }} key={item}>
                <b>{item}</b> : {String(product[item])}
              </p>
            );
          })}
      </Paper>
    </div>
  );
}
