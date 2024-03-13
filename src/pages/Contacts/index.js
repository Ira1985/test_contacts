import { useState, useEffect } from "react";

export const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const responce = await fetch("https://randomuser.me/api/?results=200");
      const { results } = await responce.json();
      setContacts(results);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <div>...loading</div>;
  }
  if (isError) {
    return <div>...error</div>;
  }
  return <div>Contacts! {contacts[0].name.first}</div>;
};
