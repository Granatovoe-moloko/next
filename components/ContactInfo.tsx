import Heading from "./Heading";
import { contactType } from "../types";
import { FC } from "react";

type contactInfoProps = {
    contact: contactType,
}

const ContactInfo: FC<contactInfoProps> = ({contact}) => {
    const {name, email, address} = contact || {};
    const {street, suite, city, zipcode} = address || {};

    if (!contact) {
        return <Heading tag="h3" text="Empty contact" />
    };

    return (
        <>
            <Heading tag="h3" text={name} />
            <div>
                <b>Email:</b>{email}
            </div>
            <div>
                <b>Address: </b>{`${zipcode}, ${city}, ${suite}, ${street}`}
            </div>
        </>
    )
};

export default ContactInfo;