import Profile from "@/models/Profile";
import DetailsPage from "@/template/DetailsPage";
import connectDB from "@/utils/connectDB";

async function ProfileDetails({ params: { profileId } }) {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) return <h3>مشکلی پیش آمده است</h3>;

  return <DetailsPage data={profile} />;
}

export default ProfileDetails;

//func dynamic kardane meta tag ha az server
export const generateMetadata = async ({ params: { profileId } }) => {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  return {
    title: profile.title,
    description: profile.description,
    authors: { name: profile.realState },
    keywords: profile.title,
    other: { mytag: "test meta tag" },
  };
};
