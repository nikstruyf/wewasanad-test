"use client";

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Profile() {
  const [data, setData] = useState<any>({});

  const star = '*'

  useEffect(() => {
    setData({
      firstName: window.localStorage.getItem("firstName"),
      lastName: window.localStorage.getItem("lastName"),
      address: window.localStorage.getItem("address"),
      province: window.localStorage.getItem("province"),
      city: window.localStorage.getItem("city"),
      zipCode: window.localStorage.getItem("zipCode"),
      age: window.localStorage.getItem("age"),
      username: window.localStorage.getItem("username"),
      password: window.localStorage.getItem("password")
    })
  }, [window.localStorage.getItem("firstName")]);

  return (
    <div className={styles.profilebg}>
      <div className={styles.profilecontainer}>
        <div className={styles.profileletter}>{data.firstName?.split('')[0]}</div>
        <div className={styles.name}>{data.firstName} {data.lastName}</div>
        <div className={styles.age}>{data.age} years</div>
        <div className={styles.profilecontent}>
          <div className={styles.underline} />
          <div className={styles.header}>ADDRESS</div>
          <div className={styles.address}>{data.address}, {data.city}, {data.province} {data.zipCode}</div>
          <div className={styles.header}>LOGIN DETAILS</div>
          <div className={styles.flexrow}>
            <div className={styles.flexcolumn}>
              <div className={styles.subheader}>Username</div>
              <div className={styles.username}>{data.username}</div>
            </div>
            <div className={styles.flexcolumn}>
              <div className={styles.subheader}>Password</div>
              <div className={styles.password}>{star.repeat(data.password?.length)}</div>
            </div>
          </div>
          <div className={styles.buttongroup}>
            <button className={styles.buttonout}>Log out</button>
            <button className={styles.buttonedit}>Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  )
}
