import useOnlineStatus from "../utils/useOnlineStatus";
const User = () => {
const onlineStatus = useOnlineStatus()
console.log("onlineStatus",onlineStatus)
if(onlineStatus === false){
  return (
    <h1>looks like you're offline!! Please check your internet connect</h1>
  )
}

  return (
    <>
     
          <h2>This is Namaste React Web Series</h2>
          <h3>Name : Shashikant</h3>
          <h4>Location : Bihar</h4>
          <p>Contact : @shashikant</p>
       
    </>
  );
};

export default User;
