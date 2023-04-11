"use client";

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import styles from './page.module.css'

export default function Register() {
    const router = useRouter();

    const [registerState, setRegisterState] = useState(1);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [age, setAge] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [inputAge, setInputAge] = useState(false);

    const reset = (e: any) => {
        e.preventDefault();
        setFirstName('');
        setLastName('');
        setAddress('');
        setProvince('');
        setCity('');
        setZipCode('');
        setAge('');
    }

    const next = (e: any) => {
        e.preventDefault();
        setRegisterState(2);
    }

    const back = (e: any) => {
        e.preventDefault();
        setRegisterState(1);
        setUsername('');
        setPassword('');
    }

    const register = (e: any) => {
        e.preventDefault();
        window.localStorage.setItem("firstName", firstName);
        window.localStorage.setItem("lastName", lastName);
        window.localStorage.setItem("address", address);
        window.localStorage.setItem("province", province);
        window.localStorage.setItem("city", city);
        window.localStorage.setItem("zipCode", zipCode);
        window.localStorage.setItem("age", age);
        window.localStorage.setItem("username", username);
        window.localStorage.setItem("password", password);
        router.push('/profile');
    }

    return (
        <div className={styles.registercontainer}>
            <div className={styles.registerstate}>
                <div className={registerState === 1 ? styles.stateactive : styles.state}>1</div>
                <div className={styles.statecenterline} />
                <div className={registerState === 2 ? styles.stateactive : styles.state}>2</div>
            </div>
            <div className={styles.registercontent}>
                <div className={styles.registerheader}>
                    REGISTER
                </div>
                <form onSubmit={next} onReset={reset} className={registerState === 1 ? styles.registerForm : styles.hidden}>
                    <div className={styles.inputcomp}>
                        <label className={styles.inputlabel}>YOUR NAME</label>
                        <div className={styles.inputhalfgroup}>
                            <input className={styles.inputboxhalf} type="text" placeholder="First name" onChange={(e) => { setFirstName(e.target.value) }} />
                            <input className={styles.inputboxhalf} type="text" placeholder="Last name" onChange={(e) => { setLastName(e.target.value) }} />
                        </div>
                    </div>
                    <div className={styles.inputcomp}>
                        <label className={styles.inputlabel}>ADDRESS</label>
                        <input className={styles.inputbox} type="text" placeholder="Address" onChange={(e) => { setAddress(e.target.value) }} />
                        <select className={styles.inputbox} defaultValue="" onChange={(e) => { setProvince(e.target.value) }}>
                            <option value="" disabled hidden>Province</option>
                            <option value="Bangkok">Bangkok</option>
                        </select>
                        <div className={styles.inputhalfgroup}>
                            <select className={styles.inputboxhalf} defaultValue="" onChange={(e) => { setCity(e.target.value) }}>
                                <option value="" disabled hidden>City</option>
                                <option hidden={province !== 'Bangkok'} value="Phaya Thai">Phaya Thai</option>
                                <option hidden={province !== 'Bangkok'} value="Huai Khwang">Huai Khwang</option>
                                <option hidden={province !== 'Bangkok'} value="Bang Khen">Bang Khen</option>
                            </select>
                            <select className={styles.inputboxhalf} defaultValue="" onChange={(e) => { setZipCode(e.target.value) }}>
                                <option value="" disabled hidden>Zip Code</option>
                                <option hidden={city !== 'Phaya Thai'} value="10400">10400</option>
                                <option hidden={city !== 'Huai Khwang'} value="10310">10310</option>
                                <option hidden={city !== 'Huai Khwang'} value="10320">10320</option>
                                <option hidden={city !== 'Bang Khen'} value="10100">10100</option>
                                <option hidden={city !== 'Bang Khen'} value="10110">10110</option>
                                <option hidden={city !== 'Bang Khen'} value="10120">10120</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.inputcompradio}>
                        <label className={styles.inputlabel}>AGE</label>
                        <label className={styles.inputradio}>
                            <input type="radio" name="age" onClick={() => { setAge("18-25"); setInputAge(false); }} />
                            18-25
                        </label>
                        <label className={styles.inputradio}>
                            <input type="radio" name="age" onClick={() => { setAge("26-30"); setInputAge(false); }} />
                            26-30
                        </label>
                        <label className={styles.inputradio}>
                            <input type="radio" name="age" onClick={() => { setInputAge(true) }} />
                            Other
                        </label>
                        <input className={styles.inputboxhalf} type="text" placeholder="age" disabled={!inputAge} onChange={(e) => { setAge(e.target.value) }} />
                    </div>
                    <div className={styles.buttongroup}>
                        <input className={styles.buttoncancel} type="reset" value="Cancel" />
                        <input className={styles.buttonsubmit} type="submit" value="Next" />
                    </div>
                </form>
                <form onSubmit={register} onReset={back} className={registerState === 2 ? styles.registerForm : styles.hidden}>
                    <div className={styles.inputcomp}>
                        <label className={styles.inputlabel}>LOGIN DETAILS</label>
                        <input className={styles.inputbox} type="text" placeholder="Username" onChange={(e) => { setUsername(e.target.value); }} />
                        <input className={styles.inputbox} type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value); }} />
                    </div>
                    <div className={styles.buttongroup}>
                        <input className={styles.buttonback} type="reset" value="Back" />
                        <input className={styles.buttonsubmit} type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    )
}