import * as React from "react";
import * as classnames from "classnames";
import Icon, { IconSymbol, IconSize } from "../icon/icon";

export type ContactType = {
  type: IconSymbol;
  link: string;
  customStyles?: React.CSSProperties;
};

export type ContactProps = {
  contacts: ContactType[];
  size?: IconSize;
  className?: string;
  customStyles?: React.CSSProperties;
};

const renderContact = (contacts: ContactType[], size: IconSize = "5") => {
  return contacts.map((contact) => {
    const styles = classnames.default(
      `folio-contact--item-${contact}`,
      "folio-contact--item",
    );
    return (
      <li
        data-testid={`folio-contact--item-${contact}`}
        key={contact.type}
        className={styles}
      >
        <a
          aria-label={`Icon for ${contact.type}`}
          href={contact.link}
          target="_blank"
          rel="noreferrer"
        >
          <Icon size={size} symbol={contact.type} />
        </a>
      </li>
    );
  });
};

const Contact: React.FC<ContactProps> = (props) => {
  const { size, contacts, className, customStyles } = props;

  const styles = classnames.default(
    "folio-contact",
    `folio-contact--${size}`,
    className,
  );

  return (
    <ul
      role="group"
      aria-label="Social Media Links"
      className={styles}
      style={{ ...customStyles }}
      data-testid="folio-contact"
    >
      {renderContact(contacts, size)}
    </ul>
  );
};

Contact.defaultProps = {
  size: "5",
  className: "",
  customStyles: {},
};

export default Contact;
