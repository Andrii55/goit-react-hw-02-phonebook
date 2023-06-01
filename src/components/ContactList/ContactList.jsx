export const ContactList = ({ contacts, delitContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>Name:{name}</p>
          <p>Number: {number}</p>
          <button onClick={() => delitContact(id)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
