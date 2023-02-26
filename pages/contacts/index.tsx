import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";
import {GetStaticProps} from "next";
import { contactType } from "../../types";
import { FC } from "react";

type contactsTypeProps = {
  contacts: [contactType],
}


export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {contacts: data},
  }
};

const Contacts:FC<contactsTypeProps> = ({contacts}) => {

  return (
    <>
      <Head>
          <title>Contacts</title>
      </Head>
      <Heading text="Contacts List:" />
      <ul>
        {contacts && contacts.map(({id, name, email}) => {
          return (
            <li key={id}><Link href={`/contacts/${id}`}><strong>{name}: </strong>{email}</Link></li>
          )
        })}
      </ul>
    </>
  )
};

  export default Contacts;