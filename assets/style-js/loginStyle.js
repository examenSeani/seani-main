import { makeStyles } from "@material-ui/core/styles";

export const useStyleLogin = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "#FB5D0E !important",
    },
    media: {
      height: "70%",
      paddingTop: "58.25%", // 16:9
      paddingBottom: "12px",
    },
  }))