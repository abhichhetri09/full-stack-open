const Notification = ({ message }) => {
  if (message === 0) {
    return null;
  }
  const notificationStyle = {
    color: "green",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };
  return <div style={notificationStyle}>{message}</div>;
};
export default Notification;
