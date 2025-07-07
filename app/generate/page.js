"use client"
import React, { useState } from 'react';
import styles from '@/styles/Generate.module.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';


const Generate = () => {

    const [nextbtnone, setNextbtnone] = useState(false);
    const [nextbtntwo, setNextbtntwo] = useState(false);
    const [nextbtnthree, setNextbtnthree] = useState(false);
    const [nextbtnfour, setNextbtnfour] = useState(false);
    const [createbtn, setCreatebtn] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const [handle, setHandle] = useState("");
    const [desc, setDesc] = useState("");
    const [links, setLinks] = useState([{ linktext: "", link: "" }]);
    const [avatar, setAvatar] = useState("");
    const [theme, setTheme] = useState("");

    const [handleConfirmed, setHandleConfirmed] = useState(false);
    const [linksConfirmed, setLinksConfirmed] = useState(false);
    const [descConfirmed, setDescConfirmed] = useState(false);
    const [avatarConfirmed, setAvatarConfirmed] = useState(false);
    const [themeConfirmed, setThemeConfirmed] = useState(false);

    const claimHandle = async () => {
        if (handle.trim() === "") {
            toast.error('Missing inputs', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            return;
        }

        if (/\s/.test(handle)) {
            toast.error('Handle must be a single word', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            return;
        }

        if (!/^[a-z0-9_-]+$/.test(handle)) {
            toast.error('Handle can only contain lowercase letters, digits, hyphens, and underscores', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            return;
        }

        setHandleConfirmed(true);

        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/claimhandle`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ handle })
        });
        const result = await response.json();

        if (result.success) {
            toast.success(result.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            setNextbtnone(true);
        } else {
            toast.error(result.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            setHandleConfirmed(false);
        }
    }

    const addDesc = async () => {
        if (desc.trim() === "") {
            toast.error('Missing inputs', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            return;
        }

        setDescConfirmed(true);

        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/adddesc`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ handle, desc })
        });
        const result = await response.json();

        if (result.success) {
            toast.success(result.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            setNextbtntwo(true);
        } else {
            toast.error(result.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            setDescConfirmed(false);
        }
    }

    const addLink = async () => {
        if (links.some(l => !l.linktext.trim() || !l.link.trim())) {
            toast.error('Please fill all link fields', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            return;
        }

        setLinksConfirmed(true);

        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addlink`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ handle, links })
        });
        const result = await response.json();

        if (result.success) {
            toast.success(result.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            setNextbtnthree(true);
        } else {
            toast.error(result.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            setLinksConfirmed(false);
        }
    }

    const addAvatar = async () => {
        if (avatar.trim() === "") {
            toast.error('Please select an avatar', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            return;
        }

        setAvatarConfirmed(true);

        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addavatar`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ handle, avatar })
        });
        const result = await response.json();

        if (result.success) {
            toast.success(result.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            setNextbtnfour(true);
        } else {
            toast.error(result.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            setAvatarConfirmed(false);
        }
    }

    const addTheme = async () => {
        if (theme.trim() === "") {
            toast.error('Please select a theme', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            return;
        }

        setThemeConfirmed(true);

        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addtheme`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ handle, theme })
        });
        const result = await response.json();

        if (result.success) {
            toast.success(result.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            setCreatebtn(true);
        } else {
            toast.error(result.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            setThemeConfirmed(false);
        }
    }

    const createProfile = async () => {
        setIsLoading(true);
        setTimeout(() => {
            window.location.href = `${process.env.NEXT_PUBLIC_HOST}/${handle}`;
        }, 2000);
    };


    return (
        <div className={styles.main_generate}>
            <ToastContainer />

            {currentStep === 1 && (
                <div className={styles.generate_step1_container}>
                    <div className={styles.generate_step1_container_top}>
                        <h1 className={styles.generate_step_heading}>Step 1 of 5</h1>
                        <h3 className={styles.generate_step_subheading}>Claim Your Handle</h3>
                        <div className={styles.generate_step1_btns}>
                            <input
                                type='text'
                                placeholder='synctree/'
                                value={handle}
                                onChange={e => setHandle(e.target.value)}
                                required
                            />
                            <button
                                type='button'
                                disabled={handleConfirmed}
                                onClick={claimHandle}
                            >
                                Claim
                            </button>
                        </div>
                    </div>
                    <div className={styles.generate_step1_container_bottom}>
                        <div className={styles.generate_step_bottom_btn}>
                            <button
                                type='button'
                                disabled={!nextbtnone}
                                onClick={() => setCurrentStep(2)}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {currentStep === 2 && (
                <div className={styles.generate_step2_container}>
                    <div className={styles.generate_step2_container_top}>
                        <h1 className={styles.generate_step_heading}>Step 2 of 5</h1>
                        <h3 className={styles.generate_step_subheading}>Add Description</h3>
                        <div className={styles.generate_step2_btns}>
                            <input
                                type='text'
                                placeholder='Enter description'
                                value={desc}
                                onChange={e => setDesc(e.target.value)}
                                required
                            />
                            <button
                                type='button'
                                disabled={descConfirmed}
                                onClick={addDesc}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                    <div className={styles.generate_step2_container_bottom}>
                        <div className={styles.generate_step_bottom_btn}>
                            <button
                                type='button'
                                disabled={!nextbtntwo}
                                onClick={() => setCurrentStep(3)}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {currentStep === 3 && (
                <div className={styles.generate_step3_container}>
                    <div className={styles.generate_step3_container_top}>
                        <h1 className={styles.generate_step_heading}>Step 3 of 5</h1>
                        <h3 className={styles.generate_step_subheading}>Add Links</h3>

                        {links.map((item, index) => (
                            <div key={index} className={styles.generate_step3_btns}>
                                <input
                                    type='text'
                                    placeholder='Enter link text'
                                    value={item.linktext}
                                    onChange={(e) => {
                                        const newLinks = [...links];
                                        newLinks[index].linktext = e.target.value;
                                        setLinks(newLinks);
                                    }}
                                    required
                                />
                                <input
                                    type='text'
                                    placeholder='Enter link'
                                    value={item.link}
                                    onChange={(e) => {
                                        const newLinks = [...links];
                                        newLinks[index].link = e.target.value;
                                        setLinks(newLinks);
                                    }}
                                    required
                                />
                            </div>
                        ))}

                        <div className={styles.generate_step3_addlinkbtn}>
                            <button
                                type='button'
                                disabled={linksConfirmed}
                                onClick={() => setLinks([...links, { linktext: "", link: "" }])}
                            >
                                + Add Link
                            </button>
                        </div>
                        <div className={styles.generate_step3_confirmbtn}>
                            <button
                                type='button'
                                disabled={linksConfirmed}
                                onClick={addLink}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                    <div className={styles.generate_step3_container_bottom}>
                        <div className={styles.generate_step_bottom_btn}>
                            <button
                                type='button'
                                disabled={!nextbtnthree}
                                onClick={() => setCurrentStep(4)}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {currentStep === 4 && (
                <div className={styles.generate_step4_container}>
                    <div className={styles.generate_step4_container_top}>
                        <h1 className={styles.generate_step_heading}>Step 4 of 5</h1>
                        <h3 className={styles.generate_step_subheading}>Select Avatar</h3>
                        <div className={styles.generate_step4_avatar_container}>
                            <img src="/MaleAvatar1.png" onClick={(e) => setAvatar(e.target.src.split('/').pop())} className={avatar === 'MaleAvatar1.png' ? styles.generate_step4_avatar_container_selectedAvatar : ''} />
                            <img src="/FemaleAvatar1.png" onClick={(e) => setAvatar(e.target.src.split('/').pop())} className={avatar === 'FemaleAvatar1.png' ? styles.generate_step4_avatar_container_selectedAvatar : ''} />
                            <img src="/MaleAvatar2.png" onClick={(e) => setAvatar(e.target.src.split('/').pop())} className={avatar === 'MaleAvatar2.png' ? styles.generate_step4_avatar_container_selectedAvatar : ''} />
                            <img src="/FemaleAvatar2.png" onClick={(e) => setAvatar(e.target.src.split('/').pop())} className={avatar === 'FemaleAvatar2.png' ? styles.generate_step4_avatar_container_selectedAvatar : ''} />
                            <img src="/MaleAvatar3.png" onClick={(e) => setAvatar(e.target.src.split('/').pop())} className={avatar === 'MaleAvatar3.png' ? styles.generate_step4_avatar_container_selectedAvatar : ''} />
                            <img src="/FemaleAvatar3.png" onClick={(e) => setAvatar(e.target.src.split('/').pop())} className={avatar === 'FemaleAvatar3.png' ? styles.generate_step4_avatar_container_selectedAvatar : ''} />
                            <img src="/MaleAvatar4.png" onClick={(e) => setAvatar(e.target.src.split('/').pop())} className={avatar === 'MaleAvatar4.png' ? styles.generate_step4_avatar_container_selectedAvatar : ''} />
                            <img src="/FemaleAvatar4.png" onClick={(e) => setAvatar(e.target.src.split('/').pop())} className={avatar === 'FemaleAvatar4.png' ? styles.generate_step4_avatar_container_selectedAvatar : ''} />
                            <img src="/MaleAvatar5.png" onClick={(e) => setAvatar(e.target.src.split('/').pop())} className={avatar === 'MaleAvatar5.png' ? styles.generate_step4_avatar_container_selectedAvatar : ''} />
                            <img src="/FemaleAvatar5.png" onClick={(e) => setAvatar(e.target.src.split('/').pop())} className={avatar === 'FemaleAvatar5.png' ? styles.generate_step4_avatar_container_selectedAvatar : ''} />
                            <img src="/MaleAvatar6.png" onClick={(e) => setAvatar(e.target.src.split('/').pop())} className={avatar === 'MaleAvatar6.png' ? styles.generate_step4_avatar_container_selectedAvatar : ''} />
                            <img src="/FemaleAvatar6.png" onClick={(e) => setAvatar(e.target.src.split('/').pop())} className={avatar === 'FemaleAvatar6.png' ? styles.generate_step4_avatar_container_selectedAvatar : ''} />
                        </div>
                        <div className={styles.generate_step4_confirmbtn}>
                            <button
                                type='button'
                                disabled={avatarConfirmed}
                                onClick={addAvatar}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                    <div className={styles.generate_step4_container_bottom}>
                        <div className={styles.generate_step_bottom_btn}>
                            <button
                                type='button'
                                disabled={!nextbtnfour}
                                onClick={() => setCurrentStep(5)}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {currentStep === 5 && (
                <div className={styles.generate_step5_container}>
                    <div className={styles.generate_step5_container_top}>
                        <h1 className={styles.generate_step_heading}>Step 5 of 5</h1>
                        <h3 className={styles.generate_step_subheading}>Select Theme</h3>
                        <div className={styles.generate_step5_theme_container}>
                            <div className={`${styles.generate_step5_theme_container_theme1} ${theme === '#242222' ? styles.generate_step5_theme_container_theme1_selectedTheme : ''}`} onClick={() => setTheme('#242222')}></div>
                            <div className={`${styles.generate_step5_theme_container_theme2} ${theme === '#3c56ff' ? styles.generate_step5_theme_container_theme2_selectedTheme : ''}`} onClick={() => setTheme('#3c56ff')}></div>
                            <div className={`${styles.generate_step5_theme_container_theme3} ${theme === '#42e19f' ? styles.generate_step5_theme_container_theme3_selectedTheme : ''}`} onClick={() => setTheme('#42e19f')}></div>
                            <div className={`${styles.generate_step5_theme_container_theme4} ${theme === '#ff5800' ? styles.generate_step5_theme_container_theme4_selectedTheme : ''}`} onClick={() => setTheme('#ff5800')}></div>
                            <div className={`${styles.generate_step5_theme_container_theme5} ${theme === '#ed62d3' ? styles.generate_step5_theme_container_theme5_selectedTheme : ''}`} onClick={() => setTheme('#ed62d3')}></div>
                            <div className={`${styles.generate_step5_theme_container_theme6} ${theme === '#a1ddff' ? styles.generate_step5_theme_container_theme6_selectedTheme : ''}`} onClick={() => setTheme('#a1ddff')}></div>
                        </div>
                        <div className={styles.generate_step5_confirmbtn}>
                            <button
                                type='button'
                                disabled={themeConfirmed}
                                onClick={addTheme}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                    <div className={styles.generate_step5_container_bottom}>
                        <div className={styles.generate_step_bottom_btn}>
                            <button
                                type='button'
                                disabled={!createbtn}
                                onClick={() => {
                                    setCurrentStep(6);
                                    createProfile();
                                }}
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isLoading && (
                <div className={styles.generate_loading_container}>
                    <div className={styles.generate_loading_container_heading}>Creating account ...</div>
                    <div className={styles.generate_loading_container_loader}>
                        <div className={styles.generate_loading_container_truckWrapper}>
                            <div className={styles.generate_loading_container_truckBody}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 198 93"
                                    className={styles.generate_loading_container_trucksvg}
                                >
                                    <path
                                        strokeWidth="3"
                                        stroke="#282828"
                                        fill="#F83D3D"
                                        d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z"
                                    ></path>
                                    <path
                                        strokeWidth="3"
                                        stroke="#282828"
                                        fill="#7D7C7C"
                                        d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z"
                                    ></path>
                                    <path
                                        strokeWidth="2"
                                        stroke="#282828"
                                        fill="#282828"
                                        d="M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z"
                                    ></path>
                                    <rect
                                        strokeWidth="2"
                                        stroke="#282828"
                                        fill="#FFFCAB"
                                        rx="1"
                                        height="7"
                                        width="5"
                                        y="63"
                                        x="187"
                                    ></rect>
                                    <rect
                                        strokeWidth="2"
                                        stroke="#282828"
                                        fill="#282828"
                                        rx="1"
                                        height="11"
                                        width="4"
                                        y="81"
                                        x="193"
                                    ></rect>
                                    <rect
                                        strokeWidth="3"
                                        stroke="#282828"
                                        fill="#DFDFDF"
                                        rx="2.5"
                                        height="90"
                                        width="121"
                                        y="1.5"
                                        x="6.5"
                                    ></rect>
                                    <rect
                                        strokeWidth="2"
                                        stroke="#282828"
                                        fill="#DFDFDF"
                                        rx="2"
                                        height="4"
                                        width="6"
                                        y="84"
                                        x="1"
                                    ></rect>
                                </svg>
                            </div>
                            <div className={styles.generate_loading_container_truckTires}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 30 30"
                                    className={styles.generate_loading_container_tiresvg}
                                >
                                    <circle
                                        strokeWidth="3"
                                        stroke="#282828"
                                        fill="#282828"
                                        r="13.5"
                                        cy="15"
                                        cx="15"
                                    ></circle>
                                    <circle fill="#DFDFDF" r="7" cy="15" cx="15"></circle>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 30 30"
                                    className={styles.generate_loading_container_tiresvg}
                                >
                                    <circle
                                        strokeWidth="3"
                                        stroke="#282828"
                                        fill="#282828"
                                        r="13.5"
                                        cy="15"
                                        cx="15"
                                    ></circle>
                                    <circle fill="#DFDFDF" r="7" cy="15" cx="15"></circle>
                                </svg>
                            </div>
                            <div className={styles.generate_loading_container_road}></div>
                            <svg
                                xmlSpace="preserve"
                                viewBox="0 0 453.459 453.459"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns="http://www.w3.org/2000/svg"
                                id="Capa_1"
                                version="1.1"
                                fill="#000000"
                                className={styles.generate_loading_container_lampPost}
                            >
                                <path
                                    d="M252.882,0c-37.781,0-68.686,29.953-70.245,67.358h-6.917v8.954c-26.109,2.163-45.463,10.011-45.463,19.366h9.993
c-1.65,5.146-2.507,10.54-2.507,16.017c0,28.956,23.558,52.514,52.514,52.514c28.956,0,52.514-23.558,52.514-52.514
c0-5.478-0.856-10.872-2.506-16.017h9.992c0-9.354-19.352-17.204-45.463-19.366v-8.954h-6.149C200.189,38.779,223.924,16,252.882,16
c29.952,0,54.32,24.368,54.32,54.32c0,28.774-11.078,37.009-25.105,47.437c-17.444,12.968-37.216,27.667-37.216,78.884v113.914
h-0.797c-5.068,0-9.174,4.108-9.174,9.177c0,2.844,1.293,5.383,3.321,7.066c-3.432,27.933-26.851,95.744-8.226,115.459v11.202h45.75
v-11.202c18.625-19.715-4.794-87.527-8.227-115.459c2.029-1.683,3.322-4.223,3.322-7.066c0-5.068-4.107-9.177-9.176-9.177h-0.795
V196.641c0-43.174,14.942-54.283,30.762-66.043c14.793-10.997,31.559-23.461,31.559-60.277C323.202,31.545,291.656,0,252.882,0z
M232.77,111.694c0,23.442-19.071,42.514-42.514,42.514c-23.442,0-42.514-19.072-42.514-42.514c0-5.531,1.078-10.957,3.141-16.017
h78.747C231.693,100.736,232.77,106.162,232.77,111.694z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )

}

export default Generate
