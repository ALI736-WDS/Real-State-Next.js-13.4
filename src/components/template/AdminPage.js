import AdminCard from "@/module/AdminCard";
import styles from "@/template/AdminPage.module.css";

function AdminPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی در انتظار تاییدی وجود ندارد</p>
      )}
      {profiles.map((i) => (
        <AdminCard
          key={i._id}
          data={JSON.parse(JSON.stringify(i))}
        /> /* chun AdminCard(use client) ro dar inja ke server side hast 
        estefade mikonim pas bayad az JSON.parse(JSON.stringify(i) estefade koni */
      ))}
    </div>
  );
}

export default AdminPage;
