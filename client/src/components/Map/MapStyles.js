import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  paper: {
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
    width:"10vh",
    height:"10vh",
    borderRadius:"10px",
    boxShadow:" 0 0 11px #6980f379",
    "&:hover": {color:"white", backgroundColor: "#92a5ef", boxShadow:"0 3px 5px 2px rgba(237, 234, 234, 0.3)"}
  },
  mapContainer: {
    height: "75vh",
    width: "100%",
  },
  markerContainer: {
    position: "relative",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": { zIndex: 2 },
  },
  pointer: {
    cursor: "pointer",
    width:"8vh",
    height:"8vh",
    borderRadius:"20px",
  },
  typography: {
    fontSize: "0.5rem",
    lineHeight: 1.2,
    textAlign:"center",
  } 
}));
