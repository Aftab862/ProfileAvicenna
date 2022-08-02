import React, { useState } from 'react'
import { TiContacts } from 'react-icons/ti'
import { AiOutlinePhone } from 'react-icons/ai'
import { TiLocation } from 'react-icons/ti'
const Card = () => {
    const [banktoggle, setbanktoogle] = useState(false)
    const [socialtoggle, setsocialtootle] = useState(false)



    const DisplayBanks = () => {
        return (
            <div>
                <img style={{ marginBottom: "50px" }} className='bank-img' src="snb_logo.png" alt="" />

            </div>
        )
    }


    function DisplaySocialLinks() {
        return (
            <div className='social-links'>
                <img className='bank-img' src="paypal.png" alt="" />
                <img className='bank-img' src="facebook.png" alt="" />
                <img className='bank-img' src="instagram.png" alt="" />
                <img className='bank-img' src="reddit.png" alt="" />
                <img className='bank-img' src="twitter.png" alt="" />
            </div>
        )
    }

    return (
        <div className='card'>

            <div className='head'>
                <img className='cover' src="cover.png" alt="" />
                <img className='profile' src="profile.png" alt="" />
                <img className='qr-img' src="qr-code.png" alt="" />
            </div>

            <main className='container'>

                <h3>Avicenna Enterprise Solutions</h3>
                <div className='grid'>
                    <div className='icon1'>
                        <TiContacts />
                    </div>
                    <p>
                        We’re specialized in mobile apps
                    </p>
                    <p>
                        & website development.
                    </p>
                    <p>
                        Take a look at our work and if you
                    </p>
                    <p>
                        like, we would love to hear from
                    </p>
                    <p>
                        you!
                    </p>

                    <div className='icon'>
                        <AiOutlinePhone />
                    </div>
                    <p>
                        +923200001511
                    </p>

                    <div className='icon'>
                        <TiLocation />
                    </div>
                    <p>

                        Lahore, Pakistan
                    </p>

                </div>



            </main>


            <div className='footer'>

                <div >

                    <div className='social'>
                        <h3 className='toogle-banks' onClick={() => setbanktoogle(!banktoggle)}>Bank Accounts
                            
                        </h3>
                        
                        <img className='arrow' src="arrow.png" alt="" />
                        
                    </div>

                    {banktoggle ? DisplayBanks() : null}

                    <div className='social'>
                        <h3 className='toogle-banks' onClick={() => setsocialtootle(!socialtoggle)}>Social Links
                           
                        </h3>
                        <img className='arrow' src="arrow.png" alt="" />
                    </div>

                    {socialtoggle ? DisplaySocialLinks() : null}



                </div>

                <div className='button-sction'>
                    <button className='btn'>
                        +Add to Contact
                    </button>
                    <button className='btn'>
                        Connect
                    </button>
                </div>
            </div>



        </div>
    )
}

export default Card