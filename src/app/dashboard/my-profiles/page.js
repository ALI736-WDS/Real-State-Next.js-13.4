import { getServerSession } from "next-auth";

//api
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

//component
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import MyProfilesPage from "@/template/MyProfilesPage";

async function Myprofiles() {
  await connectDB();
  const session = await getServerSession(authOptions);

  //mongoDB Code
  //destructure
  const [user] = await User.aggregate([
    { $match: { email: session.user.email } }, //match kon: peyda kon
    {
      $lookup: {
        from: "profiles", //az porfiles dar mongoDB
        foreignField: "userId", //userId khreji ke khodemun tu model profile goftim
        localField: "_id", //_id dar mongoDB
        as: "profiles", //ba name profiile neshun bede dar terminal
      },
    },
  ]);
  return <MyProfilesPage profiles={user.profiles} />;
}

export default Myprofiles;
