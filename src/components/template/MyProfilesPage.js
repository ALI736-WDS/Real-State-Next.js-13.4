import DashboardCard from "@/module/DashboardCard";

import styles from "@/template/MyProfilesPage.module.css";

function MyProfilesPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
      )}
      {profiles.map((i) => (
        <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} /> 
        //vaghti ye chizi az serverComponent be clientComponent pass midim, bayad parse , stringify beshe
      ))}
    </div>
  );
}

export default MyProfilesPage;
