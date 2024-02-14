"use client";
import styles from "./page.module.css";

import Gallery from "./gallery";
import { useGetUsersQuery } from "./hooks/user/useGetUsersQuery";

export default function Home() {
  const { data: users = [], isLoading } = useGetUsersQuery();

  return (
    <main className={styles.main}>
      <Gallery users={users} loading={isLoading} />
    </main>
  );
}
