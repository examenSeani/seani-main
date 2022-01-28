import { makeStyles } from "@material-ui/core/styles";

export const useStylesLengua = makeStyles((theme) => ({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
      },
    },
  }));
  