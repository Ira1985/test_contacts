import { useState, useEffect } from "react";

export const useContacts = (filter) => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    console.log("useEffect", filter.nationality);
    const getContacts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://randomuser.me/api/?results=200&nat=${filter.nationality.join(",").toLowerCase()}&gender=${filter.gender}`
        );
        const { results, error } = await response.json();
        if (error) {
          throw new Error(error);
        }
        setContacts(results);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getContacts();
  }, [filter]);

  return { contacts, isLoading, isError };
};
