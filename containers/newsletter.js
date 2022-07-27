import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const postUrl = "https://sivioinstitute.us19.list-manage.com/subscribe/post?u=7a6ab81af2a66b39c60161971&amp;id=492d5528f0"

export function Newsletter() {
    console.log(postUrl)
    return (
        <div className="flex flex-col gap-6 py-10 items-stretch">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <NewsletterForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
            
        </div>
    )
} 
//https://dev.to/gedalyakrycer/create-an-email-list-with-react-mailchimp-965

function NewsletterForm({ status, message, onValidated }) {
    const [email, setEmail] = useState('')

    const handleSubmit = () => {
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        });
        
    }
    return(
        <>
            <div className="flex flex-row items-end">
                <img src="/icons/letter.svg" className="h-[67.3px]"/>
                <h5 className="uppercase font-normal tracking-[0.24em]">Newsletter</h5>
            </div>
            
            <h4 className="font-medium font-[32px]">Data delivered to your inbox</h4>
            <p>Stay in the loop with our latest updates.</p>
            <div className="flex flex-row gap-4">
                <input type="email" name="email" placeholder="Enter your email" className="bg-gray-normal ring-0 active:ring-0 active:ring-offset-0 outline-0 border-b grow placeholder:italic placeholder:leading-none placeholder:text-black" onChange={(e)=> setEmail(e.target.value)} />
                <button onClick={handleSubmit}>
                    <img src="/icons/orange-arrow.svg" className="h-[48px]" />
                </button>
            </div>
            {
                status == 'sending' && <MessageDiv  className="text-green-light" message={'sending...'} />
            }
            {
                status == 'error' && <MessageDiv  className="text-red-600" message={message} />
            }
            {
                status == 'success' && <MessageDiv  className="text-green-darker" message={message} />
            }
        </>
    )
}

function MessageDiv ({ message, ...rest }) {
    return (<div {...rest} dangerouslySetInnerHTML={{ __html: message }} />)
}